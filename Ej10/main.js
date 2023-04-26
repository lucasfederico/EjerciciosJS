const miReloj = document.querySelector("#miReloj");
// Inicializo las variables que uso en la función
let seg = 0;
let min = 59;
let hs = 22;

// Funcion reloj
let Hora = () => {
  miReloj.innerHTML = `'${hs}:${min}:${seg}'`;
  seg++
  if (seg>=60){
    seg = 0
    min++
  }
  if (min>=60){
    min = 0
    hs++
  }
  if(hs>=24){
    hs=0
  }
};
// Actualizo mi función cada 1 seg
setInterval(Hora, 1000);
