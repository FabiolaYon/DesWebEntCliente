import getUsers from './use-cases/getUsers.js';

console.log("Hello World");

const userList = getUsers(); // Llamamos a la función
console.log('User List: ')
console.log(userList); // Mostramos la lista de usuarios en consola
