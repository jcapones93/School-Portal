// Strand Finder Quiz JavaScript

// Define the questions and possible answers
const questions = [
    {
      id: 1,
      question: "Which subjects do you enjoy the most?",
      options: [
        { text: "Mathematics and Science", strand: "STEM", icon: "fas fa-calculator" },
        { text: "Language and Social Sciences", strand: "HUMSS", icon: "fas fa-book-open" },
        { text: "A mix of different subjects", strand: "GAS", icon: "fas fa-palette" },
        { text: "Computer and Technology", strand: "TVL-ICT", icon: "fas fa-code" },
        { text: "Cooking and Home Economics", strand: "TVL-HE", icon: "fas fa-coffee" },
      ],
    },
    {
      id: 2,
      question: "How do you prefer to solve problems?",
      options: [
        { text: "Through logical reasoning and analysis", strand: "STEM", icon: "fas fa-brain" },
        { text: "By discussing and debating with others", strand: "HUMSS", icon: "fas fa-users" },
        { text: "Using a variety of approaches", strand: "GAS", icon: "fas fa-lightbulb" },
        { text: "By creating technological solutions", strand: "TVL-ICT", icon: "fas fa-code" },
        { text: "Through practical, hands-on methods", strand: "TVL-HE", icon: "fas fa-coffee" },
      ],
    },
    {
      id: 3,
      question: "What career path interests you the most?",
      options: [
        { text: "Engineering, Medicine, or Research", strand: "STEM", icon: "fas fa-flask" },
        { text: "Law, Teaching, or Social Work", strand: "HUMSS", icon: "fas fa-book-open" },
        { text: "Business, Management, or Entrepreneurship", strand: "GAS", icon: "fas fa-briefcase" },
        { text: "IT, Programming, or Digital Media", strand: "TVL-ICT", icon: "fas fa-code" },
        { text: "Culinary Arts, Tourism, or Hospitality", strand: "TVL-HE", icon: "fas fa-coffee" },
      ],
    },
    {
      id: 4,
      question: "What type of activities do you enjoy in your free time?",
      options: [
        { text: "Experimenting or solving puzzles", strand: "STEM", icon: "fas fa-flask" },
        { text: "Reading, writing, or debating", strand: "HUMSS", icon: "fas fa-book-open" },
        { text: "Various hobbies and activities", strand: "GAS", icon: "fas fa-palette" },
        { text: "Coding or playing with technology", strand: "TVL-ICT", icon: "fas fa-code" },
        { text: "Cooking or designing spaces", strand: "TVL-HE", icon: "fas fa-coffee" },
      ],
    },
    {
      id: 5,
      question: "How would your friends describe your strengths?",
      options: [
        { text: "Analytical and precise", strand: "STEM", icon: "fas fa-calculator" },
        { text: "Empathetic and communicative", strand: "HUMSS", icon: "fas fa-users" },
        { text: "Well-rounded and adaptable", strand: "GAS", icon: "fas fa-lightbulb" },
        { text: "Tech-savvy and innovative", strand: "TVL-ICT", icon: "fas fa-code" },
        { text: "Creative and detail-oriented", strand: "TVL-HE", icon: "fas fa-coffee" },
      ],
    },
    {
      id: 6,
      question: "When working on a group project, what role do you naturally take?",
      options: [
        { text: "The problem solver who finds technical solutions", strand: "STEM", icon: "fas fa-cogs" },
        { text: "The mediator who ensures everyone's voice is heard", strand: "HUMSS", icon: "fas fa-comments" },
        { text: "The organizer who coordinates different aspects", strand: "GAS", icon: "fas fa-tasks" },
        { text: "The technical expert who handles digital tools", strand: "TVL-ICT", icon: "fas fa-laptop-code" },
        { text: "The creative who focuses on aesthetics and presentation", strand: "TVL-HE", icon: "fas fa-paint-brush" },
      ],
    },
    {
      id: 7,
      question: "Which of these workplace environments appeals to you most?",
      options: [
        { text: "Laboratory or research facility", strand: "STEM", icon: "fas fa-microscope" },
        { text: "School, courtroom, or community center", strand: "HUMSS", icon: "fas fa-university" },
        { text: "Corporate office or business setting", strand: "GAS", icon: "fas fa-building" },
        { text: "Tech startup or IT department", strand: "TVL-ICT", icon: "fas fa-server" },
        { text: "Restaurant, hotel, or design studio", strand: "TVL-HE", icon: "fas fa-utensils" },
      ],
    },
    {
      id: 8,
      question: "Which of these challenges would you be most excited to tackle?",
      options: [
        { text: "Developing a solution to an environmental problem", strand: "STEM", icon: "fas fa-leaf" },
        { text: "Creating policies to address social issues", strand: "HUMSS", icon: "fas fa-balance-scale" },
        { text: "Starting a business or improving an organization", strand: "GAS", icon: "fas fa-chart-line" },
        { text: "Building a website or app to solve a problem", strand: "TVL-ICT", icon: "fas fa-mobile-alt" },
        { text: "Designing a space or creating a culinary experience", strand: "TVL-HE", icon: "fas fa-home" },
      ],
    },
    {
      id: 9,
      question: "How do you prefer to express your creativity?",
      options: [
        { text: "Through experiments and innovation", strand: "STEM", icon: "fas fa-atom" },
        { text: "Through writing, speaking, or performing", strand: "HUMSS", icon: "fas fa-pen-fancy" },
        { text: "Through planning and organizing events", strand: "GAS", icon: "fas fa-calendar-alt" },
        { text: "Through digital media and technology", strand: "TVL-ICT", icon: "fas fa-camera" },
        { text: "Through cooking, fashion, or interior design", strand: "TVL-HE", icon: "fas fa-tshirt" },
      ],
    },
    {
      id: 10,
      question: "What kind of impact do you want to make in the world?",
      options: [
        { text: "Advancing scientific knowledge and innovation", strand: "STEM", icon: "fas fa-rocket" },
        { text: "Improving society and helping individuals", strand: "HUMSS", icon: "fas fa-hands-helping" },
        { text: "Building successful businesses and organizations", strand: "GAS", icon: "fas fa-handshake" },
        { text: "Creating technological solutions for everyday problems", strand: "TVL-ICT", icon: "fas fa-globe" },
        { text: "Enhancing people's experiences through service and design", strand: "TVL-HE", icon: "fas fa-heart" },
      ],
    },
  ]
  
  // Define strand information
  const strandInfo = {
    STEM: {
      title: "Science, Technology, Engineering, and Mathematics",
      description:
        "STEM is perfect for students who excel in science and mathematics and are interested in careers in engineering, medicine, architecture, and other science-related fields.",
      icon: "fas fa-flask",
      color: "stem",
      subjects: ["Advanced Mathematics", "Biology", "Chemistry", "Physics", "Research", "Calculus", "Statistics"],
      careers: ["Doctor", "Engineer", "Scientist", "Architect", "Mathematician", "Pharmacist", "Environmental Scientist"],
      skills: ["Critical thinking", "Problem-solving", "Analytical skills", "Research skills", "Technical skills"],
      personalities: ["Analytical", "Logical", "Curious", "Detail-oriented", "Methodical"],
      universities: [
        "Massachusetts Institute of Technology",
        "Stanford University",
        "California Institute of Technology",
        "Harvard University",
        "University of Cambridge",
      ],
    },
    HUMSS: {
      title: "Humanities and Social Sciences",
      description:
        "HUMSS is ideal for students who are interested in social sciences, communication, education, and other humanities-related fields.",
      icon: "fas fa-book-open",
      color: "humss",
      subjects: [
        "Literature",
        "Philosophy",
        "Political Science",
        "Social Science",
        "Communication",
        "Psychology",
        "History",
      ],
      careers: [
        "Lawyer",
        "Teacher",
        "Journalist",
        "Psychologist",
        "Social Worker",
        "Diplomat",
        "Human Resources Professional",
      ],
      skills: ["Communication", "Critical thinking", "Empathy", "Research", "Writing"],
      personalities: ["Empathetic", "Communicative", "Reflective", "Creative", "Socially aware"],
      universities: [
        "Harvard University",
        "Oxford University",
        "Yale University",
        "Princeton University",
        "Columbia University",
      ],
    },
    GAS: {
      title: "General Academic Strand",
      description:
        "GAS is suitable for students who are still exploring their options or are interested in courses that are not aligned with the other strands.",
      icon: "fas fa-palette",
      color: "gas",
      subjects: [
        "Humanities",
        "Social Sciences",
        "Applied Economics",
        "Organization and Management",
        "Disaster Readiness",
        "Business Math",
        "Electives",
      ],
      careers: [
        "Business Manager",
        "Entrepreneur",
        "HR Professional",
        "Public Administrator",
        "Various Professional Paths",
        "Marketing Specialist",
        "Financial Analyst",
      ],
      skills: ["Adaptability", "Organization", "Communication", "Critical thinking", "Time management"],
      personalities: ["Versatile", "Adaptable", "Balanced", "Practical", "Organized"],
      universities: [
        "New York University",
        "University of Chicago",
        "Boston University",
        "University of California, Berkeley",
        "University of Michigan",
      ],
    },
    "TVL-ICT": {
      title: "Technical-Vocational-Livelihood: Information and Communications Technology",
      description:
        "TVL-ICT is for students who are interested in computer programming, web development, and other IT-related fields.",
      icon: "fas fa-code",
      color: "tvl-ict",
      subjects: [
        "Computer Programming",
        "Web Development",
        "Animation",
        "Computer Hardware Servicing",
        "Technical Drafting",
        "Database Management",
        "Networking",
      ],
      careers: [
        "Programmer",
        "Web Developer",
        "IT Specialist",
        "Network Administrator",
        "Digital Media Designer",
        "Software Engineer",
        "Cybersecurity Analyst",
      ],
      skills: ["Technical skills", "Problem-solving", "Attention to detail", "Logical thinking", "Creativity"],
      personalities: ["Analytical", "Detail-oriented", "Innovative", "Logical", "Patient"],
      universities: [
        "Massachusetts Institute of Technology",
        "Stanford University",
        "Carnegie Mellon University",
        "Georgia Institute of Technology",
        "University of California, Berkeley",
      ],
    },
    "TVL-HE": {
      title: "Technical-Vocational-Livelihood: Home Economics",
      description:
        "TVL-HE is for students who are interested in culinary arts, fashion design, tourism, and other home economics-related fields.",
      icon: "fas fa-coffee",
      color: "tvl-he",
      subjects: [
        "Culinary Arts",
        "Food and Beverage Services",
        "Tourism",
        "Housekeeping",
        "Fashion Design",
        "Bread and Pastry Production",
        "Front Office Services",
      ],
      careers: [
        "Chef",
        "Hotel Manager",
        "Fashion Designer",
        "Tourism Officer",
        "Event Planner",
        "Restaurant Owner",
        "Interior Designer",
      ],
      skills: ["Creativity", "Attention to detail", "Customer service", "Time management", "Practical skills"],
      personalities: ["Creative", "Detail-oriented", "Service-oriented", "Practical", "Artistic"],
      universities: [
        "Culinary Institute of America",
        "Fashion Institute of Technology",
        "Cornell University School of Hotel Administration",
        "Parsons School of Design",
        "Le Cordon Bleu",
      ],
    },
  }
  
  // Initialize variables
  let currentQuestion = 0
  let answers = {
    STEM: 0,
    HUMSS: 0,
    GAS: 0,
    "TVL-ICT": 0,
    "TVL-HE": 0,
  }
  let selectedOption = null
  let topStrand = ""
  let userResponses = []
  let quizStartTime = null
  
  // DOM elements
  const questionContainer = document.getElementById("question-container")
  const progressBar = document.getElementById("progress-bar")
  const questionProgress = document.getElementById("question-progress")
  const progressPercentage = document.getElementById("progress-percentage")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  const quizContainer = document.getElementById("quiz-container")
  const resultsContainer = document.getElementById("results-container")
  const allStrandsContainer = document.getElementById("all-strands-container")
  const retakeBtn = document.getElementById("retake-btn")
  const quizTimer = document.getElementById("quiz-timer")
  const personalityChart = document.getElementById("personality-chart")
  
  // Initialize the quiz
  function initQuiz() {
    showQuestion(currentQuestion)
    updateProgress()
  
    // Start timer
    quizStartTime = new Date()
    updateTimer()
  
    // Event listeners
    prevBtn.addEventListener("click", prevQuestion)
    nextBtn.addEventListener("click", nextQuestion)
    retakeBtn.addEventListener("click", resetQuiz)
  
    // Add event listeners for strand cards on homepage
    const strandCards = document.querySelectorAll(".strand-card")
    if (strandCards) {
      strandCards.forEach((card) => {
        card.addEventListener("click", () => {
          window.location.href = "strand-finder.html"
        })
      })
    }
  }
  
  // Update timer
  function updateTimer() {
    if (!quizStartTime) return
  
    const now = new Date()
    const timeDiff = Math.floor((now - quizStartTime) / 1000) // in seconds
    const minutes = Math.floor(timeDiff / 60)
    const seconds = timeDiff % 60
  
    quizTimer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  
    if (currentQuestion < questions.length) {
      setTimeout(updateTimer, 1000)
    }
  }
  
  // Show a question
  function showQuestion(index) {
    questionContainer.innerHTML = ""
    selectedOption = null
    nextBtn.disabled = true
  
    const questionDiv = document.createElement("div")
    questionDiv.classList.add("slide-in")
  
    questionDiv.innerHTML = `
          <h2 class="question">${questions[index].question}</h2>
          <div class="options">
              ${questions[index].options
                .map(
                  (option, i) => `
                  <div class="option" data-index="${i}" data-strand="${option.strand}">
                      <div class="option-icon">
                          <i class="${option.icon}"></i>
                      </div>
                      <div class="option-text">${option.text}</div>
                      <div class="option-check">
                          <i class="fas fa-check-circle"></i>
                      </div>
                  </div>
              `,
                )
                .join("")}
          </div>
      `
  
    questionContainer.appendChild(questionDiv)
  
    // Add event listeners to options
    const options = document.querySelectorAll(".option")
    options.forEach((option) => {
      option.addEventListener("click", selectOption)
    })
  
    // If there's a previous answer for this question, select it
    if (userResponses[index] !== undefined) {
      const savedOption = document.querySelector(`.option[data-index="${userResponses[index].optionIndex}"]`)
      if (savedOption) {
        savedOption.classList.add("selected")
        selectedOption = userResponses[index].optionIndex
        nextBtn.disabled = false
      }
    }
  }
  
  // Select an option
  function selectOption(e) {
    const optionElement = e.currentTarget
    const optionIndex = Number.parseInt(optionElement.dataset.index)
    const strand = optionElement.dataset.strand
  
    // Remove selected class from all options
    const options = document.querySelectorAll(".option")
    options.forEach((opt) => opt.classList.remove("selected"))
  
    // Add selected class to clicked option
    optionElement.classList.add("selected")
  
    // Save the response
    userResponses[currentQuestion] = {
      questionId: questions[currentQuestion].id,
      optionIndex: optionIndex,
      strand: strand,
    }
  
    // Update answers
    recalculateScores()
    selectedOption = optionIndex
  
    // Enable next button
    nextBtn.disabled = false
  
    // Add animation effect
    optionElement.classList.add("pulse-animation")
    setTimeout(() => {
      optionElement.classList.remove("pulse-animation")
    }, 500)
  }
  
  // Recalculate scores based on all responses
  function recalculateScores() {
    // Reset scores
    answers = {
      STEM: 0,
      HUMSS: 0,
      GAS: 0,
      "TVL-ICT": 0,
      "TVL-HE": 0,
    }
  
    // Calculate scores based on responses
    userResponses.forEach((response) => {
      if (response && response.strand) {
        answers[response.strand]++
      }
    })
  }
  
  // Go to next question
  function nextQuestion() {
    if (selectedOption === null) return
  
    if (currentQuestion < questions.length - 1) {
      // Animate out current question
      const currentQuestionDiv = questionContainer.querySelector("div")
      currentQuestionDiv.classList.remove("slide-in")
      currentQuestionDiv.classList.add("slide-out")
  
      setTimeout(() => {
        currentQuestion++
        showQuestion(currentQuestion)
        updateProgress()
      }, 300)
    } else {
      calculateResults()
    }
  }
  
  // Go to previous question
  function prevQuestion() {
    if (currentQuestion > 0) {
      // Animate out current question
      const currentQuestionDiv = questionContainer.querySelector("div")
      currentQuestionDiv.classList.remove("slide-in")
      currentQuestionDiv.classList.add("slide-out")
  
      setTimeout(() => {
        currentQuestion--
        showQuestion(currentQuestion)
        updateProgress()
      }, 300)
    }
  }
  
  // Update progress bar and text
  function updateProgress() {
    const progress = (currentQuestion / questions.length) * 100
    progressBar.style.width = `${progress}%`
    questionProgress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`
    progressPercentage.textContent = `${Math.round(progress)}% Complete`
  
    // Enable/disable previous button
    prevBtn.disabled = currentQuestion === 0
  
    // Update next button text
    if (currentQuestion === questions.length - 1) {
      nextBtn.innerHTML = 'See Results <i class="fas fa-chevron-right"></i>'
    } else {
      nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>'
    }
  }
  
  // Calculate results
  function calculateResults() {
    let maxStrand = ""
    let maxValue = 0
  
    Object.entries(answers).forEach(([strand, value]) => {
      if (value > maxValue) {
        maxValue = value
        maxStrand = strand
      }
    })
  
    topStrand = maxStrand
    showResults()
  }
  
  // Show results
  function showResults() {
    // Hide quiz container
    quizContainer.style.display = "none"
  
    // Update results content
    const resultIcon = document.getElementById("result-icon")
    const resultStrand = document.getElementById("result-strand")
    const resultTitle = document.getElementById("result-title")
    const resultDescription = document.getElementById("result-description")
    const resultSubjects = document.getElementById("result-subjects")
    const resultCareers = document.getElementById("result-careers")
    const resultSkills = document.getElementById("result-skills")
    const resultPersonality = document.getElementById("result-personality")
  
    resultIcon.innerHTML = `<i class="${strandInfo[topStrand].icon}"></i>`
    resultStrand.textContent = topStrand
    resultStrand.className = `result-strand ${strandInfo[topStrand].color}`
    resultTitle.textContent = strandInfo[topStrand].title
    resultDescription.textContent = strandInfo[topStrand].description
  
    // Populate subjects
    resultSubjects.innerHTML = ""
    strandInfo[topStrand].subjects.forEach((subject) => {
      const li = document.createElement("li")
      li.innerHTML = `<i class="fas fa-check-circle"></i> ${subject}`
      resultSubjects.appendChild(li)
    })
  
    // Populate careers
    resultCareers.innerHTML = ""
    strandInfo[topStrand].careers.forEach((career) => {
      const li = document.createElement("li")
      li.innerHTML = `<i class="fas fa-briefcase"></i> ${career}`
      resultCareers.appendChild(li)
    })
  
    // Populate skills
    resultSkills.innerHTML = ""
    strandInfo[topStrand].skills.forEach((skill) => {
      const li = document.createElement("li")
      li.innerHTML = `<i class="fas fa-star"></i> ${skill}`
      resultSkills.appendChild(li)
    })
  
    // Populate personality traits
    resultPersonality.innerHTML = ""
    strandInfo[topStrand].personalities.forEach((trait) => {
      const li = document.createElement("li")
      li.innerHTML = `<i class="fas fa-user"></i> ${trait}`
      resultPersonality.appendChild(li)
    })
  
    // Create personality chart
    createPersonalityChart()
  
    // Show results container
    resultsContainer.style.display = "block"
    resultsContainer.classList.add("fade-in")
  
    // Populate all strands
    populateAllStrands()
  
    // Show all strands container
    allStrandsContainer.style.display = "block"
    allStrandsContainer.classList.add("fade-in")
  
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  
  // Create personality chart
  function createPersonalityChart() {
    const chartContainer = document.getElementById("personality-chart")
    chartContainer.innerHTML = ""
  
    const canvas = document.createElement("canvas")
    canvas.id = "strand-chart"
    canvas.width = 400
    canvas.height = 300
    chartContainer.appendChild(canvas)
  
    const ctx = canvas.getContext("2d")
  
    // Calculate percentages
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0)
    const percentages = {}
    Object.entries(answers).forEach(([strand, value]) => {
      percentages[strand] = Math.round((value / total) * 100)
    })
  
    // Draw chart
    drawBarChart(ctx, percentages)
  }
  
  // Draw bar chart
  function drawBarChart(ctx, data) {
    const canvas = ctx.canvas
    const width = canvas.width
    const height = canvas.height
    const barWidth = 50
    const spacing = 20
    const startX = 60
    const startY = height - 40
    const maxBarHeight = height - 80
  
    // Clear canvas
    ctx.clearRect(0, 0, width, height)
  
    // Draw title
    ctx.fillStyle = "#333"
    ctx.font = "bold 16px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Your Strand Compatibility", width / 2, 30)
  
    // Draw bars
    let x = startX
    Object.entries(data).forEach(([strand, percentage]) => {
      const barHeight = (percentage / 100) * maxBarHeight
  
      // Get strand color
      let color
      switch (strand) {
        case "STEM":
          color = "#2563eb"
          break
        case "HUMSS":
          color = "#8b5cf6"
          break
        case "GAS":
          color = "#10b981"
          break
        case "TVL-ICT":
          color = "#4f46e5"
          break
        case "TVL-HE":
          color = "#f59e0b"
          break
        default:
          color = "#64748b"
      }
  
      // Draw bar
      ctx.fillStyle = color
      ctx.fillRect(x, startY - barHeight, barWidth, barHeight)
  
      // Draw percentage
      ctx.fillStyle = "#333"
      ctx.font = "bold 14px Arial"
      ctx.textAlign = "center"
      ctx.fillText(`${percentage}%`, x + barWidth / 2, startY - barHeight - 10)
  
      // Draw strand label
      ctx.fillStyle = "#333"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.fillText(strand, x + barWidth / 2, startY + 20)
  
      x += barWidth + spacing
    })
  
    // Draw y-axis
    ctx.strokeStyle = "#ccc"
    ctx.beginPath()
    ctx.moveTo(startX - 10, 40)
    ctx.lineTo(startX - 10, startY)
    ctx.stroke()
  
    // Draw x-axis
    ctx.beginPath()
    ctx.moveTo(startX - 10, startY)
    ctx.lineTo(width - 20, startY)
    ctx.stroke()
  }
  
  // Populate all strands section
  function populateAllStrands() {
    const allStrandsGrid = document.getElementById("all-strands-grid")
    allStrandsGrid.innerHTML = ""
  
    Object.entries(strandInfo).forEach(([key, info]) => {
      const isRecommended = key === topStrand
      const strandCard = document.createElement("div")
      strandCard.className = `strand-overview-card ${isRecommended ? "recommended" : ""}`
  
      strandCard.innerHTML = `
              <div class="strand-overview-header ${info.color}"></div>
              <div class="strand-overview-content">
                  <div class="strand-overview-title">
                      <div class="strand-overview-icon ${info.color}">
                          <i class="${info.icon}"></i>
                      </div>
                      <h4>${key}</h4>
                      ${isRecommended ? '<span class="recommended-badge">Recommended</span>' : ""}
                  </div>
                  <p class="strand-overview-description">${info.description}</p>
                  <a href="explore-strands.html#${key.toLowerCase()}" class="strand-overview-link">
                      Explore in detail <i class="fas fa-chevron-right"></i>
                  </a>
              </div>
          `
  
      allStrandsGrid.appendChild(strandCard)
    })
  }
  
  // Reset the quiz
  function resetQuiz() {
    currentQuestion = 0
    answers = {
      STEM: 0,
      HUMSS: 0,
      GAS: 0,
      "TVL-ICT": 0,
      "TVL-HE": 0,
    }
    selectedOption = null
    userResponses = []
    quizStartTime = new Date()
    updateTimer()
  
    // Hide results and all strands containers
    resultsContainer.style.display = "none"
    allStrandsContainer.style.display = "none"
  
    // Show quiz container
    quizContainer.style.display = "block"
  
    // Reset quiz
    showQuestion(currentQuestion)
    updateProgress()
  }
  
  // Save results to localStorage
  function saveResults() {
    const results = {
      topStrand: topStrand,
      answers: answers,
      timestamp: new Date().toISOString(),
    }
  
    localStorage.setItem("strandFinderResults", JSON.stringify(results))
  }
  
  // Load results from localStorage
  function loadResults() {
    const savedResults = localStorage.getItem("strandFinderResults")
    if (savedResults) {
      return JSON.parse(savedResults)
    }
    return null
  }
  
  // Share results
  function shareResults() {
    const text = `I just took Brightfield Academy's Strand Finder Quiz and discovered that ${topStrand} (${strandInfo[topStrand].title}) is the perfect academic track for me! Take the quiz to find yours: https://brightfieldacademy.edu/strand-finder`
  
    if (navigator.share) {
      navigator
        .share({
          title: "My Strand Finder Results",
          text: text,
          url: "https://brightfieldacademy.edu/strand-finder",
        })
        .catch((error) => console.log("Error sharing:", error))
    } else {
      // Fallback for browsers that don't support Web Share API
      const dummy = document.createElement("textarea")
      document.body.appendChild(dummy)
      dummy.value = text
      dummy.select()
      document.execCommand("copy")
      document.body.removeChild(dummy)
  
      alert("Result copied to clipboard! Share it with your friends.")
    }
  }
  
  // Print results
  function printResults() {
    window.print()
  }
  
  // Initialize when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    initQuiz()
  
    // Add event listeners for strand cards on homepage
    const strandCards = document.querySelectorAll(".strand-card")
    if (strandCards) {
      strandCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
          const description = this.querySelector(".strand-description")
          if (description) {
            description.style.display = "block"
          }
        })
  
        card.addEventListener("mouseleave", function () {
          const description = this.querySelector(".strand-description")
          if (description) {
            description.style.display = "none"
          }
        })
  
        card.addEventListener("click", function () {
          const strand = this.getAttribute("data-strand")
          if (strand) {
            window.location.href = `explore-strands.html#${strand.toLowerCase()}`
          } else {
            window.location.href = "strand-finder.html"
          }
        })
      })
    }
  
    // Add event listeners for share and print buttons
    const shareBtn = document.getElementById("share-results")
    const printBtn = document.getElementById("print-results")
  
    if (shareBtn) {
      shareBtn.addEventListener("click", shareResults)
    }
  
    if (printBtn) {
      printBtn.addEventListener("click", printResults)
    }
  })
  
  