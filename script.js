document.querySelector(".letter").style.bottom = "-150px"; 

document.getElementById("open").addEventListener("click", function() {
    // Cacher le rabat et la couverture
    document.querySelector(".flap").style.display = "none"; 
    document.querySelector(".cover").style.display = "none"; 

    // Faire remonter la lettre
    document.querySelector(".letter").style.bottom = "40px"; 

    // Générer des cœurs de façon aléatoire pendant 5 secondes
    const interval = setInterval(createHeart, 200);

    // Arrêter la création après 5 secondes
    setTimeout(() => clearInterval(interval), 5000);
});

document.getElementById("reset").addEventListener("click", function() {
    // Réafficher le rabat et repositionner la lettre
    document.querySelector(".flap").style.display = "block"; 
    document.querySelector(".letter").style.bottom = "-150px"; 

    // Attendre avant d'afficher la couverture
    setTimeout(() => {
        document.querySelector(".cover").style.display = "block";
    }, 700); 

    // Supprimer tous les cœurs
    document.querySelectorAll(".heart").forEach(heart => heart.remove());
});

// Fonction pour créer un cœur qui sort de l'enveloppe aléatoirement
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Récupérer la position de l'enveloppe
    const envelope = document.querySelector(".envelope");
    const rect = envelope.getBoundingClientRect();

    // Générer une position aléatoire autour de l'ouverture de l'enveloppe
    const offsetX = Math.random() * 50 - 25; // Décalage horizontal aléatoire
    const offsetY = Math.random() * 10 - 5; // Décalage vertical léger

    heart.style.left = rect.left + rect.width / 2 + offsetX + "px";
    heart.style.top = rect.top + rect.height / 2 + offsetY + "px";

    // Taille et vitesse aléatoires
    const size = Math.random() * 15 + 10; // Taille entre 10px et 25px
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    const duration = Math.random() * 3 + 2; // Durée entre 2s et 5s
    heart.style.animation = `float ${duration}s linear forwards`;

    // Supprimer après l'animation
    setTimeout(() => heart.remove(), duration * 1000);
}
