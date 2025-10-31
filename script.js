const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Typing test functionality
const practiceTexts = [
    "The quick brown fox jumps over the lazy dog. This pangram contains all the letters of the English alphabet. It is commonly used for touch typing practice because it requires typing all the letters of the alphabet.",
    "Programming is the art of telling another human what one wants the computer to do. Efficient typing skills help developers write code faster and with fewer errors. Practice makes perfect!",
    "Touch typing involves typing without looking at the keyboard. This method uses muscle memory to find keys quickly, increasing speed and reducing errors. Keep your fingers on the home row!",
    "Consistent practice is key to improving typing speed. Set aside time each day to practice, focus on accuracy first, and speed will naturally follow. Stay patient and persistent!",
    "Typing speed tests measure how quickly and accurately you can type. Regular practice with varied texts helps adapt to different words and patterns. Challenge yourself daily!"
];

const lessonText = document.getElementById('lessonText');
const typingInput = document.getElementById('typingInput');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const timeDisplay = document.getElementById('time');
const finalWpmDisplay = document.getElementById('finalWpm');
const finalAccuracyDisplay = document.getElementById('finalAccuracy');
const totalErrorsDisplay = document.getElementById('totalErrors');
const resultsDiv = document.getElementById('results');

let originalText = '';
let timer;
let timeLeft = 300;
let isTestRunning = false;
let startTime;
let currentTextIndex = 0;
let completedParagraphs = [];
let currentCorrect = 0;
let currentErrors = 0;

// Initialize the test
function initTest() {
    currentTextIndex = 0;
    completedParagraphs = [];
    currentCorrect = 0;
    currentErrors = 0;
    originalText = practiceTexts[currentTextIndex];
    
    timeLeft = 300;
    timeDisplay.textContent = '5:00';
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '0%';

    typingInput.disabled = false;
    typingInput.value = '';
    typingInput.focus();

    highlightText();

    startTime = new Date().getTime();
    timer = setInterval(updateTimer, 1000);

    startBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
    resultsDiv.style.display = 'none';

    isTestRunning = true;
}

// Update timer every second
function updateTimer() {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    
    if (timeLeft <= 0) endTest();
}

// Calculate and display stats
function updateStats() {
    const currentTime = new Date().getTime();
    const timeElapsed = (currentTime - startTime) / 1000 / 60;
    const totalTyped = completedParagraphs.reduce((a, b) => a + b, 0) + typingInput.value.length;
    const totalCorrect = completedParagraphs.reduce((a, b) => a + b, 0) + currentCorrect;

    const wpm = Math.round((totalCorrect / 5) / timeElapsed) || 0;
    const accuracy = totalTyped > 0 ? Math.round((totalCorrect / totalTyped) * 100) : 0;

    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = `${accuracy}%`;
}

// End the test
function endTest() {
    clearInterval(timer);
    typingInput.disabled = true;
    isTestRunning = false;

    const endTime = new Date().getTime();
    const timeElapsed = (endTime - startTime) / 1000 / 60;
    const totalTyped = completedParagraphs.reduce((a, b) => a + b, 0) + typingInput.value.length;
    const totalCorrect = completedParagraphs.reduce((a, b) => a + b, 0) + currentCorrect;

    const finalWpm = Math.round((totalCorrect / 5) / timeElapsed) || 0;
    const finalAccuracy = totalTyped > 0 ? Math.round((totalCorrect / totalTyped) * 100) : 0;

    finalWpmDisplay.textContent = finalWpm;
    finalAccuracyDisplay.textContent = `${finalAccuracy}%`;
    totalErrorsDisplay.textContent = currentErrors;

    resultsDiv.style.display = 'block';
    typingInput.classList.add('timer-ended');
}

// Reset the test
function resetTest() {
    clearInterval(timer);
    typingInput.disabled = true;
    isTestRunning = false;

    timeDisplay.textContent = '5:00';
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '0%';
    typingInput.value = '';
    lessonText.innerHTML = practiceTexts[0];
    
    startBtn.style.display = 'inline-block';
    resetBtn.style.display = 'none';
    resultsDiv.style.display = 'none';
    typingInput.classList.remove('timer-ended');
}

// Highlight the text to type
function highlightText() {
    let html = '';
    for (let i = 0; i < originalText.length; i++) {
        html += `<span id="char-${i}">${originalText[i]}</span>`;
    }
    lessonText.innerHTML = html;
}

// Event listeners
startBtn.addEventListener('click', initTest);
resetBtn.addEventListener('click', resetTest);

typingInput.addEventListener('input', (e) => {
    if (!isTestRunning) return;
    
    const inputText = typingInput.value;
    currentCorrect = 0;
    currentErrors = 0;

    // Update character highlighting
    for (let i = 0; i < inputText.length; i++) {
        const charSpan = document.getElementById(`char-${i}`);
        charSpan.classList.remove('correct', 'incorrect', 'current');

        if (inputText[i] === originalText[i]) {
            charSpan.classList.add('correct');
            currentCorrect++;
        } else {
            charSpan.classList.add('incorrect');
            currentErrors++;
        }
    }

    // Highlight current character
    if (inputText.length < originalText.length) {
        document.getElementById(`char-${inputText.length}`).classList.add('current');
    }

    // Check paragraph completion
    if (inputText === originalText) {
        completedParagraphs.push(originalText.length);
        currentTextIndex = (currentTextIndex + 1) % practiceTexts.length;
        originalText = practiceTexts[currentTextIndex];
        typingInput.value = '';
        highlightText();
        currentCorrect = 0;
        currentErrors = 0;
    }

    updateStats();
});

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hero-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.registerPlugin(ScrollTrigger);

    // Section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%'
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        });
    });

    // Feature cards
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            duration: 0.8,
            y: 40,
            opacity: 0,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Testimonials and form
    gsap.from('.testimonial', {
        scrollTrigger: {
            trigger: '.testimonial',
            start: 'top 85%'
        },
        duration: 0.8,
        y: 40,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 85%'
        },
        duration: 0.8,
        y: 40,
        opacity: 0,
        ease: 'power3.out'
    });
    const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // EmailJS parameters
    emailjs.sendForm('service_fv280os', 'template_mjg7979', this)
        .then(() => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }, (error) => {
            alert('Oops! Something went wrong. Please try again.');
            console.error('FAILED...', error);
        });
});

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }
    });
});