/**
 * Criar uma class = element.classList.add
 * Remover uma class = element.classList.remove
 * remove ou adiciona uma class = element.classList.handleClass
 * 
 * Adicionar um valor a uma propriedade
 * element.style.property = value
 * ex: element.style.color = 'red'
 */


// const card = document.getElementById("card")

// function addClass(){
//     card.classList.add("estrutura")
//     card.style.backgroundColor = "red"
// }

// function removeClass(){
//     card.classList.remove("estrutura")
    
// }

// function handleClass(){
//     card.classList.toggle("estrutura")
// }


// card.classList.remove("estrutura")

const modal = document.getElementById("modal")
const body = document.querySelector("body")
const btnOpen = document.getElementById("btnOpen")

// Inverte o valor do modal

function handleModal () {
   modal.classList.toggle('modalClose')
   modal.classList.toggle('modalOpen')
   body.classList.toggle('bodyModal')
   
}


// Abre o modal

function openModal() {
    modal.classList.remove('modalClose')
    modal.classList.add('modalOpen')
    btnOpen.style.display = 'none'
}

// Fecha modal

function closeModal() {
       btnOpen.style.display = 'inline'
       modal.classList.remove('modalClose')
       modal.classList.add('modalOpen')
}


const azul = document.getElementById('openAzul')
const amarelo = document.getElementById('openAmarelo')
const preto = document.getElementById('openPreto')

function 