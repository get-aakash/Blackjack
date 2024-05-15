class Student{
    constructor(name, age, faculty){
        this.name = name,
        this.age = age,
        this.faculty = faculty
    }
    get studentname(){
        return this.name
    }

    set studentname(x){
        this.name = x
    }
}

const student1 = new Student("Aakash")
student1.studentname = "Acharya"

function myFunction(){
    document.getElementById("demo").innerHTML = student1.studentname
}

