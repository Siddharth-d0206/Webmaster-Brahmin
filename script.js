document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click', () => {
        const currentDisplay = window.getComputedStyle(navLinks).display;
        
        if (currentDisplay === 'none') {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
});
