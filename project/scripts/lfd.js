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
    const sectionElement = document.getElementsByClassName('welcome');
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        sectionElement.style.margin = '2rem'; // Small screens
    } else if (screenWidth < 900) {
        sectionElement.style.margin = '4rem'; // Medium screens
    } else {
        sectionElement.style.margin = '8rem'; // Large screens
    }
}
// Initial margin adjustment
adjustSectionMargins();
// Adjust margins on window resize
window.addEventListener('resize', adjustSectionMargins);


///////////// Generate Reviews ///////////////////
const reviews = [
    {
        name: "Alice Johnson",
        review: "Fantastic product! Highly recommend it to everyone.",
        rating: 5
    },
    {
        name: "Bob Smith",
        review: "Good quality, but it took a while to arrive.",
        rating: 4
    },
    {
        name: "Charlie Brown",
        review: "Not what I expected. The quality could be better.",
        rating: 2
    }
];

function generateReviews() {
    const container = document.getElementById("reviews");
    container.innerHTML = ''; // Clear existing reviews

    reviews.forEach(({ name, review, rating }) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        const title = document.createElement('h3');
        title.textContent = name;

        const content = document.createElement('p');
        content.textContent = review;

        const starRating = document.createElement('p');
        starRating.textContent = 'Rating: ' + '⭐'.repeat(rating) + '☆'.repeat(5 - rating);

        reviewDiv.appendChild(title);
        reviewDiv.appendChild(content);
        reviewDiv.appendChild(starRating);
        container.appendChild(reviewDiv);
    });
}

// Call the function to generate reviews
generateReviews();
