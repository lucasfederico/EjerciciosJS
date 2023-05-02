const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const btn = document.querySelector("#btn");
// const nombre = document.querySelector('#nombre')

// Chistes para el rango de edad 20-29
const chistesRango1 = [
  "¿Por qué los programadores prefieren el café frío? Porque lo programan en Java.",
  "¿Qué le dijo un átomo a otro? ¡Creo que perdí un electrón! ¿Estás seguro? ¡Sí, estoy positivamente cargado!",
  "¿Sabías que la risa es el mejor remedio para el estrés? ¡Excepto cuando estás riendo por ninguna razón y la gente te mira raro!",
  "¿Qué es lo que un abogado dice cuando se sienta a una mesa de poker? Quiero un trato.",
  "¿Cómo se llama un grano de arroz bailarín? Arroz-bailarín.",
];
// Chistes para el rango de edad 30-39
const chistesRango2 = [
  "¿Qué hace un ingeniero civil cuando está aburrido? Construye castillos de arena en la playa.",
  "¿Qué dijo el tomate cuando vio al otro tomate atropellado? ¡Ketchup!",
  "¿Cómo se llama un libro sobre el fin del mundo escrito por un programador? '404 - El Apocalipsis no se encuentra'.",
  "¿Por qué los dentistas no pueden mantener una relación estable? Porque siempre están buscando otra muela.",
  "¿Por qué los padres de familia están obsesionados con el tiempo? Porque siempre quieren estar al tanto de la hora de dormir de sus hijos.",
];
// Chistes para el rango de edad 40-49
const chistesRango3 = [
  "¿Por qué los padres no deberían tener Facebook? Porque siempre encuentran fotos embarazosas de sus hijos.",
  "¿Cómo se llama un hombre que ha perdido la mitad de su inteligencia? Un hombre de mediana tontura.",
  "¿Sabías que el 90% de las personas en Facebook han cambiado su estado civil a 'es complicado'? El otro 10% son solteros que no quieren admitirlo.",
  "¿Cómo se llama un grupo de amigos que se reúnen para hablar sobre sus dolores de espalda? La liga de los viejos incómodos.",
  "¿Por qué los dentistas siempre tienen éxito en la vida? Porque tienen una carrera de dientes.",
];
const contarChiste = () => {
    let txt;
    let aleatorio = Math.floor(Math.random()*5)
  if (nombre.value != "" && apellido.value != "" && edad.value != "") {
    if (edad.value >=20 && edad.value <30) {
        txt = document.createTextNode(chistesRango1[aleatorio])
    }
    else if(edad.value >=30 && edad.value <40){
        txt = document.createTextNode(chistesRango2[aleatorio])
    }
    else if(edad.value >=40 && edad.value<50){
        txt = document.createTextNode(chistesRango3[aleatorio])
    }
    else{
        txt = document.createTextNode('No tengo chistes para tu edad :c')
    }
    const popup = document.createElement("dialog");
    const saludar = document.createElement('h3');
    let texto = document.createTextNode(`Hola ${nombre.value + ' '+apellido.value}`)
    saludar.appendChild(texto)
    popup.appendChild(saludar)
    popup.appendChild(txt);
    document.body.appendChild(popup);
    popup.showModal();
  } else {
    alert("Complete los campos por favor.");
  }
  console.log(aleatorio)
};

btn.addEventListener("click", contarChiste);
