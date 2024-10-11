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

// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "vvyas.b@gmail.com",
//     Password: "#99VG9YPGv",
//     To: "vvyas.b@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "New Enquiry",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }
