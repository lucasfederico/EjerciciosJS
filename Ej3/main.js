let palabra = document.getElementById("palabra");
let agregar = document.getElementById("agregar");
let mostrar = document.getElementById("mostrar");
let parrafo = document.getElementById("parrafo");

let listaPalabras = [];
agregar.addEventListener("click", () => {
  if (palabra.value != "") {
    listaPalabras.push(palabra.value);
  }
  palabra.value = ''
});

let longerWord = ''
mostrar.addEventListener("click", () => {
  listaPalabras.forEach((item) => {
    if (item.length > longerWord.length) {
      longerWord = item
    }
  });
  parrafo.innerHTML = 'La palabra más larga es: ' + longerWord
});


