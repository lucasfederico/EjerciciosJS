const btn = document.querySelector('#btn')
const mostrar = document.querySelector('#mostrar')

// Al presionar el boton va a mostrar un saludo
btn.addEventListener('click',()=>{
    mostrar.classList.add('show')
})

