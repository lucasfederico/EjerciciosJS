const despegable1 = document.querySelector('#despegable1')
const menu_de_noticias = document.querySelector('#menu_de_noticias')
const miImagen = document.querySelector('#mi-imagen')

const despegable2 = document.querySelector('#despegable2')
const menu_de_eventos = document.querySelector('#menu_de_eventos')
const miImagen2 = document.querySelector('#mi-imagen2')

despegable1.addEventListener('mouseover', ()=>{
    menu_de_noticias.style.display = 'block'
    miImagen.style.transform = "rotate(180deg)";
})
despegable1.addEventListener('mouseout', ()=>{
    menu_de_noticias.style.display ='none';
    miImagen.style.transform = 'none';
})
menu_de_noticias.addEventListener('mouseover', ()=>{
    menu_de_noticias.style.display = 'block'
    miImagen.style.transform = "rotate(180deg)";
})
menu_de_noticias.addEventListener('mouseout', ()=>{
    menu_de_noticias.style.display ='none';
    miImagen.style.transform = 'none';
})

despegable2.addEventListener('mouseover', ()=>{
    menu_de_eventos.style.display = 'block'
    miImagen2.style.transform = "rotate(180deg)";
})
despegable2.addEventListener('mouseout', ()=>{
    menu_de_eventos.style.display ='none';
    miImagen2.style.transform = 'none';
})
menu_de_eventos.addEventListener('mouseover', ()=>{
    menu_de_eventos.style.display = 'block'
    miImagen2.style.transform = "rotate(180deg)";
})
menu_de_eventos.addEventListener('mouseout', ()=>{
    menu_de_eventos.style.display ='none';
    miImagen2.style.transform = 'none';
})