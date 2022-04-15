
const boton=document.querySelector('.boton-hamburguesa')
const nav= document.querySelector('.ul')

const li =document.querySelectorAll('.li')

boton.addEventListener('click',()=>{
    nav.classList.toggle('activarboton')
    
})