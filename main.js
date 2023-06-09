"use strict";
let users = [];
// Obtener elementos de HTML
const referencias = {
    form: '#form',
    nameInput: '#name',
    lastNameInput: '#lastName',
    email: '#email',
    userList: '#users-list'
};
const form = document.querySelector(referencias.form);
const nameInput = document.querySelector(referencias.nameInput);
const lastNameInput = document.querySelector(referencias.lastNameInput);
const email = document.querySelector(referencias.email);
let userList = document.querySelector(referencias.userList);
function render() {
    userList.innerHTML = '';
    console.log(users);
    users.forEach(user => {
        const elementList = document.createElement('li');
        elementList.innerHTML = `
            <strong>Nombre:</strong> ${user.name}
            <strong>Apellido:</strong> ${user.lastName}
            <strong>Email:</strong> ${user.email}
            <button onclick='editUser(${user.id})'>Editar</button>
            <button onclick='deleteUser(${user.id})'>Eliminar</button>        
        `;
        userList === null || userList === void 0 ? void 0 : userList.appendChild(elementList);
    });
}
function addUser(event) {
    event.preventDefault();
    let nameValue = nameInput.value;
    let lastNameValue = lastNameInput.value;
    let emailValue = email.value;
    if (nameValue === '' || lastNameValue === '' || emailValue === '') {
        alert('los campos deben ir llenos');
        return;
    }
    const id = Date.now();
    const user = {
        name: nameValue,
        lastName: lastNameValue,
        email: emailValue,
        id: id
    };
    users.push(user);
    render();
    nameInput.value = '';
    lastNameInput.value = '';
    email.value = '';
}
function editUser(id) {
    const userToEdit = users.find(user => user.id === id);
    if (!userToEdit) {
        return;
    }
    nameInput.value = userToEdit.name;
    lastNameInput.value = userToEdit.lastName;
    email.value = userToEdit.email;
    users = users.filter(user => user.id !== id);
    render();
}
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    render();
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', addUser);
//# sourceMappingURL=main.js.map