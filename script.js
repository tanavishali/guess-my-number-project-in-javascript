// console.log(document.querySelector(".message").textContent);
"use strict";

document.querySelector(".message").textContent = "guess my number";
// console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = "?";
document.querySelector(".score-number").textContent = 10;
document.querySelector(".highscore-class").textContent = 18;
// console.log(document.querySelector(".guess").value); // Log the value of the input element
// document.querySelector(".guess").value = 10; // Set the value of the input element to 10
document.querySelector(".guess").addEventListener("click", function () {
  let value1 = Number(document.querySelector(".guess").value);
  console.log(typeof value1, value1);
  document.querySelector(".number").textContent = value1;
});
