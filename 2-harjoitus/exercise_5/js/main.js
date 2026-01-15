let counter = 0
let score = 0
let ids = ["number1", "operand", "number2"]
let userAnswer


document.addEventListener("DOMContentLoaded", function() { main() });


function main() {   
    if (counter === 5) {
        showResults()
    }
    else {
        counter++
        document.getElementById("answer").value = ""
        document.getElementById("task").innerHTML = counter
        values = generateValues()
        for(let i = 0; i < 3; i++) {
            document.getElementById(ids[i]).innerHTML = values[i]
        }
    }
}

function generateValues() {
    operandvalue = randomNumber(3)
    let number1 = randomNumber(100)
    let number2 = randomNumber(100)
    switch (operandvalue) {
            case 0:
                operand = "+"
                answer = number1 + number2
                break
            case 1:
                operand = "-"
                answer = number1 - number2
                break
            case 2:
                operand = "*"
                answer = number1 * number2
                break
            case 3:
                operand = "/"
                answer = number1 / number2
                break
        }
    return [number1, operand, number2, answer]
}

function showResults() {
    document.getElementById("thegame").style.display = "none"
    document.getElementById("taskdiv").style.display = "none"

    const score_p = document.createElement("p")
    score_p.innerText = "Score: " + score
    document.getElementById("score").appendChild(score_p)
}

function submit() {
    userAnswer = document.getElementById("answer").value
    if (userAnswer == answer) {
        score++
        main()
    }
    else {
        main()
    }
}

function randomNumber(max) {
    let r = Math.floor(Math.random() * max)
    console.log("Generated value " + r)
    return r    
}