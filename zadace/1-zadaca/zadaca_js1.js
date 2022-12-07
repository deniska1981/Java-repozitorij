function razbij(e) {
  e.preventDefault();
  let text = document.getElementById("text").value;
  let characterNumber = text.length;
  let dotNumber = text.split(/[.]/);
  document.getElementById(
    "sentenceNumber"
  ).innerHTML = `Imate ${dotNumber.length} recenica`;
  document.getElementById(
    "characterNumber"
  ).innerHTML = `Broj znakova u rečenici je ${characterNumber}`;
}
