const btn = document.querySelector('#btn')
const img = document.querySelector('#img')

// FUNCION QUE VA A MODIFICAR LA IMAGEN
function agregarTamaño (){
    img.style.width = '300px'
    img.style.backgroundImage = "url('https://images4.alphacoders.com/574/574726.jpg')"
    img.style.backgroundSize = 'cover'
}

// AL PRESIONAR EL BOTON VA A LLAMAR A LA FUNCION
btn.addEventListener('click',agregarTamaño)
