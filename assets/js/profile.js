"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const requestBtn =
        document.getElementById("request-service-btn");

    const contactBtn =
        document.getElementById("contact-artisan-btn");

    const modal =
        document.getElementById("booking-modal");

    const closeBtn =
        document.getElementById("close-booking-modal");

    const bookingForm =
        document.getElementById("booking-form");


    function openModal() {

        modal.classList.add("open");

        modal.setAttribute("aria-hidden", "false");

    }


    function closeModal() {

        modal.classList.remove("open");

        modal.setAttribute("aria-hidden", "true");

    }


    requestBtn.addEventListener(
        "click",
        openModal
    );


    contactBtn.addEventListener(
        "click",
        () => {

            console.log("Contact artisan clicked");

        }
    );


    closeBtn.addEventListener(
        "click",
        closeModal
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {

                closeModal();

            }

        }
    );


    bookingForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            console.log(
                "Booking request submitted"
            );

            alert(
                "Your service request has been received!"
            );

            bookingForm.reset();

            closeModal();

        }
    );

});