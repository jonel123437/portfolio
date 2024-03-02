document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.querySelector('.back-to-top');

    // Function to handle scroll event
    function handleScroll() {
        // If the user has scrolled more than 300 pixels from the top, show the button; otherwise, hide it
        if (window.scrollY > 500) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add click event listener for back-to-top button
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#header').scrollIntoView({ behavior: 'smooth' });
    });

    // Hide the back-to-top button initially
    backToTopBtn.style.display = "none";
});