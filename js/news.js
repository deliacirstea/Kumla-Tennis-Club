//read more function
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunctionTwo() {
    var punct = document.getElementById("punct");
    var expandText = document.getElementById("expand");
    var infoText = document.getElementById("myInfo");
  
    if (punct.style.display === "none") {
      punct.style.display = "inline";
      infoText.innerHTML = "Read more";
      expandText.style.display = "none";
    } else {
      punct.style.display = "none";
      infoText.innerHTML = "Read less";
      expandText.style.display = "inline";
    }
  }

  function myFunctionThree() {
    var dot = document.getElementById("dot");
    var seemoreText = document.getElementById("seemore");
    var citText = document.getElementById("myCit");
  
    if (dot.style.display === "none") {
      dot.style.display = "inline";
      citText.innerHTML = "Read more";
      seemoreText.style.display = "none";
    } else {
      dot.style.display = "none";
      citText.innerHTML = "Read less";
      seemoreText.style.display = "inline";
    }
  }

  function myFunctionFour() {
    var puncte = document.getElementById("puncte");
    var openText = document.getElementById("open");
    var seeText = document.getElementById("mySee");
  
    if (puncte.style.display === "none") {
      puncte.style.display = "inline";
      seeText.innerHTML = "Read more";
      openText.style.display = "none";
    } else {
      puncte.style.display = "none";
      seeText.innerHTML = "Read less";
      openText.style.display = "inline";
    }
  }

  function myFunctionFive() {
    var dots2 = document.getElementById("dots2");
    var more2Text = document.getElementById("more2");
    var btn2Text = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btn2Text.innerHTML = "Read more"; 
      more2Text.style.display = "none";
    } else {
      dots2.style.display = "none";
      btn2Text.innerHTML = "Read less"; 
      more2Text.style.display = "inline";
    }
  }

  function myFunctionSix() {
    var dots3 = document.getElementById("dots3");
    var more3Text = document.getElementById("more3");
    var btn3Text = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btn3Text.innerHTML = "Read more"; 
      more3Text.style.display = "none";
    } else {
      dots3.style.display = "none";
      btn3Text.innerHTML = "Read less"; 
      more3Text.style.display = "inline";
    }
  }

  function myFunctionSeven() {
    var dots4 = document.getElementById("dots4");
    var more4Text = document.getElementById("more4");
    var btn4Text = document.getElementById("myBtn4");
  
    if (dots4.style.display === "none") {
      dots4.style.display = "inline";
      btn4Text.innerHTML = "Read more"; 
      more4Text.style.display = "none";
    } else {
      dots4.style.display = "none";
      btn4Text.innerHTML = "Read less"; 
      more4Text.style.display = "inline";
    }
  }

 //Function for go to the top 
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}