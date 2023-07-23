 var size = document.querySelectorAll(".drum").length;
  for (var i = 0; i < size; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var letterPLayed = this.innerHTML;
      createsound(letterPLayed);
      createAnimation(letterPLayed);

    });
  }

  document.addEventListener("keypress", function (event) {
    createsound(event.key);
    createAnimation(event.key);
  })

  function createsound(key) {


    switch (key) {
      case "A":
        var A = new Audio("Sounds/A.mpeg");
        A.play();
        break;

      case "B":
        var B = new Audio("Sounds/B.mpeg");
        B.play();
        break;

      case "C":
        var C = new Audio("Sounds/C.mpeg");
        C.play();
        break;

      case "D":
        var D = new Audio("Sounds/D.mpeg");
        D.play();
        break;

      case "E":
        var E = new Audio("Sounds/E.mpeg");
        E.play();
        break;

      case "F":
        var F = new Audio("Sounds/F.mpeg");
        F.play();
        break;

      case "G":
        var G = new Audio("Sounds/G.mpeg");
        G.play();
        break;


       case "H":
        var H = new Audio("Sounds/H.mpeg");
        H.play();
        break;

      case "I":
        var I = new Audio("Sounds/I.mpeg");
        I.play();
        break;

      case "J":
        var J = new Audio("Sounds/J.mpeg");
        J.play();
        break;

      case "K":
        var K = new Audio("Sounds/K.mpeg");
        K.play();
        break;

      case "L":
        var L = new Audio("Sounds/L.mpeg");
        L.play();
        break;

      case "M":
        var M = new Audio("Sounds/M.mpeg");
        M.play();
        break;

      case "N":
        var N = new Audio("Sounds/N.mpeg");
        N.play();
        break;



       case "O":
        var O = new Audio("Sounds/O.mpeg");
        O.play();
        break;

      case "P":
        var P = new Audio("Sounds/P.mpeg");
        P.play();
        break;

      case "Q":
        var Q = new Audio("Sounds/Q.mpeg");
        Q.play();
        break;

      case "R":
        var R = new Audio("Sounds/R.mpeg");
        R.play();
        break;

      case "S":
        var S = new Audio("Sounds/S.mpeg");
        S.play();
        break;

      case "T":
        var T = new Audio("Sounds/T.mpeg");
        T.play();
        break;

      case "U":
        var U= new Audio("Sounds/U.mpeg");
        U.play();
        break;


       case "V":
        var V = new Audio("Sounds/V.mpeg");
        V.play();
        break;

      case "W":
        var W = new Audio("Sounds/W.mpeg");
        W.play();
        break;

      case "X":
        var X = new Audio("Sounds/X.mpeg");
        X.play();
        break;

      case "Y":
        var Y = new Audio("Sounds/Y.mpeg");
        Y.play();
        break;

      case "Z":
        var Z = new Audio("Sounds/Z.mpeg");
        Z.play();
        break;

      default: console.log(letterPLayed);

    }
  }


  function createAnimation(key) {
    var presentkey = document.querySelector("." + key);
    presentkey.classList.add("pressed");
    setTimeout(function () {
      presentkey.classList.remove("pressed");
    }, 100);
  }