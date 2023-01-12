//stvaranje objekata pomocu funkcija
function Dog() {
  this.hasSat = false;
}

Dog.prototype.bark = function () {
  return "Wuf Wuf";
};
Dog.prototype.doSit = function () {
  this.hasSat = true;
};

var dog1 = new Dog();
var dog2 = new Dog();

//stvaranje objekata pomocu Object.create prototipa
var Covjek = {
  predstaviSe() {
    console.log(`Bok, ja sam ${this.ime} ${this.prezime}.`);
  },
};

var sime = Object.create(Covjek);
sime.ime = "sime";
sime.prezime = "simic";
sime.predstaviSe();
var frane = Object.create(Covjek);
frane.predstaviSe();

//Klase po novoj ES6 syntaksi
class Igra {
  igraci;
  constructor(igraci) {
    this.igraci = igraci;
  }
  igraj() {
    console.log(
      `Pobjednik je ${
        this.igraci[Math.floor(Math.random() * this.igraci.length)]
      }!`
    );
  }
}

class Zmire extends Igra {
  constructor(igraci, lovac) {
    super(igraci);

    if (igraci.includes(lovac)) {
      this.lovac = lovac;
    } else {
      this.lovac = "Luka";
    }
  }

  brojim() {
    console.log("10,9,8,7,6,5,4,3,2,1, POLAZIM!");
  }
  spasi(igrac) {
    console.log(`Moj spas za ${igrac}`);
  }

  igraj() {
    this.brojim();
    this.igraci.forEach((element) => {
      if (element !== this.lovac) {
        this.spasi(element);
      }
    });
  }
}

//promisi i fetch api i async await
fetch(`https://api.nationalize.io/?name=michael`)
  .then((response) => {
    return response.json(); //gotov i ja
  })
  .then((objekt) => console.log(objekt))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {});

console.log("Ja bih se trebao pojaviti tek nakon izvrsenja fetcha.");

async function mojPrvaAsinkrona() {
  let response = await fetch(`https://api.nationalize.io/?name=michael`);
  let objekt = await response.json();

  console.log(
    `Znači ${objekt.name} je najvjerojatnije ${objekt.country[0].country_id}`
  );
}

mojPrvaAsinkrona();

var t = 1;
var mojInterval; //ok, opet moram zakociti i rjesiti then od promisa kojeg sam cekao

var mojPrviPromis = new Promise((resolve, reject) => {
  mojInterval = setInterval(() => {
    if (t === 2) resolve();
    else if (t === 3) reject();
  }, 5000);
});

mojPrviPromis
  .then(() => {
    clearInterval(mojInterval);
    console.log("uspijeh");
  })
  .catch(() => {
    clearInterval(mojInterval);
    console.log("neuspijeh");
  });
