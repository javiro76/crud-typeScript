interface miObjeto {
    name: string;
    lastName:string;
    email: string;
    id?: Number;
}

let users: miObjeto[] = [];

// Obtener elementos de HTML

const referencias ={
    form:'#form',
    nameInput:'#name',
    lastNameInput: '#lastName',
    email:'#email',
    userList: '#users-list'
}
const form: HTMLElement | null = document.querySelector(referencias.form);
const nameInput: HTMLInputElement | null = document.querySelector(referencias.nameInput);
const lastNameInput: HTMLInputElement | null = document.querySelector(referencias.lastNameInput);
const email: HTMLInputElement | null = document.querySelector(referencias.email);

let userList: HTMLElement | null = document.querySelector(referencias.userList);


function render():void{
    userList!.innerHTML='';
    console.log(users);
    
    users.forEach(user =>{
        
        const elementList: HTMLElement = document.createElement('li');
        elementList.innerHTML=`
            <strong>Nombre:</strong> ${user.name}
            <strong>Apellido:</strong> ${user.lastName}
            <strong>Email:</strong> ${user.email}
            <button onclick='editUser(${user.id})'>Editar</button>
            <button onclick='deleteUser(${user.id})'>Eliminar</button>        
        `
        userList?.appendChild(elementList);
    });
}

function addUser(event:SubmitEvent):void{
    event.preventDefault();

   
    let nameValue:string  = nameInput!.value;
    let lastNameValue:string = lastNameInput!.value;
    let emailValue:string = email!.value;

    if(nameValue==='' || lastNameValue===''|| emailValue===''){
        alert('los campos deben ir llenos');
        return
    }
    
    const id:number = Date.now();
    
    const user:miObjeto ={
        name: nameValue,
        lastName: lastNameValue,
        email: emailValue,
        id:id        
    }
    
    users.push(user);
    
    render();
    
    nameInput!.value='';
    lastNameInput!.value='';
    email!.value='';        
}

function editUser(id:number):void{

    const userToEdit = users.find(user => user.id === id);
    if(!userToEdit){
        return;
    }

    nameInput!.value=userToEdit.name;
    lastNameInput!.value= userToEdit.lastName;
    email!.value=userToEdit.email; 

    users = users.filter(user => user.id !== id);

    render();

}

function deleteUser(id:number):void{
    users = users.filter(user => user.id !== id);

    render();
}

form?.addEventListener('submit',addUser);



