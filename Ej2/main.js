const palabra = document.getElementById('palabra')
const agregar = document.getElementById('agregar')
const letraChoice = document.getElementById('letraChoice')
const mostrar = document.getElementById('mostrar')
const hola = document.getElementById('hola')

// INICIALIZO EL ARRAY
const listaPalabras = []

// FUNCION QUE AGREGA UNA PALABRA A MI LISTA
agregar.addEventListener('click',()=>{
    if (palabra.value != '') {
        listaPalabras.push(palabra.value)
    }
    else{
        alert('Ingrese una palabra por favor.')
    }
    palabra.value = ''
})

// FUNCION QUE MUESTRA CUANTAS PALABRAS EMPIEZAN CON LA LETRA ELEGIDA
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

