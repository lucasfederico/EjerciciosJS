const palabra = document.querySelector("#palabra");
const agregar = document.querySelector("#agregar");
const mostrar = document.querySelector("#mostrar");
const parrafo = document.querySelector("#parrafo");

// INICIALIZO MI ARRAY
const listaPalabras = [];

// FUNCION QUE AGREGA UNA PALABRA A MI ARRAY
agregar.addEventListener("click", () => {
  if (palabra.value != "") {
    listaPalabras.push(palabra.value);
  }
  palabra.value = ''
});

// CONTADOR DE LA PALABRA MÁS LARGA
let longerWord = ''
// FUNCION QUE VA A MOSTRAR LA PALABRA MAS LARGA
mostrar.addEventListener("click", () => {
  listaPalabras.forEach((item) => {
    if (item.length > longerWord.length) {
      longerWord = item
    }
  });
  parrafo.innerHTML = 'La palabra más larga es: ' + longerWconst
});


