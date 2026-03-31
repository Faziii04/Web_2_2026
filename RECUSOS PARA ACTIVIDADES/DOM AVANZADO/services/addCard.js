export const addCard = (data) => {
    const cardsDeck = document.getElementById("taskCards");
    const card = document.createElement("div");
    card.className = "taskCard";
    card.dataset.taskId = data.id;

    const nombre = document.createElement("h3");
    nombre.textContent = data.nombre;
    card.appendChild(nombre);

    const descripcion = document.createElement("p");
    descripcion.textContent = data.descripcion;
    card.appendChild(descripcion);

    const fecha = document.createElement("p");
    fecha.textContent = `Fecha: ${data.fecha}`;
    card.appendChild(fecha);

    const prioridad = document.createElement("p");
    prioridad.textContent = `Prioridad: ${data.prioridad}`;
    card.appendChild(prioridad);

    cardsDeck.appendChild(card);
}