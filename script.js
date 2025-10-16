// ===== CYBERPUNK LOADING SCREEN =====
let loadingProgress = 0;
const loader = document.getElementById('loader');
const loadingBar = document.getElementById('loadingProgress');
const loadingPercentage = document.getElementById('loadingPercentage');

// Loading takes exactly 8 seconds
const loadingDuration = 8000; // 8 seconds
const updateInterval = 50; // Update every 50ms for smooth animation
const incrementAmount = 100 / (loadingDuration / updateInterval);

// Function to complete loading
function completeLoading() {
    // Trigger curtain reveal
    loader.classList.add('reveal-curtains');
    document.body.classList.add('portfolio-reveal');
    
    // Hide loader completely after curtain animation
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 1500);
}

// Animate loading progress over 8 seconds
const loadingInterval = setInterval(() => {
    if (loadingProgress < 100) {
        loadingProgress += incrementAmount;
        if (loadingProgress > 100) loadingProgress = 100;
        
        loadingBar.style.width = loadingProgress + '%';
        loadingPercentage.textContent = Math.floor(loadingProgress) + '%';
    } else {
        clearInterval(loadingInterval);
        setTimeout(completeLoading, 300);
    }
}, updateInterval);

// Safety fallback - ensure page shows after 10 seconds max
setTimeout(() => {
    if (!document.body.classList.contains('portfolio-reveal')) {
        console.log('Fallback triggered');
        loadingProgress = 100;
        loadingBar.style.width = '100%';
        loadingPercentage.textContent = '100%';
        completeLoading();
    }
}, 10000);

// Prevent scrolling while loading
document.body.style.overflow = 'hidden';

// ===== NAVIGATION SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// ===== HAMBURGER MENU =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Close menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING FOR NAV LINKS =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== UPDATE ACTIVE NAV LINK ON SCROLL =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== EYE-CATCHING SCROLL ANIMATIONS =====
const scrollObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

// Create observer for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, scrollObserverOptions);

// Create observer for cards with staggered animation
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('card-visible');
            }, delay);
        }
    });
}, scrollObserverOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Observe and set delays for cards
    const cards = document.querySelectorAll('.glass-card, .project-card, .stat-card');
    cards.forEach((card, index) => {
        card.dataset.delay = index * 100; // Staggered delay
        cardObserver.observe(card);
    });
    
    // Observe skill items with delays
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.dataset.delay = index * 50;
        cardObserver.observe(item);
    });
    
    // Add special animation to section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        cardObserver.observe(header);
    });
});

// ===== ANIMATED COUNTERS FOR STATS =====
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateCounters() {
    if (hasAnimated) return;
    
    const statsSection = document.getElementById('about');
    const statsPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (statsPosition < screenPosition) {
        hasAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateCounters);

// ===== SKILL ITEMS HOVER EFFECT =====
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project card 3D effect removed for better performance

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = toast.querySelector('.toast-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    if (name && email && subject && message) {
        // Show success toast
        showToast('Message sent successfully! I\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a backend server
        console.log('Form Data:', { name, email, subject, message });
    } else {
        showToast('Please fill in all fields.', 'error');
    }
});

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    if (type === 'error') {
        toast.style.borderColor = '#ef4444';
        toast.querySelector('i').style.color = '#ef4444';
    } else {
        toast.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        toast.querySelector('i').style.color = '#10b981';
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== FORM INPUT FOCUS EFFECTS =====
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// ===== DOWNLOAD CV BUTTON =====
const downloadCVBtn = document.getElementById('downloadCV');

downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('CV download feature coming soon!');
    
    // In a real application, you would link to an actual CV file
    // window.location.href = 'path/to/your-cv.pdf';
});

// Custom cursor removed for better performance

// Parallax removed for better performance

// ===== BUTTON RIPPLE EFFECT =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== SET CURRENT YEAR IN FOOTER =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== SCROLL TO TOP ON PAGE LOAD =====
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Context menu prevention removed

// ===== LAZY LOADING FOR IMAGES (if you add real images later) =====
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Page load animation removed for better performance

// ===== PERFORMANCE: DEBOUNCE SCROLL EVENTS =====
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Any performance-intensive scroll operations go here
    }, 100);
});

// Easter egg removed for better performance

// ===== CONSOLE MESSAGE FOR DEVELOPERS =====
console.log('%c🚀 Welcome to my Portfolio!', 'font-size: 20px; font-weight: bold; color: #d4af37;');
console.log('%cBuilt with passion using vanilla JavaScript, HTML5, and CSS3', 'font-size: 14px; color: #b4b4c8;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'font-size: 14px; color: #3b82f6;');

// ===== ACCESSIBILITY: KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===== PROJECT IMAGE LOADER =====
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-img');
    
    projectImages.forEach(img => {
        // Check if image loads successfully
        img.addEventListener('load', function() {
            // Image loaded successfully - hide placeholder
            const placeholder = this.closest('.project-image').querySelector('.project-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        });
        
        // If image fails to load
        img.addEventListener('error', function() {
            // Hide the broken image, show placeholder
            this.style.display = 'none';
            const placeholder = this.closest('.project-image').querySelector('.project-placeholder');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
        });
        
        // Check if image src is empty or invalid
        if (!img.src || img.src === '' || img.src === window.location.href) {
            img.style.display = 'none';
        }
    });
});

// ===== PROJECT MODAL FUNCTIONS =====
function openProjectModal(title, image, description, tags, link) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');
    const modalLink = document.getElementById('modalLink');
    
    // Set content
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalLink.href = link;
    
    // Handle image
    if (image && image !== '') {
        modalImage.src = image;
        modalImage.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23f8f9ff" width="800" height="600"/%3E%3Ctext x="400" y="300" font-family="Arial" font-size="24" fill="%238b5cf6" text-anchor="middle"%3EProject Screenshot%3C/text%3E%3C/svg%3E';
        };
    }
    
    // Create tags
    modalTags.innerHTML = '';
    if (tags) {
        const tagArray = tags.split(',');
        tagArray.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag.trim();
            modalTags.appendChild(tagElement);
        });
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ===== END OF SCRIPT =====
console.log('✅ Portfolio JavaScript loaded successfully');
console.log('🏠 Real Estate Style Portfolio Ready!');
console.log('📸 Project Modal System Ready!');
