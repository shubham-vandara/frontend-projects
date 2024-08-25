const clock = document.querySelector("#clock");

// function time() {
//   const date = new Date();

//   const hr = date.getHours();
//   const mn = date.getMinutes();
//   const sc = date.getSeconds();
//   clock.innerHTML = `${hr} : ${mn} : ${sc}`;
// }

function time() {
  const date = new Date();

  const time = date.toLocaleTimeString();
  clock.innerHTML = `${time}`;
}

// EVERY SECOND OUR FUNCTION IS CALLING IN SETINTERVAL METHOD
setInterval(time, 1000);
