const num = document.querySelector('#num')
const btn = document.querySelector('#btn')

// Numero random
aleatorio = Math.floor(Math.random()*10)+1
// Funcion que compara
const comparar = ()=>{
    numero= parseInt(num.value)
    
    numero==aleatorio? alert('Acertaste!'):numero>aleatorio? alert('El numero es mayor al que pensé'): alert('El numero es menor al que pensé')
    console.log(aleatorio)

}
// Llamado a la funcion
btn.addEventListener('click',comparar)