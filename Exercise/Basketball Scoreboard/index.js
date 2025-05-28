let home = document.getElementById("count-el1");
let guest = document.getElementById("count-el2");

let homeScore = 0;
let guestScore = 0;

function homeAdd1() {
  homeScore += 1;
  home.textContent = homeScore;
}

function homeAdd2() {
  homeScore += 2;
  home.textContent = homeScore;
}

function homeAdd3() {
  homeScore += 3;
  home.textContent = homeScore;
}

function guestAdd1() {
  guestScore += 1;
  guest.textContent = guestScore;
}

function guestAdd2() {
  guestScore += 2;
  guest.textContent = guestScore;
}

function guestAdd3() {
  guestScore += 3;
  guest.textContent = guestScore;
}
