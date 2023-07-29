document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    // Hide the loading container and show the main content
    document.querySelector(".loading-container").style.display = "none";
    document.body.style.overflow = "auto";
  }, 4000); // Set the time (in milliseconds) for the loading animation to be shown (e.g., 4000ms = 4 seconds)

  const quotes = document.querySelectorAll(".loading-quotes p");
  const loadingQuotes = document.querySelector(".loading-quotes");
  let currentIndex = 0;

  function showNextQuote() {
    if (currentIndex < quotes.length) {
      quotes[currentIndex].style.opacity = "1"; // Show the quote

      setTimeout(function () {
        quotes[currentIndex].style.opacity = "0"; // Fade out the quote
        setTimeout(function () {
          currentIndex++;
          showNextQuote(); // Show the next quote after a delay
        }, 500); // Delay before showing the next quote (e.g., 500ms = 0.5 seconds)
      }, 1500); // Time to display the quote before fading out (e.g., 1500ms = 1.5 seconds)
    } else {
      loadingQuotes.style.display = "none"; // Hide the loading quotes container after showing all quotes
    }
  }

  // Hide all quotes initially
  quotes.forEach(quote => {
    quote.style.opacity = "0";
  });

  showNextQuote(); // Start showing quotes
});










const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksDuplicate = navLinks.cloneNode(true); // Duplicate the nav-links

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');

  // GSAP animation for burger menu lines
  gsap.to('.line:nth-child(1)', {
    y: navLinks.classList.contains('nav-active') ? 6 : 0,
    rotate: navLinks.classList.contains('nav-active') ? 45 : 0,
  });

  gsap.to('.line:nth-child(2)', {
    opacity: navLinks.classList.contains('nav-active') ? 0 : 1,
  });

  gsap.to('.line:nth-child(3)', {
    y: navLinks.classList.contains('nav-active') ? -6 : 0,
    rotate: navLinks.classList.contains('nav-active') ? -45 : 0,
  });

  // Toggle the duplicated nav-links with the burger menu activation
  if (navLinks.classList.contains('nav-active')) {
    navLinksDuplicate.classList.add('duplicate');
    navLinksDuplicate.classList.remove('nav-active');
    document.body.appendChild(navLinksDuplicate);
  } else {
    navLinksDuplicate.remove();
  }
});

// Close the burger menu when a menu item is clicked
const navItems = document.querySelectorAll('.nav-links li a, .nav-links.duplicate li a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    navLinksDuplicate.remove();
    gsap.to('.line', { opacity: 1, y: 0, rotate: 0 });
  });
});




document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", scrollToSection);
    });
  });
  
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const yOffset = -60; // Adjust scrolling position to account for the fixed navigation bar
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  

  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll(".section");
  
  // Loop through each section to apply animations
  sections.forEach((section, index) => {
    // Animate the text elements in each section
    const textElements = section.querySelectorAll("h2, p");
    gsap.from(textElements, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 90%", // Start animation when the element is 90% inside the viewport
        end: "bottom 60%", // End animation when the element is 60% inside the viewport
        toggleActions: "play none none reverse", // Play the animation on entering the trigger area and reverse on exiting
      },
    });
  
    // Animate the logo text in the about section
    if (section.id === "about") {
      const logoText = section.querySelector("h1");
      gsap.from(logoText, {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Start animation when the element is 80% inside the viewport
          end: "bottom 60%", // End animation when the element is 60% inside the viewport
          toggleActions: "play none none reverse", // Play the animation on entering the trigger area and reverse on exiting
        },
      });
    }
  });

  
  
