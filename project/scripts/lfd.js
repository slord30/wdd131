//////////// Function to check window width and remove the image //////////////
function checkWindowSize() {
    const image = document.getElementById('welcome');
    const screenWidth = window.innerWidth;

    if (screenWidth < 1030) { // Set your desired threshold here
        image.style.opacity = '0'; // Hide the image by making it transparent
        setTimeout(() => {
            image.style.display = 'none'; // Remove it from the layout after fade out
        }, 300); // Match with transition duration
    } else {
        image.style.display = 'block'; // Show the image
        image.style.opacity = '1'; // Reset opacity
    }
}

// Initial check on page load
checkWindowSize();

// Add event listener for window resize
window.addEventListener('resize', checkWindowSize);


////////////////ADJUST MARGINS/////////////////////
function adjustSectionMargins() {
    const sectionElements = document.getElementsByClassName('welcome'); // Note the plural
    const screenWidth = window.innerWidth;

    let marginValue; // Variable to hold the margin value

    if (screenWidth < 600) {
        marginValue = '2rem'; // Small screens
    } else if (screenWidth < 900) {
        marginValue = '4rem'; // Medium screens
    } else {
        marginValue = '8rem'; // Large screens
    }

    // Loop through each element and set the margin
    for (let i = 0; i < sectionElements.length; i++) {
        sectionElements[i].style.margin = marginValue;
    }
}

// Initial margin adjustment
adjustSectionMargins();

// Adjust margins on window resize
window.addEventListener('resize', adjustSectionMargins);


///////////// Generate Reviews ///////////////////

// const reviews = [
//     { id: 1, author: "Alice", content: "I feel so much healthier since I started this program!" },
//     { id: 2, author: "Bob", content: "The team is amazing and really cares about our progress." },
//     { id: 3, author: "Charlie", content: "I’ve never smiled so much! Thank you for the support." },
//     { id: 4, author: "Dana", content: "A wonderful experience! I highly recommend it." }
// ];

// const reviewsContainer = document.querySelector('.reviews-container');

// function displayReviews(reviews) {
//     reviews.forEach(review => {
//         const reviewElement = document.createElement('div');
//         reviewElement.className = 'review';
//         reviewElement.innerHTML = `<h3>${review.author}</h3><p>${review.content}</p>`;
//         reviewsContainer.appendChild(reviewElement);
//     });
// }

// displayReviews(reviews);

// Array of reviews
const reviews = [
    {
        starRating: 5,
        reviewText: "Absolutely love this place! The staff is incredibly friendly and professional.",
        reviewerName: "Jessica R."
    },
    {
        starRating: 4,
        reviewText: "The service here is outstanding! I always leave with a big smile!",
        reviewerName: "Mark T."
    },
    {
        starRating: 5,
        reviewText: "What a fantastic practice! They truly care about their patients.",
        reviewerName: "Sarah L."
    },
    {
        starRating: 5,
        reviewText: "This is the best dental experience I've ever had! Highly recommend!",
        reviewerName: "Kevin M."
    },
    {
        starRating: 5,
        reviewText: "Exceptional service and results! I can’t thank the team enough!",
        reviewerName: "Emily W."
    }
];

// Function to create and display reviews
function displayReviews(reviews) {
    const reviewsContainer = document.querySelector('.reviews-container');

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        // Create star rating element
        const stars = '⭐'.repeat(review.starRating);
        const starElement = document.createElement('p');
        starElement.textContent = stars;

        // Create review text element
        const textElement = document.createElement('p');
        textElement.textContent = review.reviewText;

        // Create reviewer name element
        const nameElement = document.createElement('p');
        nameElement.textContent = `— ${review.reviewerName}`;

        // Append elements to the review div
        reviewDiv.appendChild(starElement);
        reviewDiv.appendChild(textElement);
        reviewDiv.appendChild(nameElement);

        // Append the review to the reviews container
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Rotate through reviews
let currentIndex = 0;
function rotateReviews() {
    const allReviews = document.querySelectorAll('.review');
    allReviews.forEach((review, index) => {
        review.style.display = index === currentIndex ? 'block' : 'none'; // Show only current review
    });

    currentIndex = (currentIndex + 1) % allReviews.length; // Move to the next review
}

// Display the reviews
displayReviews(reviews);
rotateReviews(); // Show the first review
setInterval(rotateReviews, 3000); // Change review every 3 seconds