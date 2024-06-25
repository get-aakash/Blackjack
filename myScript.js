
const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}

showNotes()
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML)
    console.log(notesContainer.innerHTML)
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.setAttribute("contenteditable", "true")
    img.src = "images/delete.jpg"
    inputBox.className = "input-box"
    notesContainer.appendChild(inputBox).appendChild(img)
})

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
    }
    else if(e.target.tagName === "P"){
        let notes = document.querySelectorAll(".input-box")
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})