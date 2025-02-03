import User from '../entities/User.js';

function getUsers() {
    let list = []
    for (let i=0; i<10; i++) {
        let user = new User("name"+i, "email"+i+"@fake.com");
        list.push(user); // Agregar usuario a la lista
    }
    return list
}

export default getUsers