//define functions here

function getIt(){
  $('p').on("click", 
  function clickP() {
    alert("Hey!");
  }
    );
}

function frameIt(){
  $('img').on("load", 
  function loadImg() {
    $('img').addClass('tasty');
    return;
  }
    );
}

$(document).ready(function(){

getIt();


});

// notes below this


//Define a function frameIt that does not accept a parameter. The function should bind the load event that adds the class tasty to the image to add a red frame to the image.

//Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.

//Define a function submitIt that does not accept a parameter. The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".