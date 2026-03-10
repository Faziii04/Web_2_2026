export const createListItem = (task) => {
    const tableRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const dateCell = document.createElement("td");
    const priorityCell = document.createElement("td");
    const actionsCell = document.createElement("td");

    nameCell.textContent = task.name;
    descriptionCell.textContent = task.description;
    dateCell.textContent = task.date;
    priorityCell.textContent = task.priority;
    tableRow.appendChild(nameCell);
    tableRow.appendChild(descriptionCell);
    tableRow.appendChild(dateCell);
    tableRow.appendChild(priorityCell);
}