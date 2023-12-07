//declaration of accessKey variable
const accessKey = "bVjV4L348CALnbz2uL3ZATn1_oO5-umZZ7aXQAq4NIY"

//declaration of HTML variables
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const returnEl = document.getElementById("return-button");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;
//function for Image Search
async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }
    //Mapping the results from Unsplash
    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    })
    //Show more pages
    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}
//function for Submit
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});
//function for the Search button
showMore.addEventListener("click", () => {
    searchImages();
});

document.addEventListener("DOMContentLoaded", function() {
    // ScrollReveal initialization
    ScrollReveal().reveal('.container', {
        delay: 200,
        distance: '20px',
        easing: 'ease-in-out',
        origin: 'bottom',
    });

    ScrollReveal().reveal('.search-result', {
        delay: 400,
        distance: '20px',
        easing: 'ease-in-out',
        origin: 'bottom',
    });

    // Add event listener to the return button
    document.getElementById("return-button").addEventListener("click", function() {
        // Hide the search results and show the search form
        document.querySelector(".search-results").style.display = "none";
        document.querySelector("form").style.display = "flex";
        document.getElementById("show-more-button").style.display = "none";
    });

    // Add event listener to the show more button
    document.getElementById("show-more-button").addEventListener("click", function() {
        // Implement your logic for "Show More" here
        // For now, let's just log a message
        console.log("Show More clicked!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // ... (Your existing code)

    // Add event listener to the return button
    returnButton.addEventListener("click", function () {
        // Hide the search results and show the search form
        document.querySelector(".search-results").style.display = "none";
        document.querySelector("form").style.display = "flex";
        document.getElementById("show-more-button").style.display = "none";
        // Hide the "Return" button
        this.style.display = "none";
    });

    // Add event listener to the show more button
    showMore.addEventListener("click", function () {
        // Implement your logic for "Show More" here
        // For now, let's just log a message
        console.log("Show More clicked!");
    });
});

returnE1.addEventListener("click", function (event) {
    // Implement your logic for "Show More" here
    // For now, let's just log a message
    window.location.href = "index.html";
});
 
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const resetButton = document.getElementById("reset-button");
    const returnButton = document.getElementById("return-button");
    const searchResults = document.querySelector(".search-results");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        // Add your search functionality here

        // Display the reset and return buttons
        resetButton.style.display = "inline-block";
        returnButton.style.display = "inline-block";
    });

    resetButton.addEventListener("click", function () {
        // Reset the search input and hide the reset and return buttons
        document.getElementById("search-input").value = "";
        resetButton.style.display = "none";
        returnButton.style.display = "none";

        // Remove existing search results
        while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
        }
    });

    returnButton.addEventListener("click", function () {
        // Add functionality to handle the "Return" button
        // For example, you can go back to the initial state or perform any desired action
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const resetButton = document.getElementById("reset-button");
    const returnButton = document.getElementById("return-button");
    const searchResults = document.querySelector(".search-results");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        // Add your search functionality here

        // Display the reset and return buttons
        resetButton.style.display = "inline-block";
        returnButton.style.display = "inline-block";
    });

    

    returnButton.addEventListener("click", function () {
        // Add functionality to handle the "Return" button
        // For example, you can go back to the initial state or perform any desired action
        window.location.href = 'index.html';
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Your existing code...

    const resetButton = document.getElementById("reset-button");
    const searchResults = document.querySelector(".search-results");

    resetButton.addEventListener("click", function () {
        // Reset the search input and hide the reset and return buttons
        document.getElementById("search-input").value = "";
        resetButton.style.display = "none";
        document.getElementById("return-button").style.display = "none";

        // Remove existing search results
        while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
        }

        // Reset the page counter
        page = 1;
    });

    // Your existing code...
});

document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.getElementById("reset-button");
    const searchResults = document.querySelector(".search-results");

    resetButton.addEventListener("click", function () {
        // Reset the search input and hide the reset and return buttons
        document.getElementById("search-input").value = "";
        resetButton.style.display = "none";
        document.getElementById("return-button").style.display = "none";

        // Remove existing search results
        while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
        }

        // Reset the page counter
        page = 1;
    });

    // ... (Your existing code)
});

// ... (Your existing code)

// Add an event listener to the reset button
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    // Redirect to the homepage (you can change 'index.html' to the actual homepage URL)
    window.location.href = 'index.html';
});

// ... (Your existing code)
