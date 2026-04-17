import ClientService from '../service/client-service.js';

const nameInput = document.querySelector('[data-nombre]'); 
const emailInput = document.querySelector('[data-email]');
const clientSelect = document.querySelector('#cliente');
const form = document.querySelector('[data-form]'); 

const displayClients = async () => {
    let clients;
    console.log("hasta aca funca")
    try {
        clients = await ClientService.getClients();
    } catch (error) {
        console.log(error)
    }
    console.log(clients)
    
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
