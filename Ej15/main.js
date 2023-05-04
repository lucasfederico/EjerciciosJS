const despegable1 = document.querySelector('#despegable1')
const menu_de_noticias = document.querySelector('#menu_de_noticias')

despegable1.addEventListener('mouseover', ()=>{
    menu_de_noticias.style.display = 'block'
})
despegable1.addEventListener('mouseout', ()=>{
    menu_de_noticias.style.display ='none';
})
menu_de_noticias.addEventListener('mouseover', ()=>{
    menu_de_noticias.style.display = 'block'
})
menu_de_noticias.addEventListener('mouseout', ()=>{
    menu_de_noticias.style.display ='none';
})