const importe = document.querySelector("#importe");
const btn = document.querySelector("#btn");
const p = document.querySelector("#paragraph");

// Funcion que calcula la propina
function calcularPropina() {
  pagar = parseInt(importe.value);
  propina = pagar * 1.1;
  p.innerHTML = "Usted debe pagar: " + propina;
}
// Llama a la funcion 
btn.addEventListener("click", calcularPropina);
