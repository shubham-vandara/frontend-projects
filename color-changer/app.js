const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  //   console.log(button);

  button.addEventListener("click", function (event) {
    console.log(event.target.id);

    body.style.background = event.target.id;
    body.style.transition = "0.5s";
  });
});
