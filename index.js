// ========== MOBILE MENU ==========
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const isVisible = nav.style.display === "flex";

  if (isVisible) {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
  }
}

// ========== SMOOTH SCROLL TO SERVICES ==========
function scrollToSection() {
  document
    .getElementById("services")
    .scrollIntoView({ behavior: "smooth" });
}

// ========== PORTFOLIO FILTER ==========
function filterProjects(type) {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    if (type === "all") {
      project.style.display = "block";
    } else {
      project.style.display = project.classList.contains(type)
        ? "block"
        : "none";
    }
  });
}

// ========== CONTACT FORM VALIDATION ==========
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
      formMessage.textContent = "All fields are required.";
      formMessage.style.color = "tomato";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = "Please enter a valid email.";
      formMessage.style.color = "tomato";
      return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "lightgreen";
    this.reset();
  });

// ========== THEME TOGGLE (DARK / LIGHT) ==========
const body = document.body;
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-theme");
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "☀️"; // default dark, show sun to switch to light
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const isLight = body.classList.contains("light-theme");

  themeToggle.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ========== REVEAL ON SCROLL ==========
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((el) => observer.observe(el));
