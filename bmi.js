alert("Calculate your BMI via entering needed credientials");
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let name = document.getElementById("name").value

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    
    height = height / 100;

    let bmi = (weight / (height * height)).toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
        
    }


    document.getElementById("result").innerHTML = `${name}, BMI is <b>${bmi}</b> (${category})`;
}
