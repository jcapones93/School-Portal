// Student Life Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Statistics counter
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;
    
    function startCounting() {
        if (counted) return;
        
        statNumbers.forEach(stat => {
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
    const overviewSection = document.querySelector('.overview-section');
    if (overviewSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounting();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(overviewSection);
    }

    // Activities tabs
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
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            galleryModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target === galleryModal) {
            galleryModal.style.display = 'none';
        }
    });
    
    // Previous image
    if (modalPrev) {
        modalPrev.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
            const prevItem = galleryItems[currentImageIndex];
            const image = prevItem.querySelector('img');
            const caption = prevItem.querySelector('.gallery-info h3').textContent;
            
            modalImage.src = image.src;
            modalCaption.textContent = caption;
        });
    }
    
    // Next image
    if (modalNext) {
        modalNext.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
            const nextItem = galleryItems[currentImageIndex];
            const image = nextItem.querySelector('img');
            const caption = nextItem.querySelector('.gallery-info h3').textContent;
            
            modalImage.src = image.src;
            modalCaption.textContent = caption;
        });
    }

    // Timeline items animation on scroll
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

    // Support cards animation on scroll
    const supportCards = document.querySelectorAll('.support-card');
    
    const supportObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    supportCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        supportObserver.observe(card);
    });

    // Campus life items animation on scroll
    const campusLifeItems = document.querySelectorAll('.campus-life-item');
    
    const campusLifeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    campusLifeItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        campusLifeObserver.observe(item);
    });

    // Gallery items animation on scroll
    const galleryItemsAnim = document.querySelectorAll('.gallery-item');
    
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    galleryItemsAnim.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        galleryObserver.observe(item);
    });
});