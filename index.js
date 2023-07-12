const express = require("express");
const body = require("body-parser");
const request = require("request")
const app = express();
const fs = require("fs")
const port =3000;
const collection=require("./mongodb")

app.use(body.urlencoded({extended:true}))
app.use((express.static('public')));
app.use((express.static('public2')));

// get of "/"

app.get("/",function(req,res)
{
         res.sendFile(__dirname + "/index.html");

})


//post of "/"

// POST route for login



// POST route for login
app.post("/", async function(req, res) {
  var first = req.body.Firstname;
  var second = req.body.Secondname;
  var email = req.body.email;
  
  try {
    // Check if the user exists in the database
    const user = await collection.findOne({ Email: email, First_name:first,Last_name:second  });

    if (user) {
      // User exists, authentication is successful
      authenticatedUser = email;
      res.redirect("/home");
    } else {
      // User does not exist, authentication fails
     res.status(401).sendFile(__dirname + "/failure.html");
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).send("An error occurred while authenticating the user");
  }
});


// get of "home"
app.get("/home",function(req,res)
{
         res.sendFile(__dirname + "/home.html");
         
		 //res.send(__dirname + "/home.html")
})

app.post("/home" , function(req,res)
{
     res.redirect("/Alphabet");
})

app.get("/Alphabet",function(req,res)
{
    res.sendFile(__dirname + "/Alphabet.html");
})

app.post("/Alphabet" , function(req,res)
{
     res.redirect("/poem");
})

app.use(express.static(__dirname));

/*
app.post("/home",function(req,res)
{
    res.redirect("/features")
})
*/
app.get("/Contacts",function(req,res)
{
        res.sendFile(__dirname + "/Contacts.html");
})
app.get("/poem",function(req,res)
{
         res.sendFile(__dirname + "/poem.html");

})

app.get("/signup",function(req,res)
{
         res.sendFile(__dirname + "/signup.html");

})

// POST route for sign up
app.post("/signup", async function(req, res) {
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


app.listen(3000,function(err){


})





//API KEY
//5da81887a0e1f2ddfadb21dc0e5ede8a-us11
/*

app.post("/signup", async (req, res) => {
  const data = {
    First_name: req.body.Firstname,
    Last_name: req.body.Secondname,
    Email: req.body.email,
  };

  try {
    await collection.create(data);
    console.log("Data inserted successfully.");
    res.redirect("/index.html");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("An error occurred while inserting the data.");
  }
});
*/