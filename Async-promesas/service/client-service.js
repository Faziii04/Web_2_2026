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

const ClientService = {
    getClients,
    createClient,
    updateClient,
    deleteClient
}

export default ClientService;