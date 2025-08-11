document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('list');
    const nav = document.getElementById('nav-wrapper');
    const overlay = document.getElementById('overlay');

    window.openMenu = function() {
        nav.classList.add('active');
        overlay.classList.add('active');
    };

    function closeMenu() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Click on overlay closes menu
    overlay.addEventListener('click', closeMenu);

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) { // scroll distance before color change
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});