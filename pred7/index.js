const divovi = document.getElementsByTagName("div");

divovi[1].onclick = () => alert("eto me");

divovi[2].addEventListener("click", () => {
  alert("ja sam div");
});

divovi[2].addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
    alert("ja sam div i u captire sam fazi");
  },
  true
);

const prikaziOdmake = () => {
  console.log("dsfds");
  Array.from(divovi).forEach((element) => {
    let zaUbaciti = `<p>Offset od vrha html page(offsetTop): ${element.offsetTop}</p>`;
    zaUbaciti += `<p>Offset od vrha viewporta(getBoundingClientRect().top): ${
      element.getBoundingClientRect().top
    }</p>`;

    element.innerHTML += zaUbaciti;
  });
};

function dajPonasanje(obj) {
  switch (obj.ime) {
    case "mis":
      return (radnja) => `Ja sam mis i cinim ${radnja}`;
      break;
    case "zec":
      return (radnja) => `Ja sam zec i cinim ${radnja}`;
      break;
  }
}

let zec = {
  ime: "zec",
  visina: 4,
};

let mis = {
  ime: "mis",
  visina: 2,
};

console.log(dajPonasanje(zec)("trcim"));
