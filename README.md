# TypeFlow - Master Your Typing Skills 🎯⌨️

![TypeFlow Banner](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80)

## 📖 Overview

**TypeFlow** is an interactive web-based typing tutor application designed to help users improve their typing speed and accuracy. With real-time feedback, progressive lessons, and comprehensive statistics tracking, TypeFlow makes learning touch typing engaging and effective.

## ✨ Features

### 🚀 Core Functionality
- **Real-time Typing Test**: Practice typing with instant feedback on speed and accuracy
- **WPM (Words Per Minute) Tracker**: Monitor your typing speed in real-time
- **Accuracy Analysis**: Get detailed feedback on typing precision with error tracking
- **5-Minute Timed Tests**: Complete typing tests with countdown timer
- **Multiple Practice Texts**: Automatic rotation through varied practice paragraphs

### 🎨 User Experience
- **Dark Mode Support**: Toggle between light and dark themes with persistent preferences
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: GSAP-powered animations for enhanced user experience
- **Character Highlighting**: Visual feedback showing correct, incorrect, and current characters
- **Progress Statistics**: Comprehensive results display after each test

### 📚 Educational Content
- **Progressive Lessons**: 
  - Beginner: Home Row Keys (ASDF JKL;)
  - Intermediate: Top Row Keys (QWERTYUIOP)
  - Advanced: Speed Drills
- **Touch Typing Guidance**: Learn proper finger placement and typing techniques

### 📧 Communication
- **Contact Form**: EmailJS integration for user inquiries and feedback
- **Social Media Links**: Connect on GitHub, Twitter, Instagram, and LinkedIn

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables and animations
- **JavaScript (ES6+)**: Interactive functionality and dynamic content

### Libraries & APIs
- **GSAP (GreenSock Animation Platform)**: Smooth scroll-triggered animations
- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **Font Awesome 6.4.0**: Icon library for UI elements
- **EmailJS 3.2.0**: Email service integration for contact form

### Design Features
- **CSS Custom Properties**: Theme switching and consistent styling
- **Flexbox & Grid**: Responsive layout system
- **CSS Animations**: Custom keyframe animations and transitions

## 📂 Project Structure

```
TypeFlow/
│
├── index.html          # Main HTML structure
├── styles.css          # Stylesheet with theme support
├── script.js           # JavaScript functionality
├── Favicon.png         # Website favicon
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build process required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saqibayaz4314/TypeFlow.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd TypeFlow
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`

## 📖 How to Use

### Starting a Typing Test

1. **Navigate to the Practice Section**: Click "Practice" in the navigation or scroll down
2. **Click "Start Test"**: The 5-minute timer begins immediately
3. **Start Typing**: Type the displayed text in the input area
4. **Get Real-time Feedback**:
   - ✅ Green characters indicate correct typing
   - ❌ Red underlined characters show errors
   - 💙 Blue highlight shows your current position
5. **Monitor Your Progress**: Watch WPM and accuracy update live
6. **Complete the Test**: Finish within 5 minutes or type all paragraphs
7. **View Results**: See your final WPM, accuracy, and total errors

### Features Guide

- **Theme Toggle**: Click the moon/sun icon in the header to switch themes
- **Mobile Menu**: Tap the hamburger icon for navigation on mobile devices
- **Contact Form**: Use the contact section to send messages directly
- **Smooth Navigation**: Click any navigation link for smooth scrolling

## 🎯 Key Metrics

The typing test tracks three essential metrics:

1. **WPM (Words Per Minute)**: Standard typing speed measurement (1 word = 5 characters)
2. **Accuracy**: Percentage of correctly typed characters
3. **Errors**: Total count of typing mistakes

## 🎨 Customization

### Theme Variables

The project uses CSS custom properties for easy theming:

```css
/* Light Mode */
--primary-color: #4361ee;
--secondary-color: #3a0ca3;
--accent-color: #4cc9f0;

/* Dark Mode */
--primary-color: #4cc9f0;
--secondary-color: #4361ee;
--bg-color: #212529;
```

### Adding Practice Texts

Edit the `practiceTexts` array in `script.js`:

```javascript
const practiceTexts = [
    "Your custom practice text here...",
    // Add more texts
];
```

## 📧 EmailJS Configuration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Replace the credentials in `index.html`:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```
4. Update service and template IDs in `script.js`:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
   ```

## 🌐 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Saqib Ayaz**

- GitHub: [@Saqibayaz4314](https://github.com/Saqibayaz4314)
- Twitter: [@saqibayaz95](https://x.com/saqibayaz95?t=2b59zBQ2yDtEjLfxg6ACow&s=09)
- Instagram: [@saqibayaz4314](https://www.instagram.com/saqibayaz4314/)
- LinkedIn: [Saqib Ayaz](https://www.linkedin.com/in/saqib-ayaz19/)

## 🙏 Acknowledgments

- Inspiration from various typing tutor platforms
- [Unsplash](https://unsplash.com/) for high-quality images
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- [GSAP](https://greensock.com/gsap/) for smooth animations
- [EmailJS](https://www.emailjs.com/) for email functionality

## 🔮 Future Enhancements

- [ ] User authentication and profile system
- [ ] Progress tracking and historical statistics
- [ ] Multiplayer typing races
- [ ] Custom lesson creation
- [ ] Keyboard visualization
- [ ] Leaderboard system
- [ ] More language support
- [ ] Advanced analytics dashboard

## 📊 Project Stats

- **Lines of Code**: ~1200+
- **File Size**: Lightweight and optimized
- **Load Time**: < 2 seconds
- **Performance**: 90+ Lighthouse score

## 🐛 Known Issues

- None reported yet! Please open an issue if you find any bugs.

## 💬 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact via the website contact form
- Reach out on social media

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by Saqib Ayaz**

© 2025 TypeFlow. All rights reserved.

</div>
