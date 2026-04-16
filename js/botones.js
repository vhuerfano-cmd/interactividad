let title = document.querySelector("h1");
let boton1 = document.getElementById("btn-1");
let boton2 = document.getElementById("btn-2");
let boton3 = document.getElementById("btn-3");
boton1.addEventListener("click", function() {
    title.innerText = "Botón 1 presionado";
    bgColor("lightblue");
});
function mouseEnter() {
    console.log("Mouse Enter");
    bgColor("red"); 
}

function mouseLeave() {
    bgColor("white");
}

function bgColor(color) {
    document.body.style.backgroundColor = color;
}

boton1.addEventListener("click", function() {
     console.log("Botón 1 presionado");
});

boton2.addEventListener("click", function() {
     console.log("Botón 2 presionado");
});
boton2.addEventListener("mouseenter", mouseEnter);
boton2.addEventListener("mouseleave", mouseLeave);

boton3.addEventListener("click", function() {
     console.log("Botón 3 presionado");
});
boton3.addEventListener("mouseenter", mouseEnter);