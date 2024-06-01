class Student{
	// constructor to initialize
	constructor(name, surname, studentID){
		this.name = name; // Assign the value of the parameter 'name' to the 'name' property of the *NEW* instance
		this.surname = surname;
		this.studentID = studentID;
	}
}

function takeInfos(){
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var studentID = document.getElementById("studentID").value;

	var student = new Student(name, surname, studentID);
	console.log("Student Info: ", student);

	var studentInfoDiv = document.getElementById("StudentInfos");
	// .innerHTML --> used to set or get the HTML contnt of an element
	// sets the HTML content of the studentInfoDiv element
	studentInfoDiv.innerHTML = "<p> NAME: " + student.name + "</p><p>SURNAME: "+ student.surname + "</p> <p> STUDENT ID: " + student.studentID + "</p>";
}
