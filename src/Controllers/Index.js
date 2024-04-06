import { validar } from "./dependencia.js";
const click = document.getElementById("Pre");
click.addEventListener("click", function () {
  let infijo = document.getElementById("main").value;
  const finalfinal = document.getElementById("result");
  finalfinal.innerText = validar.infijoaprefijo(infijo);
});
