function defaultDice() {
  var imgage = "images/dice6.png";
  document.querySelectorAll("img").setAttribute("src", image);
}
defaultDice();

function diceGame() {
  //First Dice

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDice1 = "images/dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomDice1);

  //Second Dice

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDice2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

  //Result
  document.querySelector("button").innerHTML = "Play Dice!";
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = '<i class="fas fa-flag"></i> Player 1 wins';
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = 'Player 2 wins <i class="fas fa-flag"></i>';
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("button").innerHTML = "Play Again!";
  }
}