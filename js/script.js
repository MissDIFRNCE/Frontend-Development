//Marieke de Hoop - 500797554 - Klas 205 - Frontend Development - Vasilis van Gemert

//Navigatie knopjes
var nacht = document.querySelector('header li:nth-of-type(2)');
var feest = document.querySelector('header li:nth-of-type(3)');
//HTML elementen
var alles = document.querySelector('*');
var body = document.querySelector('body');
var header = document.querySelectorAll('#section-obstakels header');
var nachtmodusTitel = document.querySelector('#main-header li:nth-of-type(2) h2');
var feestmodusTitel = document.querySelector('#main-header li:nth-of-type(3) h2');
//Tijdsklok
var today = new Date().getHours(); //Bron: https://tecadmin.net/get-current-date-time-javascript/


//Dit zorgt ervoor dat adhv tijd de website op nachmodus sprint
if (today <= 7 && today >= 19) {
	//Bron: https://tecadmin.net/get-current-date-time-javascript/
	//Bron: https://stackoverflow.com/questions/18031410/javascript-if-time-is-between-7pm-and-7am-do-this
	alles.style.mixBlendMode = "luminosity";
	body.style.backgroundColor = "black";
	//Code om alle kopjes ook zwart te maken
	var i = 0;
	while (i < header.length) {
		header[i].style.color = "white";
		header[i].style.backgroundColor = "black";
		header[i].style.borderBottom = "1px solid white";
		i++;
	}//Bron: Vasilis van Gemert
	nachtmodusTitel.innerHTML = "Dagmodus";
} else { }


//Knopje hoort bij functie weltrusten
var knopje = false;

//Deze functie gaat over de nachtmodus
function weltrusten() {
	if (knopje == false) {
		alles.style.mixBlendMode = "luminosity";
		body.style.backgroundColor = "black";
		//Code om alle kopjes ook zwart te maken
		var i = 0;
		while (i < header.length) {
			header[i].style.color = "white";
			header[i].style.backgroundColor = "black";
			header[i].style.borderBottom = "1px solid white";
			i++;
		}//Bron: Vasilis van Gemert
		knopje = true;
		nachtmodusTitel.innerHTML = "Dagmodus";
	} else {
		alles.style.mixBlendMode = "normal";
		body.style.backgroundColor = "white";
		var i = 0;
		while (i < header.length) {
			header[i].style.color = "black";
			header[i].style.backgroundColor = "white";
			header[i].style.borderBottom = "1px solid black";
			i++;
		}//Bron: Vasilis van Gemert
		nachtmodusTitel.innerHTML = "Nachtmodus";
		knopje = false;
	}
}

//Trigger functie weltrusten
nacht.addEventListener("click",weltrusten);


// Oude code

// function goeiemorgen() {
// 	alles.style.mixBlendMode = "normal";
// 	body.style.backgroundColor = "white";
// 	header[0].style.color = "black";
// 	header[0].style.backgroundColor = "white";
// 	header[0].style.borderBottom = "1px solid black";
// }

// nacht.addEventListener("dblclick",goeiemorgen);


//feestje hoort bij functie confettiTime
var feestje = false;

//Deze functie gaat over de feestmodus
function confettiTime() {
	if (feestje == false) {
		window.alert("LET OP: NIET GESCHIKT VOOR MENSEN MET EPILEPSIE");
		// alles.style.mixBlendMode = "luminosity";
		body.classList.add("feest");
		body.classList.add("knipperen");
		feestmodusTitel.innerHTML = "Oke stop maar";
		feestje = true;
	} else {
		body.classList.remove("feest");
		body.classList.remove("knipperen");
		feestmodusTitel.innerHTML = "Feestmodus";
		feestje = false;
	}
}

//Trigger confettiTime
feest.addEventListener("click",confettiTime);


// Oude code

// function stopTheParty() {
// 	body.classList.remove("feest");
// 	body.classList.remove("knipperen");
// }

// feest.addEventListener("dblclick",stopTheParty);






//Datum en tijd agenda section
var datum = new Date();
var dag = document.querySelector('#dag-vandaag');
var maand = document.querySelector('#maand-vandaag');
/*Bron: Mijn broer had dit geleerd op school en leerde dit toen aan mij*/

if (dag) {
	dag.innerHTML = datum.getDate();
	maand.innerHTML = datum.getMonth()+1;
}



//Obstakelpagina - meer lezen
var leesMeer = document.querySelector('#main-obstakel > div > a');
var omschrijvingObstakel = document.querySelector('#main-obstakel > div > p');
var omschrijvingsTekst = false;

function meerLezen() {
	if (omschrijvingsTekst == false) {
		omschrijvingObstakel.innerHTML = "De Rope Swing is een obstakel, eerst geïntroduceerd als het tweede obstakel op de Amerikaanse Ninja Warrior 1 in de kwalificatie en halve finale, en verscheen daarna opnieuw op de Amerikaanse Ninja Warrior 2, opnieuw als het tweede obstakel in de kwalificatie en de halve finale. Deelnemers moeten het touw pakken en over het water slingeren om het landingsplatform te bereiken. Hoewel de functie van dit obstakel heel eenvoudig was, moesten sommige concurrenten terugzwaaien naar het startplatform, omdat ze bij hun eerste poging niet succesvol naar het landingsplatform zwaaiden.";
		leesMeer.innerHTML = "Lees minder";
		omschrijvingsTekst = true;
	} else {
		omschrijvingObstakel.innerHTML = "De Rope Swing is een obstakel, eerst geïntroduceerd als het tweede obstakel op de Amerikaanse Ninja Warrior 1 in de kwalificatie en halve finale, en verscheen daarna opnieuw op de Amerikaanse Ninja Warrior 2, opnieuw als het tweede obstakel in de kwalificatie en de halve finale.";
		omschrijvingsTekst = false;
		leesMeer.innerHTML = "Lees meer...";
	}
}

if(leesMeer) {
	leesMeer.addEventListener("click",meerLezen);
}








