export const validarFormulario = (event) => {
    event.preventDefault(); // Evita el envío real del formulario
    
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    
    console.log("Datos del formulario:");
    console.log("Usuario:", user);
    console.log("Contraseña:", password);
    
    // Aquí iría la lógica real de validación y envío
    alert(`Bienvenido ${user}! (Esta es una simulación)`);
    
    // Limpiar el formulario después del "envío"
    event.target.reset();
};