const data = window.ZENITH;
const page = document.body.dataset.page || "home";
const app = document.querySelector("#app");

const navigation = [
    ["Home", "index.html", "home"],
    ["Join", "join.html", "join"],
    ["Events", "events.html", "events"],
    ["Hiscores", "hiscores.html", "hiscores"],
    ["Gallery", "gallery.html", "gallery"],
    ["Roles", "roles.html", "roles"],
    ["Staff", "staff.html", "staff"]
];

const pageDetails = {
    events: ["The next adventure", "Clan events", "Raids, bossing, skilling and plenty of good company. Here's a look back at some of the adventures we've shared."],
    gallery: ["The moments worth keeping", "Community gallery", "Big drops, personal milestones, and event wins — earned by the people who make Zenith what it is."],
    hiscores: ["A little friendly competition", "Clan hiscores", "A snapshot of some of the highest total levels in our clan and Discord community."],
    join: ["Your next party is waiting", "Find your people in Gielinor", "Looking for a raid team, a skilling buddy, or just a place to hang out? There's room for you at Zenith."],
    recruitment: ["The roster board", "Recruitment", "Recruitment hiscores are temporarily unavailable. Join the Discord for the latest information."],
    roles: ["Every achievement has a place", "Community roles", "From your first month in the clan to your biggest in-game milestones, there's a role to celebrate it."],
    staff: ["Here to help you find your way", "Meet the team", "The people behind the scenes, keeping the community welcoming and the adventures rolling."],
    creators: ["Made by the community", "Our content creators", "Get to know the players sharing their Zenith adventures with the world."]
};

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function externalLink(label, className = "button button--primary") {
    return `<a class="${className}" href="${data.invite}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a>`;
}

