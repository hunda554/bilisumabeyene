// Toggle Mobile Menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.classList.toggle("active"); // Toggle instead of add
    } else {
        console.error('Navbar element not found');
    }
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.classList.remove("active");
    } else {
        console.error('Navbar element not found');
    }
}

// Typewriter Effect
const words = ["I'm a Video Editor", "Developer", "Designer", "Freelancer"];
let wordIndex = 0;
let letterIndex = 0;
const typewriterText = document.querySelector(".typewriter-text");

function typeEffect() {
    if (typewriterText && letterIndex < words[wordIndex].length) {
        typewriterText.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (letterIndex > 0) {
        if (typewriterText) {
            typewriterText.textContent = words[wordIndex].substring(0, letterIndex - 1);
        }
        letterIndex--;
        setTimeout(eraseEffect, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
}

// Start Typewriter Effect on Load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { id: "html", percentage: 80 },
        { id: "css", percentage: 70 },
        { id: "videos", percentage: 85 },
        { id: "python", percentage: 90 }
    ];

    skills.forEach(skill => {
        let progressBar = document.getElementById(skill.id);
        let percentageText = document.getElementById(`${skill.id}-percentage`);

        if (progressBar && percentageText) {
            let currentWidth = 0;
            let interval = setInterval(() => {
                if (currentWidth >= skill.percentage) {
                    clearInterval(interval);
                } else {
                    currentWidth++;
                    progressBar.style.width = `${currentWidth}%`;
                    percentageText.innerText = `${currentWidth}%`;
                }
            }, 20); // Adjust speed if needed
        } else {
            console.error(`Element not found: ${skill.id}`);
        }
    });
});

// Show Description Overlay
function showDescription(id) {
    const description = document.getElementById("desc" + id);
    if (description) {
        description.classList.add("active");
    } else {
        console.error(`Description element not found for ID: ${id}`);
    }
}

// Hide Description Overlay
function hideDescription(id) {
    const description = document.getElementById("desc" + id);
    if (description) {
        description.classList.remove("active");
    } else {
        console.error(`Description element not found for ID: ${id}`);
    }
}

// Video Size Adjustment
document.querySelectorAll(".video-small").forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.classList.add('video-large');
    });
    video.addEventListener('mouseleave', () => {
        video.classList.remove('video-large');
    });
});
