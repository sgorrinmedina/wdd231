const hamburgerButton = document.getElementById('ham-btn');
const navigation = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    // Alterna la clase 'open' en la navegación y el botón
    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

