export const eliminarTask = (data) => {
    const row = data.currentTarget.parentElement.parentElement;
    const taskId = row.dataset.taskId;
    const tbody = row.parentElement;
    tbody.removeChild(row);

    const card = document.querySelector(`#taskCards .taskCard[data-task-id="${taskId}"]`);
    if (card) {
        card.remove();
    }
} 