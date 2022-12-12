let ime = document.getElementById("fname");
let prezime = document.getElementById("lname");
let musko = document.getElementById("musko");
let zensko = document.getElementById("zensko");
let godine = document.getElementById("godine");
let provjerenaOsobaElement = document.getElementById("provjerenaOsoba");

function provjeriOsobu(event) {
  //provjeriti jeli osoba ima i ime i prezime dulje od 6 znakova
  event.preventDefault();

  if (ime.value.length > 6 && prezime.value.length > 6) {
    provjerenaOsobaElement.innerHTML = `<p>Osoba ima i ime i prezime dulje od 6 znakova!</p>`;
  } else {
    provjerenaOsobaElement.innerHTML = `<p>Osoba nema i ime i prezime dulje od 6 znakova!</p>`;
  }

  if (musko.checked || zensko.checked) {
    provjerenaOsobaElement.innerHTML += `<p>Vi ste normalni!</p>`;
  } else {
    provjerenaOsobaElement.innerHTML += `<p>Vi ste nenormalni!</p>`;
  }

  if (parseInt(godine.value) === NaN || godine.value === "") {
    provjerenaOsobaElement.innerHTML += `<p>Unesite broj godina da bismo vam rekli jeste li u parnoj ili neparnoj godini svog života!</p>`;
  } else if (parseInt(godine.value) % 2 && godine.value) {
    provjerenaOsobaElement.innerHTML += `<p>Imate neparan broj godina!</p>`;
  } else {
    provjerenaOsobaElement.innerHTML += `<p>Imate paran broj godina!</p>`;
  }
}
