(() => {
  "use strict";

  const ROUTES = {
    home: { 
      title: "SOCIETY — Web3 Community", 
      eyebrow: "BUILD • CONNECT • GROW", 
      heading: "The Home For Web3 Builders", 
      intro: "Society is more than just a Discord community. We help members discover Alpha, participate in X Raids, stay informed with the latest Web3 insights, AI developments, Crypto trends, and exclusive airdrop opportunities.", 
      template: "home" 
    },
    about: { 
      title: "About — SOCIETY", 
      eyebrow: "About Society", 
      heading: "More Than Just Another Web3 Community", 
      intro: "The strongest opportunities are never built alone. Society brings together builders, creators, investors, traders, and curious minds who want to learn, collaborate, and grow together.", 
      template: "about" 
    },
    services: { 
      title: "Services — SOCIETY", 
      eyebrow: "What We Do", 
      heading: "Everything You Need To Stay Ahead", 
      intro: "From Alpha calls to airdrop updates, we provide the tools and community support you need to thrive in Web3.", 
      template: "services" 
    },
    faq: { 
      title: "FAQ — SOCIETY", 
      eyebrow: "FAQ", 
      heading: "Frequently Asked Questions", 
      intro: "Everything you need to know about joining and being part of Society.", 
      template: "faq" 
    },
    join: { 
      title: "Join Society — SOCIETY", 
      eyebrow: "Join Society", 
      heading: "Build Together. Grow Together. Win Together.", 
      intro: "Whether you're here to learn, build, connect, or contribute — your journey starts here.", 
      template: "join" 
    }
  };

  const SOCIAL_LINKS = {
    x: { url: "https://x.com/SocietyFolks", label: "X (Twitter)" },
    instagram: { url: "https://www.instagram.com/societyfolks", label: "Instagram" },
    discord: { url: "https://discord.gg/societyid", label: "Discord" }
  };

  const MASCOTS = {
    cipher: "https://i.ibb.co.com/3YzcB1z5/ciphra.png",
    ciphra: "https://i.ibb.co.com/VWhsSL8b/cipher.png",
    logo: "https://i.ibb.co.com/x8X63Pqv/SOCIETY.png"
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

  let activeRoute = "home";

  const escapeHTML = (value) => { const div = document.createElement("div"); div.textContent = value; return div.innerHTML; };
  const getRoute = () => { const hash = window.location.hash.replace("#", "").trim().toLowerCase(); return ROUTES[hash] ? hash : "home"; };

  const btn = (text, route = null, variant = "primary", icon = null) => {
    const iconHtml = icon ? `<span class="btn-icon">${icon}</span>` : "";
    if (!route) return `<button class="button button-${variant}">${iconHtml}${text}</button>`;
    return `<a href="#${route}" class="button button-${variant}" data-route="${route}" data-cursor>${iconHtml}${text}</a>`;
  };

  const card = (number, title, text, route = null) => {
    const link = route ? `<a href="#${route}" class="text-link" data-route="${route}">Explore <span>→</span></a>` : "";
    return `<article class="content-card content-card-link" tabindex="0">
      <span class="card-index">${escapeHTML(number)}</span>
      <div class="card-body">
        <h3>${escapeHTML(title)}</h3>
        <p>${escapeHTML(text)}</p>
        ${link}
      </div>
    </article>`;
  };

  const serviceItem = (number, title, desc, iconSvg) => `<div class="service-item">
    <div class="service-icon">${iconSvg}</div>
    <span class="service-number">${escapeHTML(number)}</span>
    <div class="service-item-content">
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(desc)}</p>
    </div>
  </div>`;

  const mascotCard = (name, role, desc, imgUrl) => `<div class="mascot-card">
    <div class="mascot-avatar-wrap">
      <img src="${imgUrl}" alt="${escapeHTML(name)}" loading="lazy">
    </div>
    <div class="mascot-info">
      <h3>${escapeHTML(name)}</h3>
      <span class="mascot-role">${escapeHTML(role)}</span>
      <p>${escapeHTML(desc)}</p>
    </div>
  </div>`;

  

  const socialIcons = {
    x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`
  };

  const socialSection = (label, desc) => `<div class="social-section">
    <span class="section-label">${escapeHTML(label)}</span>
    <p style="color: var(--muted); margin-bottom: 20px; max-width: 400px;">${escapeHTML(desc)}</p>
    <div class="social-links-large">
      <a href="${SOCIAL_LINKS.x.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${SOCIAL_LINKS.x.label}" data-cursor>${socialIcons.x}</a>
      <a href="${SOCIAL_LINKS.instagram.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${SOCIAL_LINKS.instagram.label}" data-cursor>${socialIcons.instagram}</a>
      <a href="${SOCIAL_LINKS.discord.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${SOCIAL_LINKS.discord.label}" data-cursor>${socialIcons.discord}</a>
    </div>
  </div>`;

  const serviceIcons = {
    web3: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    alpha: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    raid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    airdrop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  };

  const templates = {
    home: (page) => `<div class="page">
      <div class="hero-grid">
        <div class="hero-copy">
          <span class="eyebrow reveal">${page.eyebrow}</span>
          <h1 class="reveal reveal-delay-1">${page.heading}</h1>
          <p class="hero-intro reveal reveal-delay-2">${page.intro}</p>
          <div class="hero-actions reveal reveal-delay-3">
            ${btn("Explore About", "about", "primary")}
            ${btn("Join Society", "join", "ghost")}
          </div>
        </div>
        <div class="hero-art">
          <div class="orbit orbit-a"></div>
          <div class="orbit orbit-b"></div>
          <div class="orbit orbit-c"></div>
          <div class="hero-brand">
            <span class="hero-brand-letter">S</span>
            <span class="hero-brand-text">SOCIETY</span>
          </div>
        </div>
      </div>

      <div class="statement-section reveal">
        <span class="section-label">The Idea</span>
        <p class="statement">A community becomes valuable when people stop watching from the outside and start shaping what happens inside.</p>
      </div>

      <div class="card-grid stagger-children">
        ${card("01", "Web3 Research", "Deep dive into blockchain ecosystems, DeFi protocols, and emerging technologies.")}
        ${card("02", "Alpha Community", "Discover promising projects, early opportunities, and valuable insights before the crowd.")}
        ${card("03", "X Raid Support", "Join coordinated raids and help community projects increase visibility on X.")}
      </div>

      <div style="margin-top: 40px; text-align: center;">
        ${btn("View All Services →", "services", "ghost")}
      </div>

      ${socialSection("Connect with us", "Follow our journey across the internet.")}
    </div>`,

    about: (page) => `<div class="page">
      <div class="page-header">
        <span class="eyebrow reveal">${page.eyebrow}</span>
        <h1 class="reveal reveal-delay-1">${page.heading}</h1>
        <p>${page.intro}</p>
      </div>

      <div class="split-section reveal">
        <div class="large-copy">Society exists to make meaningful participation easier.</div>
        <div class="body-copy">
          <p>It is not built around a single product, trend or platform. It is a community layer where people can exchange ideas, discover opportunities and build relationships that extend beyond one conversation.</p>
          <p>The goal is simple: create an environment where being useful, curious and consistent has real value.</p>
        </div>
      </div>

      <div class="about-pillars reveal">
        <span class="section-label">Community Pillars</span>
        <div class="pillars-grid stagger-children">
          <span class="pillar-item"><span class="pillar-dot"></span>Community First</span>
          <span class="pillar-item"><span class="pillar-dot"></span>Alpha Sharing</span>
          <span class="pillar-item"><span class="pillar-dot"></span>X Raid</span>
          <span class="pillar-item"><span class="pillar-dot"></span>Web3 Knowledge</span>
        </div>
      </div>

      <div class="mascot-section reveal">
        <span class="section-label">The Mascots</span>
        <h2 style="font: 600 clamp(2rem, 4vw, 3.5rem)/1 var(--display); letter-spacing: -0.04em; margin-bottom: 12px;">Meet Cipher & Ciphra</h2>
        <p style="color: var(--muted); max-width: 600px; margin-bottom: 32px;">The living, breathing identity of Society. Every person who enters adds their own character to the story.</p>
        <div class="mascot-grid stagger-children">
          ${mascotCard("Cipher", "The Builder. The Analyst. The Signal.", "The builder who turns signals into structure. Every data point becomes a foundation. Cipher represents the analytical mind behind Society's research and alpha calls.", MASCOTS.cipher)}
          ${mascotCard("Ciphra", "The Dreamer. The Artist. The Voice.", "The artist who gives form to what others only feel. Culture flows through her work. Ciphra represents the creative spirit that brings the Society community to life.", MASCOTS.ciphra)}
        </div>
      </div>

      ${socialSection("Stay connected", "Join the conversation across our channels.")}
    </div>`,

    services: (page) => `<div class="page">
      <div class="page-header">
        <span class="eyebrow reveal">${page.eyebrow}</span>
        <h1 class="reveal reveal-delay-1">${page.heading}</h1>
        <p>${page.intro}</p>
      </div>

      <div class="services-section reveal">
        <span class="section-label">Our Services</span>
        <div class="services-grid stagger-children">
          ${serviceItem("01", "Alpha Calls", "Early opportunities, hidden gems, and ecosystem discoveries shared with the community.", serviceIcons.alpha)}
          ${serviceItem("02", "Airdrop Updates", "Stay informed with new campaigns, testnets, and reward opportunities.", serviceIcons.airdrop)}
          ${serviceItem("03", "X Raid", "Join coordinated raids and help projects increase visibility on X.", serviceIcons.raid)}
          ${serviceItem("04", "News & Research", "Daily Web3, AI, Crypto, and ecosystem updates curated for you.", serviceIcons.web3)}
        </div>
      </div>

      <div class="split-section" style="margin-top: var(--space-8);">
        <div class="large-copy">24/7 Community Activity</div>
        <div class="body-copy">
          <p>Our community never sleeps. With members across the globe, there's always someone online to discuss the latest market movements, share alpha, or just vibe together.</p>
          <p>Alpha shared daily. Research published weekly. Events hosted monthly.</p>
        </div>
      </div>

      <div style="margin-top: var(--space-8); padding: var(--space-7); border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--surface); text-align: center;">
        <img src="${MASCOTS.ciphra}" alt="Ciphra" style="width: 120px; height: auto; margin: 0 auto 24px; filter: drop-shadow(0 0 30px rgba(216,255,62,0.08));">
        <h3 style="font: 600 1.8rem/1 var(--display); margin-bottom: 12px;">Ready to dive in?</h3>
        <p style="color: var(--muted); max-width: 500px; margin: 0 auto 28px;">Join thousands of builders, traders, and creators who are already part of the Society.</p>
        ${btn("Join Society", "join", "primary")}
      </div>

      ${socialSection("Share the culture", "Spread the word across your networks.")}
    </div>`,

    faq: (page) => `<div class="page">
      <div class="page-header">
        <span class="eyebrow reveal">${page.eyebrow}</span>
        <h1 class="reveal reveal-delay-1">${page.heading}</h1>
        <p>${page.intro}</p>
      </div>

      <div class="faq-section reveal">
        <div class="faq-list stagger-children">
          <div class="faq-item">
            <div class="faq-question">
              <h3>What is Society?</h3>
              <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
            </div>
            <div class="faq-answer"><p>Society is a Web3 community where builders, creators, investors, traders, and enthusiasts connect, collaborate, and grow together. We focus on alpha sharing, X raids, airdrop updates, and Web3 research.</p></div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <h3>Is Society free to join?</h3>
              <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
            </div>
            <div class="faq-answer"><p>Yes. Anyone interested in Web3, AI, Crypto, and community collaboration is welcome to join our Discord server and follow us on X and Instagram.</p></div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <h3>What can I learn in Society?</h3>
              <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
            </div>
            <div class="faq-answer"><p>Web3, Crypto, AI, Alpha calls, Airdrops, Ecosystem Research, Networking, X Raids, DeFi, NFTs, and much more. Our community covers the full spectrum of the decentralized world.</p></div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <h3>How can I contribute?</h3>
              <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
            </div>
            <div class="faq-answer"><p>Share knowledge, support community discussions, participate in X Raids, contribute research, and help fellow members grow. Every contribution strengthens the Society.</p></div>
          </div>
        </div>
      </div>

      ${socialSection("Got more questions?", "Reach out to us on any platform.")}
    </div>`,

    join: (page) => `<div class="page">
      <div class="join-section reveal">
        <span class="eyebrow reveal">${page.eyebrow}</span>
        <h2>${page.heading}</h2>
        <p>${page.intro}</p>
        <div class="join-buttons">
          <a href="${SOCIAL_LINKS.discord.url}" target="_blank" rel="noopener noreferrer" class="button button-primary" data-cursor>Join Discord</a>
          <a href="${SOCIAL_LINKS.x.url}" target="_blank" rel="noopener noreferrer" class="button button-ghost" data-cursor>Follow on X</a>
          <a href="${SOCIAL_LINKS.instagram.url}" target="_blank" rel="noopener noreferrer" class="button button-ghost" data-cursor>Follow on Instagram</a>
        </div>
      </div>

      <div style="margin-top: var(--space-8); display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div style="padding: var(--space-6); border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--surface); text-align: center;">
          <img src="${MASCOTS.cipher}" alt="Cipher" style="width: 100px; height: auto; margin: 0 auto 20px;">
          <h3 style="font: 600 1.4rem/1 var(--display); margin-bottom: 10px;">Cipher says:</h3>
          <p style="color: var(--muted); font-size: 14px;">"The best alpha is shared alpha. Join us and build something great together."</p>
        </div>
        <div style="padding: var(--space-6); border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--surface); text-align: center;">
          <img src="${MASCOTS.ciphra}" alt="Ciphra" style="width: 100px; height: auto; margin: 0 auto 20px;">
          <h3 style="font: 600 1.4rem/1 var(--display); margin-bottom: 10px;">Ciphra says:</h3>
          <p style="color: var(--muted); font-size: 14px;">"Culture is what we create together. Your voice matters in Society."</p>
        </div>
      </div>
    </div>`
  };

  const renderPage = (route) => { 
    const page = ROUTES[route]; 
    const templateFn = templates[page.template] || templates.home; 
    return templateFn(page); 
  };

  const updateNavigation = (route) => {
    document.querySelectorAll("[data-route]").forEach((link) => {
      const isActive = link.dataset.route === route;
      link.classList.toggle("is-active", isActive);
      if (link.hasAttribute("aria-current")) link.setAttribute("aria-current", isActive ? "page" : "false");
    });
  };

  const updateDocument = (route) => { 
    const page = ROUTES[route]; 
    document.title = page.title; 
    document.documentElement.dataset.route = route; 
  };

  const navigate = async (route, useTransition = true) => {
    if (!ROUTES[route]) route = "home";
    if (activeRoute === route && app.children.length) { updateNavigation(route); return; }
    if (useTransition && !prefersReducedMotion) { 
      transition.classList.add("is-visible"); 
      await new Promise((resolve) => setTimeout(resolve, 280)); 
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
      setTimeout(() => transition.classList.remove("is-visible"), 350); 
    } else { 
      transition.classList.remove("is-visible"); 
    }
    activeRoute = route;
  };

  const handleRoute = () => {
    const route = getRoute();
    if (route !== activeRoute) navigate(route);
  };

  const closeMobileMenu = () => {
    navToggle?.setAttribute("aria-expanded", "false");
    mobileMenu?.setAttribute("aria-hidden", "true");
    mobileMenu?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  const toggleMobileMenu = () => {
    const open = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    mobileMenu.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  const updateScrollProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute("aria-valuenow", Math.round(progress));
    nav.classList.toggle("is-scrolled", window.scrollY > 30);
  };

  const bindPageInteractions = () => {
    // FAQ accordion
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("is-open"));
        if (!isOpen) item.classList.add("is-open");
      });
    });

    // Cursor hover effects
    document.querySelectorAll("[data-cursor]").forEach((element) => {
      element.addEventListener("mouseenter", () => cursorFollower?.classList.add("is-large"));
      element.addEventListener("mouseleave", () => cursorFollower?.classList.remove("is-large"));
    });
    initScrollReveal();
    initMagneticButtons();
    initLazyImages();
  };

  const initCursor = () => {
    if (!cursor || !cursorFollower || window.matchMedia("(pointer: coarse)").matches) return;
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2, followerX = mouseX, followerY = mouseY;
    window.addEventListener("mousemove", (event) => { 
      mouseX = event.clientX; mouseY = event.clientY; 
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; 
    });
    const animate = () => { 
      followerX += (mouseX - followerX) * 0.12; 
      followerY += (mouseY - followerY) * 0.12; 
      cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`; 
      requestAnimationFrame(animate); 
    };
    animate();
  };

  const handleClick = (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    // Always allow external links and links with target="_blank"
    const href = link.getAttribute("href") || "";
    if (href.startsWith("http") || link.getAttribute("target") === "_blank") {
      return;
    }

    // Only intercept internal navigation links with data-route
    const route = link.dataset.route;
    if (!route || !ROUTES[route]) return;

    event.preventDefault();
    event.stopPropagation();
    if (window.location.hash.replace("#", "") !== route) {
      window.location.hash = route;
    }
    navigate(route, true);
  };

  const handleKeydown = (event) => { if (event.key === "Escape") closeMobileMenu(); };

  const initScrollReveal = () => {
    if (prefersReducedMotion) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    document.querySelectorAll(".reveal, .stagger-children").forEach((el) => observer.observe(el));
  };

  const initMagneticButtons = () => {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    document.querySelectorAll(".button, .social-link").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  };

  const initParallax = () => {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const heroArt = document.querySelector(".hero-art");
    if (!heroArt) return;
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroArt.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const initLazyImages = () => {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add("loaded");
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: "100px" });
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => imgObserver.observe(img));
  };

  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
          }
        }
      });
    });
  };

  const init = () => {
    currentYear.textContent = new Date().getFullYear();
    navToggle?.addEventListener("click", toggleMobileMenu);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    initCursor();
    updateScrollProgress();
    activeRoute = getRoute();
    navigate(getRoute(), false);
    initScrollReveal();
    initMagneticButtons();
    initParallax();
    initLazyImages();
    initSmoothScroll();
    const hideLoader = () => { 
      setTimeout(() => { loader?.classList.add("is-hidden"); }, prefersReducedMotion ? 0 : 800); 
    };
    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
    }
  };

  if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", init); 
  } else { 
    init(); 
  }
})();
