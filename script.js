let headerLogo = document.querySelector(".header-logo");

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        headerLogo.classList.remove("header-logo");
        headerLogo.classList.add("header-logo-shrinked");
    } else {
        headerLogo.classList.remove("header-logo-shrinked");
        headerLogo.classList.add("header-logo");
    }
})