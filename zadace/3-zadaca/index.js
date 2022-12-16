const mojBroj = Math.floor(Math.random() * 100) + 1;
let broj = 0;
let brojPokusaja = 0;

function pogodi(event) {
  event.preventDefault();

  brojPokusaja.innerHTML = brojPokusaja += 1;
  document.brojPokusaja;

  let tvojBroj = document.getElementById("pogodi").value;
  if (tvojBroj > 100 || tvojBroj % 1 !== 0) {
    document.getElementById("rezultat").innerText = "Unesi broj između 0 i 100";
  } else if (tvojBroj < 0) {
    document.getElementById("rezultat").innerText = "Unesi broj između 0 i 100";
  } else if (tvojBroj == mojBroj) {
    document.getElementById("rezultat").innerText = "Pogodak";
  } else if (tvojBroj > mojBroj) {
    document.getElementById("rezultat").innerText = "Unesi neki manji broj";
  } else {
    document.getElementById("rezultat").innerText = "Unesi neki veći broj";
  }

  document.getElementById(
    "brojPokusaja"
  ).innerText = `Broj pokušaja ${brojPokusaja}`;
}
