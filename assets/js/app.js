// alert("iB Connect is loading...")

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menu-btn");

    menuBtn.addEventListener("click", () => {

        console.log("Mobile Menu");

    });


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

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();