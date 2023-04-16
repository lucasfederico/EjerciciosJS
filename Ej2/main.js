let palabra = document.getElementById('palabra')
let agregar = document.getElementById('agregar')
let letraChoice = document.getElementById('letraChoice')
let mostrar = document.getElementById('mostrar')
let hola = document.getElementById('hola')

let listaPalabras = []

agregar.addEventListener('click',()=>{
    if (palabra.value != '') {
        listaPalabras.push(palabra.value)
    }
    else{
        alert('Ingrese una palabra por favor.')
    }
    palabra.value = ''
})

mostrar.addEventListener('click',()=>{
    let contador = 0
    if (letraChoice.value != '') {
        listaPalabras.forEach((item)=>{
            if(item.indexOf(letraChoice.value) == 0){
                contador++
            }
        })
        hola.innerHTML = 'Hay ' + contador + ' palabras que empiezan con esa letra!'
    }
    else{
        alert('Ingrese una letra por favor.')
    }
})