function renderHeader() {
    return `
        <a class="skip-link" href="#main-content">Skip to content</a>
        <header class="site-header">
            <div class="nav-wrap">
                <a class="brand" href="index.html" aria-label="Zenith home">
                    <span class="brand-mark" aria-hidden="true">Z</span>
                    <span class="brand-name">ZENITH<small>OLD SCHOOL · COMMUNITY</small></span>
                </a>
                <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation">
                    <span></span><span></span><span></span>
                </button>
                <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
                    ${navigation.map(([label, href, key]) => `<a href="${href}"${page === key ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
                    <button class="theme-toggle" type="button" aria-label="Switch to light theme" title="Switch color theme"><span aria-hidden="true">☼</span></button>
                </nav>
            </div>
        </header>`;
}

function renderFooter() {
    return `
        <footer class="site-footer">
            <div class="footer-inner">
                <a class="brand brand--footer" href="index.html">
                    <span class="brand-mark" aria-hidden="true">Z</span>
                    <span class="brand-name">ZENITH<small>ADVENTURE IS BETTER TOGETHER</small></span>
                </a>
                <p>Made for the community. Not affiliated with Jagex.</p>
                ${externalLink("Come say hello", "footer-link")}
            </div>
            <div class="footer-bottom"><span>© ${new Date().getFullYear()} Zenith Discord</span><a href="#top">Back to top ↑</a></div>
        </footer>`;
}

function pageHeading(eyebrow, title, description) {
    return `<section class="page-heading"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${description}</p></section>`;
}

function renderHome() {
    const highlights = data.gallery.slice(0, 3);
    return `
        <main id="main-content">
            <section class="hero hero--home">
                <div class="hero-inner">
                    <p class="eyebrow"><span class="status-dot"></span> A community for every kind of adventurer</p>
                    <h1>Find your next<br><span>great adventure.</span></h1>
                    <p class="hero-copy">Raids, new records, chaotic events, and the people who make every grind better. Welcome to Zenith.</p>
                    <div class="hero-actions">${externalLink("Join the Discord")}<a class="button button--quiet" href="events.html">Explore the clan <span aria-hidden="true">↓</span></a></div>
                    <p class="hero-note"><span aria-hidden="true">✦</span> Old School RuneScape · Good company · No adventure too small</p>
                </div>
                <div class="hero-stamp" aria-hidden="true"><span>THE<br>ADVENTURE<br>IS YOURS</span></div>
            </section>
            <section class="intro-section section-wrap">
                <div class="section-kicker">A place to belong</div>
                <div class="intro-grid">
                    <h2>More than a clan.<br><span>Your kind of people.</span></h2>
                    <div><p>Whether you're taking on your first raid or chasing that next big milestone, Zenith is a friendly Old School RuneScape community ready to help make the journey memorable.</p><a class="text-link" href="join.html">Meet your next party <span aria-hidden="true">→</span></a></div>
                </div>
            </section>
            <section class="feature-section">
                <div class="section-wrap">
                    <div class="section-heading"><div><p class="eyebrow">Plenty to get into</p><h2>Make yourself at home</h2></div><a class="text-link" href="roles.html">Explore community roles <span aria-hidden="true">→</span></a></div>
                    <div class="feature-grid">
                        <a class="feature-card feature-card--raid" href="events.html"><span class="feature-icon"><img src="icons/botm.png" alt=""></span><span class="feature-label">Find your team</span><h3>PvM & raids</h3><p>Team up for the big encounters, or come learn something new.</p><span class="feature-arrow" aria-hidden="true">↗</span></a>
                        <a class="feature-card feature-card--skill" href="gallery.html"><span class="feature-icon"><img src="icons/sotm.png" alt=""></span><span class="feature-label">Celebrate the grind</span><h3>Skilling & milestones</h3><p>Every level, collection log, and hard-earned achievement deserves a cheer.</p><span class="feature-arrow" aria-hidden="true">↗</span></a>
                        <a class="feature-card feature-card--event" href="events.html"><span class="feature-icon"><span aria-hidden="true">✦</span></span><span class="feature-label">Show up & join in</span><h3>Events & giveaways</h3><p>Make memories together with clan events, competitions, and a little friendly chaos.</p><span class="feature-arrow" aria-hidden="true">↗</span></a>
                    </div>
                </div>
            </section>
            <section class="showcase-section section-wrap">
                <div class="section-heading"><div><p class="eyebrow">The good stuff</p><h2>Recently celebrated</h2></div><a class="text-link" href="gallery.html">See the full gallery <span aria-hidden="true">→</span></a></div>
                <div class="showcase-grid">${highlights.map((item) => `
                    <a class="showcase-card" href="gallery.html">
                        <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
                        <span class="showcase-overlay"><span class="eyebrow">${escapeHtml(item.category)}</span><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.caption)}</span></span>
                    </a>`).join("")}</div>
            </section>
            <section class="cta-band"><div class="cta-inner"><p class="eyebrow">A seat at the table is waiting</p><h2>Good adventures<br>start with good company.</h2><p>Come meet the clan, find a team, and see where the next adventure takes you.</p>${externalLink("Join the Zenith Discord")}</div></section>
        </main>`;
}

function renderEvents() {
    return `<main id="main-content">${pageHeading(...pageDetails.events)}
        <section class="section-wrap events-section">
            <div class="section-heading"><div><p class="eyebrow">The archive</p><h2>Adventures we've shared</h2></div><span class="count-pill">${data.events.length} highlights</span></div>
            <div class="event-grid">${data.events.map((event, index) => `
                <article class="event-card">
                    <div class="event-image"><img src="${event.image}" alt="${escapeHtml(event.title)}" loading="lazy"><span class="event-number">${String(index + 1).padStart(2, "0")}</span><span class="event-status">Past event</span></div>
                    <div class="event-content"><p class="eyebrow">From the clan archive</p><h2>${escapeHtml(event.title)}</h2><p>${escapeHtml(event.description)}</p></div>
                </article>`).join("")}</div>
        </section>
        <section class="cta-band cta-band--compact"><div class="cta-inner"><p class="eyebrow">The next one could be yours</p><h2>Come join the adventure.</h2>${externalLink("Find us on Discord")}</div></section>
    </main>`;
}

function renderGallery() {
    const categories = ["All", ...new Set(data.gallery.map((item) => item.category))];
    return `<main id="main-content">${pageHeading(...pageDetails.gallery)}
        <section class="section-wrap gallery-section">
            <div class="gallery-controls"><div class="filter-list" role="group" aria-label="Filter gallery by category">
                ${categories.map((category, index) => `<button class="filter-button${index === 0 ? " is-active" : ""}" type="button" data-filter="${escapeHtml(category)}" aria-pressed="${index === 0}">${escapeHtml(category)}</button>`).join("")}
            </div><label class="search-box"><span class="sr-only">Search gallery</span><span aria-hidden="true">⌕</span><input type="search" id="gallery-search" placeholder="Find a moment…" autocomplete="off"></label></div>
            <p class="gallery-count" aria-live="polite">${data.gallery.length} moments from the clan</p>
            <div class="gallery-grid" id="gallery-grid">${data.gallery.map((item, index) => `
                <button class="gallery-card" type="button" data-category="${escapeHtml(item.category)}" data-search="${escapeHtml(`${item.title} ${item.caption} ${item.category}`.toLowerCase())}" data-image="${item.image}" data-title="${escapeHtml(item.title)}" data-caption="${escapeHtml(item.caption)}" aria-label="View ${escapeHtml(item.title)}">
                    <span class="gallery-image"><img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy"><span class="gallery-zoom" aria-hidden="true">↗</span></span>
                    <span class="gallery-meta"><span class="eyebrow">${escapeHtml(item.category)}</span><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.caption)}</span></span>
                </button>`).join("")}</div>
            <p class="empty-state" id="gallery-empty" hidden>No moments found. Try another search.</p>
            <p class="gallery-invite">Have something to celebrate? <a class="text-link" href="${data.invite}" target="_blank" rel="noopener noreferrer">Share it with the clan <span aria-hidden="true">↗</span></a></p>
        </section>
        <dialog class="image-dialog" aria-label="Gallery image"><button class="dialog-close" type="button" aria-label="Close image">×</button><img src="" alt=""><div class="dialog-caption"></div></dialog>
    </main>`;
}

function renderHiscores() {
    return `<main id="main-content">${pageHeading(...pageDetails.hiscores)}
        <section class="section-wrap scores-section">
            <div class="scores-card"><div class="scores-heading"><div><p class="eyebrow">The leaderboard</p><h2>Top total levels</h2></div><span class="count-pill">TOP ${data.hiscores.length}</span></div>
                <div class="table-scroll"><table class="scores-table"><thead><tr><th scope="col">Rank</th><th scope="col">Player</th><th scope="col">Total level</th><th scope="col">Clan role</th></tr></thead><tbody>${data.hiscores.map((player, index) => `
                    <tr><td><span class="rank rank--${index + 1}">${String(index + 1).padStart(2, "0")}</span></td><th scope="row">${escapeHtml(player.name)}</th><td><span class="level-value">${player.level.toLocaleString()}</span></td><td><span class="role-chip"><img src="icons/${player.icon}" alt="">${escapeHtml(player.role)}</span></td></tr>`).join("")}</tbody></table></div>
                <p class="scores-footnote">A snapshot of community highscores. Levels and ranks may change over time.</p>
            </div>
            <div class="scores-note"><span class="note-mark" aria-hidden="true">✦</span><div><h2>Every level has a story.</h2><p>Our clan is about more than the numbers. Come celebrate your milestones with us, wherever you are on the journey.</p></div>${externalLink("Join the clan")}</div>
        </section>
    </main>`;
}

function renderJoin() {
    return `<main id="main-content">${pageHeading(...pageDetails.join)}
        <section class="join-section section-wrap"><div class="join-card"><div class="join-card-content"><p class="eyebrow">Your adventure starts here</p><h2>Come find<br>your crew.</h2><p>Say hello, meet the community, and find your place in the clan. Whether you're brand new or a seasoned adventurer, you're welcome here.</p>${externalLink("Join us on Discord")}<span class="join-assurance"><span aria-hidden="true">✦</span> Friendly faces. Shared adventures. Your next great story.</span></div><div class="join-emblem" aria-hidden="true"><span>✦</span><strong>Z</strong><span>ADVENTURE<br>TOGETHER</span></div></div>
            <div class="join-steps"><article><span class="step-number">01</span><h3>Drop in</h3><p>Join our Discord and introduce yourself to the community.</p></article><article><span class="step-number">02</span><h3>Find your thing</h3><p>Meet players who share your interests, goals, and sense of adventure.</p></article><article><span class="step-number">03</span><h3>Make it yours</h3><p>Join an event, celebrate a milestone, or just hang out with the clan.</p></article></div>
        </section></main>`;
}

function renderRoles() {
    return `<main id="main-content">${pageHeading(...pageDetails.roles)}
        <section class="section-wrap roles-section"><div class="role-grid">${data.roles.map(([name, description, icon]) => `
            <article class="role-card"><span class="role-icon"><img src="icons/${icon}" alt="" loading="lazy"></span><div><h2>${escapeHtml(name)}</h2><p>${escapeHtml(description)}</p></div><span class="role-star" aria-hidden="true">✦</span></article>`).join("")}</div></section>
        <section class="cta-band cta-band--compact"><div class="cta-inner"><p class="eyebrow">Room for every kind of adventurer</p><h2>Come find your place.</h2>${externalLink("Join the Discord")}</div></section>
    </main>`;
}

function renderStaff() {
    return `<main id="main-content">${pageHeading(...pageDetails.staff)}
        <section class="section-wrap staff-section"><div class="staff-grid">${data.staff.map((member) => `
            <article class="staff-card"><span class="staff-icon"><img src="icons/${member.icon}" alt="" loading="lazy"></span><div><p class="eyebrow">${escapeHtml(member.role)}</p><h2>${escapeHtml(member.people)}</h2></div><span class="staff-divider" aria-hidden="true"></span></article>`).join("")}</div></section>
        <section class="staff-note section-wrap"><p>Have a question or need a hand? <a class="text-link" href="${data.invite}" target="_blank" rel="noopener noreferrer">Find us on Discord <span aria-hidden="true">↗</span></a></p></section>
    </main>`;
}

function renderCreators() {
    return `<main id="main-content">${pageHeading(...pageDetails.creators)}
        <section class="section-wrap creators-section"><div class="creator-grid">${data.creators.map((creator) => `
            <article class="creator-card"><div class="creator-image"><img src="${creator.image}" alt="${escapeHtml(creator.name)}" loading="lazy"><span class="creator-spark" aria-hidden="true">✦</span></div><div class="creator-content"><p class="eyebrow">Zenith creator</p><h2>${escapeHtml(creator.name)}</h2><p>${escapeHtml(creator.description)}</p><div class="creator-links">${creator.twitch ? `<a href="${creator.twitch}" target="_blank" rel="noopener noreferrer"><img src="icons/Twitch.png" alt="">Twitch ↗</a>` : '<span class="link-unavailable">Twitch link not listed</span>'}${creator.youtube ? `<a href="${creator.youtube}" target="_blank" rel="noopener noreferrer"><img src="icons/youtubeicon.png" alt="">YouTube ↗</a>` : '<span class="link-unavailable">YouTube link not listed</span>'}</div></div></article>`).join("")}</div>
            <p class="creator-note">Creator links weren't provided yet. Join the Discord to discover more clan channels and creators.</p>
        </section></main>`;
}

function renderRecruitment() {
    return `<main id="main-content">${pageHeading(...pageDetails.recruitment)}
        <section class="section-wrap recruitment-section"><div class="recruitment-card"><span class="recruitment-icon" aria-hidden="true">⌛</span><p class="eyebrow">Taking a short break</p><h2>This board is offline for now.</h2><p>Recruitment hiscores are temporarily disabled. For the latest clan information, please join us on Discord.</p>${externalLink("Visit the Discord")}</div></section></main>`;
}

const renderers = {
    home: renderHome,
    events: renderEvents,
    gallery: renderGallery,
    hiscores: renderHiscores,
    join: renderJoin,
    recruitment: renderRecruitment,
    roles: renderRoles,
    staff: renderStaff,
    creators: renderCreators
};

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("zenith-theme", theme);
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
        toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
        toggle.innerHTML = `<span aria-hidden="true">${theme === "dark" ? "☼" : "☾"}</span>`;
    }
}

app.innerHTML = `${renderHeader()}${(renderers[page] || renderHome)()}${renderFooter()}`;
setTheme(localStorage.getItem("zenith-theme") === "light" ? "light" : "dark");

document.querySelector(".theme-toggle").addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("is-open", !isExpanded);
});

if (page === "gallery") {
    const grid = document.querySelector("#gallery-grid");
    const search = document.querySelector("#gallery-search");
    const count = document.querySelector(".gallery-count");
    const empty = document.querySelector("#gallery-empty");
    const dialog = document.querySelector(".image-dialog");
    const dialogImage = dialog.querySelector("img");
    let activeFilter = "All";

    function filterGallery() {
        const query = search.value.trim().toLowerCase();
        let visible = 0;
        grid.querySelectorAll(".gallery-card").forEach((card) => {
            const matchesCategory = activeFilter === "All" || card.dataset.category === activeFilter;
            const matchesSearch = card.dataset.search.includes(query);
            const isVisible = matchesCategory && matchesSearch;
            card.hidden = !isVisible;
            if (isVisible) visible += 1;
        });
        count.textContent = `${visible} ${visible === 1 ? "moment" : "moments"}${query ? " found" : " from the clan"}`;
        empty.hidden = visible !== 0;
    }

    document.querySelector(".filter-list").addEventListener("click", (event) => {
        const button = event.target.closest("[data-filter]");
        if (!button) return;
        activeFilter = button.dataset.filter;
        document.querySelectorAll(".filter-button").forEach((filter) => {
            const selected = filter === button;
            filter.classList.toggle("is-active", selected);
            filter.setAttribute("aria-pressed", String(selected));
        });
        filterGallery();
    });
    search.addEventListener("input", filterGallery);
    grid.addEventListener("click", (event) => {
        const card = event.target.closest(".gallery-card");
        if (!card) return;
        dialogImage.src = card.dataset.image;
        dialogImage.alt = card.dataset.title;
        dialog.querySelector(".dialog-caption").textContent = card.dataset.caption;
        dialog.showModal();
    });
    dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });
}
