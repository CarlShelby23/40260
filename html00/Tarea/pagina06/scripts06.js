import { imagen } from "./imagen06.js";

// Mostrar imágenes iniciales
document.getElementById('app').innerHTML = 
    imagen(1, "John") + 
    imagen(2, "Jane") + 
    imagen(3, "Doe") +
    imagen(666, "Martha") +
    imagen(300, "Samuel");

// Agregar interactividad
const images = document.querySelectorAll("#app img");
images.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("redonda");
    });
});