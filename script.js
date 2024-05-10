let headerLogo = document.querySelector(".header-logo");

const nav = document.querySelector('header ul');
const navToggle = document.querySelector('.nav-toggle');

window.addEventListener('scroll', function() {
    if (window.innerWidth >= 780) {
        if (window.scrollY > 10) {
            headerLogo.classList.remove("header-logo");
            headerLogo.classList.add("header-logo-shrinked");
        } else {
            headerLogo.classList.remove("header-logo-shrinked");
            headerLogo.classList.add("header-logo");
        }
    }
})


navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === "false") {
        nav.setAttribute('data-visible', true);
    } else {
        nav.setAttribute('data-visible', false);
    }
});


function toggleMenu() {
    let menuButton = document.querySelector(".nav-toggle");
    if (menuButton.innerHTML === "Menu") {
      menuButton.innerHTML = "&#10006;"; 
    } else {
      menuButton.innerHTML = "Menu";
    }
}