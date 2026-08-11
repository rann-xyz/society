(() => {
    "use strict";

    const ROUTES = {
        home: {
            title: "SOCIETY — Community & Culture",
            eyebrow: "A living community",
            heading: "People create the culture.",
            intro: "SOCIETY is a space for people who want to build, share, contribute and move culture forward together.",
            template: "home"
        },
        about: {
            title: "About — SOCIETY",
            eyebrow: "About Society",
            heading: "Built around people, not platforms.",
            intro: "SOCIETY brings people, ideas and independent projects into one environment where participation matters more than attention.",
            template: "about"
        },
        people: {
            title: "People — SOCIETY",
            eyebrow: "People",
            heading: "The people are the network.",
            intro: "Meet the builders, creators, thinkers and contributors shaping the character of SOCIETY.",
            template: "people"
        },
        culture: {
            title: "Culture — SOCIETY",
            eyebrow: "Culture",
            heading: "Culture is what we do repeatedly.",
            intro: "Our culture is built through curiosity, useful conversations, creative work and the willingness to contribute.",
            template: "culture"
        },
        contribution: {
            title: "Contribution — SOCIETY",
            eyebrow: "Contribution",
            heading: "Bring something to the table.",
            intro: "Contribution can be a project, an idea, a skill, a connection or simply the time you give to another person.",
            template: "contribution"
        },
        alpha: {
            title: "Alpha — SOCIETY",
            eyebrow: "Alpha",
            heading: "Early ideas. Real people.",
            intro: "Alpha is where selected ideas, experiments and opportunities are shared before they become widely visible.",
            template: "alpha"
        },
        lab: {
            title: "Lab — SOCIETY",
            eyebrow: "Society Lab",
            heading: "A place to test what comes next.",
            intro: "The Lab is our experimental layer for concepts, prototypes, collaborations and new ways of connecting people.",
            template: "lab"
        },
        archive: {
            title: "Archive — SOCIETY",
            eyebrow: "Archive",
            heading: "Nothing useful should disappear.",
            intro: "The Archive keeps selected conversations, projects, references and moments that helped shape the community.",
            template: "archive"
        },
        join: {
            title: "Join Society — SOCIETY",
            eyebrow: "Join Society",
            heading: "Find your place in the network.",
            intro: "Start by showing up. Tell us what you make, what you care about and what you want to contribute.",
            template: "join"
        }
    };

    const app = document.getElementById("app");
    const nav = document.getElementById("nav");
    const transition = document.getElementById("pageTransition");
    const loader = document.getElementById("loader");
    const progressBar = document.getElementById("progressBar");
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const cursor = document.getElementById("cursor");
    const cursorFollower = document.getElementById("cursorFollower");
    const currentYear = document.getElementById("currentYear");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const escapeHTML = (value) => {
        const div = document.createElement("div");
        div.textContent = value;
        return div.innerHTML;
    };

    function getRoute() {
        const hash = window.location.hash.replace("#", "").trim().toLowerCase();
        return ROUTES[hash] ? hash : "home";
    }

    function card(number, title, text, route = null) {
        const href = route ? `href="#${route}" data-route="${route}"` : "";
        return `
            <article class="content-card ${route ? "content-card-link" : ""}">
                <span class="card-index">${number}</span>
                <div class="card-body">
                    <h3>${escapeHTML(title)}</h3>
                    <p>${escapeHTML(text)}</p>
                    ${route ? `<a ${href} class="text-link">Explore <span>↗</span></a>` : ""}
                </div>
            </article>
        `;
    }

    function renderPage(route) {
        const page = ROUTES[route];

        const templates = {
            home: `
                <section class="page page-home">
                    <div class="hero-grid">
                        <div class="hero-copy">
                            <span class="eyebrow">${page.eyebrow}</span>
                            <h1>${page.heading}</h1>
                            <p class="hero-intro">${page.intro}</p>
                            <div class="hero-actions">
                                <a href="#about" data-route="about" class="button button-primary">Discover Society <span>↗</span></a>
                                <a href="#join" data-route="join" class="button button-ghost">Join the network</a>
                            </div>
                        </div>
                        <div class="hero-art" aria-hidden="true">
                            <div class="orbit orbit-a"></div>
                            <div class="orbit orbit-b"></div>
                            <div class="orbit orbit-c"></div>
                            <span class="hero-letter">S</span>
                            <span class="hero-caption">PEOPLE / CULTURE / CONTRIBUTION</span>
                        </div>
                    </div>

                    <div class="statement-section">
                        <span class="section-label">The idea</span>
                        <p class="statement">A community becomes valuable when people stop watching from the outside and start shaping what happens inside.</p>
                    </div>

                    <div class="card-grid">
                        ${card("01", "About", "Understand what SOCIETY is, why it exists and how the community is structured.", "about")}
                        ${card("02", "People", "Discover the people and perspectives that make the network feel alive.", "people")}
                        ${card("03", "Culture", "See the principles that guide how we communicate, collaborate and create.", "culture")}
                    </div>
                </section>
            `,

            about: `
                <section class="page">
                    <div class="page-header">
                        <span class="eyebrow">${page.eyebrow}</span>
                        <h1>${page.heading}</h1>
                        <p>${page.intro}</p>
                    </div>

                    <div class="split-section">
                        <div class="large-copy">SOCIETY exists to make meaningful participation easier.</div>
                        <div class="body-copy">
                            <p>It is not built around a single product, trend or platform. It is a community layer where people can exchange ideas, discover opportunities and build relationships that extend beyond one conversation.</p>
                            <p>The goal is simple: create an environment where being useful, curious and consistent has real value.</p>
                        </div>
                    </div>

                    <div class="card-grid two">
                        ${card("A", "People first", "The community is designed around human interaction and contribution.")}
                        ${card("B", "Independent thinking", "Different opinions and disciplines make the network stronger.")}
                        ${card("C", "Useful output", "Ideas become more valuable when they turn into something people can use.")}
                        ${card("D", "Long-term memory", "Projects and conversations can become references for whoever comes next.")}
                    </div>
                </section>
            `,

            people: `
                <section class="page">
                    <div class="page-header">
                        <span class="eyebrow">${page.eyebrow}</span>
                        <h1>${page.heading}</h1>
                        <p>${page.intro}</p>
                    </div>

                    <div class="people-list">
                        <article class="person-row">
                            <span>01</span><div><h2>Builders</h2><p>People turning ideas into products, projects and experiments.</p></div><b>→</b>
                        </article>
                        <article class="person-row">
                            <span>02</span><div><h2>Creators</h2><p>People shaping stories, visuals, media and new forms of expression.</p></div><b>→</b>
                        </article>
                        <article class="person-row">
                            <span>03</span><div><h2>Thinkers</h2><p>People bringing research, strategy, perspective and difficult questions.</p></div><b>→</b>
                        </article>
                        <article class="person-row">
                            <span>04</span><div><h2>Connectors</h2><p>People who create bridges between talent, ideas and opportunities.</p></div><b>→</b>
                        </article>
                    </div>
                </section>
            `,

            culture: `
                <section class="page">
                    <div class="page-header">
                        <span class="eyebrow">${page.eyebrow}</span>
                        <h1>${page.heading}</h1>
                        <p>${page.intro}</p>
                    </div>

                    <div class="culture-grid">
                        <div class="culture-feature">
                            <span class="giant-word">MAKE</span>
                            <p>Don't wait for perfect conditions. Start with what you have and make the next version better.</p>
                        </div>
                        <div class="culture-feature">
                            <span class="giant-word">SHARE</span>
                            <p>Knowledge compounds when it moves. Share context, useful references and honest lessons.</p>
                        </div>
                        <div class="culture-feature">
                            <span class="giant-word">CONNECT</span>
                            <p>Strong communities are built through relationships, not follower counts.</p>
                        </div>
                        <div class="culture-feature">
                            <span class="giant-word">RESPECT</span>
                            <p>Challenge ideas without reducing the people behind them.</p>
                        </div>
                    </div>
                </section>
            `,

            contribution: `
                <section class="page">
                    <div class="page-header">
                        <span class="eyebrow">${page.eyebrow}</span>
                        <h1>${page.heading}</h1>
                        <p>${page.intro}</p>
                    </div>

                    <div class="contribution-layout">
                        <div class="contribution-main">
                            <span class="section-label">Ways to contribute</span>
                            ${card("01", "Create", "Build a project, publish an idea, make a resource or start an experiment.")}
                            ${card("02", "Connect", "Introduce people who should know each other and create useful opportunities.")}
                            ${card("03", "Support", "Review work, answer questions, share feedback or help someone move forward.")}
                            ${card("04", "Document", "Turn experience into notes, guides and references that others can reuse.")}
                        </div>
                        <aside class="side-note">
                            <span class="section-label">Principle</span>
                            <strong>Contribution does not have to be loud to matter.</strong>
                        </aside>
                    </div>
                </section>
            `,

            alpha: `
                <section class="page">
                    <div class="page-header">
                        <span class="eyebrow">${page.eyebrow}</span>
                        <h1>${page.heading}</h1>
                        <p>${page.intro}</p>
                    </div>

                    <div class="alpha-panel">
                        <div class="alpha-mark">α</div>
                        <div>
                            <span class="section-label">Early access layer</span>
                            <h2>Signals before they become noise.</h2>
                            <p>Alpha gives the community a place to surface interesting projects, early concepts, private experiments and opportunities worth watching.</p>
                            <a href="#join" data-route="join" class="text-link">Request access <span>↗</span></a>
                        </div>
                    </div>

                    <div class="card-grid two">
                        ${card("A1", "Projects", "Early-stage work looking for feedback, collaborators or first users.")}
                        ${card("A2", "Signals", "Interesting developments, people and ideas worth paying attention to.")}
                    </div>
                </section>
            `,

            lab: `
                <section class="page">
                    <div class="page-header">
                        <span class="eyebrow">${page.eyebrow}</span>
                        <h1>${page.heading}</h1>
                        <p>${page.intro}</p>
                    </div>

                    <div class="lab-terminal">
                        <div class="terminal-bar"><i></i><i></i><i></i><span>society/lab</span></div>
                        <div class="terminal-content">
                            <span class="terminal-muted">$ society lab --status</span>
                            <strong>EXPERIMENTAL / OPEN</strong>
                            <span class="terminal-muted">$ next</span>
                            <p>Build small. Learn quickly. Share what works.</p>
                            <a href="#join" data-route="join" class="terminal-link">> propose an experiment</a>
                        </div>
                    </div>
                </section>
            `,

            archive: `
                <section class="page">
                    <div class="page-header">
                        <span class="eyebrow">${page.eyebrow}</span>
                        <h1>${page.heading}</h1>
                        <p>${page.intro}</p>
                    </div>

                    <div class="archive-list">
                        <article><span>2026</span><div><h2>Society / Foundations</h2><p>The principles, language and early structure behind the community.</p></div><b>↗</b></article>
                        <article><span>2026</span><div><h2>Community Notes</h2><p>Selected ideas and observations collected from the network.</p></div><b>↗</b></article>
                        <article><span>2026</span><div><h2>Projects</h2><p>A record of experiments, collaborations and things worth remembering.</p></div><b>↗</b></article>
                    </div>
                </section>
            `,

            join: `
                <section class="page page-join">
                    <div class="join-layout">
                        <div class="page-header">
                            <span class="eyebrow">${page.eyebrow}</span>
                            <h1>${page.heading}</h1>
                            <p>${page.intro}</p>
                        </div>

                        <form class="join-form" id="joinForm">
                            <label>
                                <span>Name</span>
                                <input type="text" name="name" autocomplete="name" placeholder="Your name" required>
                            </label>
                            <label>
                                <span>What do you do?</span>
                                <input type="text" name="role" placeholder="Builder, creator, researcher..." required>
                            </label>
                            <label>
                                <span>What brings you here?</span>
                                <textarea name="reason" rows="5" placeholder="Tell us what you want to build, learn or contribute." required></textarea>
                            </label>
                            <button class="button button-primary" type="submit">Send introduction <span>↗</span></button>
                            <p class="form-status" id="formStatus" role="status"></p>
                        </form>
                    </div>
                </section>
            `
        };

        return templates[page.template] || templates.home;
    }

    function updateNavigation(route) {
        document.querySelectorAll("[data-route]").forEach((link) => {
            const isActive = link.dataset.route === route;
            link.classList.toggle("is-active", isActive);
        });
    }

    function updateDocument(route) {
        const page = ROUTES[route];
        document.title = page.title;
        document.documentElement.dataset.route = route;
    }

    async function navigate(route, useTransition = true) {
        if (!ROUTES[route]) route = "home";

        const currentRoute = getRoute();

        if (currentRoute === route && app.children.length) {
            updateNavigation(route);
            return;
        }

        if (useTransition && !prefersReducedMotion) {
            transition.classList.add("is-visible");
            await new Promise((resolve) => setTimeout(resolve, 250));
        }

        app.innerHTML = renderPage(route);
        updateDocument(route);
        updateNavigation(route);
        closeMobileMenu();
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "instant" });

        requestAnimationFrame(() => {
            app.classList.remove("page-enter");
            void app.offsetWidth;
            app.classList.add("page-enter");
        });

        bindPageInteractions();

        if (useTransition && !prefersReducedMotion) {
            setTimeout(() => transition.classList.remove("is-visible"), 300);
        } else {
            transition.classList.remove("is-visible");
        }
    }

    function handleRoute() {
        navigate(getRoute());
    }

    function closeMobileMenu() {
        navToggle?.setAttribute("aria-expanded", "false");
        mobileMenu?.setAttribute("aria-hidden", "true");
        mobileMenu?.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    }

    function toggleMobileMenu() {
        const open = navToggle.getAttribute("aria-expanded") !== "true";
        navToggle.setAttribute("aria-expanded", String(open));
        mobileMenu.setAttribute("aria-hidden", String(!open));
        mobileMenu.classList.toggle("is-open", open);
        document.body.classList.toggle("menu-open", open);
    }

    function updateScrollProgress() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
        progressBar.style.width = `${progress}%`;
        nav.classList.toggle("is-scrolled", window.scrollY > 30);
    }

    function bindPageInteractions() {
        const form = document.getElementById("joinForm");

        if (form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const status = document.getElementById("formStatus");
                status.textContent = "Thanks. Your introduction is ready to be connected.";
                form.reset();
            });
        }

        document.querySelectorAll("[data-cursor]").forEach((element) => {
            element.addEventListener("mouseenter", () => cursorFollower?.classList.add("is-large"));
            element.addEventListener("mouseleave", () => cursorFollower?.classList.remove("is-large"));
        });
    }

    function initCursor() {
        if (!cursor || !cursorFollower || window.matchMedia("(pointer: coarse)").matches) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let followerX = mouseX;
        let followerY = mouseY;

        window.addEventListener("mousemove", (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });

        const animate = () => {
            followerX += (mouseX - followerX) * 0.12;
            followerY += (mouseY - followerY) * 0.12;
            cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
            requestAnimationFrame(animate);
        };

        animate();
    }

    function init() {
        currentYear.textContent = new Date().getFullYear();

        navToggle?.addEventListener("click", toggleMobileMenu);

        window.addEventListener("hashchange", handleRoute);
        window.addEventListener("scroll", updateScrollProgress, { passive: true });

        document.addEventListener("click", (event) => {
            const link = event.target.closest("[data-route]");
            if (!link) return;

            const route = link.dataset.route;
            if (!ROUTES[route]) return;

            if (window.location.hash.replace("#", "") === route) {
                event.preventDefault();
                navigate(route, true);
            }
        });

        initCursor();
        updateScrollProgress();
        navigate(getRoute(), false);

        window.addEventListener("load", () => {
            setTimeout(() => {
                loader?.classList.add("is-hidden");
            }, prefersReducedMotion ? 0 : 700);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
