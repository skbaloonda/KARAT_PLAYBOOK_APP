// Backend Engineer - System Design Playbook JavaScript

// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const heroSection = document.querySelector('.architect-hero');
    
    // Set initial state - Introduction tab active, hero visible
    document.body.setAttribute('data-active-tab', 'introduction');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            btn.classList.add('active');
            
            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.add('active');
            }
            
            // Update body attribute and control hero section visibility
            document.body.setAttribute('data-active-tab', tabId);
            
            // Hide/show hero section based on tab
            if (heroSection) {
                if (tabId === 'introduction') {
                    heroSection.classList.remove('hidden');
                } else {
                    heroSection.classList.add('hidden');
                }
            }
            
            // Close mobile sidebar on tab selection
            const tabsContainer = document.querySelector('.tabs-container');
            const overlay = document.getElementById('mobileSidebarOverlay');
            if (tabsContainer && overlay) {
                tabsContainer.classList.remove('mobile-open');
                overlay.classList.remove('active');
            }
        });
    });
});

// Mobile sidebar toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('mobileSidebarToggle');
    const sidebar = document.querySelector('.tabs-container');
    const overlay = document.getElementById('mobileSidebarOverlay');
    
    if (toggleBtn && sidebar && overlay) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.add('mobile-open');
            overlay.classList.add('active');
        });
        
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation for tab content
document.addEventListener('DOMContentLoaded', () => {
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabContents.forEach(content => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(content);
    });
});

// Accordion functionality for principles
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.principle-header')) {
            const header = e.target.closest('.principle-header');
            const principleItem = header.closest('.principle-item');
            const content = principleItem.querySelector('.principle-content');
            const toggle = header.querySelector('.principle-toggle');
            
            if (content && toggle) {
                if (principleItem.classList.contains('active')) {
                    principleItem.classList.remove('active');
                    content.style.maxHeight = "0";
                    toggle.textContent = "+";
                } else {
                    principleItem.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                    toggle.textContent = "-";
                }
            }
        }
    });
});

// Questions tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const questionsTabBtns = document.querySelectorAll('.questions-tab-btn');
    const questionsLevelContents = document.querySelectorAll('.questions-level-content');
    
    questionsTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            
            // Remove active class from all tabs
            questionsTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding content
            questionsLevelContents.forEach(content => {
                content.classList.remove('active');
            });
            
            const targetContent = document.getElementById(`${level}-questions`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Interview tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const interviewTabBtns = document.querySelectorAll('.interview-tab-btn');
    const interviewLevelContents = document.querySelectorAll('.interview-level-content');
    
    interviewTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            
            // Remove active class from all tabs
            interviewTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding content
            interviewLevelContents.forEach(content => {
                content.classList.remove('active');
            });
            
            const targetContent = document.getElementById(`${level}-interviews`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Toggle script details for interview scenarios
function toggleScriptDetails(element) {
    const scriptItem = element.closest('.interview-script');
    const details = scriptItem.querySelector('.script-details');
    const arrow = element.querySelector('.script-arrow');
    
    if (scriptItem.classList.contains('active')) {
        scriptItem.classList.remove('active');
        details.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        scriptItem.classList.add('active');
        details.style.maxHeight = details.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Scroll to top functionality
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
