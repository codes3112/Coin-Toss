var result, userChoice; //global variable
function getChoice() {
  userChoice = document.getElementById("userSelect").value;
  //alert(userChoice);  //to check whether the var is taking the value or not
  if (userChoice == "") {
    alert("Please Select a coin side to play the Game");
    document.getElementById("btnFlip").disabled = true;
  } else {
    //alert("Press the button");
    document.getElementById("btnFlip").disabled = false;
  }
  return userChoice;
}

//main function to calculate the result when the button is clicked

btnFlip.addEventListener("click", function(e) {
  //e.preventDefault();
  var flipr = document.querySelectorAll(".coinBox div");
  flipr.forEach(function(dv) {
    dv.classList.add("flip");
  });
  var number = Math.floor(Math.random() * 2);
  document.getElementById("btnFlip").disabled = true; //to disable the button till the result is found

  setTimeout(function() {
    flipr.forEach(function(dv) {
      dv.classList.remove("flip");
    }); //removes the flip class from the coinbox div to stop the animation in 2000msec(2 sec) after clicking button

    //result time
    if (number) {
      result = "Head";
      //alert('Head =' + number);
      flipr[1].innerHTML =
        '<img src="images/heads.png"><h3 style="color:white">Head</h3>';
      finalresult(result, userChoice); //calling finalresult fn to declare the result
      resetAll();
    } else {
      result = "Tail";
      //alert('Tail =' + number);
      flipr[1].innerHTML =
        '<img src="images/tails.png"><h3 style="color:white;">Tail</h3>';
      finalresult(result, userChoice); //calling finalresult fn to declare the result
      resetAll();
    }
  }, 2500);
  //to avoid reloading of the page after button is clicked
});

// Final Result declaration
function finalresult(result, userChoice) {
  var flipr = document.querySelectorAll(".coinBox div");

  if (result == userChoice) {
    flipr[2].innerHTML =
      '<h3><span style="color:black">You Selected:  <u>' +
      userChoice +
      '</u></span>&nbsp;<b>|</b></h3><h3><span style="color: #99ccff;">Result: <u>' +
      result +
      '</u></span></h3><h2 style="color:blue",textAlign:"center";> Yay.... You Won !!!!</h2>';

    //alert("Result : "+result+"& You Chose: "+userChoice+"   Yay.... You Won !!!!");
  } else {
    flipr[2].innerHTML =
      '<h3><span style="color:black">You Selected:  <u>' +
      userChoice +
      '</u></span>&nbsp;<b>|</b></h3><h3><span style="color: #99ccff;">Result: <u>' +
      result +
      '</u></span></h3><h2 style="color:red">Sorry... You Lost!!!!</h2>';
    //alert("Result : "+result+"& You Chose: "+userChoice+"   Sorry... You Lost!!!!");
  }
}

//resetting html after result
function resetAll() {
  var flipr = document.querySelectorAll(".coinBox div");

  setTimeout(function() {
    document.getElementById("sel1").classList.add("hideme");
    // reset the html after result
    flipr[0].innerHTML = '<img src="images/heads.png">';
    flipr[1].innerHTML = '<img src="images/tails.png">';
    flipr[2].innerHTML = "";
  }, 3200);
  document.getElementById("btnFlip").disabled = false;
  document.getElementById("sel1").classList.remove("hideme");
}
