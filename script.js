// document.querySelector(".message").textContent = "what is my number";
// document.querySelector(".guess").value = 19;
// document.querySelector(".guess").value;
// random Number
let random_number = Math.floor(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = random_number;
// console.log(random_number);
// Math.random(): Generates a floating-point number between 0 (inclusive) and 1 (exclusive).
// Math.random() * 20: Scales the random number to be between 0 (inclusive) and 20 (exclusive).
// Math.floor(Math.random() * 20): Rounds the number down to the nearest integer, resulting in a value between 0 and 19 (inclusive).
// Math.floor(Math.random() * 20) + 1: Shifts the range up by 1, resulting in a value between 1 and 20 (inclusive).
document.querySelector(".number").textContent = "?";
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "start guess..";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 0;
  document.querySelector(".highscore").textContent = 0;
});
document.querySelector(".check").addEventListener("click", function () {
  let input_number = Number(document.querySelector(".guess").value);
  console.log(typeof input_number, input_number);
  if (input_number === 0) {
    document.querySelector(".message").textContent = "no number";
  } else if (input_number === random_number) {
    document.querySelector(".message").textContent = "correct number";
    document.querySelector(".number").textContent = input_number;
    document.querySelector(".highscore").textContent = random_number;

    // style element
    document.querySelector("body").style.backgroundColor = "gray";
  } else if (input_number > random_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "too lost the game";
      document.querySelector(".score").textContent = 0;
    }
    // document.querySelector(".highscore").textContent = random_number;
  } else if (input_number < random_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
    // document.querySelector(".highscore").textContent = random_number;
  }

  //   document.querySelector(".message").textContent = "correct number";

  //   console.log("hello");
});
