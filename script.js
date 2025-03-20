// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 1500);

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Enrollment Section JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Program cards hover effect
    const programCards = document.querySelectorAll(".program-card")
  
    programCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const programIcon = this.querySelector(".program-icon i")
        programIcon.classList.add("fa-spin")
  
        // Add a slight delay before stopping the spin
        setTimeout(() => {
          programIcon.classList.remove("fa-spin")
        }, 1000)
      })
    })
  
    // Student type cards animation
    const studentTypes = document.querySelectorAll(".student-type")
  
    studentTypes.forEach((type, index) => {
      // Staggered animation on page load
      setTimeout(() => {
        type.style.opacity = "1"
        type.style.transform = "translateY(0)"
      }, 100 * index)
  
      // Add click effect
      type.addEventListener("click", function () {
        this.classList.add("clicked")
        setTimeout(() => {
          this.classList.remove("clicked")
        }, 300)
      })
    })
  
    // Benefits items animation
    const benefitItems = document.querySelectorAll(".benefit-item")
  
    benefitItems.forEach((item, index) => {
      // Staggered animation on page load
      setTimeout(() => {
        item.style.opacity = "1"
        item.style.transform = "translateX(0)"
      }, 100 * index)
    })
  
    // Requirements items animation
    const requirementItems = document.querySelectorAll(".requirement-item")
  
    requirementItems.forEach((item, index) => {
      // Staggered animation on page load
      setTimeout(() => {
        item.style.opacity = "1"
        item.style.transform = "translateY(0)"
      }, 100 * index)
    })
  
    // Enroll Now button effect
    const enrollBtn = document.querySelector(".enroll-now-btn")
  
    if (enrollBtn) {
      enrollBtn.addEventListener("mouseenter", function () {
        this.querySelector("i").classList.add("fa-beat")
      })
  
      enrollBtn.addEventListener("mouseleave", function () {
        this.querySelector("i").classList.remove("fa-beat")
      })
  
      enrollBtn.addEventListener("click", function (e) {
        e.preventDefault()
  
        // Create ripple effect
        const ripple = document.createElement("span")
        ripple.classList.add("btn-ripple")
        this.appendChild(ripple)
  
        const x = e.clientX - e.target.getBoundingClientRect().left
        const y = e.clientY - e.target.getBoundingClientRect().top
  
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
  
        setTimeout(() => {
          ripple.remove()
        }, 600)
  
        // Scroll to top of enrollment section
        document.querySelector(".enrollment-section").scrollIntoView({
          behavior: "smooth",
        })
      })
    }
  
    // Add CSS for initial animations
    const style = document.createElement("style")
    style.textContent = `
          .student-type, .benefit-item, .requirement-item {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.5s ease, transform 0.5s ease;
          }
          
          .benefit-item {
              transform: translateX(-20px);
          }
          
          .student-type.clicked {
              animation: pulse 0.3s ease;
          }
          
          @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
          }
          
          .btn-ripple {
              position: absolute;
              background: rgba(255, 255, 255, 0.3);
              border-radius: 50%;
              transform: scale(0);
              animation: ripple 0.6s linear;
              pointer-events: none;
          }
          
          @keyframes ripple {
              to {
                  transform: scale(4);
                  opacity: 0;
              }
          }
      `
    document.head.appendChild(style)
  })
  
  

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Announcement slider
    const announcements = document.querySelectorAll('.announcement');
    let currentAnnouncement = 0;
    
    function showNextAnnouncement() {
        announcements[currentAnnouncement].style.display = 'none';
        currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
        announcements[currentAnnouncement].style.display = 'flex';
    }
    
    // Initially hide all but the first announcement
    for (let i = 1; i < announcements.length; i++) {
        announcements[i].style.display = 'none';
    }
    
    // Change announcement every 5 seconds
    setInterval(showNextAnnouncement, 3000);

    // Program tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    // Virtual tour location buttons
    const locationButtons = document.querySelectorAll('.location-btn');
    const tourPlayBtn = document.getElementById('tour-play-btn');
    
    locationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            locationButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically update the tour preview image based on the selected location
            // For this example, we'll just log the location
            console.log('Selected location:', this.dataset.location);
        });
    });
    
    tourPlayBtn.addEventListener('click', function() {
        alert('Virtual tour video would play here in a real implementation.');
    });

    // Statistics counter
    const statistics = document.querySelectorAll('.statistic-number');
    let counted = false;
    
    function startCounting() {
        if (counted) return;
        
        statistics.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // Update every 16ms (60fps)
            let current = 0;
            
            const counter = setInterval(() => {
                current += increment;
                stat.textContent = Math.floor(current);
                
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(counter);
                }
            }, 16);
        });
        
        counted = true;
    }
    
    // Start counting when the statistics section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
            }
        });
    }, { threshold: 0.5 });
    
    const statisticsSection = document.querySelector('.statistics-section');
    if (statisticsSection) {
        observer.observe(statisticsSection);
    }

    // Calendar functionality
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    
    let currentDate = new Date();
    
    function generateCalendar(year, month) {
        // Clear the grid
        calendarGrid.innerHTML = '';
        
        // Update the month display
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        currentMonthElement.textContent = `${monthNames[month]} ${year}`;
        
        // Get the first day of the month
        const firstDay = new Date(year, month, 1).getDay();
        
        // Get the number of days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Add day headers
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day';
            day.textContent = i;
            
            // Highlight current day
            if (year === new Date().getFullYear() && month === new Date().getMonth() && i === new Date().getDate()) {
                day.classList.add('current-day');
            }
            
            // Highlight days with events (for demo purposes)
            if (i === 15 || i === 20 || i === 25) {
                day.classList.add('has-event');
            }
            
            calendarGrid.appendChild(day);
        }
    }
    
    // Generate initial calendar
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    
    // Previous month button
    prevMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
    
    // Next month button
    nextMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    // Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.dot');
    const prevTestimonialBtn = document.getElementById('prev-testimonial');
    const nextTestimonialBtn = document.getElementById('next-testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        // Hide all testimonials
        testimonialSlides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Remove active class from all dots
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected testimonial and activate the corresponding dot
        testimonialSlides[index].style.display = 'block';
        testimonialDots[index].classList.add('active');
    }
    
    // Initially show the first testimonial
    showTestimonial(currentTestimonial);
    
    // Previous testimonial button
    prevTestimonialBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    });
    
    // Next testimonial button
    nextTestimonialBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    });
    
    // Dot navigation
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });
    
    // Auto-advance testimonials every 5 seconds
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Gallery filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Show/hide gallery items based on filter
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Gallery modal
    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeModal = document.querySelector('.close-modal');
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');
    let currentImageIndex = 0;
    
    // Open modal when clicking on gallery zoom icon
    document.querySelectorAll('.gallery-zoom').forEach((zoom, index) => {
        zoom.addEventListener('click', function() {
            const galleryItem = this.closest('.gallery-item');
            const image = galleryItem.querySelector('img');
            const caption = galleryItem.querySelector('.gallery-info h3').textContent;
            
            modalImage.src = image.src;
            modalCaption.textContent = caption;
            galleryModal.style.display = 'block';
            currentImageIndex = index;
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        galleryModal.style.display = 'none';
    });
    
    // Close modal when clicking outside the image
    galleryModal.addEventListener('click', function(event) {
        if (event.target === galleryModal) {
            galleryModal.style.display = 'none';
        }
    });

    
    // Previous image
    modalPrev.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        const prevItem = galleryItems[currentImageIndex];
        const image = prevItem.querySelector('img');
        const caption = prevItem.querySelector('.gallery-info h3').textContent;
        
        modalImage.src = image.src;
        modalCaption.textContent = caption;
    });
    
    // Next image
    modalNext.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        const nextItem = galleryItems[currentImageIndex];
        const image = nextItem.querySelector('img');
        const caption = nextItem.querySelector('.gallery-info h3').textContent;
        
        modalImage.src = image.src;
        modalCaption.textContent = caption;
    });

    // Alumni carousel
    const alumniCarousel = document.querySelector('.alumni-carousel');
    const prevAlumniBtn = document.getElementById('prev-alumni');
    const nextAlumniBtn = document.getElementById('next-alumni');
    const alumniCards = document.querySelectorAll('.alumni-card');
    
    // Calculate the width to scroll
    const cardWidth = alumniCards[0].offsetWidth + 30; // Card width + gap
    
    // Previous alumni button
    prevAlumniBtn.addEventListener('click', function() {
        alumniCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    
    // Next alumni button
    nextAlumniBtn.addEventListener('click', function() {
        alumniCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterResponse = document.getElementById('newsletter-response');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simulate form submission
            newsletterResponse.textContent = 'Thank you for subscribing to our newsletter!';
            newsletterResponse.style.color = 'var(--secondary-color)';
            
            // Reset form
            this.reset();
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Chat support
    const chatButton = document.querySelector('.chat-button');
    const chatPopup = document.getElementById('chat-popup');
    const closeChat = document.querySelector('.close-chat');
    
    chatButton.addEventListener('click', function() {
        chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
    });
    
    closeChat.addEventListener('click', function() {
        chatPopup.style.display = 'none';
    });

    // Cookie consent
    const cookieConsent = document.getElementById('cookie-consent');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieSettings = document.getElementById('cookie-settings');
    
    // Show cookie consent if not accepted before
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(function() {
            cookieConsent.style.display = 'block';
        }, 2000);
    }
    
    cookieAccept.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.display = 'none';
    });
    
    cookieSettings.addEventListener('click', function() {
        alert('Cookie settings would open here in a real implementation.');
    });

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Add CSS class for animations when elements come into view
    const animatedElements = document.querySelectorAll('.feature-card, .news-card, .alumni-card');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        animationObserver.observe(element);
    });
    
});