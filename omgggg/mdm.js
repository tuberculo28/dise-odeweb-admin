const addElement = (event) => {
    event.preventDefault();//prevenir el comportamiento por defeto el formulario
    const inputElement = document.getElementById("input-element").ariaValueMax;
    console.log(inputElement);
    const ulElement = document.getElementById("ul-element");
    const listElement = document.createElement("li");
    listElement.textContent = inputElement;
    ulElement.append(listElement)//agregar a la lista <ul> el elemento
}