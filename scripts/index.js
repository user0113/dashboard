//Function to check if an element is fully or partially outside viewport
function isElementInViewport(e) {
    const element = e.getBoundingClientRect();
    return (
      element.top >= 0 &&
      element.left >= 0 &&
      element.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      element.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Function to change visibility based placement in viewport
function handleVisibility() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (isElementInViewport(card)) {
        card.style.visibility = 'visible';
      } else {
        card.style.visibility = 'hidden';
      }
    });
}

//Event listener for scrolling or resizing the window
window.addEventListener('scroll', handleVisibility);
window.addEventListener('resize', handleVisibility);

//Initial check on page load
window.addEventListener('DOMContentLoaded', handleVisibility);