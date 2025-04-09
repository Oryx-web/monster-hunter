document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
});

function navegacionFija() {
    const header = document.querySelector('.navbar');
    const content = document.querySelector('.content');

    if (!header || !content) return; // Ensure elements exist

    function updateNavbar() {
        if (content.getBoundingClientRect().bottom <= 0) {
            header.classList.remove('absolute');
            header.classList.add('fixed');
        } else {
            header.classList.add('absolute');
            header.classList.remove('fixed');
        }
    }

    document.addEventListener('scroll', updateNavbar);
    window.addEventListener('resize', updateNavbar); // Handle viewport changes
}