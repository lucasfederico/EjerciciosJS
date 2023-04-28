const cuantos = document.querySelector('#cuantos');
const btnCuantos = document.querySelector('#btnCuantos');
const cuales = document.querySelector('#cuales');
const btnCuales = document.querySelector('#btnCuales');
const mostrar = document.querySelector('#mostrar');
const result = document.querySelector('#result');

// Alfabeto que no use
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Inicializo las variables que uso en las funciones
let contraCreada = [];
let misCaracteres = [];
let c;
// Funcion que establece cuantos caracteres tendrá mi contraseña
function firstBtn(){
    if(cuantos.value !=''){
        c=parseInt(cuantos.value)
        cuantos.value = ''
    }
    else{alert('Por favor complete el campo.')}
}
// Funcion que convierte los caracteres que quiere el usuario a un array
function secondBtn(){
    if(cuales.value!=''){
    misCaracteres = cuales.value.split('')
    cuales.value = ''
    }else{ alert('Por favor complete el campo.')}
}
// Funcion que crea la contraseña
function thirdBtn(){
    // Reinicio el array de la contraseña cada vez que se genera una nueva 
    contraCreada = []
    for (let i = 0; i < c; i++) {
        let aleatorio = Math.floor(Math.random()*misCaracteres.length)
        contraCreada.push(misCaracteres[aleatorio])
    }
    let cadena = contraCreada.join('')
    result.innerHTML = cadena
}
btnCuantos.addEventListener('click',firstBtn)
btnCuales.addEventListener('click',secondBtn)
mostrar.addEventListener('click',thirdBtn)