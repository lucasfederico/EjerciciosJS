const namesa = document.querySelector("#name");
const email = document.querySelector("#email");
const num = document.querySelector("#num");
const btn = document.querySelector("#btn");
const good = document.querySelector("#good");

// Funcion que comprueba que los datos esten correctos
const comprobarDatos = ()=>{
  if (namesa.value != "" || email.value != "" || num.value != "") {
    // Comprobamos que ingrese un email valido
    if(email.value.includes('@') && email.value.includes('.com')){
      let txt = document.createTextNode('Datos enviados')
      let mensaje = document.createElement('h3')
      mensaje.appendChild(txt)
      document.body.appendChild(mensaje)
    }else{
      alert('Ingrese un correo valido por favor.')
    }
  }else{
    alert('Complete el campo por favor.')
    }
}
// Boton que llama a la funcion 
btn.addEventListener("click",comprobarDatos);
