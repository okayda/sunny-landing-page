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
