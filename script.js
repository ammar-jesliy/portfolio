let headerLogo = document.querySelector(".header-logo");

const nav = document.querySelector('header ul');
const navToggle = document.querySelector('.nav-toggle');

let cursor = document.querySelector(".cursor");

// Indicator to show if the window can fit both .header-logo and .header-content
let canFit = true

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

if (document.querySelector('.hero-content').clientHeight >= (window.innerHeight - document.querySelector('.header-logo').clientHeight - 120)) {
    headerLogo.classList.add("header-logo-shrinked");
    canFit = false;
}
window.addEventListener('resize', function () {
    if (document.querySelector('.hero-content').clientHeight >= (window.innerHeight - document.querySelector('.header-logo').clientHeight - 120)) {
        headerLogo.classList.add("header-logo-shrinked");
        canFit = false;
    } else {
        headerLogo.classList.remove("header-logo-shrinked");
        canFit = true;
    }
})

window.addEventListener('scroll', function() {
    if (window.innerWidth >= 780 && canFit) {
        if (window.scrollY > 10) {
            headerLogo.classList.add("header-logo-shrinked");
        } else {
            headerLogo.classList.remove("header-logo-shrinked");
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


// Custom cursor smooth animation
let mouseX;
let mouseY;

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

if (!isTouchDevice()) {
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.querySelectorAll('p, h1, h2, h3, .hero-text').forEach(p => {
        p.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        p.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    document.querySelectorAll('input, textarea').forEach(p => {
        p.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-input');
            if (p.type == "submit") {
                cursor.innerHTML = "go.";
            } else {
                cursor.innerHTML = "enter."
            }
        });
        p.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-input');
            cursor.innerHTML = "";
        });
    });

    document.querySelectorAll('a').forEach(p => {
        p.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-link');
            cursor.innerHTML = "visit.";
        });
        p.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-link');
            cursor.innerHTML = "";
        });
    });

    const nameSvg = document.querySelector('.header-logo svg');

    nameSvg.addEventListener('mouseenter', () => {
        cursor.classList.add('hover-invert');
    });
    nameSvg.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover-invert');
    });

    function animate() {
        cursor.style.cssText = "left: " + mouseX + "px; top: " + mouseY + "px;";
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
} else {
    cursor.style.display = "none";
}