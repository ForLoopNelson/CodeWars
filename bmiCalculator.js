// Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {
  const bmiCalc = weight / Math.pow(height, 2);
  if (bmiCalc <= 18.5) {
    return "Underweight";
  } else if (bmiCalc <= 25.0) {
    return "Normal";
  } else if (bmiCalc <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
