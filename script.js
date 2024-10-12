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

function resetForm() {
  document.getElementById("submissionForm").reset();
}

function validateInput() {
  let inputField = document.getElementById("name");
  let emailfield = document.getElementById("email");
  let inputValue = inputField.value.trim();
  let emailValue = emailfield.value.trim();

  if (inputValue === "") {
    inputField.classList.add("shake");

    setTimeout(function () {
      inputField.classList.remove("shake");
    }, 500);
  }
  if (emailValue === "") {
    emailfield.classList.add("shake");

    setTimeout(function () {
      emailfield.classList.remove("shake");
    }, 500);
  }
}
