let random_number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  let input_number = Number(document.querySelector(".guess").value);
  console.log(typeof input_number, input_number);
  if (!input_number) {
    document.querySelector(".message").textContent = "No number!";
  } else if (input_number === random_number) {
    document.querySelector(".message").textContent = "Correct number!";
    document.querySelector(".number").textContent = random_number;

    // Update highscore if the current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Style changes on correct guess
    document.querySelector("body").style.backgroundColor = "gray";
  } else if (input_number > random_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (input_number < random_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  random_number = Math.floor(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "black";
});
