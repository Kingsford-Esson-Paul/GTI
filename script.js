// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const sidemenu = document.getElementById('sidemenu');

hamburger.addEventListener('click', () => {
    sidemenu.classList.toggle('active'); /* Toggles visibility on click */
});
