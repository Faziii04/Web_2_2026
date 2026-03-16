export const editarTask = (event) => {
    const row = event.currentTarget.parentElement.parentElement;
    const cells = row.querySelectorAll("td");
    const form = document.querySelector("#taskForm");

    document.querySelector('[data-input-task]').value = cells[0].textContent;
    document.querySelector('[data-input-descripcion]').value = cells[1].textContent;
    document.querySelector('[data-input-fecha]').value = cells[2].textContent;
    document.querySelector('[data-input-prioridad]').value = cells[3].textContent;

    form.dataset.editingId = row.dataset.taskId;
    form.querySelector('.btnCreate').textContent = "Aplicar";
};

export const aplicarEdicion = (data) => {
    const row = document.querySelector(`tr[data-task-id="${data.id}"]`);
    if (row) {
        const cells = row.querySelectorAll("td");
        cells[0].textContent = data.nombre;
        cells[1].textContent = data.descripcion;
        cells[2].textContent = data.fecha;
        cells[3].textContent = data.prioridad;
    }

    const card = document.querySelector(`#taskCards .taskCard[data-task-id="${data.id}"]`);
    if (card) {
        const cardFields = card.querySelectorAll("h3, p");
        cardFields[0].textContent = data.nombre;
        cardFields[1].textContent = data.descripcion;
        cardFields[2].textContent = `Fecha: ${data.fecha}`;
        cardFields[3].textContent = `Prioridad: ${data.prioridad}`;
    }
};
