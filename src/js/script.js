// sticky scroll navigation
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 440);
});

// toggling for mobile navigation
document
  .querySelector(".header-burger-btn")
  .addEventListener("click", function () {
    const header = document.querySelector("header");
    header.classList.toggle("open-nav");
  });

// typing text with effect
const typed = new Typed(".auto-typed", {
  strings: ["We", "are", "creatives"],
  tpyedSpeed: 250,
  backSpeed: 200,
  loop: true,
});

// smooth scroll at the bottom of the page
document
  .querySelector(".hero-arrow-btn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
