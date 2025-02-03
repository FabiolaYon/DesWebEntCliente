/* Se intentará que aquí sea visible lo único que queramos que lo sea. */

/*
export default function user(){
    return console.log('Hello user')
}
    */

/* A continuación se reproducirá desde index.html en Console:
main.js:3 Hello World
user.js:4 Hello user
*/

class User {
    constructor(name, email) {
        this.name = name /* Damos valores */
        this.email = email /* Damos valores */
    }
}

// let myUser = new User()
// myUser.

// Hacer validaciones, por ejemplo, el email debe contener @

export default User;