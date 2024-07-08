const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const listItems = document.getElementById("list-items")

function addTask(){
    if(firstName.value && lastName.value === ""){
        alert("the input field cannot be empty")
    }
    else{
       let li = document.createElement('li')
       li.innerHTML = firstName.value
       li.innerHTML = lastName.value
       listItems.appendChild(li)
    }
}

function getTasks(){
    localStorage.getItem('firstName')
}