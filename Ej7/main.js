const btn = document.querySelector('#btn')
const img = document.querySelector('#img')

// Funcion que va a cambiar la imagen
function cambiarImagen(){
    img.src = 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/d/d0/Pokemans_156.gif'
}
// Al presionar el botón va a llamar a la función
btn.addEventListener('click',cambiarImagen)