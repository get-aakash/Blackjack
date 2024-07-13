

const num1 = document.getElementById("num1-el").textContent
const num2 = document.getElementById("num2-el").textContent
let value = 0

console.log(typeof(document.getElementById("num1-el").textContent))

function add(){
    value = num1 + num2
    document.getElementById("sum-el").textContent ="Sum: " + value

}

function subtract(){
    value = num1 - num2
    document.getElementById("sum-el").textContent ="Sum: " + value
}

function divide(){
    value = num1 / num2
    document.getElementById("sum-el").textContent ="Sum: " + value
}

function multiply(){
    value = num1 * num2
    document.getElementById("sum-el").textContent = "Sum: " + value
}

