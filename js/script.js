// var mobileMenu = document.querySelector("#mobile-menu");

// function openMenu() {
  // window.alert("Het werkt!");
// }

// mobileMenu.addEventListener("click", openMenu)
var datum = new Date();
var dag = document.querySelector('#dag-vandaag');
var maand = document.querySelector('#maand-vandaag');
/*Bron: Mijn broer had dit geleerd op school en leerde dit toen aan mij*/

dag.innerHTML = datum.getDate();
maand.innerHTML = datum.getMonth()+1;

//------------------------------------------------------------

var nacht = document.querySelector('header li:nth-of-type(2)');
var feest = document.querySelector('header li:nth-of-type(3)');
var alles = document.querySelector('*');
var body = document.querySelector('body');
var header = document.querySelectorAll('#section-obstakels header');

function weltrusten() {
	alles.style.mixBlendMode = "luminosity";
	body.style.backgroundColor = "black";
	header[0].style.color = "white";
	header[0].style.backgroundColor = "black";
	header[0].style.borderBottom = "1px solid white";
}

function goeiemorgen() {
	alles.style.mixBlendMode = "normal";
	body.style.backgroundColor = "white";
	header[0].style.color = "black";
	header[0].style.backgroundColor = "white";
	header[0].style.borderBottom = "1px solid black";
}

function confettiTime() {
	// window.alert("LET OP: NIET GESCHIKT VOOR MENSEN MET EPILEPSIE")
	body.classList.add("feest");
	body.classList.add("knipperen");
}

function stopTheParty() {
	body.classList.remove("feest");
	body.classList.remove("knipperen");
}

nacht.addEventListener("click",weltrusten);
nacht.addEventListener("dblclick",goeiemorgen);
feest.addEventListener("click",confettiTime);
feest.addEventListener("dblclick",stopTheParty);

