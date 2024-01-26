// Intersection Observer for showing hidden elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Fix class name from '#show' to 'show'
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// Select all elements with class 'hidden'
const hiddenElements = document.querySelectorAll(".hidden"); // Fix selector from '#hidden' to '.hidden'
hiddenElements.forEach((el) => observer.observe(el));

// Toggle button functionality
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu"); // Fix class name from '-dropdown-menu' to 'dropdown-menu'

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  // Toggle button icon class
  toggleBtnIcon.className = isOpen ? "fa-solid fa-bars" : "fa-solid fa-xmark";
};
