const uiObjekti = {
  ime: document.getElementById("fname"),
  prezime: document.getElementById("lname"),
  musko: document.getElementById("musko"),
  zensko: document.getElementById("zensko"),
  godine: document.getElementById("godine"),
  provjerenaOsobaElement: document.getElementById("provjerenaOsoba"),
};

let osoba = {};

function stvoriOsobu() {
  osoba.ime = uiObjekti.ime.value;
  osoba.prezime = uiObjekti.prezime.value;
  osoba.spol = uiObjekti.musko.checked
    ? "musko"
    : uiObjekti.zensko.checked
    ? "zensko"
    : "";
  osoba.godina = parseInt(uiObjekti.godine.value)
    ? parseInt(uiObjekti.godine.value)
    : undefined;
  osoba.jeliDugoImeIPrezime = function () {
    return osoba.ime.length > 6 && osoba.prezime.length > 6;
  };
  osoba.jeliParan = function () {
    return !(osoba.godina % 2);
  };
}

function provjeriOsobu(event) {
  //provjeriti jeli osoba ima i ime i prezime dulje od 6 znakova
  event.preventDefault();

  stvoriOsobu();

  if (osoba.jeliDugoImeIPrezime()) {
    uiObjekti.provjerenaOsobaElement.innerHTML = `<p>Osoba ima i ime i prezime dulje od 6 znakova!</p>`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML = `<p>Osoba nema i ime i prezime dulje od 6 znakova!</p>`;
  }

  if (osoba.spol !== "") {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Vi ste normalni!</p>`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Vi ste nenormalni!</p>`;
  }

  if (!osoba.godina) {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Unesite broj godina da bismo vam rekli jeste li u parnoj ili neparnoj godini svog života!</p>`;
  } else if (osoba.jeliParan()) {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Imate paran broj godina!</p>`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Imate neparan broj godina!</p>`;
  }
}

x = 3;
while (x > 10) {
  console.log(x);
  x += 3;
}

var mojePrvoPolje = [3, 5, "dddd", 10];
mojePrvoPolje[0]; //3
mojePrvoPolje[2]; //"dddd"
mojePrvoPolje.length; //4

for (let i = 0; i < mojePrvoPolje.length; i++) {
  console.log(ojePrvoPlje[i]);
}
