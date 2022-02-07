'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () =>{
    clearFields()
     document.getElementById('modal').classList.remove('active')
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

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

//interface de usuario
const salvarClient = () => {
    if (isValidFields()) {
        const Client = {
            nome: document.getElementById('nome').Value,
            email: document.getElementById('email').Value,
            celular: document.getElementById('celular').Value,
            cidade: document.getElementById('cidade').Value

        }
        createClient(Client)
        closeModal()
    }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}
const updateTable = () => {
    const db_Client = readClient()
    clearTable()
    db_Client.forEach(createRow)
}

const fillFields = (client) =>{
    document.getElementById('nome').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('celular').value = client.celular
    document.getElementById('cidade').value = client.cidade
}

const editClient = (index) =>{
    const client = readClient()[index]
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

     const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            
            editClient(index)

         }else{
            console.log("delete")
        }
    }
    
}

updateTable()

//evento 
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', salvarClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)