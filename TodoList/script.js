function setTareas() {
    try {
        const input = document.getElementById('input-text');
        const textContent = input.value;
        
        añadirTarea(textContent);
        input.value = "";
    } catch(err) {
        console.log("Error " + err)
    }
    
    mostrarTareas()
}

let tarea = [];
let contadorId = 1;

function añadirTarea(name) {
    tarea.push({
        id: contadorId,
        nombre: name,
        completada: false,
    });
    contadorId++;
    console.log(tarea)
    return tarea;
}


function mostrarTareas() {
    let mostrar = document.getElementById('mostrar-tareas');

    let html = "";
    mostrar.innerHTML = html;
    for (let array in tarea) {
        html += `
            <span>${tarea[array].nombre}</span>

            <button data-id="${tarea[array].id}" class="btn-editar">Editar</button>
            
            <button data-id="${tarea[array].id}" class="btn-eliminar">Eliminar</button>
            <br>
        `;
    }

    mostrar.innerHTML += html;
}

function activacionBotones() {
    document.getElementById('mostrar-tareas').addEventListener('click', function(event) {

        if(event.target.classList.contains('btn-editar')) {
            const id = Number(event.target.dataset.id);
            editar(id);
        }

        if(event.target.classList.contains('btn-eliminar')) {
            const id = Number(event.target.dataset.id);
            eliminar(id);
        }
    })
}

function editar(id) {
    for(let array in tarea) {

        if (tarea[array].id === id) {
            let nombreNuevo = prompt("Dime el nombre nuevo");

            if (!nombreNuevo) return;

            tarea[array].nombre = nombreNuevo;
            break;
        }
    }
    mostrarTareas();
}

function eliminar(id) {
    tarea = tarea.filter(item => item.id !== id);
    mostrarTareas();
}

document.addEventListener('DOMContentLoaded', () => {
    activacionBotones();
});