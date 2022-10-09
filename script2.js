function fn() {
    document.getElementById("try").style.display = none;
  }

  document.getElementById("btn1").onclick = function() {myFunction()};
  document.getElementById("btn2").onclick = function() {myFunction2()};
  document.getElementById("btn3").onclick = function() {myFunction3()};
  document.getElementById("btn4").onclick = function() {myFunction4()};
  document.getElementById("btn5").onclick = function() {myFunction5()};
  document.getElementById("btn6").onclick = function() {myFunction6()};
  document.getElementById("btn6").onclick = function() {myFunction7()};

function myFunction() {
    var x = document.getElementById("try");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("btn1").style.color = "blue";
}

function myFunction2() {
    var x = document.getElementById("try2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction3() {
    var x = document.getElementById("try3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction4() {
    var x = document.getElementById("try4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction5() {
    var x = document.getElementById("try5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction6() {
    var x = document.getElementById("try6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
