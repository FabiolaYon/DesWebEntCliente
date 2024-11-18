//Notas en la parte inferior.

let taskList = []

const createTask = function(text) {
    return {
        done: false,
        text: text,
        create: new Date()
    }
}

const addTask = function() {
    let task = createTask(taskElement.value)
    taskList.push(task)
    console.log(taskList)
}

const taskElement = document.getElementById("task")
const addButtonE1 = document.getElementById("addButton")

addButtonE1.onclick = addTask

console.log('------------------------------------')

let lista = [1, 2, 3, 4, 5]

for (let i = 0; i < lista, length; i++) {
    let [head, ...tail] = lista.slice(i)
    console.log('actual: ', head)
    console.log('rest: ', tail)
}

/* Apuntes:

//Cambia

let lista = [1, 2, 3, 4, 5]
let otraLista = lista

//Los puntos suspensivos
let listaDefinitiva = [...lista]

lista[0] = 9

console.log(lista)
console.log(otraLista)
console.log(listaDefinitiva)



//No cambia

let frase = 'una frase'
let otraFrase = frase
otraFrase = 'frase modificada'

console.log(frase)
console.log(otraFrase)



// Solicitar entrada y convertir a número
let input = parseInt(prompt('Inserta un número'), 10)
let max = 20

// Verificar si el valor es mayor al máximo permitido
if (input > max) {
    console.log('La entrada no puede ser mayor que 20')
} else {
    console.log('Tu valor es: ', input)
}

// Corregir el operador ternario
let msg = (input > max) ? ('La entrada no puede ser mayor que 20') : ('Tu valor es: ' + input)
console.log(msg)



El operador ternario ? : en JavaScript (y en muchos otros lenguajes de programación) es una forma abreviada de escribir una declaración if-else. Se utiliza para evaluar una expresión y devolver uno de dos valores dependiendo de si la expresión es verdadera o falsa. Este operador tiene la siguiente sintaxis:

    condición ? valor_si_verdadero : valor_si_falso;

Desglose:
- condición: Es una expresión que se evalúa como verdadera o falsa.
- valor_si_verdadero: El valor que se devuelve si la condición es verdadera.
- valor_si_falso: El valor que se devuelve si la condición es falsa.

Ejemplo:

let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"

En este caso:

- La condición es edad >= 18.
- Si la condición es verdadera (como lo es en este ejemplo porque edad es 18), el valor de mensaje será "Eres mayor de edad".
- Si la condición fuese falsa, el valor sería "Eres menor de edad".

Ventajas del operador ternario:

- Código más compacto: Permite escribir en una sola línea lo que de otra forma requeriría un bloque if-else.
- Claridad: En situaciones simples, hace que el código sea más conciso y fácil de leer.

Ejemplo comparado con if-else:
Usando if-else:

let edad = 18;
let mensaje;
if (edad >= 18) {
    mensaje = "Eres mayor de edad";
} else {
    mensaje = "Eres menor de edad";
}
console.log(mensaje);


Usando operador ternario:

let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

Ambas formas son equivalentes, pero la versión con el operador ternario es más compacta.

Nota:
El operador ternario es más adecuado cuando la condición y las acciones son simples. Si la lógica es más compleja, es recomendable usar if-else para mayor legibilidad.

*/