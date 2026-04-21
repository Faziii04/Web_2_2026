import ClientService from '../service/client-service.js';

const displayClients = async () => {
    const table = document.querySelector('[data-table]');
    
    let clients = []; 

    try {
        clients = await ClientService.listarClientes();
        console.log(clients);   
    }
    catch (error) {
        console.error('Error fetching clients:', error);
    }

    clients.forEach(client => {
        const newRow = createNewRow(client.nombre, client.email, client.id);
        table.appendChild(newRow);
    });
}

const createNewRow = (nombre, email, id) => {
    const linea = document.createElement("tr");

    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
        <ul class="table__button-control">
        <li>
            <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit">
            Editar
            </a>
        </li>
        <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
            </button>
        </li>
        </ul>
    </td>`;
    
    linea.innerHTML = contenido;
    return linea;
};

displayClients();
