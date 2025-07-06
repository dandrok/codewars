/* 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

export function bmi(weight: number, height: number): string {
  const BMI = weight / Math.pow(height, 2);
  switch (true) {
    case BMI <= 18.5:
      return "Underweight";
    case BMI <= 25.0:
      return "Normal";
    case BMI <= 30.0:
      return "Overweight";
    default:
      return "Obese";
  }
}
