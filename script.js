function myFunction() {
    const para = document.createElement("p")
    const node = document.createTextNode("This is a new node")
    para.appendChild(node)

    const element = document.getElementById("main")
    element.appendChild(para)

}


