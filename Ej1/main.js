let numero = document.getElementById('numero')
let btn = document.getElementById('btn')
let grande = document.getElementById('grande')
let menor = document.getElementById('menor')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')

let lista = []

btn.addEventListener('click',()=>{
    if(numero.value == ''){
        alert('Ingrese un numero por favor!')
    }
    lista.push(parseInt(numero.value))
    numero.value = ''
})

let mayor = 0
grande.addEventListener('click',()=>{
    lista.forEach((item) => {
        if(item > mayor){
            mayor = item
        }
    });
    p1.innerHTML = mayor
})

let chico = 0
menor.addEventListener('click',()=>{
    lista.forEach((item, index) => {
        if(index == 0){
            chico = item
        }
        if(item < chico){
            chico = item
        }
    });
    p2.innerHTML = chico
})

