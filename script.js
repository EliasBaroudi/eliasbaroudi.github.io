const buttons = document.querySelectorAll('.button:nth-child(-n+3)');
const kaliLogo = document.querySelector('#center-logo img');
const kaliContainer = document.getElementById('body');
const mail = document.getElementById('mail');

const handleLogoMouseMove = (e) => {
    const rect = kaliContainer.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    const movementX = x * 20; 
    const movementY = y * 20; 
    kaliLogo.style.transform = `translate(${movementX}px, ${movementY}px)`;
};

const handleButtonMouseMove = (e, button, initialRect) => {
    const x = (e.clientX - initialRect.left - initialRect.width / 2) / window.innerWidth;
    const y = (e.clientY - initialRect.top - initialRect.height / 2) / window.innerHeight;
    const movementX = x * 300; 
    const movementY = y * 300; 
    button.style.transform = `translate(${movementX}px, ${movementY}px) scale(1.5)`; 
};


buttons.forEach((button) => {
    let initialRect;

    button.addEventListener('mouseenter', (e) => {
        initialRect = button.getBoundingClientRect();
        button.addEventListener('mousemove', (e) => handleButtonMouseMove(e, button, initialRect));
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0) scale(1)'; 
        button.removeEventListener('mousemove', (e) => handleButtonMouseMove(e, button, initialRect));
    });
});

const copyEmailToClipboard = (e) => {
    const email = "ebaroudipro@gmail.com"; 
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

    notification.style.left = `${x + 10}px`;
    notification.style.top = `${y + 10}px`;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
        document.body.removeChild(notification);
    }, 1000);
};

kaliContainer.addEventListener('mousemove', handleLogoMouseMove);

mail.addEventListener('click', copyEmailToClipboard);