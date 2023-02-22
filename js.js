// Hamburger menu sulkeutuminen, kun linkkiä painetaan tai klikataan muualle

const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".collapse");
    const navLinks = document.querySelectorAll(".nav-link");

    navbarToggler.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navbarCollapse.classList.remove("show");
        });
    });

    document.addEventListener("click", function(e) {
        if (!e.target.closest(".navbar")) {
            navbarCollapse.classList.remove("show");
        }
    });

   // Navbarin tausta tummaksi kun scrollataan alaspäin

const header = document.querySelector('.navbar');

    window.onscroll = function() {
    var top = window.scrollY;
    if(top >=200) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}