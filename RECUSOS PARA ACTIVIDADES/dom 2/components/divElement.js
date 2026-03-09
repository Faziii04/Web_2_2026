export const createDivElement = (input) => {
    const divElement = document.createElement("div");

    const iElement = document.createElement("i");
    iElement.className = "far fa-check-square icon"; 
    iElement.addEventListener('click', toggleCheckIcon);
    iElement.style.color = "green";

    const spanElement = document.createElement("span");
    spanElement.textContent = input;
    spanElement.className = "task";


    divElement.appendChild(iElement);
    divElement.appendChild(spanElement);

    return divElement;
}

const toggleCheckIcon = (event) => {
    event.preventDefault();
    const element = event.target; 
    const status = element.className;
    if (status === "far fa-check-square icon") {
        element.className = "far fa-square icon";
        element.style.color = "red";
        return;
    }
    element.className = "far fa-check-square icon";
    element.style.color = "green";
}