let utrkaAutaElementi = {
  nadimak: document.getElementById("nadimak"),
  nadimakDrugi: document.getElementById("nadimak-drugi"),
  boja: document.getElementById("colorpicker"),
  bojaDruga: document.getElementById("colorpicker-drugi"),
  brzina: document.getElementById("brzina"),
  brzinaDruga: document.getElementById("brzina-drugi"),
  duljinaStaze: document.getElementById("duljina"),
  tkoJePrvi: document.getElementById("tko-je-prvi"),
};

let utrkaAutaValues = {};

function stvoriSve() {
  utrkaAutaValues.duljina = utrkaAutaElementi.duljinaStaze.value;

  utrkaAutaValues.autoPrvi = {
    nadimak: utrkaAutaElementi.nadimak.value,
    boja: utrkaAutaElementi.boja.value,
    brzina: utrkaAutaElementi.brzina.value,
    vrijeme: utrkaAutaValues.duljina / utrkaAutaElementi.brzina.value,
  };
  utrkaAutaValues.autoDrugi = {
    nadimak: utrkaAutaElementi.nadimakDrugi.value,
    boja: utrkaAutaElementi.bojaDruga.value,
    brzina: utrkaAutaElementi.brzinaDruga.value,
    vrijeme: utrkaAutaValues.duljina / utrkaAutaElementi.brzinaDruga.value,
  };
}
function kreni(e) {
  e.preventDefault();
  stvoriSve();
  if (
    utrkaAutaValues.autoPrvi.brzina &&
    utrkaAutaValues.autoDrugi.brzina &&
    utrkaAutaValues.duljina
  ) {
    if (utrkaAutaValues.autoPrvi.vrijeme > utrkaAutaValues.autoDrugi.vrijeme) {
      utrkaAutaElementi.tkoJePrvi.innerHTML = `<p style="color:${
        utrkaAutaValues.autoDrugi.boja
      }">Pobjednik je ${
        utrkaAutaValues.autoDrugi.nadimak
      }. Vrijeme prolaza: ${utrkaAutaValues.autoDrugi.vrijeme.toFixed(
        2
      )} sati.`;
    } else if (
      utrkaAutaValues.autoPrvi.vrijeme < utrkaAutaValues.autoDrugi.vrijeme
    ) {
      utrkaAutaElementi.tkoJePrvi.innerHTML = `<p style="color:${
        utrkaAutaValues.autoPrvi.boja
      }">Pobjednik je ${
        utrkaAutaValues.autoPrvi.nadimak
      }. Vrijeme prolaza: ${utrkaAutaValues.autoPrvi.vrijeme.toFixed(
        2
      )} sati.</p>`;
    } else {
      utrkaAutaElementi.tkoJePrvi.innerHTML = `<p>Izjednačeno je!</p>`;
    }
  } else {
    utrkaAutaElementi.tkoJePrvi.innerHTML = `<p>Obavezno unesite brzinu i duljinu staze!</p>`;
  }
}
