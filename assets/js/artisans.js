"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const searchInput =
        document.getElementById("artisan-search-input");

    const categoryFilter =
        document.getElementById("artisan-category-filter");

    const searchButton =
        document.getElementById("artisan-search-btn");

    const artisanCards =
        document.querySelectorAll(".artisan-card");

    const artisanCount =
        document.getElementById("artisan-count");


    function filterArtisans() {

        const searchTerm =
            searchInput.value
            .toLowerCase()
            .trim();

        const category =
            categoryFilter.value;

        let visibleCount = 0;


        artisanCards.forEach((card) => {

            const searchData =
                card.dataset.search;

            const cardCategory =
                card.dataset.category;


            const matchesSearch =
                searchData.includes(searchTerm);

            const matchesCategory =
                category === "all" ||
                cardCategory === category;


            const shouldShow =
                matchesSearch &&
                matchesCategory;


            card.style.display =
                shouldShow ? "" : "none";


            if (shouldShow) {

                visibleCount++;

            }

        });


        artisanCount.textContent =
            `${visibleCount} professional${visibleCount === 1 ? "" : "s"}`;

    }


    searchButton.addEventListener(
        "click",
        filterArtisans
    );


    searchInput.addEventListener(
        "input",
        filterArtisans
    );


    categoryFilter.addEventListener(
        "change",
        filterArtisans
    );


    // PROFESSIONAL ARTISAN  COUNT
    filterArtisans();

    categoryFilter.addEventListener(
    "change",
    filterArtisans
);


// Set initial artisan count

filterArtisans();

});