// 🔹 Cargar videos e imágenes desde JSON
async function loadData() {
    try {
        let response = await fetch('./recursos/datos.json'); // Ruta ajustada
        let data = await response.json();

        // Cargar videos
        let videoContainer = document.getElementById("video-container");
        videoContainer.innerHTML = "";
        data.videos.forEach(video => {
            let videoElement = document.createElement("div");
            videoElement.classList.add("video");
            videoElement.innerHTML = `<iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>`;
            videoContainer.appendChild(videoElement);
        });

        // Cargar imágenes
        let gallery = document.getElementById("gallery");
        gallery.innerHTML = "";
        data.imagenes.forEach(img => {
            let imgElement = document.createElement("img");
            imgElement.src = img.url;
            imgElement.alt = "Fotografía";
            imgElement.classList.add("photo");
            gallery.appendChild(imgElement);
        });

    } catch (error) {
        console.error("Error cargando datos:", error);
    }
}

// Llamar a la función cuando se cargue la página
document.addEventListener("DOMContentLoaded", loadData);

// 🔹 Cambio de imagen en el footer al hacer clic en redes sociales
document.querySelectorAll(".social-icon").forEach(icon => {
    icon.addEventListener("click", function () {
        let mainImage = document.getElementById("main-icon");
        mainImage.src = this.getAttribute("data-img"); // Cambia la imagen
        window.open(this.getAttribute("data-link"), "_blank"); // Abre la red social
    });
});

// 🔹 Funcionalidad de la ventana lateral
function openSideWindow(option) {
    var sideWindow = document.getElementById('side-window');
    var sideContent = document.getElementById('side-content');

    if (option === 'quien') {
        sideContent.innerHTML = `
            <h2>¿Quién es ZetaH?</h2>
            <img src="./recursos/harol.png" alt="ZetaH" class="zetah-img">
            <p>¡Hey! Soy Harol Joshue, pero en el mundo artístico me conocen como ZetaH. Soy de Ibarra, Ecuador.</p>
            <p>Apasionado por la música y el mundo visual: cine, fotografía y edición. Aprendiz de manera autónoma, siempre explorando nuevas ideas.</p>
            <p>Si te interesa lo que hago, quédate por aquí y contáctame. 🔥</p>
        `;
    } else if (option === 'contacto') {
        sideContent.innerHTML = `
            <h2>Contacto</h2>
            <p>Para más información:</p>
            <p><strong>📞 Teléfono:</strong> <a href="tel:+593992323613">+593 99 232 3613</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:harolzambrano2005@gmail.com">harolzambrano2005@gmail.com</a></p>
            <p><strong>💬 WhatsApp:</strong> <a href="https://w.app/l469ab" target="_blank">Haz clic aquí</a></p>
            <img src="./recursos/codigo.jpg" alt="Código QR" class="zetah-img">
        `;
    } else if (option === 'redes') {
        sideContent.innerHTML = `
            <h2>Redes Sociales</h2>
            <img src="./recursos/ico.png" alt="ZetaH" class="zetah-img">
            <p>¡Sígueme y mira mi contenido!</p>
            <a href="https://www.instagram.com/haroljoshue/" target="_blank">📸 Instagram</a>
            <a href="https://www.facebook.com/Zambrano2005" target="_blank">📘 Facebook</a>
            <a href="https://w.app/l469ab" target="_blank">💬 WhatsApp</a>
        `;
    }

    sideWindow.style.right = "0"; // Mostrar la ventana lateral
}

function closeSideWindow() {
    var sideWindow = document.getElementById('side-window');
    sideWindow.style.right = "-100%"; // Ocultar completamente la ventana lateral
}