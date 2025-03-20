document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none"
    }, 500)
  
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
    const closeMenu = document.querySelector(".close-menu")
  
    if (mobileMenuToggle && mobileMenu && closeMenu) {
      mobileMenuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("active")
        document.body.style.overflow = "hidden"
      })
  
      closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        document.body.style.overflow = ""
      })
    }
  
    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top")
  
    if (backToTopButton) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add("show")
        } else {
          backToTopButton.classList.remove("show")
        }
      })
  
      backToTopButton.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
    }
  
    // Image Gallery Lightbox
    const galleryItems = document.querySelectorAll(".gallery-item img")
  
    if (galleryItems.length > 0) {
      galleryItems.forEach((item) => {
        item.addEventListener("click", function () {
          const lightbox = document.createElement("div")
          lightbox.className = "lightbox"
          document.body.appendChild(lightbox)
  
          const lightboxImg = document.createElement("img")
          lightboxImg.src = this.src
          lightbox.appendChild(lightboxImg)
  
          const closeBtn = document.createElement("span")
          closeBtn.className = "lightbox-close"
          closeBtn.innerHTML = "&times;"
          lightbox.appendChild(closeBtn)
  
          closeBtn.addEventListener("click", () => {
            document.body.removeChild(lightbox)
          })
  
          lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
              document.body.removeChild(lightbox)
            }
          })
        })
      })
    }
  
    // Comment Form Handling
    const commentForm = document.querySelector(".comment-form form")
  
    if (commentForm) {
      commentForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simple form validation
        const name = document.getElementById("comment-name").value
        const email = document.getElementById("comment-email").value
        const comment = document.getElementById("comment-text").value
  
        if (!name || !email || !comment) {
          alert("Please fill in all required fields.")
          return
        }
  
        // Here you would typically send the data to a server
        // For demo purposes, we'll just show a success message
        alert("Thank you for your comment! It will appear after moderation.")
  
        // Reset the form
        commentForm.reset()
      })
    }
  
    // Calendar Navigation
    const calendarPrev = document.querySelector(".calendar-nav.prev")
    const calendarNext = document.querySelector(".calendar-nav.next")
    const calendarMonth = document.querySelector(".calendar-header h4")
  
    if (calendarPrev && calendarNext && calendarMonth) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      let currentMonthIndex = months.indexOf("March")
      let currentYear = 2025
  
      calendarPrev.addEventListener("click", () => {
        currentMonthIndex--
        if (currentMonthIndex < 0) {
          currentMonthIndex = 11
          currentYear--
        }
        calendarMonth.textContent = `${months[currentMonthIndex]} ${currentYear}`
      })
  
      calendarNext.addEventListener("click", () => {
        currentMonthIndex++
        if (currentMonthIndex > 11) {
          currentMonthIndex = 0
          currentYear++
        }
        calendarMonth.textContent = `${months[currentMonthIndex]} ${currentYear}`
      })
    }
  
    // Set current year in footer
    const currentYearElement = document.getElementById("current-year")
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear()
    }
  
    // Animate elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".blog-content h2, .blog-content .image-gallery, .blog-content blockquote, .highlight-box",
      )
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.classList.add("animated")
        }
      })
    }
  
    window.addEventListener("scroll", animateOnScroll)
    animateOnScroll() // Run once on page load
  })
  
  