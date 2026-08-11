

(() => {
  "use strict";

  const ROUTES = {
    home: { title: "SOCIETY — Community & Culture", eyebrow: "A living community", heading: "People create the culture.", intro: "SOCIETY is a space for people who want to build, share, contribute and move culture forward together.", template: "home" },
    about: { title: "About — SOCIETY", eyebrow: "About Society", heading: "Built around people, not platforms.", intro: "SOCIETY brings people, ideas and independent projects into one environment where participation matters more than attention.", template: "about" },
    people: { title: "People — SOCIETY", eyebrow: "People", heading: "The people are the network.", intro: "Meet the builders, creators, thinkers and contributors shaping the character of SOCIETY.", template: "people" },
    culture: { title: "Culture — SOCIETY", eyebrow: "Culture", heading: "Culture is what we do repeatedly.", intro: "Our culture is built through curiosity, useful conversations, creative work and the willingness to contribute.", template: "culture" },
    contribution: { title: "Contribution — SOCIETY", eyebrow: "Contribution", heading: "Bring something to the table.", intro: "Contribution can be a project, an idea, a skill, a connection or simply the time you give to another person.", template: "contribution" },
    alpha: { title: "Alpha — SOCIETY", eyebrow: "Alpha", heading: "Early ideas. Real people.", intro: "Alpha is where selected ideas, experiments and opportunities are shared before they become widely visible.", template: "alpha" },
    lab: { title: "Lab — SOCIETY", eyebrow: "Society Lab", heading: "A place to test what comes next.", intro: "The Lab is our experimental layer for concepts, prototypes, collaborations and new ways of connecting people.", template: "lab" },
    archive: { title: "Archive — SOCIETY", eyebrow: "Archive", heading: "Nothing useful should disappear.", intro: "The Archive keeps selected conversations, projects, references and moments that helped shape the community.", template: "archive" },
    join: { title: "Join Society — SOCIETY", eyebrow: "Join Society", heading: "Find your place in the network.", intro: "Start by showing up. Tell us what you make, what you care about and what you want to contribute.", template: "join" }
  };

  const ASSETS = {
    cipher: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="character-avatar"><rect width="120" height="120" rx="8" fill="#111"/><circle cx="60" cy="45" r="22" fill="#d8ff3e" opacity="0.15"/><text x="60" y="52" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="28" font-weight="700" fill="#d8ff3e">C</text><text x="60" y="95" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#8b8b87" letter-spacing="0.1em">CIPHER</text></svg>`,
    ciphra: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="character-avatar"><rect width="120" height="120" rx="8" fill="#111"/><circle cx="60" cy="45" r="22" fill="#f4f4f0" opacity="0.08"/><text x="60" y="52" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="28" font-weight="700" fill="#f4f4f0">C</text><text x="60" y="95" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#8b8b87" letter-spacing="0.1em">CIPHRA</text></svg>`,
    iconMeme: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="6" fill="#111" stroke="rgba(244,244,240,0.14)"/><circle cx="18" cy="20" r="3" fill="#d8ff3e"/><circle cx="30" cy="20" r="3" fill="#d8ff3e"/><path d="M16 32c2 3 6 4 8 4s6-1 8-4" stroke="#d8ff3e" stroke-width="2" stroke-linecap="round"/></svg>`,
    iconRaid: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="6" fill="#111" stroke="rgba(244,244,240,0.14)"/><path d="M24 10L34 38H14L24 10Z" stroke="#d8ff3e" stroke-width="2" stroke-linejoin="round"/><circle cx="24" cy="28" r="2" fill="#d8ff3e"/></svg>`,
    iconNobar: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="6" fill="#111" stroke="rgba(244,244,240,0.14)"/><rect x="10" y="14" width="28" height="20" rx="2" stroke="#d8ff3e" stroke-width="2"/><path d="M10 20h28M18 34v4M30 34v4" stroke="#d8ff3e" stroke-width="2"/></svg>`,
    iconMabar: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="6" fill="#111" stroke="rgba(244,244,240,0.14)"/><circle cx="24" cy="24" r="10" stroke="#d8ff3e" stroke-width="2"/><circle cx="24" cy="24" r="4" fill="#d8ff3e"/><path d="M24 10v6M24 32v6M10 24h6M32 24h6" stroke="#d8ff3e" stroke-width="2"/></svg>`,
    iconEvent: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="6" fill="#111" stroke="rgba(244,244,240,0.14)"/><rect x="12" y="10" width="24" height="28" rx="2" stroke="#d8ff3e" stroke-width="2"/><path d="M12 18h24M18 10v-3M30 10v-3" stroke="#d8ff3e" stroke-width="2"/></svg>`,
    iconGiveaway: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="6" fill="#111" stroke="rgba(244,244,240,0.14)"/><path d="M24 8v32M8 24h32" stroke="#d8ff3e" stroke-width="2"/><circle cx="24" cy="24" r="6" fill="#d8ff3e"/></svg>`,
    iconGame: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="6" fill="#111" stroke="rgba(244,244,240,0.14)"/><rect x="10" y="14" width="28" height="20" rx="3" stroke="#d8ff3e" stroke-width="2"/><circle cx="18" cy="24" r="2" fill="#d8ff3e"/><circle cx="30" cy="24" r="2" fill="#d8ff3e"/></svg>`,
    iconUtility: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="6" fill="#111" stroke="rgba(244,244,240,0.14)"/><path d="M14 24l6-10 8 6 6-8" stroke="#d8ff3e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14" cy="24" r="2" fill="#d8ff3e"/><circle cx="20" cy="14" r="2" fill="#d8ff3e"/><circle cx="28" cy="20" r="2" fill="#d8ff3e"/><circle cx="34" cy="12" r="2" fill="#d8ff3e"/></svg>`,
    arrowRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    arrowUpRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12l8-8M5 4h7v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    twitter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    discord: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    telegram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
    instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
    youtube: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    tiktok: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
    linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  };

  const socialLinks = (cls = "social-links") => `
    <div class="${cls}">
      <a href="https://twitter.com/society" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter / X" data-cursor>${ASSETS.twitter}</a>
      <a href="https://github.com/rann-xyz/society" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub" data-cursor>${ASSETS.github}</a>
      <a href="https://discord.gg/society" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Discord" data-cursor>${ASSETS.discord}</a>
      <a href="https://t.me/society" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Telegram" data-cursor>${ASSETS.telegram}</a>
      <a href="https://instagram.com/society" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram" data-cursor>${ASSETS.instagram}</a>
      <a href="https://youtube.com/@society" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube" data-cursor>${ASSETS.youtube}</a>
      <a href="https://tiktok.com/@society" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="TikTok" data-cursor>${ASSETS.tiktok}</a>
      <a href="https://linkedin.com/company/society" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn" data-cursor>${ASSETS.linkedin}</a>
    </div>
  `;

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

  const escapeHTML = (value) => { const div = document.createElement("div"); div.textContent = value; return div.innerHTML; };
  const getRoute = () => { const hash = window.location.hash.replace("#", "").trim().toLowerCase(); return ROUTES[hash] ? hash : "home"; };

  const btn = (text, route = null, variant = "primary", icon = null) => {
    const iconHtml = icon ? `<span class="btn-icon" aria-hidden="true">${icon}</span>` : "";
    if (!route) return `<button class="button button-${variant}" data-cursor>${iconHtml}${text}</button>`;
    return `<a href="#${route}" data-route="${route}" class="button button-${variant}" data-cursor>${iconHtml}${text}</a>`;
  };

  const card = (number, title, text, route = null) => {
    const link = route ? `<a href="#${route}" data-route="${route}" class="text-link" data-cursor><span aria-hidden="true">↗</span> Explore</a>` : "";
    return `<article class="content-card ${route ? "content-card-link" : ""}"><span class="card-index">${escapeHTML(number)}</span><div class="card-body"><h3>${escapeHTML(title)}</h3><p>${escapeHTML(text)}</p>${link}</div></article>`;
  };

  const cultureItem = (number, title, desc, iconSvg) => `<article class="culture-item"><div class="culture-icon" aria-hidden="true">${iconSvg}</div><div class="culture-item-content"><span class="culture-number">${escapeHTML(number)}</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(desc)}</p></div></article>`;

  const characterCard = (name, role, desc, avatarSvg) => `<article class="character-card"><div class="character-avatar-wrap" aria-hidden="true">${avatarSvg}</div><div class="character-info"><h3>${escapeHTML(name)}</h3><span class="character-role">${escapeHTML(role)}</span><p>${escapeHTML(desc)}</p></div></article>`;

  const socialSection = (label, desc) => `<div class="social-section"><span class="section-label">${label}</span><p style="color: var(--muted); margin-bottom: var(--space-4);">${desc}</p>${socialLinks("social-links-large")}</div>`;

  const templates = {
    home: (page) => `<section class="page" aria-label="Home"><div class="hero-grid"><div class="hero-copy"><span class="eyebrow">${page.eyebrow}</span><h1>${page.heading}</h1><p class="hero-intro">${page.intro}</p><div class="hero-actions">${btn("Explore About", "about", "primary", ASSETS.arrowRight)}${btn("Join Society", "join", "ghost")}</div></div><div class="hero-art" aria-hidden="true"><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="orbit orbit-c"></div><span class="hero-letter">S</span><span class="hero-caption">SOCIETY / 2026</span></div></div><div class="statement-section"><span class="section-label">The idea</span><p class="statement">A community becomes valuable when people stop watching from the outside and start shaping what happens inside.</p></div><div class="card-grid">${card("01", "About", "Understand what SOCIETY is, why it exists and how the community is structured.", "about")}${card("02", "People", "Discover the people and perspectives that make the network feel alive.", "people")}${card("03", "Culture", "See the principles that guide how we communicate, collaborate and create.", "culture")}</div><div class="hero-actions" style="margin-top: var(--space-7); justify-content: center;">${btn("View All Pages →", "about", "ghost")}</div>${socialSection("Connect with us", "Follow our journey across the internet.")}</section>`,

    about: (page) => `<section class="page" aria-label="About"><header class="page-header"><span class="eyebrow">${page.eyebrow}</span><h1>${page.heading}</h1><p>${page.intro}</p></header><div class="split-section"><div class="large-copy"><p>SOCIETY exists to make meaningful participation easier.</p></div><div class="body-copy"><p>It is not built around a single product, trend or platform. It is a community layer where people can exchange ideas, discover opportunities and build relationships that extend beyond one conversation.</p><p>The goal is simple: create an environment where being useful, curious and consistent has real value.</p><div style="margin-top: var(--space-5);">${btn("Meet the People", "people", "primary", ASSETS.arrowRight)}${btn("Our Culture", "culture", "ghost")}</div></div></div><div class="about-pillars"><span class="section-label">Community</span><div class="pillars-grid"><div class="pillar-item"><span class="pillar-dot" aria-hidden="true"></span>Community</div><div class="pillar-item"><span class="pillar-dot" aria-hidden="true"></span>Culture</div><div class="pillar-item"><span class="pillar-dot" aria-hidden="true"></span>Contribution</div><div class="pillar-item"><span class="pillar-dot" aria-hidden="true"></span>Ecosystem</div></div></div><div class="characters-section"><span class="section-label">The Characters</span><h2 style="font: 500 clamp(2rem, 4vw, 3.5rem)/1 var(--display); margin: 0 0 var(--space-5);">Who we are.</h2><div class="characters-grid">${characterCard("Cipher", "The builder. The analyst. The signal.", "The builder who turns signals into structure. Every data point becomes a foundation.", ASSETS.cipher)}${characterCard("Ciphra", "The dreamer. The artist. The voice.", "The artist who gives form to what others only feel. Culture flows through her work.", ASSETS.ciphra)}</div><p style="color: var(--muted); margin-top: var(--space-5); max-width: 600px;">The characters of SOCIETY are not roles. They are not titles. They are the living, breathing identity of who we are. Every person who enters SOCIETY adds their own character to the story.</p></div>${socialSection("Stay connected", "Join the conversation across our channels.")}<div class="card-grid two" style="margin-top: var(--space-8);">${card("A", "People first", "The community is designed around human interaction and contribution.")}${card("B", "Independent thinking", "Different opinions and disciplines make the network stronger.")}${card("C", "Useful output", "Ideas become more valuable when they turn into something people can use.")}${card("D", "Long-term memory", "Projects and conversations can become references for whoever comes next.")}</div><div class="hero-actions" style="margin-top: var(--space-7); justify-content: center;">${btn("How to Contribute", "contribution", "primary", ASSETS.arrowRight)}${btn("Join Us", "join", "ghost")}</div></section>`,

    people: (page) => `<section class="page" aria-label="People"><header class="page-header"><span class="eyebrow">${page.eyebrow}</span><h1>${page.heading}</h1><p>${page.intro}</p></header><div class="people-list"><article class="person-row"><span>01</span><div><h2>Builders</h2><p>People turning ideas into products, projects and experiments.</p></div><b aria-hidden="true">→</b></article><article class="person-row"><span>02</span><div><h2>Creators</h2><p>People shaping stories, visuals, media and new forms of expression.</p></div><b aria-hidden="true">→</b></article><article class="person-row"><span>03</span><div><h2>Thinkers</h2><p>People bringing research, strategy, perspective and difficult questions.</p></div><b aria-hidden="true">→</b></article><article class="person-row"><span>04</span><div><h2>Connectors</h2><p>People who create bridges between talent, ideas and opportunities.</p></div><b aria-hidden="true">→</b></article></div>${socialSection("Meet us online", "Connect with our community members.")}<div class="hero-actions" style="margin-top: var(--space-7); justify-content: center;">${btn("Our Culture", "culture", "primary", ASSETS.arrowRight)}${btn("Contribute", "contribution", "ghost")}</div></section>`,

    culture: (page) => `<section class="page" aria-label="Culture"><header class="page-header"><span class="eyebrow">${page.eyebrow}</span><h1>${page.heading}</h1><p>${page.intro}</p></header><div class="culture-principles"><div class="culture-grid"><div class="culture-feature"><span class="giant-word">MAKE</span><p>Don't wait for perfect conditions. Start with what you have and make the next version better.</p></div><div class="culture-feature"><span class="giant-word">SHARE</span><p>Knowledge compounds when it moves. Share context, useful references and honest lessons.</p></div><div class="culture-feature"><span class="giant-word">CONNECT</span><p>Strong communities are built through relationships, not follower counts.</p></div><div class="culture-feature"><span class="giant-word">RESPECT</span><p>Challenge ideas without reducing the people behind them.</p></div></div></div><div class="culture-pillars-section"><span class="section-label">The pillars of our world</span><h2 style="font: 500 clamp(2rem, 4vw, 3.5rem)/1 var(--display); margin: 0 0 var(--space-6);">Culture in action.</h2><div class="culture-pillars-grid">${cultureItem("01", "Meme", "Culture through humor. The language of the internet, refined.", ASSETS.iconMeme)}${cultureItem("02", "Raid", "Coordinated momentum. We move as one, we hit as one.", ASSETS.iconRaid)}${cultureItem("03", "Nobar", "Shared experience. Together we witness, together we react.", ASSETS.iconNobar)}${cultureItem("04", "Mabar", "Play together. Competition and camaraderie in equal measure.", ASSETS.iconMabar)}${cultureItem("05", "Event", "Moments that matter. Gatherings that shape our trajectory.", ASSETS.iconEvent)}${cultureItem("06", "Giveaway", "Generosity as culture. We rise by lifting others.", ASSETS.iconGiveaway)}${cultureItem("07", "Society Game", "Our world, our rules. Built by us, played by us.", ASSETS.iconGame)}${cultureItem("08", "Utility", "Tools that work. Function follows form, value follows use.", ASSETS.iconUtility)}</div></div>${socialSection("Share the culture", "Spread the word across your networks.")}<div class="hero-actions" style="margin-top: var(--space-7); justify-content: center;">${btn("How to Contribute", "contribution", "primary", ASSETS.arrowRight)}${btn("Join Society", "join", "ghost")}</div></section>`,

    contribution: (page) => `<section class="page" aria-label="Contribution"><header class="page-header"><span class="eyebrow">${page.eyebrow}</span><h1>${page.heading}</h1><p>${page.intro}</p></header><div class="contribution-layout"><div class="contribution-main"><h2 style="font: 500 clamp(1.8rem, 3vw, 2.8rem)/1 var(--display); margin: 0 0 var(--space-5);">Ways to contribute</h2>${card("01", "Create", "Build a project, publish an idea, make a resource or start an experiment.")}${card("02", "Connect", "Introduce people who should know each other and create useful opportunities.")}${card("03", "Support", "Review work, answer questions, share feedback or help someone move forward.")}${card("04", "Document", "Turn experience into notes, guides and references that others can reuse.")}</div><aside class="side-note"><strong>Every contribution matters.</strong><p style="margin-top: 14px; color: var(--muted); font-size: 14px;">You don't need permission to contribute. Start small, stay consistent, and let the work speak.</p><div style="margin-top: var(--space-5);">${btn("Join Now", "join", "primary", ASSETS.arrowRight)}</div></aside></div><div class="social-section" style="margin-top: var(--space-8);"><span class="section-label">Share your work</span><p style="color: var(--muted); margin-bottom: var(--space-4);">Tag us when you contribute. We amplify our community.</p>${socialLinks("social-links-large")}</div></section>`,

    alpha: (page) => `<section class="page" aria-label="Alpha"><header class="page-header"><span class="eyebrow">${page.eyebrow}</span><h1>${page.heading}</h1><p>${page.intro}</p></header><div class="alpha-panel"><span class="alpha-mark" aria-hidden="true">α</span><div><span class="eyebrow">Early access layer</span><h2>Signals before they become noise.</h2><p>Alpha gives the community a place to surface interesting projects, early concepts, private experiments and opportunities worth watching.</p><div style="margin-top: var(--space-5);">${btn("Request Access", "join", "primary", ASSETS.arrowRight)}${btn("Learn More", "about", "ghost")}</div></div></div><div class="card-grid two" style="margin-top: var(--space-8);">${card("A1", "Projects", "Early-stage work looking for feedback, collaborators or first users.")}${card("A2", "Signals", "Interesting developments, people and ideas worth paying attention to.")}</div><div class="social-section" style="margin-top: var(--space-8);"><span class="section-label">Alpha updates</span><p style="color: var(--muted); margin-bottom: var(--space-4);">Get early signals on our social channels.</p>${socialLinks("social-links-large")}</div></section>`,

    lab: (page) => `<section class="page" aria-label="Lab"><header class="page-header"><span class="eyebrow">${page.eyebrow}</span><h1>${page.heading}</h1><p>${page.intro}</p></header><div class="lab-terminal"><div class="terminal-bar"><i></i><i></i><i></i><span>society/lab</span></div><div class="terminal-content"><span class="terminal-muted">$ society lab --status</span><strong>EXPERIMENTAL / OPEN</strong><span class="terminal-muted">$ next</span><p>Build small. Learn quickly. Share what works.</p><a href="#join" data-route="join" class="terminal-link" data-cursor>> propose an experiment</a></div></div><div class="social-section" style="margin-top: var(--space-8);"><span class="section-label">Lab reports</span><p style="color: var(--muted); margin-bottom: var(--space-4);">Follow our experiments in real-time.</p>${socialLinks("social-links-large")}</div><div class="hero-actions" style="margin-top: var(--space-7); justify-content: center;">${btn("Join the Lab", "join", "primary", ASSETS.arrowRight)}${btn("View Archive", "archive", "ghost")}</div></section>`,

    archive: (page) => `<section class="page" aria-label="Archive"><header class="page-header"><span class="eyebrow">${page.eyebrow}</span><h1>${page.heading}</h1><p>${page.intro}</p></header><div class="archive-list"><article><span>2026</span><div><h2>Society / Foundations</h2><p>The principles, language and early structure behind the community.</p></div><b aria-hidden="true">↗</b></article><article><span>2026</span><div><h2>Community Notes</h2><p>Selected ideas and observations collected from the network.</p></div><b aria-hidden="true">↗</b></article><article><span>2026</span><div><h2>Projects</h2><p>A record of experiments, collaborations and things worth remembering.</p></div><b aria-hidden="true">↗</b></article></div><div class="social-section" style="margin-top: var(--space-8);"><span class="section-label">Archive feeds</span><p style="color: var(--muted); margin-bottom: var(--space-4);">Browse our history across platforms.</p>${socialLinks("social-links-large")}</div><div class="hero-actions" style="margin-top: var(--space-7); justify-content: center;">${btn("Back to Home", "home", "primary", ASSETS.arrowRight)}${btn("Join Society", "join", "ghost")}</div></section>`,

    join: (page) => `<section class="page" aria-label="Join Society"><div class="join-layout"><div><header class="page-header" style="padding-bottom: var(--space-6);"><span class="eyebrow">${page.eyebrow}</span><h1>${page.heading}</h1><p>${page.intro}</p></header><form class="join-form" id="joinForm" aria-label="Join form"><label><span>Name</span><input type="text" name="name" placeholder="Your name" required autocomplete="name"></label><label><span>Email</span><input type="email" name="email" placeholder="you@example.com" required autocomplete="email"></label><label><span>What do you make or care about?</span><textarea name="message" rows="4" placeholder="Tell us what you make, what you care about and what you want to contribute." required></textarea></label><button type="submit" class="button button-primary" data-cursor>Send Introduction</button><p class="form-status" id="formStatus" aria-live="polite"></p></form><div class="social-section" style="margin-top: var(--space-6);"><span class="section-label">Or find us here</span><p style="color: var(--muted); margin-bottom: var(--space-4);">Reach out through any of our channels.</p>${socialLinks("social-links-large")}</div></div><aside class="side-note" style="position: sticky; top: calc(var(--nav-height) + var(--space-5));"><strong>What happens next?</strong><p style="margin-top: 14px; color: var(--muted); font-size: 14px;">We read every introduction. If there's a fit, we'll reach out within a week to schedule a conversation.</p><div style="margin-top: var(--space-5); display: flex; flex-direction: column; gap: 10px;"><a href="#about" data-route="about" class="text-link" data-cursor><span aria-hidden="true">↗</span> About Society</a><a href="#culture" data-route="culture" class="text-link" data-cursor><span aria-hidden="true">↗</span> Our Culture</a><a href="#alpha" data-route="alpha" class="text-link" data-cursor><span aria-hidden="true">↗</span> Alpha Access</a></div></aside></div></section>`
  };

  const renderPage = (route) => { const page = ROUTES[route]; const templateFn = templates[page.template] || templates.home; return templateFn(page); };

  const updateNavigation = (route) => {
    document.querySelectorAll("[data-route]").forEach((link) => {
      const isActive = link.dataset.route === route;
      link.classList.toggle("is-active", isActive);
      if (link.hasAttribute("aria-current")) link.setAttribute("aria-current", isActive ? "page" : "false");
    });
  };

  const updateDocument = (route) => { const page = ROUTES[route]; document.title = page.title; document.documentElement.dataset.route = route; };

  const navigate = async (route, useTransition = true) => {
    if (!ROUTES[route]) route = "home";
    const currentRoute = getRoute();
    if (currentRoute === route && app.children.length) { updateNavigation(route); return; }
    if (useTransition && !prefersReducedMotion) { transition.classList.add("is-visible"); await new Promise((resolve) => setTimeout(resolve, 250)); }
    app.innerHTML = renderPage(route);
    updateDocument(route);
    updateNavigation(route);
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "instant" });
    requestAnimationFrame(() => { app.classList.remove("page-enter"); void app.offsetWidth; app.classList.add("page-enter"); });
    bindPageInteractions();
    if (useTransition && !prefersReducedMotion) { setTimeout(() => transition.classList.remove("is-visible"), 300); } else { transition.classList.remove("is-visible"); }
  };

  const handleRoute = () => navigate(getRoute());

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
    const form = document.getElementById("joinForm");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const status = document.getElementById("formStatus");
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = "Sending...";
        btn.disabled = true;
        setTimeout(() => { status.textContent = "Thanks. Your introduction is ready to be connected."; form.reset(); btn.textContent = originalText; btn.disabled = false; }, 1200);
      });
    }
    document.querySelectorAll("[data-cursor]").forEach((element) => {
      element.addEventListener("mouseenter", () => cursorFollower?.classList.add("is-large"));
      element.addEventListener("mouseleave", () => cursorFollower?.classList.remove("is-large"));
    });
  };

  const initCursor = () => {
    if (!cursor || !cursorFollower || window.matchMedia("(pointer: coarse)").matches) return;
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2, followerX = mouseX, followerY = mouseY;
    window.addEventListener("mousemove", (event) => { mouseX = event.clientX; mouseY = event.clientY; cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; });
    const animate = () => { followerX += (mouseX - followerX) * 0.12; followerY += (mouseY - followerY) * 0.12; cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`; requestAnimationFrame(animate); };
    animate();
  };

  const handleClick = (event) => {
    const link = event.target.closest("[data-route]");
    if (!link) return;
    event.preventDefault();
    event.stopPropagation();
    const route = link.dataset.route;
    if (!ROUTES[route]) return;
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash !== route) {
      history.pushState({ route: route }, "", "#" + route);
    }
    navigate(route, true);
  };

  const handleKeydown = (event) => { if (event.key === "Escape") closeMobileMenu(); };

  const init = () => {
    currentYear.textContent = new Date().getFullYear();
    navToggle?.addEventListener("click", toggleMobileMenu);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("popstate", () => navigate(getRoute(), false));
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    initCursor();
    updateScrollProgress();
    navigate(getRoute(), false);
    window.addEventListener("load", () => { setTimeout(() => { loader?.classList.add("is-hidden"); }, prefersReducedMotion ? 0 : 700); });
  };

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", init); } else { init(); }
})();



