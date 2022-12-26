window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 440);
});

document
  .querySelector(".header-burger-btn")
  .addEventListener("click", function () {
    const header = document.querySelector("header");
    header.classList.toggle("open-nav");
  });
