window.addEventListener("scroll", function () {
  const header = document.querySelector("body");
  header.classList.toggle("sticky", window.scrollY > 0);
});
