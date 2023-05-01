const todo = document.querySelector('body');
const header = document.querySelector('header');
const btns = document.querySelector('#btns');
const logo = document.querySelector('#logo');
const op1 = document.querySelector('#op1');
const op2 = document.querySelector('#op2');
const op3 = document.querySelector('#op3');
// Opcion por default
op1.addEventListener('change',()=>{
if(op1.checked){
    // Elimino las clases que tengan
    todo.className = ''
    header.className = ''
    logo.src = 'https://preview.redd.it/ygzscjo863w31.png?auto=webp&s=c4dbc92645b12dfd87617ce1d8c03d08379d1884';
}
})
// Opcion Tema Oscuro
op2.addEventListener('change',()=>{
if(op2.checked){
    // Elimino las clases que tengan
    todo.className = ''
    header.className = ''
    todo.classList.add('modo_oscuro');
    header.classList.add('modo_oscuro2');
    logo.src = 'https://64.media.tumblr.com/2ecb5d4286e49defad14a2f30cca4612/3037b83096e59586-ed/s400x600/e8ac5bca028360ee1962d063e3031516db380959.pnj';

}
})
// Opcion Tema rosa
op3.addEventListener('change',()=>{
    if(op3.checked){
        // Elimino las clases que tengan
        todo.className = ''
        header.className = ''
        todo.classList.add('modo_rosa')
        header.classList.add('modo_rosa2')
        logo.src = 'https://www.pngkey.com/png/full/545-5457914_jigglypuff-pokemon-pixel-art-pokmon.png';
    }
})

