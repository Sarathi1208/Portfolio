/* ==========================================
   PORTFOLIO JAVASCRIPT - PART 3A
   Mobile Menu + Smooth Scroll + Active Nav
========================================== */

// Elements
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

/* ==========================
   MOBILE MENU
========================== */

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

/* ==========================
   CLOSE MENU AFTER CLICK
========================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

/* ==========================
   SMOOTH SCROLL
========================== */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            e.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });

            }

        }

    });

});

/* ==========================
   ACTIVE NAV LINK
========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

/* ==========================================
   PORTFOLIO JAVASCRIPT - PART 3B
   Scroll To Top + Reveal + Header Scroll
========================================== */

/* ==========================
   ELEMENTS
========================== */

const header = document.querySelector(".header");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const revealElements = document.querySelectorAll(
    ".section-title, .skill-card, .project-card, .service-card, .education-card, .timeline-item, .contact-info, .contact-form"
);

/* ==========================
   SCROLL EVENTS
========================== */

window.addEventListener("scroll", () => {

    /* ---------- Header Background ---------- */

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(15,23,42,.75)";
        header.style.boxShadow = "none";

    }

    /* ---------- Scroll To Top Button ---------- */

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

    /* ---------- Reveal Animation ---------- */

    revealElements.forEach((element) => {

        const revealPoint = 120;
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

});

/* ==========================
   SCROLL TO TOP
========================== */

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================
   INITIAL REVEAL
========================== */

window.addEventListener("load", () => {

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {

            element.classList.add("active");

        }

    });

});

/* ==========================================
   PORTFOLIO JAVASCRIPT - PART 3C
   Typing Effect + Skill Animation + Extras
========================================== */

/* ==========================
   TYPING EFFECT
========================== */

const typingElement = document.querySelector(".hero-role");

const roles = [
    "UI/UX Designer",
    "Graphic Designer",
    "Front-End Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

/* ==========================
   SKILL BAR ANIMATION
========================== */

const progressBars =
document.querySelectorAll(".progress");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bar = entry.target;

            const width = bar.style.width;

            bar.style.width = "0";

            setTimeout(()=>{

                bar.style.width = width;

            },200);

        }

    });

},{
    threshold:0.5
});

progressBars.forEach(bar=>observer.observe(bar));

/* ==========================
   CURRENT YEAR
========================== */

const year = new Date().getFullYear();

const footerText =
document.querySelector(".footer-bottom p");

if(footerText){

    footerText.innerHTML =
    `© ${year} Partha Sarathi. All Rights Reserved.`;

}

/* ==========================
   PRELOADER (Optional)
========================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("%cPortfolio Developed by Partha Sarathi",
"color:#3B82F6;font-size:18px;font-weight:bold;");

console.log("Thanks for visiting 🚀");

/* ==========================
   END OF SCRIPT.JS
========================== */