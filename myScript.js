let count = 0
let countEl = document.getElementById("numberOfCount")

let name = 'Aakash'
let greetings = "Hello"

function increment(){
    count++
    countEl.innerHTML = count
}

function save(){
    console.log(count)
    document.getElementById("welcomeEl").innerHTML = name + " " + greetings
}