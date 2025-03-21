// Initialization function to run when the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    updateVisitorCount();
    setupCookieConsent();
    setupChat();
    setupForm();
    setupTestimonials();
    setupDownloadButtons();
    setupCTAButtons();
});

// Countdown timer
function startCountdown() {
    let minutes = 5;
    let seconds = 0;
    const countdownElement = document.getElementById('countdown');
    
    if (!countdownElement) return;
    
    const interval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "EXPIRED!";
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        
        countdownElement.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Visitor count randomizer
function updateVisitorCount() {
    const visitorCountElement = document.getElementById('visitor-count');
    
    if (!visitorCountElement) return;
    
    const baseCount = 27;
    
    setInterval(() => {
        const randomChange = Math.floor(Math.random() * 5) - 2; // Random value between -2 and 2
        const newCount = Math.max(10, baseCount + randomChange);
        visitorCountElement.innerText = newCount;
    }, 3000);
}

// Cookie consent handling
function setupCookieConsent() {
    const cookieConsent = document.getElementById('cookie-consent');
    
    if (!cookieConsent) return;
    
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const declineButton = document.querySelector('.decline-btn');
    
    acceptButtons.forEach(button => {
        button.addEventListener('click', () => {
            cookieConsent.style.display = 'none';
            showVirusScanner();
        });
    });
    
    declineButton.addEventListener('click', () => {
        alert("WARNING: Your device may remain at risk! Are you sure?");
        cookieConsent.style.display = 'none';
    });
}

// Show virus scanner popup
function showVirusScanner() {
    // This function would normally create and show a fake virus scanner popup
    // But we'll just simulate it with an alert for now
    setTimeout(() => {
        alert("🔍 Scanning your device for viruses... \n\n⚠️ WARNING: 3 potential threats detected! \n\nPlease download our security software to fix these issues.");
    }, 2000);
}

// Live chat interaction
function setupChat() {
    const chatBox = document.getElementById('live-chat');
    
    if (!chatBox) return;
    
    const closeChat = document.querySelector('.close-chat');
    const chatInput = document.querySelector('.chat-input input');
    const chatSendButton = document.querySelector('.chat-input button');
    const chatMessages = document.querySelector('.chat-messages');
    
    closeChat.addEventListener('click', () => {
        chatBox.style.display = 'none';
        setTimeout(() => {
            chatBox.style.display = 'block';
        }, 30000); // Reappear after 30 seconds
    });
    
    chatSendButton.addEventListener('click', () => {
        sendChatMessage(chatInput, chatMessages);
    });
    
    // Add "Press Enter to send" functionality
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage(chatInput, chatMessages);
        }
    });
}

// Helper function to send chat messages
function sendChatMessage(chatInput, chatMessages) {
    if (chatInput.value.trim() !== '') {
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.innerHTML = `<b>You:</b> ${chatInput.value}`;
        chatMessages.appendChild(userMessage);
        chatInput.value = '';
        
        // Simulate AI response after a delay
        setTimeout(() => {
            const aiResponses = [
                "Shreneek is available for immediate hire! Shall I schedule a call?",
                "Our AI analysis shows your company needs Shreneek's expertise ASAP!",
                "AMAZING choice! Shreneek's AI models will boost your revenue by at least 200%!",
                "Would you like to get the SPECIAL DISCOUNT available today only?",
                "Hurry! 3 other companies are trying to hire Shreneek right now!"
            ];
            
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            const aiMessage = document.createElement('div');
            aiMessage.innerHTML = `<b>AI Support:</b> ${randomResponse}`;
            chatMessages.appendChild(aiMessage);
            
            // Auto-scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Setup form submission handling
function setupForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        const formSuccess = document.getElementById('form-success');
        if (formSuccess) {
            formSuccess.style.display = 'block';
        } else {
            alert("Thank you for your interest! Shreneek will contact you ASAP with MIND-BLOWING solutions!");
        }
        
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            if (formSuccess) {
                formSuccess.style.display = 'none';
            }
        }, 5000);
    });
}

// Randomly show testimonials
function setupTestimonials() {
    const testimonialBubble = document.querySelector('.testimonial-bubble');
    
    if (!testimonialBubble) return;
    
    const testimonials = [
        { name: "Sarah J.", text: "Just hired Shreneek for our AI project. AMAZING results in just 3 days! Revenue up 45%!!" },
        { name: "John T.", text: "Shreneek's data models are INCREDIBLE! Our efficiency improved by 62% overnight!" },
        { name: "Emily R.", text: "Best data scientist ever! Solved our complex problems in hours, not weeks!" },
        { name: "Michael P.", text: "We interviewed 23 data scientists. Shreneek was LIGHT YEARS ahead of everyone!" },
        { name: "Lisa K.", text: "His AI predictions were 99.7% accurate! Absolutely MIND-BLOWING!" }
    ];
    
    // Initially hide the bubble
    testimonialBubble.style.display = 'none';
    
    // Show random testimonials periodically
    setInterval(() => {
        const random = Math.floor(Math.random() * testimonials.length);
        const testimonial = testimonials[random];
        
        const nameElement = testimonialBubble.querySelector('.testimonial-user b');
        const textElement = testimonialBubble.querySelector('p');
        
        if (nameElement && textElement) {
            nameElement.textContent = testimonial.name;
            textElement.textContent = testimonial.text;
        }
        
        testimonialBubble.style.display = 'block';
        
        // Hide after 10 seconds
        setTimeout(() => {
            testimonialBubble.style.display = 'none';
        }, 10000);
    }, 15000); // Show a new one every 15 seconds
}

// Setup download buttons
function setupDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert("CONGRATULATIONS! You're one step closer to hiring the BEST Data Scientist! Please fill out the form to continue.");
            
            // Scroll to contact section
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Setup CTA buttons
function setupCTAButtons() {
    const giantCtaBtn = document.querySelector('.giant-cta-btn');
    
    if (giantCtaBtn) {
        giantCtaBtn.addEventListener('click', () => {
            alert("AMAZING CHOICE! Please scroll down to the contact form to hire Shreneek and claim your FREE bonuses worth €2,797!");
            
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Function to show popup modals
function showPopup(popupId) {
    const popup = document.getElementById(`${popupId}-modal`);
    if (popup) {
        popup.style.display = 'block';
    }
}

// Function to close popup modals
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}
