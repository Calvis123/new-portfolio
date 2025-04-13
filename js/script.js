document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    
    navToggler.addEventListener('click', function() {
        aside.classList.toggle('open');
        navToggler.classList.toggle('open');
    });

    // Typed.js Initialization
    if (document.querySelector('.typing')) {
        var typed = new Typed(".typing", {
            strings: ["Web Designer", "Web Developer", "Graphic Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

});