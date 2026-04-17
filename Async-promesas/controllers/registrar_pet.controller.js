import ClientService from '../service/client-service.js';
import PetService from '../service/pet-service.js';

const form = document.querySelector('[data-form]');
const nameInput = document.querySelector('[data-nombre]');
const speciesInput = document.querySelector('[data-especie]');
const breedInput = document.querySelector('[data-raza]');
const ageInput = document.querySelector('[data-edad]');
const notesInput = document.querySelector('[data-notas]');
const clientSelect = document.querySelector('#cliente');


const displayClients = async () => {
  let clients = [];
    try {
        clients = await ClientService.getClients();
    } catch (error) {
    console.error('Error fetching clients:', error);
    return;
    }

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Selecciona un cliente';
  placeholder.disabled = true;
  placeholder.selected = true;
  clientSelect.appendChild(placeholder);

    clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client.id;
        option.textContent = client.nombre;
        clientSelect.appendChild(option);
    });

}

displayClients()





form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const pet = {
    id: Date.now().toString(),
    nombre: nameInput.value,
    especie: speciesInput.value,
    raza: breedInput.value,
    edad: Number(ageInput.value),
    notas: notesInput.value,
    clienteId: clientSelect.value,
  };

  try {
    await PetService.createPet(pet);
    window.location.href = '../screens/registro_completado.html';
  } catch (error) {
    console.error('Error creating pet:', error);
    alert('Hubo un error al registrar el pet. Intente de nuevo.');
  }
});
