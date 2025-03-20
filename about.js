// About Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Facilities Slider
    const facilitySlides = document.querySelectorAll('.facility-slide');
    const facilityDots = document.querySelectorAll('.facility-dots .dot');
    const prevFacilityBtn = document.getElementById('prev-facility');
    const nextFacilityBtn = document.getElementById('next-facility');
    let currentFacility = 0;
    
    function showFacility(index) {
        // Hide all facilities
        facilitySlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        facilityDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected facility and activate the corresponding dot
        facilitySlides[index].classList.add('active');
        facilityDots[index].classList.add('active');
    }
    
    // Initially show the first facility
    showFacility(currentFacility);
    
    // Previous facility button
    if (prevFacilityBtn) {
        prevFacilityBtn.addEventListener('click', function() {
            currentFacility = (currentFacility - 1 + facilitySlides.length) % facilitySlides.length;
            showFacility(currentFacility);
        });
    }
    
    // Next facility button
    if (nextFacilityBtn) {
        nextFacilityBtn.addEventListener('click', function() {
            currentFacility = (currentFacility + 1) % facilitySlides.length;
            showFacility(currentFacility);
        });
    }
    
    // Dot navigation
    facilityDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentFacility = index;
            showFacility(currentFacility);
        });
    });
    
    // Auto-advance facilities every 5 seconds
    setInterval(function() {
        if (facilitySlides.length > 0) {
            currentFacility = (currentFacility + 1) % facilitySlides.length;
            showFacility(currentFacility);
        }
    }, 5000);

    // Timeline animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        timelineObserver.observe(item);
    });

    // Value cards animation on scroll
    const valueCards = document.querySelectorAll('.value-card');
    
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        valueObserver.observe(card);
    });

    // Leadership cards animation on scroll
    const leaderCards = document.querySelectorAll('.leader-card');
    
    const leaderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    leaderCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        leaderObserver.observe(card);
    });
});