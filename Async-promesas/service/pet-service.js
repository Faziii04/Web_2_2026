async function getPets () {
    const response = await fetch('http://localhost:3000/pets');
    if (!response.ok) {
        throw new Error('Error fetching pets');
    }
    return await response.json();
}

async function createPet (pet) {
    const response = await fetch('http://localhost:3000/pets', {
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
    const response = await fetch(`http://localhost:3000/pets/${pet.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pet)
    });
    if (!response.ok) {
        throw new Error('Error updating pet');
    }
    return await response.json();
}

async function deletePet (id) {
    const response = await fetch(`http://localhost:3000/pets/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error deleting pet');
    }
    return await response.json();
}

const PetService = {
    getPets,
    createPet,
    updatePet,
    deletePet
};

export default PetService;