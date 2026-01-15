function calculate() {
    let sum = parseFloat(document.getElementById("first").value) + parseFloat(document.getElementById("second").value)
    if (isNaN(sum)) {
        document.getElementById("sum").innerHTML = "Virhe"
    }
    else {
        document.getElementById("sum").innerHTML = sum
    }
}