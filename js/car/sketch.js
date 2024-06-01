class Car {
	modelYili;
	constructor(marka, model, kapasite, renk){
		this.marka = marka;
		this.model = model;
		this.kapasite = kapasite;
		this.renk = renk;
	}
	otomobilBilgileri(){
		console.log("marka: " + this.marka + " model: " + this.model + " kapasite: " + this.kapasite + " renk: " + this.renk);
	}
	labelYazdirma(){
		return ("marka: " + this.marka + "<br>model: " + this.marka + "<br>kapasite: " + this.kapasite + "<br>renk: " + this.renk);
	}
}

let o1 = new Car("BMW", "F123", "5", "Beyaz");
let etiket = document.getElementById("88");
etiket.innerHTML = o1.labelYazdirma();

let o2 = new Car("Audi", "A6", "8", "red");
o2.otomobilBilgileri();



