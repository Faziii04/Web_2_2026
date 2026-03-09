export const createSpanElement = (input) => {
    const newSpanElement = document.createElement("span");
    newSpanElement.textContent = "  "+input.value;
    newSpanElement.className = "task";
    return newSpanElement;
}