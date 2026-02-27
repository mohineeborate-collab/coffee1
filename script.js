function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("form-message").innerText = 
        "Thank you! Your message has been sent.";
}