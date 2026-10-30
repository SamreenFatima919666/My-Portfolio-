let menu = document.getElementById("menuToggle");
let nav = document.getElementById("navLinks");

menu.onclick = () => {
nav.classList.toggle("active");
};


const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {

        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {

        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Mobile Menu
let menu = document.getElementById("menuToggle");
let nav = document.getElementById("navLinks");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
});


// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let name = document.getElementById("cName").value.trim();
    let email = document.getElementById("cEmail").value.trim();
    let subject = document.getElementById("cSubject").value.trim() || "Portfolio Contact";
    let message = document.getElementById("cMessage").value.trim();

    let body = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;

    let mailtoLink = `mailto:samreeenfatima11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

});