function calculate() {
    let daily_allowance
    kilometers = parseFloat(document.getElementById("kilometers").value)
    days = parseFloat(document.getElementById("days").value)
    country = document.getElementById("country").value

    switch(country) {
        case "Finland":
            daily_allowance = 30
            break;
        case "Sweden":
            daily_allowance = 40
            break;
        case "Norway":
            daily_allowance = 50
            break;
    }
    
    document.getElementById("expenses").innerHTML = (kilometers * 0.50) + (daily_allowance * days) + " €"
}

