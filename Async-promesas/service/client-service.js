async function getClients () {
    const response = await fetch('http://localhost:8080/perfil');
    if (!response.ok) {
        throw new Error('Error fetching clients');
    }
    return await response.json();
}

async function createClient (user) {   
    const response = await fetch('http://localhost:8080/perfil', {
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
    const response = await fetch('http://localhost:8080/perfil', {
        method: 'POST',
        heards: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Error updating client');
    }   
    return await response.json();
}

async function deleteClient (id) {
    const response = await fetch(`http://localhost:8080/perfil/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error deleting client');
    }
    return await response.json();
}

// Pets methods
async function getPets () {
    const response = await fetch('http://localhost:8080/pets');
    if (!response.ok) {
        throw new Error('Error fetching pets');
    }
    return await response.json();
}

async function createPet (pet) {
    const response = await fetch('http://localhost:8080/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pet)
    });
    if (!response.ok) {
        throw new Error('Error creating pet');
    }
    return await response.json();
}

async function updatePet (pet) {
    const response = await fetch('http://localhost:8080/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pet)
    });
    if (!response.ok) {
        throw new Error('Error updating pet');
    }
    return await response.json();
}

async function deletePet (id) {
    const response = await fetch(`http://localhost:8080/pets/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error deleting pet');
    }
    return await response.json();
}

// Products methods
async function getProducts () {
    const response = await fetch('http://localhost:8080/products');
    if (!response.ok) {
        throw new Error('Error fetching products');
    }
    return await response.json();
}

async function createProduct (product) {
    const response = await fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    if (!response.ok) {
        throw new Error('Error creating product');
    }
    return await response.json();
}

async function updateProduct (product) {
    const response = await fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    if (!response.ok) {
        throw new Error('Error updating product');
    }
    return await response.json();
}

async function deleteProduct (id) {
    const response = await fetch(`http://localhost:8080/products/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error deleting product');
    }
    return await response.json();
}

const ClientService = {
    getClients,
    createClient,
    updateClient,
    deleteClient,
    getPets,
    createPet,
    updatePet,
    deletePet,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}

export default ClientService;