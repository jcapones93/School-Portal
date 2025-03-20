// Contact Page Specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Contact cards animation on scroll
    const contactCards = document.querySelectorAll(".contact-card")
  
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.1 },
    )
  
    contactCards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      card.style.transitionDelay = `${index * 0.1}s`
      contactObserver.observe(card)
    })
  
    // Contact form submission
    const contactForm = document.getElementById("contact-form")
    const formSuccess = document.getElementById("form-success")
    const sendAnother = document.getElementById("send-another")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // Simulate form submission
        contactForm.style.display = "none"
        formSuccess.style.display = "block"
      })
    }
  
    if (sendAnother) {
      sendAnother.addEventListener("click", () => {
        contactForm.reset()
        formSuccess.style.display = "none"
        contactForm.style.display = "block"
      })
    }
  
    // Direction tabs
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabPanes = document.querySelectorAll(".tab-pane")
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons and panes
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabPanes.forEach((pane) => pane.classList.remove("active"))
  
        // Add active class to clicked button and corresponding pane
        this.classList.add("active")
        document.getElementById(this.dataset.tab).classList.add("active")
      })
    })
  
    // Directory search
    const directorySearchInput = document.getElementById("directory-search-input")
    const searchBtn = document.getElementById("search-btn")
    const directoryCards = document.querySelectorAll(".directory-card")
  
    function searchDirectory() {
      const searchValue = directorySearchInput.value.toLowerCase()
  
      directoryCards.forEach((card) => {
        const department = card.dataset.department.toLowerCase()
        const contacts = card.querySelectorAll(".contact-name, .contact-title")
        let found = false
  
        if (department.includes(searchValue)) {
          found = true
        }
  
        contacts.forEach((contact) => {
          if (contact.textContent.toLowerCase().includes(searchValue)) {
            found = true
          }
        })
  
        if (found || searchValue === "") {
          card.style.display = ""
        } else {
          card.style.display = "none"
        }
      })
    }
  
    if (searchBtn) {
      searchBtn.addEventListener("click", searchDirectory)
    }
  
    if (directorySearchInput) {
      directorySearchInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          searchDirectory()
        }
      })
    }
  
    // Directory cards animation on scroll
    const directoryCardsAnim = document.querySelectorAll(".directory-card")
  
    const directoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.1 },
    )
  
    directoryCardsAnim.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      card.style.transitionDelay = `${index * 0.1}s`
      directoryObserver.observe(card)
    })
  
    // Social cards animation on scroll
    const socialCards = document.querySelectorAll(".social-card")
  
    const socialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.1 },
    )
  
    socialCards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      card.style.transitionDelay = `${index * 0.1}s`
      socialObserver.observe(card)
    })
  
    // FAQ accordion
    const faqItems = document.querySelectorAll(".faq-item")
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
  
      question.addEventListener("click", () => {
        // Toggle active class on clicked item
        item.classList.toggle("active")
  
        // Close other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
  
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerHeight = document.getElementById("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll(".btn")
  
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const x = e.clientX - e.target.getBoundingClientRect().left
        const y = e.clientY - e.target.getBoundingClientRect().top
  
        const ripple = document.createElement("span")
        ripple.classList.add("ripple-effect")
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
  
        this.appendChild(ripple)
  
        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  
    // Add focus and blur event listeners for form fields
    const formInputs = document.querySelectorAll(".contact-form input, .contact-form textarea, .contact-form select")
  
    formInputs.forEach((input) => {
      // Add subtle animation on focus
      input.addEventListener("focus", function () {
        this.parentElement.classList.add("focused")
      })
  
      // Remove animation on blur
      input.addEventListener("blur", function () {
        this.parentElement.classList.remove("focused")
      })
    })
  })
  
  // Add this CSS to the head for the ripple effect
  document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style")
    style.textContent = `
          .ripple-effect {
              position: absolute;
              background: rgba(255, 255, 255, 0.7);
              border-radius: 50%;
              pointer-events: none;
              width: 100px;
              height: 100px;
              transform: translate(-50%, -50%) scale(0);
              animation: ripple 0.6s linear;
          }
          
          @keyframes ripple {
              to {
                  transform: translate(-50%, -50%) scale(4);
                  opacity: 0;
              }
          }
          
          .btn {
              position: relative;
              overflow: hidden;
          }
          
          .form-group.focused label {
              color: var(--primary-color);
          }
      `
    document.head.appendChild(style)
  })
  
  