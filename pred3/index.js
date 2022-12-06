function napuniBody() {
  document.body.innerHTML += "<hr><p>Dobar dan svima</p>";
  console.log(x);
  console.log(mojaDugaRecenica);
}

function pozdravi(e) {
  e.preventDefault();
  let ime = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  document.getElementById(
    "pozdrav"
  ).innerHTML = `Pozdrav <pre>${ime.trim()}</pre>. Hvala ti na upitu. Odgovorit ćemo ti uskoro na email ${email}`;
}

function zamijeni(e, nacin) {
  e.preventDefault();
  let replacedString;
  let originalnaRecenica = document.getElementById("orginalnaRecenica").value;
  let searchTerm = document.getElementById("searchTerm").value;
  let replaceTerm = document.getElementById("replaceTerm").value;

  if (nacin === "pjeske") {
    let indexStart = originalnaRecenica.indexOf(searchTerm);
    replacedString =
      originalnaRecenica.substring(0, indexStart) +
      replaceTerm +
      originalnaRecenica.substring(indexStart + searchTerm.length);
  } else {
    replacedString = originalnaRecenica.replace(searchTerm, replaceTerm);
  }

  document.getElementById("zamijnjen").innerHTML = replacedString;
}

var x = "Ovo je vrlo dugi string";
x += " koji je u dva reda";
x += " jer se inače ne može čitati.";

let z = 5;
// z += 8; ovo je isto ka red ispod
z = z + 8;

let mojaDugaRecenica = `dljgljsdgjlds jdkgjldsghjdg \n jdkhgds jkhgjkdsghsjk`;
