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
        var A = new Audio("../public/A.mpeg");
        A.play();
        break;

      case "B":
        var B = new Audio("../public/B.mpeg");
        B.play();
        break;

      case "C":
        var C = new Audio("../public/C.mpeg");
        C.play();
        break;

      case "D":
        var D = new Audio("../public/D.mpeg");
        D.play();
        break;

      case "E":
        var E = new Audio("../public/E.mpeg");
        E.play();
        break;

      case "F":
        var F = new Audio("../public/F.mpeg");
        F.play();
        break;

      case "G":
        var G = new Audio("../public/G.mpeg");
        G.play();
        break;


       case "H":
        var H = new Audio("../public/H.mpeg");
        H.play();
        break;

      case "I":
        var I = new Audio("../public/I.mpeg");
        I.play();
        break;

      case "J":
        var J = new Audio("../public/J.mpeg");
        J.play();
        break;

      case "K":
        var K = new Audio("../public/K.mpeg");
        K.play();
        break;

      case "L":
        var L = new Audio("../public/L.mpeg");
        L.play();
        break;

      case "M":
        var M = new Audio("../public/M.mpeg");
        M.play();
        break;

      case "N":
        var N = new Audio("../public/N.mpeg");
        N.play();
        break;



       case "O":
        var O = new Audio("../public/O.mpeg");
        O.play();
        break;

      case "P":
        var P = new Audio("../public/P.mpeg");
        P.play();
        break;

      case "Q":
        var Q = new Audio("../public/Q.mpeg");
        Q.play();
        break;

      case "R":
        var R = new Audio("../public/R.mpeg");
        R.play();
        break;

      case "S":
        var S = new Audio("../public/S.mpeg");
        S.play();
        break;

      case "T":
        var T = new Audio("../public/T.mpeg");
        T.play();
        break;

      case "U":
        var U= new Audio("../public/U.mpeg");
        U.play();
        break;


       case "V":
        var V = new Audio("../public/V.mpeg");
        V.play();
        break;

      case "W":
        var W = new Audio("../public/W.mpeg");
        W.play();
        break;

      case "X":
        var X = new Audio("../public/X.mpeg");
        X.play();
        break;

      case "Y":
        var Y = new Audio("../public/Y.mpeg");
        Y.play();
        break;

      case "Z":
        var Z = new Audio("../public/Z.mpeg");
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