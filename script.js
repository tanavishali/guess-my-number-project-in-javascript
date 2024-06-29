// document.querySelector(".message").textContent = "what is my number";
// document.querySelector(".guess").value = 19;
// document.querySelector(".guess").value;
document.querySelector(".check").addEventListener("click", function () {
  let input_number = Number(document.querySelector(".guess").value);
  console.log(typeof input_number, input_number);
  if (input_number === 0) {
    document.querySelector(".message").textContent = "no number";
  } else {
    document.querySelector(".message").textContent = "number entered";
  }
  //   document.querySelector(".message").textContent = "correct number";

  //   console.log("hello");
});
