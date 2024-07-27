
let count = 0



function inrement(){
 count++
 document.getElementById("count").innerText = count
}

function save(){
    document.getElementById("count-el").innerText +=   count + "-"
}