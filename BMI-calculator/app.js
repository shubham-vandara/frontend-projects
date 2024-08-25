const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `Under Weight.<br> Your BMI value is ${bmi}`;
    } else if (bmi < 24.9) {
      results.innerHTML = `Normal Weight.<br> Your BMI value is ${bmi}`;
    } else {
      results.innerHTML = `Over Weight.<br> Your BMI value is ${bmi}`;
    }
  }
});
