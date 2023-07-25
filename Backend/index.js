const express = require("express");
const body = require("body-parser");
const path = require("path");
const app = express();
const collection = require("./mongodb"); // Assuming mongodb.js is in the same Backend folder

const port = 3000;

app.use(body.urlencoded({ extended: true }));

// Serve static files from the "Frontend" folder
app.use(express.static(path.join(__dirname, "../Frontend")));

// GET route for "/"
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

// POST route for login
app.post("/", async function (req, res) {
  var first = req.body.Firstname;
  var second = req.body.Secondname;
  var email = req.body.email;

  try {
    // Check if the user exists in the database
    const user = await collection.findOne({
      Email: email,
      First_name: first,
      Last_name: second,
    });

    if (user) {
      // User exists, authentication is successful
      authenticatedUser = email;
      res.redirect("/home");
    } else {
      // User does not exist, authentication fails
      res.status(401).sendFile(path.join(__dirname, "../Frontend/failure.html"));
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).send("An error occurred while authenticating the user");
  }
});

// GET route for "home"
app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "../Frontend/home.html"));
});

app.post("/home", function (req, res) {
  res.redirect("/Alphabet");
});

// Add other routes for your app here
// For example, to serve "/Alphabet" and "/poem"
//Get Route for sign up
// GET route for the signup page
app.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "../Frontend/signup.html"));
});

// POST route for sign up

app.post("/signup", async function (req, res) {
  // ...

  try {
    // Save the user's information to the database
    const user = await collection.create({
      First_name: req.body.Firstname,
      Last_name: req.body.Secondname,
      Email: req.body.email,
    });

    // Set a unique identifier for the user (e.g., user ID)
    const userId = user._id;

    // Send the success message to the user
    res.send("User registered successfully! Please proceed to the login page.");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("An error occurred while registering the user.");
  }
});

// MONGO KA CODE

app.listen(process.env.PORT||port, function (err) {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
