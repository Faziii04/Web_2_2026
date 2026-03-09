export const createDeleteButton = () => {
    const iElement = document.createElement("i");
    iElement.className = "fas fa-trash-alt trashIcon icon";
    iElement.style.color = "red";
    iElement.addEventListener('click', removeElement);
    return iElement;
}


const removeElement = (event) => {
    event.preventDefault();
    const parent = document.querySelector('.cardsList'); 
    const element = event.target.parentElement; 
    parent.removeChild(element);    
}