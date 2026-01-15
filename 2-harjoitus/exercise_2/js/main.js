function calculate() {
    let distance = parseFloat(document.getElementById("distance").value)
    if (isNaN(distance)) {
        document.getElementById("consumption").innerHTML = "Virhe"
    }
    else {
        document.getElementById("consumption").innerHTML = ((distance/100)*7) + " litres"
    }
}