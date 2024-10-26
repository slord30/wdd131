document.getElementById('toggle-button').addEventListener('click', function() {
    const moreContent = document.getElementById('more-content');
    const button = this;

    // Toggle visibility of the additional content
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'inline'; // Show the content
        button.textContent = 'Read Less'; // Change button text
    } else {
        moreContent.style.display = 'none'; // Hide the content
        button.textContent = 'Continue Reading'; // Change button text back
    }
});