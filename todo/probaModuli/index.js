import { sayHi, saySay } from "./say.js";
import Frane from "./primjerDefaultnogExporta.js";
import * as Uvuceni from "./namespaced.js";
import "./zaSideEffecte.js";

document.body.innerHTML = sayHi("John");
console.log(saySay());

console.log(Frane);

console.log(Uvuceni.hhhh23);
