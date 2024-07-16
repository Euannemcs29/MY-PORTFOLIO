// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all the sections
const sections = document.querySelectorAll('.section');

// Add a click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the target section ID from the link's href
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Hide all sections
    sections.forEach((section) => {
      section.classList.remove('active');
    });

    // Show the target section
    targetSection.classList.add('active');

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Get the contact form and add a submit event listener
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can add your own logic here to handle the form submission
  console.log('Form submitted:', { name, email, message });

  // Reset the form
  form.reset();
});

// JavaScript
const instagramModal = document.getElementById("instagramModal");
const instagramLink = document.querySelector(".social-link.instagram");
const closeButton = document.getElementsByClassName("close-button")[0];

instagramLink.addEventListener("click", () => {
  instagramModal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  instagramModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == instagramModal) {
    instagramModal.style.display = "none";
  }
});