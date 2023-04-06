const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weightInput = document.getElementById("weight").value;
  const heightInput = document.getElementById("height").value;
  const result = document.getElementById("result");

  let kg = weightInput;
  let cm = heightInput / 100;
  let bmi = "";

  let finalResult = kg / cm ** 2;
  finalResult = finalResult.toFixed(1);

  if (finalResult >= 30) {
    bmi = "Obesity";
  } else if (finalResult >= 25) {
    bmi = "Overweight";
  } else if (finalResult >= 18.5) {
    bmi = "Normal weight";
  } else {
    bmi = "Under weight";
  }

  result.innerHTML = "Your BMI is <span>" + finalResult + "</span> Which means You are <span>" + bmi + "</span>";
});
