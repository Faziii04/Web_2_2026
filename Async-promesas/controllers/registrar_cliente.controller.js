import ClientService from '../service/client-service.js';

const nameInput = document.querySelector('[data-nombre]'); 
const emailInput = document.querySelector('[data-email]');
const form = document.querySelector('[data-form]'); 





form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const user = { 
        id: Date.now(),
        nombre: name,
        email: email,
    };

    try {
        await ClientService.createClient(user);
        
        window.location.href = "../screens/lista_cliente.html";
    } catch (error) {
        console.error('Error creating client:', error);
        alert("Hubo un error al registrar al cliente. Intente de nuevo.");
    }
});
