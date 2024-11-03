function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const typed = new Typed(".multiple-text", {
  strings: ["Engineer", "Machine Learning", "Data Science", "Python"],
  typeSpeed: 75,
  backSpeed: 75,
  backDelay: 600,
  loop: true,
});

// function resetForm() {
//   document.getElementById("submissionForm").reset();
// }

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

// CLEARING THE INPUTS AFTER SUBMISSION

// let btnclear = document.querySelector("button");
// let inputs = document.querySelector("input");

// btnclear.addEventListener("click", () => {
//   inputs.forEach((input) => (input.value = ""));
// });

// function clearValue() {
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("phone").value = "";
//   document.getElementById("message").value = "";
// }

// const clearForm = () => {
//   document.getElementById("submissionForm").reset();
// };

// TOAST CONTAINER

let x;
let toast = document.getElementById("toast");
function showToast() {
  clearTimeout(x);
  toast.style.trasnform = "translateX(0)";
  x = setTimeout(() => {
    toast.style.trasnform = "translateX(540px)";
  }, 3000);
}
