const exchangeRateGbp = 1.20
const exchangeRateUsd = 0.90
let topValue
let topCurrency
let bottomCurrency
let bottomValue

document.addEventListener("DOMContentLoaded", function() { getValues() });

function getValues() {
    topValue = document.getElementById("input1").value
    topCurrency = document.getElementById("currency1").value
    bottomValue = document.getElementById("input2").value
    bottomCurrency = document.getElementById("currency2").value
}

function updateValues(changed_field) {
    getValues()
    switch (changed_field) {
        case 1:
            document.getElementById("input2").value = convertToBottom(topValue, topCurrency, bottomCurrency).toFixed(2)
            break;
        case 2:
            document.getElementById("input2").value = convertToBottom(topValue, topCurrency, bottomCurrency).toFixed(2)
            break;
        case 3:
            document.getElementById("input1").value = convertToTop(bottomValue, topCurrency, bottomCurrency).toFixed(2)
            break
        case 4:
            document.getElementById("input1").value = convertToTop(bottomValue, topCurrency, bottomCurrency).toFixed(2)
            break;
    }
}

function convertToTop(preConversion, topCurrency, bottomCurrency) {
    if (topCurrency === bottomCurrency) {
        return preConversion
    }

    switch (bottomCurrency) {
        case "eur":
            if (topCurrency === "gbp") {
                return preConversion / exchangeRateGbp
            }
            if (topCurrency === "usd") {
                return preConversion / exchangeRateUsd
            }
            break

        case "gbp":
            if (topCurrency === "eur") {
                return preConversion * exchangeRateGbp
            }
            if (topCurrency === "usd") {
                return (preConversion * exchangeRateGbp) / exchangeRateUsd
            }
            break

        case "usd":
            if (topCurrency === "eur") {
                return preConversion * exchangeRateUsd
            }
            if (topCurrency === "gbp") {
                return (preConversion * exchangeRateUsd) / exchangeRateGbp
            }
            break
    }
}

function convertToBottom(preConversion, topCurrency, bottomCurrency) {
    if (topCurrency === bottomCurrency) {
        return preConversion
    }

    switch (topCurrency) {
        case "eur":
            if (bottomCurrency === "gbp") {
                return preConversion / exchangeRateGbp
            }
            if (bottomCurrency === "usd") {
                return preConversion / exchangeRateUsd
            }
            break

        case "gbp":
            if (bottomCurrency === "eur") {
                return preConversion * exchangeRateGbp
            }
            if (bottomCurrency === "usd") {
                return (preConversion * exchangeRateGbp) / exchangeRateUsd
            }
            break

        case "usd":
            if (bottomCurrency === "eur") {
                return preConversion * exchangeRateUsd
            }
            if (bottomCurrency === "gbp") {
                return (preConversion * exchangeRateUsd) / exchangeRateGbp
            }
            break
    }
}