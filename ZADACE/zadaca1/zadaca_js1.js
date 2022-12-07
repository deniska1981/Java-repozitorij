function razbij(e) {
  e.preventDefault();
  let text = document.getElementById("text").value;
  let characterNumber = text.length;
  let dotNumber = text.split(/[.]/);

  document.getElementById(
    "characterNumber"
  ).innerHTML = `Broj znakova: ${characterNumber}`;
  document.getElementById("sentenceNumber").innerHTML = `Broj rečenica: ${
    dotNumber.length - 1
  }`;
}
