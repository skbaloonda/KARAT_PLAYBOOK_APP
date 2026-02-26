// Quality Engineer - Tester JavaScript

// Tab Switching
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const hero = document.querySelector('.testing-hero');

    // Set initial state - Introduction tab active, hero visible
    document.body.setAttribute('data-active-tab', 'introduction');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Update body attribute for CSS control
            document.body.setAttribute('data-active-tab', targetTab);

            // Hide hero section for all tabs except introduction
            if (targetTab === 'introduction') {
                hero.style.display = 'block';
            } else {
                hero.style.display = 'none';
            }

            // Scroll to top of content
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Mobile Sidebar Toggle
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            if (overlay) {
                overlay.classList.toggle('active');
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // Close sidebar when tab is clicked on mobile
    if (window.innerWidth <= 1024) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                sidebar.classList.remove('active');
                if (overlay) {
                    overlay.classList.remove('active');
                }
            });
        });
    }

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Questions Tab Switching
    const questionsTabBtns = document.querySelectorAll('.questions-tab-btn');
    const questionsLevelContents = document.querySelectorAll('.questions-level-content');

    console.debug('Questions tab buttons found:', questionsTabBtns.length);
    questionsTabBtns.forEach((b, i) => console.debug(`questions-tab-btn[${i}] data-level=`, b.dataset.level));
    console.debug('Questions panes found:', questionsLevelContents.length);
    questionsLevelContents.forEach((c, i) => console.debug(`questions-level-content[${i}] id=`, c.id));

    questionsTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.dataset.level;

            questionsTabBtns.forEach(b => b.classList.remove('active'));
            questionsLevelContents.forEach(content => content.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(`${level}-questions`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Interview Tab Switching
    const interviewTabBtns = document.querySelectorAll('.interview-tab-btn');
    const interviewLevelContents = document.querySelectorAll('.interview-level-content');

    interviewTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.dataset.level;

            interviewTabBtns.forEach(b => b.classList.remove('active'));
            interviewLevelContents.forEach(content => content.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(`${level}-interviews`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (!e.target.closest('.sidebar') && !e.target.closest('.hamburger')) {
                sidebar.classList.remove('active');
                if (hamburgerMenu) {
                    hamburgerMenu.classList.remove('active');
                }
            }
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#coming-soon') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Accordion functionality for principles
document.addEventListener('DOMContentLoaded', () => {
    const principleHeaders = document.querySelectorAll('.principle-header');
    
    principleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const principleItem = header.closest('.principle-item');
            const isActive = principleItem.classList.contains('active');
            
            // Close all other accordion items
            document.querySelectorAll('.principle-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                principleItem.classList.add('active');
            }
        });
    });
});

// Accordion functionality for interview scripts
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

// Global fallback for question tab clicks (safe to call from inline onclick)
window.showQuestionsLevel = function(level) {
    try {
        const questionsTabBtns = document.querySelectorAll('.questions-tab-btn');
        const questionsLevelContents = document.querySelectorAll('.questions-level-content');

        questionsTabBtns.forEach(b => b.classList.remove('active'));
        questionsLevelContents.forEach(c => c.classList.remove('active'));

        // activate the matching button (by data-level) and pane
        const btn = Array.from(questionsTabBtns).find(b => b.dataset.level === level);
        if (btn) btn.classList.add('active');

        const pane = document.getElementById(`${level}-questions`);
        if (pane) pane.classList.add('active');
    } catch (err) {
        console.error('showQuestionsLevel error:', err);
    }
};
