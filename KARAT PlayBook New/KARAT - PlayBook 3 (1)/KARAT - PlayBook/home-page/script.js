// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links (dynamic offset using navbar height)
function getNavbarHeight() {
    const nav = document.querySelector('.navbar');
    return nav ? nav.getBoundingClientRect().height : 0;
}

function updateNavbarOffset() {
    const h = getNavbarHeight();
    // set CSS custom property and html scroll-padding-top so native anchor and :target work
    document.documentElement.style.setProperty('--navbar-height', h + 'px');
    document.documentElement.style.setProperty('scroll-padding-top', h + 'px');
}

// Attach smooth scrolling with offset for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return; // ignore
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbarHeight = getNavbarHeight();
            const targetY = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: targetY, behavior: 'smooth' });

            // update URL hash without jumping
            history.pushState(null, '', href);
        }
    });
});

// Smooth scroll to anchor on page load if hash is present (apply offset)
window.addEventListener('DOMContentLoaded', function () {
    updateNavbarOffset();
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                const navbarHeight = getNavbarHeight();
                const targetY = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: targetY, behavior: 'smooth' });
            }, 120);
        }
    }
});

// update offset on resize and load
window.addEventListener('resize', updateNavbarOffset);
window.addEventListener('load', updateNavbarOffset);

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    // navbar height may change when .scrolled class toggles, update offset
    updateNavbarOffset();
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all role cards and feature items
document.querySelectorAll('.role-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add hover effects to role cards
document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click animation to buttons
document.querySelectorAll('.btn, .role-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.height, rect.width);
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

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn, .role-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Accordion functionality for About section
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentNode;
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
});

// Guidelines Phase Toggle Functionality
function togglePhase(phaseHeader) {
    const phaseContent = phaseHeader.nextElementSibling;
    const isActive = phaseContent.classList.contains('active');
    
    // Toggle active state
    if (isActive) {
        phaseContent.classList.remove('active');
        phaseHeader.classList.remove('active');
    } else {
        phaseContent.classList.add('active');
        phaseHeader.classList.add('active');
    }
}

// Introduction to Roles - Table View
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile data labels for responsive table
    const tableCells = document.querySelectorAll('.roles-comparison-table td');
    const headers = ['Category', 'Persona', 'GCB Level', 'Description', 'Test Composition'];
    
    tableCells.forEach((cell, index) => {
        const headerIndex = index % headers.length;
        cell.setAttribute('data-label', headers[headerIndex]);
    });
});

// Tab switching for left-vertical tabs (frontend pattern and KARAT Journey)
// This handler activates .tab-content panels when a .tab-btn is clicked and supports deep-link hash navigation.
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
    const tabContents = Array.from(document.querySelectorAll('.tab-content'));

    if (tabButtons.length === 0 || tabContents.length === 0) return;

    function activateTab(tabId, btnElement) {
        // deactivate all buttons and contents
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // activate requested
        if (btnElement) btnElement.classList.add('active');
        const panel = document.getElementById(tabId);
