async function getClients () {
    const response = await fetch('http://localhost:3000/perfil');
    if (!response.ok) {
        throw new Error('Error fetching clients');
    }
    return await response.json();
}

async function createClient (user) {   
    const response = await fetch('http://localhost:3000/perfil', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Error creating client');
    }
    return await response.json();
}

async function updateClient (user) {
    const response = await fetch(`http://localhost:3000/perfil/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Error updating client');
    }   
    return await response.json();
}

async function deleteClient (id) {
    const response = await fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error deleting client');
    }
    return await response.json();
}


const API_URL = 'http://localhost/api/conexion.php';

const listarClientes = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Error fetching clients');
        }
        const responseText = await response.text();
        console.log('Response from server:', responseText);
        return JSON.parse(responseText);
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
    }
};

const crearCliente = async (cliente) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        });
        if (!response.ok) {
            throw new Error('Error creating client');
        }
        const responseText = await response.text();
        console.log('Response from server:', responseText);
        return JSON.parse(responseText);
    } catch (error) {
        console.error('Error creating client:', error);
        throw error;
    }
};

const eliminarCliente = async (id) => {
    try {
        const response = await fetch(`${API_URL}${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Error deleting client');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting client:', error);
        throw error;
    }
};

const actualizarCliente = async (cliente) => {
    try {
        const response = await fetch(`${API_URL}${cliente.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        });
        if (!response.ok) {
            throw new Error('Error updating client');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating client:', error);
        throw error;
    }
};




const ClientService = {
    listarClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}

export default ClientService;