function grade_calculate() {
    let tm = document.getElementById("TM").value
    let ob = document.getElementById("OB").value
    let res = (ob / tm) * 100;

    let x = document.getElementById("res");
    x = alert("Your Percentage is " + res.toFixed(2));

    if (res > 95 && res <= 100) {
        document.getElementById("grade").innerHTML = "Grade: A++, Remarks: Exceptional"
    }
    else if (res >= 90 && res <= 95) {
        document.getElementById("grade").innerHTML = "Grade: A+, Remarks: Outstanding"
    }
    else if (res >= 85 && res < 90) {
        document.getElementById("grade").innerHTML = "Grade: A, Remarks: Very Good"
    }
    else if (res >= 80 && res < 85) {
        document.getElementById("grade").innerHTML = "Grade: B, Remarks: Good"
    }
    else if (res >= 75 && res < 80) {
        document.getElementById("grade").innerHTML = "Grade: B++, Remarks: Above Average"
    }
    else if (res >= 70 && res < 75) {
        document.getElementById("grade").innerHTML = "Grade: B+, Remarks: Needs Improvement"
    }
    else if (res >= 65 && res < 70) {
        document.getElementById("grade").innerHTML = "Grade: C, Remarks: Satisfactory"
    }
    else if (res >= 60 && res < 65) {
        document.getElementById("grade").innerHTML = "Grade: C-, Remarks: Pass"
    }
    else if (res >= 50 && res < 60) {
        document.getElementById("grade").innerHTML = "Grade: D, Remarks: Barely Passing"
    }
    else if (res >= 40 && res < 50) {
        document.getElementById("grade").innerHTML = "Grade: D-, Remarks: Poor"
    }
    else if (res < 40) {
        document.getElementById("grade").innerHTML = "Grade: F, Remarks: Failed"
    }
    else {
        document.getElementById("grade").innerHTML = "Invalid Input."
    }
}