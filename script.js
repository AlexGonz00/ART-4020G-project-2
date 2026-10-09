
// pick out navbar, insert/remove 'navbar-sticky' class based on scroll level
function userScroll() {
  const navbar = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      //navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-sticky');
    } else {
      //navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

// Event listener for scroll func
document.addEventListener('DOMContentLoaded', userScroll);