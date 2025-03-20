// Admissions Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Process steps animation on scroll
    const processSteps = document.querySelectorAll('.process-step');
    
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        step.style.transitionDelay = `${index * 0.1}s`;
        processObserver.observe(step);
    });

    // Timeline items animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        timelineObserver.observe(item);
    });

    // Requirements tabs
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

    // Requirement cards animation on scroll
    const requirementCards = document.querySelectorAll('.requirement-card');
    
    const requirementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    requirementCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        requirementObserver.observe(card);
    });

    // Visit cards animation on scroll
    const visitCards = document.querySelectorAll('.visit-card');
    
    const visitObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    visitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        visitObserver.observe(card);
    });

    // Virtual tour modal
    const virtualTourBtn = document.getElementById('virtual-tour-btn');
    
    if (virtualTourBtn) {
        virtualTourBtn.addEventListener('click', function() {
            // In a real implementation, this would open a modal with a virtual tour
            alert('Virtual tour would open here in a real implementation.');
        });
    }

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Toggle active class on clicked item
            item.classList.toggle('active');
            
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and activate corresponding dot
        testimonialSlides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    // Event listeners for controls
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        // Add animation classes to elements when they come into view
        const animateOnScroll = () => {
          const elements = document.querySelectorAll(".apply-info, .apply-contact, .requirement-item, .student-type-item")
      
          elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top
            const screenPosition = window.innerHeight / 1.2
      
            if (elementPosition < screenPosition) {
              element.classList.add("animated")
            }
          })
        }
      
        // Run on load
        animateOnScroll()
      
        // Run on scroll
        window.addEventListener("scroll", animateOnScroll)
      
        // Add ripple effect to buttons
        const buttons = document.querySelectorAll(".btn")
      
        buttons.forEach((button) => {
          button.addEventListener("click", function (e) {
            const x = e.clientX - e.target.getBoundingClientRect().left
            const y = e.clientY - e.target.getBoundingClientRect().top
      
            const ripple = document.createElement("span")
            ripple.classList.add("ripple")
            ripple.style.left = `${x}px`
            ripple.style.top = `${y}px`
      
            this.appendChild(ripple)
      
            setTimeout(() => {
              ripple.remove()
            }, 600)
          })
        })
      
        // Add hover effect to feature items
        const featureItems = document.querySelectorAll(".feature-item")
      
        featureItems.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.05}s`
        })
      
        // Add hover effect to requirement items
        const requirementItems = document.querySelectorAll(".requirement-item")
      
        requirementItems.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.05}s`
        })
      
        // Add hover effect to student type items
        const studentTypeItems = document.querySelectorAll(".student-type-item")
      
        studentTypeItems.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.05}s`
        })
      })
      
      
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Initialize slider
    showSlide(currentSlide);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});