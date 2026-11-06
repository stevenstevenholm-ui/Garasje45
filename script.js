const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Takk! Dette var en testmelding. Skjemaet sender ikke data.";
  contactForm.reset();
});
