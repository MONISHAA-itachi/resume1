// Toggle dark mode when button is clicked
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Simple contact form check
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  const inputs = form.querySelectorAll("input, textarea");
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Please fill in all the fields!");
      e.preventDefault();
      return;
    }
  }
  alert("Thanks for reaching out!");
});