/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

function bmi(weight, height) {
  let result = weight/height//divide weight/height
  if (result <= 18.5){//if else statements
    return "Underweight"  //return result
  }else if (18.6 <= result <= 25){
    return "Normal"
  }else if (25.1 <= result <= 30){
    return "Overweight"
  }else if (result >= 30.1){
    return "Obese"
  }else{
    return "ERROR"
  }
}