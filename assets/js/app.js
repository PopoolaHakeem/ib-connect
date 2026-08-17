// alert("iB Connect is loading...")

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // MOBILE MENU TOGGLE
    const menuBtn = document.getElementById("menu-btn");

    const mobileMenu = document.getElementById("mobile-menu");

    const menuIcon = document.getElementById("menu-icon");


    menuBtn.addEventListener("click", () => {

        const isOpen = mobileMenu.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuIcon.classList.toggle(
            "fa-bars",
            !isOpen
        );

        menuIcon.classList.toggle(
            "fa-xmark",
            isOpen
        );

    });


    // CTA BUTTONS 
    const findArtisanBtn = document.getElementById("cta-find-artisan");

    const becomePartnerBtn = document.getElementById("cta-become-partner");

    findArtisanBtn.addEventListener("click", (event) => {

        event.preventDefault();

        console.log("Find an Artisan clicked");

    });

    becomePartnerBtn.addEventListener("click", (event) => {

        event.preventDefault();

        console.log("Become a Partner clicked");

    });

});


// FOOTER YEAR 
const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();