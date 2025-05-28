const img = document.getElementById("pet-img");
const catBtn = document.getElementById("newcatbtn");
const dogBtn = document.getElementById("newdogbtn");

async function fetchRandomCat() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  console.log(response);
  const data = await response.json();
  console.log(data);
  img.src = data[0].url;
}

async function fetchRandomDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  console.log(response);
  const data = await response.json();
  console.log(data);
  img.src = data.message;
}

fetchRandomCat();
catBtn.addEventListener("click", fetchRandomCat);
dogBtn.addEventListener("click", fetchRandomDog);
