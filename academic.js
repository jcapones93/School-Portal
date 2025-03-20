// Academics Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
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

    // Course catalog filtering
    const gradeFilter = document.getElementById('grade-filter');
    const subjectFilter = document.getElementById('subject-filter');
    const levelFilter = document.getElementById('level-filter');
    const courseSearch = document.getElementById('course-search');
    const searchBtn = document.getElementById('search-btn');
    const courseList = document.getElementById('course-list');
    const courseRows = document.querySelectorAll('#course-list tr');
    
    function filterCourses() {
        const gradeValue = gradeFilter.value;
        const subjectValue = subjectFilter.value;
        const levelValue = levelFilter.value;
        const searchValue = courseSearch.value.toLowerCase();
        
        courseRows.forEach(row => {
            const gradeMatch = gradeValue === 'all' || row.dataset.grade === gradeValue;
            const subjectMatch = subjectValue === 'all' || row.dataset.subject === subjectValue;
            const levelMatch = levelValue === 'all' || row.dataset.level === levelValue;
            
            const courseTitle = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            const searchMatch = courseTitle.includes(searchValue);
            
            if (gradeMatch && subjectMatch && levelMatch && searchMatch) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
    
    if (gradeFilter && subjectFilter && levelFilter && searchBtn) {
        gradeFilter.addEventListener('change', filterCourses);
        subjectFilter.addEventListener('change', filterCourses);
        levelFilter.addEventListener('change', filterCourses);
        searchBtn.addEventListener('click', filterCourses);
        
        courseSearch.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                filterCourses();
            }
        });
    }

    // Course details modal
    const courseModal = document.getElementById('course-modal');
    const courseDetailsButtons = document.querySelectorAll('.course-details');
    const closeModal = document.querySelector('.close-modal');
    
    // Sample course data (in a real application, this would come from a database)
    const courseData = {
        'ENG401': {
            title: 'AP English Literature',
            code: 'ENG401',
            grade: '12',
            subject: 'English',
            level: 'Advanced Placement',
            credits: '1.0',
            prerequisites: 'Honors English 11 or teacher recommendation',
            duration: 'Full Year',
            description: 'AP English Literature and Composition is an introductory college-level literary analysis course. Students cultivate their understanding of literature through reading and analyzing texts as they explore concepts like character, setting, structure, perspective, figurative language, and literary analysis in the context of literary works.',
            objectives: [
                'Develop critical reading skills through close textual analysis',
                'Analyze how writers use language to provide meaning and pleasure',
                'Consider a work\'s structure, style, and themes',
                'Analyze and interpret literary works from various genres and periods',
                'Write clear, coherent essays that analyze and interpret literature'
            ]
        },
        'MAT401': {
            title: 'AP Calculus AB',
            code: 'MAT401',
            grade: '11-12',
            subject: 'Mathematics',
            level: 'Advanced Placement',
            credits: '1.0',
            prerequisites: 'Honors Pre-Calculus with a grade of B or higher',
            duration: 'Full Year',
            description: 'AP Calculus AB is an introductory college-level calculus course. Students cultivate their understanding of differential and integral calculus through engaging with real-world problems represented graphically, numerically, analytically, and verbally and using definitions and theorems to build arguments and justify conclusions.',
            objectives: [
                'Understand the concepts of limits, derivatives, and integrals',
                'Apply differentiation techniques to analyze functions',
                'Use integration to solve problems involving accumulation',
                'Connect derivatives and integrals through the Fundamental Theorem of Calculus',
                'Model real-world problems using calculus concepts'
            ]
        }
    };
    
    function openCourseModal(courseCode) {
        const course = courseData[courseCode] || {
            title: 'Course Title',
            code: courseCode,
            grade: 'Grade Level',
            subject: 'Subject Area',
            level: 'Course Level',
            credits: 'Credits',
            prerequisites: 'Prerequisites',
            duration: 'Duration',
            description: 'Course description not available.',
            objectives: ['Learning objectives not available.']
        };
        
        document.getElementById('modal-course-title').textContent = course.title;
        document.getElementById('modal-course-code').textContent = course.code;
        document.getElementById('modal-grade').textContent = course.grade;
        document.getElementById('modal-subject').textContent = course.subject;
        document.getElementById('modal-level').textContent = course.level;
        document.getElementById('modal-credits').textContent = course.credits;
        document.getElementById('modal-prerequisites').textContent = course.prerequisites;
        document.getElementById('modal-duration').textContent = course.duration;
        document.getElementById('modal-description').textContent = course.description;
        
        const objectivesList = document.getElementById('modal-objectives');
        objectivesList.innerHTML = '';
        course.objectives.forEach(objective => {
            const li = document.createElement('li');
            li.textContent = objective;
            objectivesList.appendChild(li);
        });
        
        courseModal.style.display = 'block';
    }
    
    courseDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseCode = this.dataset.course;
            openCourseModal(courseCode);
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            courseModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === courseModal) {
            courseModal.style.display = 'none';
        }
    });

    // Faculty filtering
    const departmentFilter = document.getElementById('department-filter');
    const facultySearch = document.getElementById('faculty-search');
    const facultySearchBtn = document.getElementById('faculty-search-btn');
    const facultyCards = document.querySelectorAll('.faculty-card');
    
    function filterFaculty() {
        const departmentValue = departmentFilter.value;
        const searchValue = facultySearch.value.toLowerCase();
        
        facultyCards.forEach(card => {
            const departmentMatch = departmentValue === 'all' || card.dataset.department === departmentValue;
            
            const facultyName = card.querySelector('h3').textContent.toLowerCase();
            const facultyTitle = card.querySelector('.faculty-title').textContent.toLowerCase();
            const searchMatch = facultyName.includes(searchValue) || facultyTitle.includes(searchValue);
            
            if (departmentMatch && searchMatch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    if (departmentFilter && facultySearchBtn) {
        departmentFilter.addEventListener('change', filterFaculty);
        facultySearchBtn.addEventListener('click', filterFaculty);
        
        facultySearch.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                filterFaculty();
            }
        });
    }

    // Subject cards animation on scroll
    const subjectCards = document.querySelectorAll('.subject-card');
    
    const subjectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    subjectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        subjectObserver.observe(card);
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

    // Faculty cards animation on scroll
    const facultyCardsAnim = document.querySelectorAll('.faculty-card');
    
    const facultyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    facultyCardsAnim.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        facultyObserver.observe(card);
    });
});