import { agregarTask } from "./services/agregarTask.js";
import { addCard } from "./services/addCard.js";
import { aplicarEdicion } from "./services/editarTask.js";

const form = document.querySelector('[data-form]');
let nextId = 1;

form.addEventListener('submit', (event) => {
  event.preventDefault(); // ;Evita que la página se recargue
  
  // Capturamos cada input por su atributo data
  const nombre = document.querySelector('[data-input-task]').value;
  const descripcion = document.querySelector('[data-input-descripcion]').value;
  const fecha = document.querySelector('[data-input-fecha]').value;
  const prioridad = document.querySelector('[data-input-prioridad]').value;

  // Creamos un objeto con la información
  const datosTarea = {
    id: form.dataset.editingId || String(nextId++),
    nombre,
    descripcion,
    fecha,
    prioridad
  };

  if (form.dataset.editingId) {
    aplicarEdicion(datosTarea);
    form.removeAttribute('data-editing-id');
    form.querySelector('.btnCreate').innerHTML = 'Agregar <i class="fas fa-plus-circle"></i>';
    form.reset();
    return;
  }

  agregarTask(datosTarea);
  addCard(datosTarea);
  form.reset();

});
