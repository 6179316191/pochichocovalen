const messages = [
    "amor, te equivocaste de botón...",
    "seguro??",
    "seguro, seguro???",
    "¿por qué no tocás el otro botón?",
    "los perritos buenos hacen caso",
    "ah. míralo.",
    "me voy a poner tiste, eso querés",
    "me voy a poner muy, muy tiste...",
    "sabés qué Ya no quiero",
    "mentira decime que sí"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleAbrirClick() {
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleAbrirClick() {
    window.location.href = "uno_page.html";
}

function createHeart() {
    const heart = document.createElement("img");
    heart.src = "heart.png"; // Asegurate de que la imagen esté en la misma carpeta
    heart.classList.add("heart");
    document.getElementById("heart-container").appendChild(heart);

    // Posición aleatoria
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.width = Math.random() * 40 + 20 + "px"; // Tamaño entre 20px y 60px
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duración entre 3 y 5s

    // Eliminar después de la animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generar corazones cada 500ms
setInterval(createHeart, 500);

document.querySelector(".no-button").addEventListener("click", function() {
    this.classList.add("shaking");
    setTimeout(() => {
        this.classList.remove("shaking");
    }, 300); // Elimina la clase después de 300ms para repetir el efecto en cada clic
});

// Detectar cuando el elemento entra en el viewport
const textoDos = document.querySelector('.texto-dos');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Activa el fade-in cuando se ve
      observer.unobserve(entry.target); // Detiene la observación
    }
  });
}, { threshold: 0.5 }); // Se activa cuando el 50% del elemento es visible

observer.observe(textoDos);

