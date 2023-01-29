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

   