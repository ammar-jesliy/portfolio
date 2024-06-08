let headerLogo = document.querySelector(".header-logo");

// Indicator to show if the window can fit both .header-logo and .header-content
let canFit = true;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

if (
  document.querySelector(".hero-content").clientHeight >=
  window.innerHeight - document.querySelector(".header-logo").clientHeight - 120
) {
  headerLogo.classList.add("header-logo-shrinked");
  canFit = false;
}
window.addEventListener("resize", function () {
  if (
    document.querySelector(".hero-content").clientHeight >=
    window.innerHeight -
      document.querySelector(".header-logo").clientHeight -
      120
  ) {
    headerLogo.classList.add("header-logo-shrinked");
    canFit = false;
  } else {
    headerLogo.classList.remove("header-logo-shrinked");
    canFit = true;
  }
});

window.addEventListener("scroll", function () {
  if (window.innerWidth >= 780 && canFit) {
    if (window.scrollY > 10) {
      headerLogo.classList.add("header-logo-shrinked");
    } else {
      headerLogo.classList.remove("header-logo-shrinked");
    }
  }
});
