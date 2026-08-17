"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const artisanGrid =
        document.getElementById("artisan-grid");

    const searchInput =
        document.getElementById(
            "artisan-search-input"
        );

    const categoryFilter =
        document.getElementById(
            "artisan-category-filter"
        );

    const searchButton =
        document.getElementById(
            "artisan-search-btn"
        );

    const artisanCount =
        document.getElementById("artisan-count");


    /* =========================================
       CREATE ARTISAN CARD
    ========================================== */

    function createArtisanCard(artisan) {

        const card =
            document.createElement("article");

        card.className =
            "artisan-card";

        card.dataset.artisanId =
            artisan.id;

        card.dataset.category =
            artisan.category.toLowerCase();

        card.dataset.search = `
            ${artisan.businessName}
            ${artisan.category}
            ${artisan.location}
        `.toLowerCase();


        card.innerHTML = `

            <div class="artisan-image">

                <div class="artisan-placeholder">

                    <i class="fa-solid fa-user"></i>

                </div>

                ${
                    artisan.verified
                        ? `
                            <span class="verified-badge">

                                <i class="fa-solid fa-circle-check"></i>

                                Verified

                            </span>
                          `
                        : ""
                }

            </div>


            <div class="artisan-content">

                <span class="artisan-category">

                    ${artisan.category}

                </span>


                <h3>

                    ${artisan.businessName}

                </h3>


                <div class="artisan-rating">

                    <i class="fa-solid fa-star"></i>

                    <strong>
                        ${artisan.rating}
                    </strong>

                    <span>
                        (${artisan.reviews} reviews)
                    </span>

                </div>


                <p class="artisan-location">

                    <i class="fa-solid fa-location-dot"></i>

                    ${artisan.location}

                </p>


                <div class="artisan-footer">

                    <span>

                        From

                        <strong>
                            ₦${artisan.price.toLocaleString()}
                        </strong>

                    </span>


                    <a
                        href="artisan-profile.html?id=${artisan.id}"
                        class="artisan-link">

                        View Profile

                    </a>

                </div>

            </div>

        `;

        return card;

    }


    /* =========================================
       RENDER ARTISANS
    ========================================== */

    function renderArtisans(list) {

        artisanGrid.innerHTML = "";

        list.forEach((artisan) => {

            const card =
                createArtisanCard(artisan);

            artisanGrid.appendChild(card);

        });

        updateCount(list.length);

    }


    /* =========================================
       UPDATE COUNT
    ========================================== */

    function updateCount(count) {

        artisanCount.textContent =
            `${count} professional${count === 1 ? "" : "s"}`;

    }


    /* =========================================
       FILTER ARTISANS
    ========================================== */

    function filterArtisans() {

        const searchTerm =
            searchInput.value
                .toLowerCase()
                .trim();

        const selectedCategory =
            categoryFilter.value
                .toLowerCase();


        const filteredArtisans =
            artisans.filter((artisan) => {

                const searchableText = `
                    ${artisan.businessName}
                    ${artisan.category}
                    ${artisan.location}
                `.toLowerCase();


                const matchesSearch =
                    searchableText.includes(
                        searchTerm
                    );


                const matchesCategory =
                    selectedCategory === "all" ||
                    artisan.category.toLowerCase() ===
                    selectedCategory;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            });


        renderArtisans(
            filteredArtisans
        );

    }


    /* =========================================
       EVENTS
    ========================================== */

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


    /* =========================================
       INITIAL RENDER
    ========================================== */

    renderArtisans(artisans);

});