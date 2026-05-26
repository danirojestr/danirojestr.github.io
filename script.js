// Función para contactar por WhatsApp
function contactarWhatsapp(mensaje) {
    const numero = '542994578289';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Función para enviar el formulario
function enviarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear mensaje para WhatsApp
    const mensajeWhatsApp = `
*Nuevo contacto desde CHOOM*

*Nombre:* ${nombre}
*Email:* ${email}
*Teléfono:* ${telefono || 'No proporcionado'}
*Asunto:* ${asunto}
*Mensaje:* ${mensaje}
    `.trim();

    // Enviar por WhatsApp
    contactarWhatsapp(mensajeWhatsApp);

    // Limpiar formulario
    document.querySelector('.contacto-form').reset();
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de aparición al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.producto-card, .estampa-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});