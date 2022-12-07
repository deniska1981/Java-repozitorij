function razbij(e) {
  e.preventDefault();
  let text = document.getElementById("text").value;
  let characterNumber = text.length;
  let dotNumber = text.split(/[.]/);
  document.getElementById(
    "sentenceNumber"
  ).innerHTML = `Broj rečenica: ${dotNumber.length}`;
  document.getElementById(
    "characterNumber"
  ).innerHTML = `Broj znakova u rečenici: ${characterNumber}`;
}
