// Sélection des éléments
const buttons = document.querySelectorAll('.button:nth-child(-n+3)');
const kaliLogo = document.querySelector('#center-logo img');
const kaliContainer = document.getElementById('body');
const mail = document.getElementById('mail');

// Fonction pour gérer le mouvement de la souris pour le logo
const handleLogoMouseMove = (e) => {
    const rect = kaliContainer.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    const movementX = x * 20; // Ajuster la sensibilité
    const movementY = y * 20; // Ajuster la sensibilité
    kaliLogo.style.transform = `translate(${movementX}px, ${movementY}px)`;
};

// Fonction pour gérer le mouvement de la souris pour les boutons
const handleButtonMouseMove = (e, button, initialRect) => {
    const x = (e.clientX - initialRect.left - initialRect.width / 2) / window.innerWidth;
    const y = (e.clientY - initialRect.top - initialRect.height / 2) / window.innerHeight;
    const movementX = x * 300; // Augmenter la sensibilité
    const movementY = y * 300; // Augmenter la sensibilité
    button.style.transform = `translate(${movementX}px, ${movementY}px) scale(1.5)`; // Ajouter la mise à l'échelle
};

// Ajout des écouteurs d'événements pour chaque bouton
buttons.forEach((button) => {
    let initialRect;

    button.addEventListener('mouseenter', (e) => {
        initialRect = button.getBoundingClientRect();
        button.addEventListener('mousemove', (e) => handleButtonMouseMove(e, button, initialRect));
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0) scale(1)'; // Réinitialiser la mise à l'échelle
        button.removeEventListener('mousemove', (e) => handleButtonMouseMove(e, button, initialRect));
    });
});

const copyEmailToClipboard = (e) => {
    const email = "ebaroudipro@gmail.com"; // Remplacez par l'adresse e-mail à copier
    navigator.clipboard.writeText(email).then(() => {
        showNotification(e.clientX, e.clientY, "Copied to clipboard !");
    }).catch(err => {
        console.error("Erreur lors de la copie de l'adresse e-mail : ", err);
    });
};


const showNotification = (x, y, message) => {
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Positionner la notification près du curseur
    notification.style.left = `${x + 10}px`;
    notification.style.top = `${y + 10}px`;
    notification.style.display = 'block';

    // Masquer la notification après 2 secondes
    setTimeout(() => {
        notification.style.display = 'none';
        document.body.removeChild(notification);
    }, 1000);
};

// Ajout de l'écouteur d'événement pour le mouvement de la souris sur le conteneur
kaliContainer.addEventListener('mousemove', handleLogoMouseMove);

// Ajout de l'écouteur d'événement pour l'icône "Icon3"
mail.addEventListener('click', copyEmailToClipboard);