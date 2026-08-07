// =====================================
// SOCIETY WEBSITE - UPGRADED SCRIPT
// =====================================

document.addEventListener('DOMContentLoaded', () => {

    // ===============================
    // LOADING SCREEN
    // ===============================
    const loader = document.querySelector('.loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('loader-hide');
            }, 600);
        });
    }

    // ===============================
    // SCROLL PROGRESS BAR
    // ===============================
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = progress + '%';
        });
    }

    // ===============================
    // HEADER SCROLL EFFECT
    // ===============================
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ===============================
    // MOBILE MENU TOGGLE
    // ===============================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ===============================
    // SMOOTH SCROLL
    // ===============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===============================
    // TYPING EFFECT
    // ===============================
    const typingElement = document.getElementById('typingText');
    if (typingElement) {
        const words = ['Web3 Builders', 'Alpha Hunters', 'Crypto Traders', 'DeFi Explorers'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 120;

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = 60;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 120;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typingDelay = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingDelay = 500;
            }

            setTimeout(type, typingDelay);
        }

        setTimeout(type, 1000);
    }

    // ===============================
    // SCROLL REVEAL
    // ===============================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===============================
    // HERO MOUSE PARALLAX
    // ===============================
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image img');

    if (heroContent && !window.matchMedia('(pointer: coarse)').matches) {
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (window.innerWidth / 2 - e.clientX) / 40;
            mouseY = (window.innerHeight / 2 - e.clientY) / 40;
        });

        function animateParallax() {
            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;

            if (heroContent) {
                heroContent.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }
            if (heroImage) {
                heroImage.style.transform = `translate(${-currentX * 0.5}px, ${-currentY * 0.5}px)`;
            }

            requestAnimationFrame(animateParallax);
        }

        animateParallax();
    }

    // ===============================
    // ACTIVE NAVIGATION HIGHLIGHT
    // ===============================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        let current = '';
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();

    // ===============================
    // FAQ ACCORDION
    // ===============================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });

            // Toggle current item
            item.classList.toggle('open');
        });
    });

    // ===============================
    // BACK TO TOP BUTTON
    // ===============================
    const topBtn = document.getElementById('topBtn');
    if (topBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                topBtn.classList.add('show');
            } else {
                topBtn.classList.remove('show');
            }
        });

        topBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===============================
    // RIPPLE EFFECT ON BUTTONS
    // ===============================
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

    buttons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';

        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.25);
                transform: scale(0);
                animation: rippleAnim 0.7s ease-out;
                pointer-events: none;
            `;

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 700);
        });
    });

    // ===============================
    // HERO IMAGE MAGNETIC EFFECT
    // ===============================
    const heroImg = document.getElementById('heroImg');
    if (heroImg && !window.matchMedia('(pointer: coarse)').matches) {
        heroImg.addEventListener('mousemove', (e) => {
            const rect = heroImg.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 15;
            const y = (e.clientY - rect.top - rect.height / 2) / 15;
            heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
        });

        heroImg.addEventListener('mouseleave', () => {
            heroImg.style.transform = '';
        });
    }

    // ===============================
    // CARD TILT EFFECT
    // ===============================
    const tiltCards = document.querySelectorAll('.why-card, .service-card, .stat-box');

    if (!window.matchMedia('(pointer: coarse)').matches) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // ===============================
    // CONSOLE MESSAGE
    // ===============================
    console.log('%c🔮 Welcome to Society', 'font-size: 20px; color: #8b5cf6; font-weight: bold; font-family: monospace;');
    console.log('%cDiscover Alpha. Stay Informed. Build Together.', 'font-size: 13px; color: #9ca3b8; font-family: monospace;');

});

