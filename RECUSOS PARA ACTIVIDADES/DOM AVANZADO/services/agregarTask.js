import { editarTask } from "./editarTask.js";
import { eliminarTask } from "./deleteTask.js";

export const agregarTask = (data) => {
    const table = document.getElementById("taskTable");
    const tableBody = table.getElementsByTagName("tbody")[0];
    const newRow = document.createElement("tr");
    newRow.dataset.taskId = data.id;

    const nombreCell = document.createElement("td");
    nombreCell.textContent = data.nombre;
    newRow.appendChild(nombreCell);

    const descripcionCell = document.createElement("td");
    descripcionCell.textContent= data.descripcion
    newRow.appendChild(descripcionCell);

    const fechaCell = document.createElement("td");
    fechaCell.textContent = data.fecha;
    newRow.appendChild(fechaCell);

    const prioridadCell = document.createElement("td");
    prioridadCell.textContent = data.prioridad;
    newRow.appendChild(prioridadCell);

    const accionesCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.className="actions";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.className="actions";
    accionesCell.appendChild(editButton);
    accionesCell.appendChild(deleteButton);
    newRow.appendChild(accionesCell);

    editButton.addEventListener('click', (e) => {
        editarTask(e);
    });

    deleteButton.addEventListener('click', (e) => {
        eliminarTask(e);
    });

    tableBody.appendChild(newRow);
}






