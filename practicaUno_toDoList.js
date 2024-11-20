function agregarTarea() {
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
    let fechaTarea = document.getElementById("fechaTarea").value;

    if (nuevaTareaTexto === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    if (fechaTarea === "") {
        alert("Por favor, seleccione una fecha para la tarea.");
        return;
    }

    // Crear un nuevo elemento de lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " - Fecha: " + fechaTarea;

    // Agregar evento para marcar la tarea como completada
    nuevaTarea.addEventListener("click", function () {
        nuevaTarea.classList.toggle("completed");
    });

    // Botón para eliminar la tarea
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () {
        nuevaTarea.remove();
    };

    // Añadir el botón de eliminar al elemento de tarea
    nuevaTarea.appendChild(botonEliminar);

    // Añadir la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    // Limpiar los campos
    document.getElementById("nuevaTarea").value = "";
    document.getElementById("fechaTarea").value = "";
}
