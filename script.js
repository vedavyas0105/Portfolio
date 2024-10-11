function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const typed = new Typed(".multiple-text", {
  strings: ["Engineer", "ML Enthusiast", "Developer"],
  typeSpeed: 75,
  backSpeed: 75,
  backDelay: 600,
  loop: true,
});

function sendEmail() {
  document.submission__form.submit();
  document.submission__form.reset();
}
