import ClientService from '../service/client-service.js';
import ProductService from '../service/product-service.js';

const form = document.querySelector('[data-form]');
const nameInput = document.querySelector('[data-nombre]');
const categoryInput = document.querySelector('[data-categoria]');
const priceInput = document.querySelector('[data-precio]');
const stockInput = document.querySelector('[data-stock]');
const descriptionInput = document.querySelector('[data-description]');
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

  clients.forEach((client) => {
    const option = document.createElement('option');
    option.value = client.id;
    option.textContent = client.nombre;
    clientSelect.appendChild(option);
  });
};

displayClients();

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const product = {
    id: Date.now().toString(),
    nombre: nameInput.value,
    categoria: categoryInput.value,
    precio: Number(priceInput.value),
    stock: Number(stockInput.value),
    descripcion: descriptionInput.value,
    clienteId: clientSelect.value,
  };

  try {
    await ProductService.createProduct(product);
    window.location.href = '../screens/registro_completado.html';
  } catch (error) {
    console.error('Error creating product:', error);
    alert('Hubo un error al registrar el producto. Intente de nuevo.');
  }
});
