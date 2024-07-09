let count = document.getElementById("numberOfCount").innerText
let countTag = document.getElementById("numberOfCount") 

function countPeople(){
    count++
    console.log(count)
    countTag.innerHTML = count
}