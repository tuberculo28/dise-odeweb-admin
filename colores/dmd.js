const changeColor = (e) => {
    const color = document.getElementById("main-content");
    const letterColor = document.getElementById("colordeletra")

    color.className = color.className === "" ? "botontexto" : "";
    letterColor.className = letterColor.className === "" ? "colordeletra"
    if (color,className === "botontexto"){
        buttonText.innerText = "Cambiar a Blanco";
    }
    else{
        buttonText.innerText = "Cambiar a Azlu";
    }
};