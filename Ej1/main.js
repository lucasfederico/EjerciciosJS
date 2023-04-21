const numero = document.getElementById('numero')
const btn = document.getElementById('btn')
const btnGreater = document.getElementById('btnGreater')
const btnLess = document.getElementById('btnLess')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')

// INICIALIZO EL ARRAY
const lista = []

// AGREGAR EL NUMERO INGRESADO A LA LISTA

btn.addEventListener('click',()=>{
    if(numero.value == ''){
        alert('Ingrese un numero por favor!')
    }
    lista.push(parseInt(numero.value))
    numero.value = ''
})

// INICIALIZO EL MAYOR

let greater = 0

// FUNCION QUE VA A MOSTAR EL NUMERO MENOR

btnGreater.addEventListener('click',()=>{
    lista.forEach((item) => {
        if(item > greater){
            greater = item
        }
    });
    p1.innerHTML = greater
})

// INICIALIZO EL MAYOR

let less = 0

// FUNCION QUE VA A MOSTAR EL NUMERO MENOR

btnLess.addEventListener('click',()=>{
    lista.forEach((item, index) => {
        if(index == 0){
            less = item
        }
        if(item < less){
            less = item
        }
    });
    p2.innerHTML = less
})

