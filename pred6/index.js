const stvoriElement = (event) => {
  event.preventDefault();

  let podaci = dohvatiPodatkeNovogElementa();
  document.body.appendChild(stvoriNode(podaci));
}

const dohvatiPodatkeNovogElementa = () => {
  return {
    elem: document.getElementById("elem").value,
    elemSadrzaj: document.getElementById,
  }

const stvoriNode = (parms) => {
  let noviElement= document.createElement(params.elem);
  noviElement.inner = params.elemSadrzaj;
  return noviElement;
}
