// =========================================
// FIREBASE CONFIGURATION
// =========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyDhTM6Ui1ap19uWlf0bs9MkHaNuYUZh-HY",

    authDomain: "aca-thiruvallur-ministries.firebaseapp.com",

    projectId: "aca-thiruvallur-ministries",

    storageBucket: "aca-thiruvallur-ministries.firebasestorage.app",

    messagingSenderId: "984087014374",

    appId: "1:984087014374:web:88d5ffbe4d65cac32b0427"

};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// =========================================
// ACA THIRUVALLUR MINISTRIES WEBSITE
// script.js
// =========================================



// ===============================
// Smooth Scroll Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});





// ===============================
// Navbar Shadow On Scroll
// ===============================

const header = document.querySelector("header");


if(header){

window.addEventListener("scroll",()=>{


    if(window.scrollY > 40){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.25)";

    }

    else{

        header.style.boxShadow="none";

    }


});


}





// ===============================
// Mobile Hamburger Menu
// ===============================


const menuToggle =
document.querySelector(".menu-toggle");


const navLinks =
document.querySelector(".nav-links");



if(menuToggle && navLinks){


menuToggle.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});



}





// ===============================
// Close Menu After Clicking Link
// ===============================


document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


    if(navLinks){

        navLinks.classList.remove("active");

    }


});


});






// ===============================
// Fade In Animation
// ===============================


const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},
{

threshold:.2

});




document
.querySelectorAll(
".hero, .verse, .founder, .gallery-card, .ministry-card"
)
.forEach(section=>{


section.classList.add("hidden");

observer.observe(section);


});







// ===============================
// Button Hover Animation
// ===============================


document.querySelectorAll(".buttons a")
.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{

button.style.transform =
"translateY(-3px)";

});


button.addEventListener(
"mouseleave",
()=>{

button.style.transform =
"translateY(0px)";

});


});





// ===============================
// Console Message
// ===============================


console.log(
"Welcome to ACA Thiruvallur Ministries Website"
);