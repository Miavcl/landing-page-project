const formulario = document.getElementById('contactForm');

formulario.addEventListener('submit', function(event) 
{
    event.preventDefault(); // Evitar recarga de página

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('correo').value;

    // Validar nombre
    if (!!nombre && nombre.trim().length <= 0) 
    {
        alert('Por favor, ingrese su nombre completo.');
        return;
    }
    if (nombre.length < 3) 
    {
        alert('El nombre debe tener al menos 3 caracteres.');
        return;
    }
    // Validar correo
    if (!validarCorreo(correo)) 
    {
        alert('Por favor, introduce un correo valido.');
        return;
    }
    // Validar mensaje
    if (!!mensaje && mensaje.trim().length < 5) 
    {
        alert('Por favor, ingrese su mensaje (se requieren como minimo 5 palabras).');
        return;
    }
    // Si todo está correcto, mostrar éxito
    alert('¡Mensaje enviado correctamente! Pronto obtendra su respuesta');

    // Limpiar formulario
    formulario.reset();
});

function validarCorreo(email) 
{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}