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

//delete
const deleteClient = (index) => {
    const db_Client =  readClient()
    db_Client.splice(index, 1)
    setLocalStorage(db_Client)
}
//uptade
const updateClient = (index, Client) => {
    const db_Client = readClient()
    db_Client[index] = Client
    setLocalStorage(db_Client)
}

//read
const readClient = () => getLocalStorage()

//Create
const createClient = (Client) => {
    const db_Client = getLocalStorage()
    db_Client.push (Client)
    setLocalStorage(db_Client)
}

const isValidFields = () => {
   return document.getElementById('form').reportValidity()
}

//interface de usuario
const salvarClient = () => {
    if (isValidFields()) {
        const Client = {
            nome= document.getElementById('nome').Value,
            email= document.getElementById('email').Value,
            celular= document.getElementById('celular').Value,
            cidade= document.getElementById('cidade').Value

        }
        createClient(Client)
    }
}

//evento 
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', salvarClient)