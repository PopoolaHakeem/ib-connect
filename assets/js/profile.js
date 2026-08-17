"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       GET ARTISAN ID FROM URL
    ========================================== */

    const params = new URLSearchParams(
        window.location.search
    );

    const artisanId = params.get("id");


    /* =========================================
       FIND ARTISAN
    ========================================== */

    const artisan = artisans.find(
        (item) => item.id === artisanId
    );


    /* =========================================
       PROFILE ELEMENTS
    ========================================== */

    const businessName =
        document.getElementById(
            "profile-business-name"
        );

    const category =
        document.getElementById(
            "profile-category"
        );

    const verification =
        document.getElementById(
            "profile-verification"
        );

    const rating =
        document.getElementById(
            "profile-rating"
        );

    const reviews =
        document.getElementById(
            "profile-reviews"
        );

    const location =
        document.getElementById(
            "profile-location"
        );

    const phone =
        document.getElementById(
            "profile-phone"
        );

    const description =
        document.getElementById(
            "profile-description"
        );

    const services =
        document.getElementById(
            "profile-services"
        );

    const price =
        document.getElementById(
            "profile-price"
        );

    const bookingRating =
        document.getElementById(
            "profile-booking-rating"
        );

    const bookingReviews =
        document.getElementById(
            "profile-booking-reviews"
        );

    const modalBusinessName =
        document.getElementById(
            "profile-modal-business-name"
        );


    /* =========================================
       CHECK ARTISAN
    ========================================== */

    if (!artisan) {

        businessName.textContent =
            "Artisan Not Found";

        description.textContent =
            "The artisan profile you are looking for does not exist.";

        return;

    }


    /* =========================================
       POPULATE PROFILE
    ========================================== */

    businessName.textContent =
        artisan.businessName;

    category.textContent =
        artisan.category;

    rating.textContent =
        artisan.rating;

    reviews.textContent =
        artisan.reviews;

    bookingRating.textContent =
        artisan.rating;

    bookingReviews.textContent =
        artisan.reviews;

    location.querySelector("span").textContent =
        artisan.location;

    phone.querySelector("span").textContent =
        artisan.phone;

    description.textContent =
        artisan.description;

    price.textContent =
        `₦${artisan.price.toLocaleString()}`;

    modalBusinessName.textContent =
        artisan.businessName;


    /* =========================================
       VERIFICATION
    ========================================== */

    if (artisan.verified) {

        verification.style.display =
            "inline-flex";

    } else {

        verification.style.display =
            "none";

    }


    /* =========================================
       SERVICES
    ========================================== */

    services.innerHTML = "";

    artisan.services.forEach(
        (service) => {

            const serviceTag =
                document.createElement("span");

            serviceTag.textContent =
                service;

            services.appendChild(
                serviceTag
            );

        }
    );


    /* =========================================
       BOOKING MODAL
    ========================================== */

    const requestBtn =
        document.getElementById(
            "request-service-btn"
        );

    const contactBtn =
        document.getElementById(
            "contact-artisan-btn"
        );

    const modal =
        document.getElementById(
            "booking-modal"
        );

    const closeBtn =
        document.getElementById(
            "close-booking-modal"
        );

    const bookingForm =
        document.getElementById(
            "booking-form"
        );


    function openModal() {

        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    function closeModal() {

        modal.classList.remove("open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    requestBtn.addEventListener(
        "click",
        openModal
    );


    contactBtn.addEventListener(
        "click",
        () => {

            window.location.href =
                `tel:${artisan.phone}`;

        }
    );


    closeBtn.addEventListener(
        "click",
        closeModal
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );


    bookingForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            alert(
                `Your request for ${artisan.businessName} has been received!`
            );

            bookingForm.reset();

            closeModal();

        }
    );

});