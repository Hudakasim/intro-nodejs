class Student{
	// constructor to initialize
	constructor(name, surname, studentID){
		this.name = name; // Assign the value of the parameter 'name' to the 'name' property of the *NEW* instance
		this.surname = surname;
		this.studentID = studentID;
	}
}

document.getElementById("savebtn").addEventListener("click",
function(){
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var studentID = document.getElementById("studentID").value;

	var student = new Student(name, surname, studentID);
	console.log("Student Info: ", student);

	document.getElementById("result").innerHTML = "<h1> NAME: " + student.name + "</h1><h2>SURNAME: "+ student.surname + "</h2> <h3> STUDENT ID: " + student.studentID + "</h3>";
	// every thing we write after the '=' will gonna copy and past at the html where the id is result
});
