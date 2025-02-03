import getUsers from './use-cases/getUsers.js';

console.log("Hello World");

const userList = getUsers(); // funcion de usuarios
console.log('User List: ')
console.log(userList); // mostrar los usuarios en array

