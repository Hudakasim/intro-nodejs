function summation(a,b){
	document.write(a+b); // writes directly to HTML
}

let multiplication = (a, b) =>{ // arrow function
	document.getElementById("etiket1").innerHTML = a * b; // updates the content of an HTML element with specific ID
}

let subtraction = () => {
	let sayi1 = document.getElementById("input1").value;
	let sayi2 = document.getElementById("input2").value;
	document.getElementById("sonuc").innerHTML = sayi1 - sayi2;
}
