function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Function to show/hide the scroll button based on scroll position
  window.onscroll = function() {
    var scrollBtn = document.querySelector('.scroll-up-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  };