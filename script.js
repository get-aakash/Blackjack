function Student(firstName, lastName, faculty, rollNo, gender){
    this.firstName = firstName,
    this.lastName = lastName,
    this.faculty = faculty,
    this.rollNo  = rollNo,
    this.gender = gender
}


const student1 = new Student("Aakash", "Acharya", "computer Science", 1901, "male")


function myFunction(){
    Student.prototype.shift = "morning"
    document.getElementById("demo").innerHTML = student1.shift
}