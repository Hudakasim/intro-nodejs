function hesaplama(){
	let sayi1 = Number(document.getElementById("input1").value);
	let sayi2 = Number(document.getElementById("input2").value);
	document.getElementsByTagName("p")[0].innerHTML = "Multiplication: " + (sayi1 * sayi2);
	document.getElementsByTagName("p")[1].innerHTML = "Addition: " + (sayi1 + sayi2);
	document.getElementsByTagName("p")[2].innerHTML = "Subtraction: " + (sayi1 - sayi2);
}
