'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: 'Vinicius',
    email: 'vincius@gmail.com',
    celular: '111111111',
    cidade: 'Brumado'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Client')) ?? []
const setLocalStorage = (db_Client) => localStorage.setItem('db_Client', JSON.stringify(db_Client))

const createClient = (Client) => {
    const db_Client = getLocalStorage()
    db_Client.push (Client)
    setLocalStorage(db_Client)
}
//evento 
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)