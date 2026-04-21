let title = document.querySelector("h1");
let boton1 = document.getElementById("btn-1");
let boton2 = document.getElementById("btn-2");
let boton3 = document.getElementById("btn-3");
let title2 = document.getElementById("title-2");

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
     title.innerText = "Botón 1 presionado";
     console.log("Botón 1 presionado");
});
boton1.addEventListener("mouseenter", mouseEnter);
boton1.addEventListener("mouseleave", mouseLeave);

boton2.addEventListener("click", function() {
     title  .innerText = "Botón 2 presionado";
     console.log("Botón 2 presionado");
});
boton2.addEventListener("mouseenter", mouseEnter);
boton2.addEventListener("mouseleave", mouseLeave);

boton3.addEventListener("click", function() {
     title2.innerText = "Botón 3 presionado";
     console.log("Botón 3 presionado");
});
boton3.addEventListener("mouseenter", mouseEnter);
boton3.addEventListener("mouseleave", mouseLeave);