//Marieke de Hoop - 500797554 - Klas 205 - Frontend Development - Vasilis van Gemert

//Navigatie knopjes

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
	window.alert("LET OP: NIET GESCHIKT VOOR MENSEN MET EPILEPSIE");
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


//Datum en tijd agenda section
var datum = new Date();
var dag = document.querySelector('#dag-vandaag');
var maand = document.querySelector('#maand-vandaag');
/*Bron: Mijn broer had dit geleerd op school en leerde dit toen aan mij*/

dag.innerHTML = datum.getDate();
maand.innerHTML = datum.getMonth()+1;


//Obstakelpagina - meer lezen
var leesMeer = document.querySelector('.main-section:first-of-type a');
var omschrijvingObstakel = document.querySelector('.main-section:first-of-type p');

function meerLezen() {
	omschrijvingObstakel.innerHTML = "De Rope Swing is een obstakel, eerst geïntroduceerd als het tweede obstakel op de Amerikaanse Ninja Warrior 1 in de kwalificatie en halve finale, en verscheen daarna opnieuw op de Amerikaanse Ninja Warrior 2, opnieuw als het tweede obstakel in de kwalificatie en de halve finale. Deelnemers moeten het touw pakken en over het water slingeren om het landingsplatform te bereiken. Hoewel de functie van dit obstakel heel eenvoudig was, moesten sommige concurrenten terugzwaaien naar het startplatform, omdat ze bij hun eerste poging niet succesvol naar het landingsplatform zwaaiden.";
	window.alert("het werkt");
}

leesMeer.addEventListener("click",meerLezen);







