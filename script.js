const nav = document.querySelector("header ul");
const navToggle = document.querySelector(".nav-toggle");

let cursor = document.querySelector(".cursor");
let cursorText = document.querySelector(".cursor-text");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
  } else {
    nav.setAttribute("data-visible", false);
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
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (!isTouchDevice()) {
  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document
    .querySelectorAll(
      ".hero-text, .nav-toggle, .email-btn a, .download-btn"
    )
    .forEach((p) => {
      p.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
      });
      p.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });

  document.querySelectorAll("input, textarea").forEach((p) => {
    p.addEventListener("mouseenter", () => {
      cursor.classList.add("hover-input");
      if (p.type == "submit") {
        cursorText.innerHTML = "go.";
      } else {
        cursorText.innerHTML = "enter.";
      }
    });
    p.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover-input");
      cursorText.innerHTML = "";
    });
  });

  document
    .querySelectorAll(
      "a:not(.header-logo, .header-logo-shrinked, .contact, .download-btn)"
    )
    .forEach((p) => {
      p.addEventListener("mouseenter", () => {
        cursor.classList.add("hover-link");
        cursorText.innerHTML = "visit.";
      });
      p.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover-link");
        cursorText.innerHTML = "";
      });
    });

  const nameSvg = document.querySelector(
    ".header-logo svg, .header-logo-shrinked svg"
  );

  nameSvg.addEventListener("mouseenter", () => {
    cursor.classList.add("hover-invert");
  });
  nameSvg.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover-invert");
  });

  document
    .querySelectorAll(".projects a.img, .projects .project")
    .forEach((p) => {
      p.addEventListener("mouseenter", () => {
        cursor.classList.add("hover-project");
        if (p.classList.contains("ongoing")) {
          cursorText.innerHTML = "Soon.";
        } else {
          cursorText.innerHTML = "view.";
        }
      });
      p.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover-project");
        cursorText.innerHTML = "";
      });
    });

  function animate() {
    cursor.style.cssText = "left: " + mouseX + "px; top: " + mouseY + "px;";
    cursorText.style.cssText = "left: " + mouseX + "px; top: " + mouseY + "px;";
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
} else {
  cursor.style.display = "none";
}

// Time
const timeZone = "Asia/Colombo";

const now = new Date().toLocaleTimeString("en-US", {
  timeZone,
  hour: "2-digit",
  minute: "numeric",
  hour12: true,
});

document.querySelector(".time p").innerHTML = `${now} GMT+5:30`;

// magnetic button effect
// from via: https://codepen.io/tdesero/pen/RmoxQg
var magnets = document.querySelectorAll(".magnetic");
var strength = 30;

magnets.forEach((magnet) => {
  magnet.addEventListener("mousemove", moveMagnet);
  magnet.addEventListener("mouseout", function (event) {
    TweenMax.to(event.currentTarget, 1, {
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
    });
  });
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget;
  var bounding = magnetButton.getBoundingClientRect();

  TweenMax.to(magnetButton, 1, {
    x:
      ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
      strength,
    y:
      ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
      strength,
    ease: Power4.easeOut,
  });
}
