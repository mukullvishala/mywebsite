function openGmail() {
    window.location.href = "mailto:mukulvishala@gmail.com";
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter-form");
    const popup = document.getElementById("thank-you-popup");
    const closeButton = document.getElementById("close-popup");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        popup.style.display = "block"; // Show the popup
    });

    // Add an event listener to the close button to hide the popup when clicked
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
