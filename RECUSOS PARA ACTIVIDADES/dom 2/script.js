import { createCheckBox } from "./components/checkBox.js";
import { createDeleteButton } from "./components/deleteButtom.js";
import { createSpanElement } from "./components/spanElement.js";
import { createDivElement } from "./components/divElement.js";

const addElement = (event) => {
    event.preventDefault();
    const input = document.querySelector('input[type="text"]'); //stores the input html element
    if (input.value === "") {
        alert("El campo no puede estar vacio");
        return;
    }
    
    const list = document.querySelector('.cardsList'); //creates the container
    const newListElement = document.createElement("li"); //creates new li (list element )
    newListElement.className = "card";

    if (input.value === "") {
        alert("El campo no puede estar vacio");
        return;
    }
        
        

    const divElement = createDivElement(input.value);
    const deleteButton = createDeleteButton();

    newListElement.appendChild(divElement);
    newListElement.appendChild(deleteButton);
    list.appendChild(newListElement);
    input.value = "";


}

const buttom = document.querySelector('.btnCreate');
buttom.addEventListener('click', addElement);
