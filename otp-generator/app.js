let getOtp = document.querySelector("#otpNumber");
let form = document.querySelector("form");
let otpInput = document.querySelector("#otpInput");
let displayMsg = document.querySelector("#displayMsg");

// FOR UNDERSTANDING PURPOSE ONLY
// Function to generate random number
// function randomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

// console.log("Random Number between 1 and 5: ")

// Function call
// console.log( randomNumber(1, 5) );

let randomOTP = Math.floor(Math.random() * 8999) + 1000;
getOtp.innerHTML = randomOTP;

function generateRandomOTP() {
  randomOTP = Math.floor(Math.random() * 8999) + 1000;
  getOtp.innerHTML = randomOTP;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!otpInput.value) {
    alert("Please Enter a Otp :)");
  } else if (parseInt(otpInput.value) === randomOTP) {
    displayMsg.innerHTML = "OTP Registered!";
    displayMsg.className = "green";
    setTimeout(() => {
      displayMsg.className = "d-none";
    }, 5000);
  } else {
    if (otpInput.value > 10000 || otpInput.value < 1000) {
      alert("Your Otp Is Invalid, Please Enter Valid Input!");
    } else {
      displayMsg.innerHTML = "OTP Not Match!";
      displayMsg.className = "red";
      setTimeout(() => {
        displayMsg.className = "d-none";
      }, 5000);
    }
  }
  otpInput.value = "";
});

setInterval(generateRandomOTP, 5000);
