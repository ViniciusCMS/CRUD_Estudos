'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: 'Vinicius',
    email: 'vinciu@gmail.com',
    celular: '111111111',
    cidade: 'Brumado'
}

const createClient = (Client) => {
    localStorage.setItem('db_Client', Client)
}
//evento 
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)