// var mobileMenu = document.querySelector("#mobile-menu");

// function openMenu() {
  // window.alert("Het werkt!");
// }

// mobileMenu.addEventListener("click", openMenu)
var datum = new Date();
var dag = document.querySelector('#dag-vandaag');
var maand = document.querySelector('#maand-vandaag');

dag.innerHTML = datum.getDate();
maand.innerHTML = datum.getMonth()+1;