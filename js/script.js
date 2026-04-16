let a = 1;
let b = 2; 
let c = a + b;

console.log(c);
function saludar(nombre="Mundo") {
    alert("Hola"+ nombre);
}
saludar("Juan");
saludar("Saraî");

function sumar(a, b) {
    const resultado = a + b;
    alert("El resultado de la suma es: " + resultado);
    sumar(5, 10);
}
function changeColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
} 
document.addEventListener("click", changeColor);