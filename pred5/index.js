//Stvaranje polja i prosljeđivanje funkcije sort metodi!
let poljeBrojeva = [7, 300, 200, 34, 6];
poljeBrojeva.sort((a, b) => {
  return a - b;
});

console.log(poljeBrojeva);

//forEach metoda nad Array-om - pozivanjem ove metode izvršava se funkcija nad svakim članom polja!

// parni brojevi forEach metodom!
let brojevi = [3, 4, 8, 65, 40];
brojevi.forEach((item) => {
  if (item % 2 === 0) console.log(item);
});

// MAP metoda - vraća novo polje sa jednakim brojem članova kao prethodno polje

brojevi.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  }
  return 0;
});

// ****____________________FUNKCIJE_________________****

/* funkcije koje se nalaze u objektu se nazivaju metode!
 void funkcija - funkcija koja ne vraća ništa
 return funkcija - ona koja vraća neku vrijednost
*/

// Funkcija po ES6 standardu zadavanjem defaultnog paramtre "b"!
function myFunc(a, b = 1) {
  console.log(a + b);
}

myFunc(1); // pozivanje funkcije!

//Anonimna funkcija koja će vraćati dobar dan, pohranjena u varijablu jer u drugom slučaju umire:

let mojaFunkcija = function () {
  return "Dobar dan";
};

console.log(mojaFunkcija());

//-------------------------------------------------------------//

//Pozivanje funkcije prije deklaracije:

console.log(zbroji(2, 2)); // može se definirati poslije upotrebe. JS prije izvršenja kOda prvo sve pročita (traži definicije funkcija - taj mehanizam se zove "HOISTING!") pa odradi, iz tog razloga se izvršilo!

function zbroji(x, y) {
  return x + y;
}

//____________________
let t = function () {
  return 1;
};

function z() {
  return 1;
}

console.log(t());
console.log(z());
//___________________

// Arrow funkcije!

let r = (input) => input * 2;
console.log(r(5));

//___________________________

let suma = (x, y) => x + y;
console.log(suma(4, 8));

//___________________________

let r2 = (input) => {
  console.log("eee");
  return input * 2;
};
console.log(r2(5));

//___________________________
