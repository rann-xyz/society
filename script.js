/* ============================================
   SOCIETY — Premium Editorial JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // LOADER
    // ============================================

    const loader = document.getElementById('loader');

    const hideLoader = () => {
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
                initHeroAnimations();
            }, 800);
        }
    };

    // Minimum loader time for cinematic feel
    setTimeout(hideLoader, 2200);

    // ============================================
    // CUSTOM CURSOR
    // ============================================

    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (cursor && cursorFollower && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            followerX += (mouseX - followerX) * 0.08;
            followerY += (mouseY - followerY) * 0.08;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';

            requestAnimationFrame(animateCursor);
        };

        animateCursor();

        // Cursor states
        const cursorTargets = document.querySelectorAll('[data-cursor]');

        cursorTargets.forEach(target => {
            const type = target.dataset.cursor;

            target.addEventListener('mouseenter', () => {
                if (type === 'cta' || type === 'row') {
                    cursor.classList.add('expanded');
                    cursorFollower.classList.add('hover');
                } else if (type === 'link' || type === 'logo') {
                    cursorFollower.classList.add('hover');
                }
            });

            target.addEventListener('mouseleave', () => {
                cursor.classList.remove('expanded');
                cursorFollower.classList.remove('hover');
            });
        });
    }

    // ============================================
    // NAVBAR SCROLL
    // ============================================

    const nav = document.getElementById('nav');

    const handleNavScroll = () => {
        if (window.pageYOffset > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // ============================================
    // MOBILE MENU
    // ============================================

    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ============================================
    // SCROLL REVEAL
    // ============================================

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('[data-reveal]').forEach(el => {
        revealObserver.observe(el);
    });

    // Hero entrance
    const initHeroAnimations = () => {
        const heroTexts = document.querySelectorAll('.hero [data-reveal="text"]');
        heroTexts.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('revealed');
            }, 200 + (i * 120));
        });
    };

    // ============================================
    // SMOOTH SCROLL
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // PROGRESS BAR
    // ============================================

    const progressBar = document.getElementById('progressBar');

    const updateProgress = () => {
        if (!progressBar) return;
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    // ============================================
    // HERO PARALLAX
    // ============================================

    const heroCharLeft = document.querySelector('.hero-char-left');
    const heroCharRight = document.querySelector('.hero-char-right');
    const heroSection = document.querySelector('.hero');

    let ticking = false;

    const handleParallax = () => {
        if (!heroSection) return;
        const scrollY = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;

        if (scrollY < heroHeight) {
            const progress = scrollY / heroHeight;

            if (heroCharLeft) {
                heroCharLeft.style.transform = `translateY(-50%) translateY(${scrollY * 0.12}px) rotate(${progress * 3}deg)`;
                heroCharLeft.style.opacity = Math.max(0.03, 0.03 - progress * 0.03);
            }

            if (heroCharRight) {
                heroCharRight.style.transform = `translateY(-50%) translateY(${scrollY * 0.08}px) rotate(${-progress * 2}deg)`;
                heroCharRight.style.opacity = Math.max(0.03, 0.03 - progress * 0.03);
            }
        }

        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleParallax);
            ticking = true;
        }
    }, { passive: true });

    // ============================================
    // ACTIVE NAV LINK
    // ============================================

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const highlightNav = () => {
        const scrollPos = window.pageYOffset + (nav ? nav.offsetHeight : 0) + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });

    // ============================================
    // CULTURE HOVER DIM
    // ============================================

    const cultureItems = document.querySelectorAll('.culture-item');

    cultureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cultureItems.forEach(other => {
                if (other !== item) other.style.opacity = '0.35';
            });
        });

        item.addEventListener('mouseleave', () => {
            cultureItems.forEach(other => {
                other.style.opacity = '1';
            });
        });
    });

    // ============================================
    // ARCHIVE HOVER DIM
    // ============================================

    const archiveItems = document.querySelectorAll('.archive-item');

    archiveItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            archiveItems.forEach(other => {
                if (other !== item) other.style.opacity = '0.4';
            });
        });

        item.addEventListener('mouseleave', () => {
            archiveItems.forEach(other => {
                other.style.opacity = '1';
            });
        });
    });

    // ============================================
    // WHY HOVER DIM
    // ============================================

    const whyItems = document.querySelectorAll('.why-item');

    whyItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            whyItems.forEach(other => {
                if (other !== item) other.style.opacity = '0.4';
            });
        });

        item.addEventListener('mouseleave', () => {
            whyItems.forEach(other => {
                other.style.opacity = '1';
            });
        });
    });

    // ============================================
    // LAB ROW MOUSE FOLLOW PREVIEW
    // ============================================

    const labRows = document.querySelectorAll('.lab-row');

    labRows.forEach(row => {
        const preview = row.querySelector('.lab-row-preview');

        if (preview && window.innerWidth > 1024) {
            row.addEventListener('mousemove', (e) => {
                const rect = row.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                preview.style.right = 'auto';
                preview.style.left = (x + 60) + 'px';
                preview.style.top = (y - 80) + 'px';
                preview.style.transform = 'none';
            });

            row.addEventListener('mouseleave', () => {
                preview.style.right = '6rem';
                preview.style.left = 'auto';
                preview.style.top = '50%';
                preview.style.transform = 'translateY(-50%) scale(0.95)';
            });
        }
    });

    // ============================================
    // MARQUEE SPEED BASED ON SCROLL
    // ============================================

    const marqueeTracks = document.querySelectorAll('.join-marquee-track');
    let lastScrollY = window.pageYOffset;

    const updateMarqueeSpeed = () => {
        const currentScrollY = window.pageYOffset;
        const speed = Math.abs(currentScrollY - lastScrollY);
        lastScrollY = currentScrollY;

        const multiplier = Math.min(1 + speed * 0.03, 3);
        marqueeTracks.forEach(track => {
            track.style.animationDuration = (25 / multiplier) + 's';
        });
    };

    window.addEventListener('scroll', updateMarqueeSpeed, { passive: true });

    // ============================================
    // HERO SCROLL HINT FADE
    // ============================================

    const scrollHint = document.querySelector('.hero-scroll-hint');

    if (scrollHint) {
        const fadeScrollHint = () => {
            const scrollY = window.pageYOffset;
            const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
            const opacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.3)));
            scrollHint.style.opacity = opacity;
        };

        window.addEventListener('scroll', fadeScrollHint, { passive: true });
    }

    // ============================================
    // PEOPLE CARD STAGGER
    // ============================================

    const peopleCards = document.querySelectorAll('.people-card');
    peopleCards.forEach((card, i) => {
        card.style.transitionDelay = (i * 0.15) + 's';
    });

    // ============================================
    // CULTURE ITEM STAGGER
    // ============================================

    const cultureTrackItems = document.querySelectorAll('.culture-item');
    cultureTrackItems.forEach((item, i) => {
        item.style.transitionDelay = (i * 0.08) + 's';
    });

    // ============================================
    // FLOW STEP STAGGER
    // ============================================

    const flowSteps = document.querySelectorAll('.flow-step, .flow-connector');
    flowSteps.forEach((step, i) => {
        step.style.transitionDelay = (i * 0.12) + 's';
    });

    // ============================================
    // BUILD STEP STAGGER
    // ============================================

    const buildSteps = document.querySelectorAll('.build-step, .build-step-divider');
    buildSteps.forEach((step, i) => {
        step.style.transitionDelay = (i * 0.1) + 's';
    });

    // ============================================
    // ALPHA CARD STAGGER
    // ============================================

    const alphaCards = document.querySelectorAll('.alpha-card');
    alphaCards.forEach((card, i) => {
        card.style.transitionDelay = (i * 0.15) + 's';
    });

    // ============================================
    // LAB ROW STAGGER
    // ============================================

    const labRowItems = document.querySelectorAll('.lab-row');
    labRowItems.forEach((row, i) => {
        row.style.transitionDelay = (i * 0.08) + 's';
    });

    // ============================================
    // ARCHIVE ITEM STAGGER
    // ============================================

    const archiveGridItems = document.querySelectorAll('.archive-item');
    archiveGridItems.forEach((item, i) => {
        item.style.transitionDelay = (i * 0.06) + 's';
    });

    // ============================================
    // WHY ITEM STAGGER
    // ============================================

    const whyGridItems = document.querySelectorAll('.why-item');
    whyGridItems.forEach((item, i) => {
        item.style.transitionDelay = (i * 0.1) + 's';
    });

});

