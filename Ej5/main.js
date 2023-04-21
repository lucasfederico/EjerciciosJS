    const btnShow = document.querySelector('#btnShow')
    const btnNoShow = document.querySelector('#btnNoShow')
    const cuadro = document.querySelector('#cuadro')
    const paragraph = document.querySelector('#paragraph')

    // AGREGANDO TEXTO CON CLASES DE CSS

    // btnShow.addEventListener('click',()=>{
    //     paragraph.classList.add('show')
    // })
    // btnNoShow.addEventListener('click',()=>{
    //     paragraph.classList.remove('show')
    // })

    // AGREGANDO TEXTO CON INNERHTML

    btnShow.addEventListener('click',()=>{
        txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi libero maxime pariatur enim laudantium veritatis. Laborum natus expedita aliquid consectetur magni, a dignissimos pariatur excepturi facilis culpa? Et deleniti eum, adipisci dolore necessitatibus ullam dicta iure expedita atque saepe doloremque soluta culpa repudiandae unde molestias sed, numquam nemo sunt debitis laborum ex aliquid. Quas corrupti qui illo iure debitis illum harum doloribus modi dicta provident autem ducimus, tempora cum quisquam possimus recusandae quia libero? Earum quas nam tempora rerum?"
        paragraph.innerHTML = txt
    })

    btnNoShow.addEventListener('click',()=>{
        paragraph.innerHTML = ''
    })