    const btnShow = document.querySelector('#btnShow')
    const btnNoShow = document.querySelector('#btnNoShow')
    const cuadro = document.querySelector('#cuadro')
    const paragraph = document.querySelector('#paragraph')

    btnShow.addEventListener('click',()=>{
        paragraph.classList.add('show')
    })
    btnNoShow.addEventListener('click',()=>{
        paragraph.classList.remove('show')
    })