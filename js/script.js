// =========================================
// ACA THIRUVALLUR MINISTRIES WEBSITE
// script.js
// =========================================


// Smooth Scroll for Navigation Links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});




// Navbar Shadow While Scrolling

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";

    }

    else {

        header.style.boxShadow = "none";

    }

});




// Fade-in Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".hero, .verse, .founder").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});




// Button Hover Animation

document.querySelectorAll(".buttons a").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});




// Console Greeting

console.log("Welcome to ACA Thiruvallur Ministries Website");