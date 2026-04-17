// =============================================
// MOBILE: ABOUT TOGGLE
// =============================================
(function() {
    var btn = document.getElementById('about-toggle');
    var collapse = document.getElementById('about-collapse');
    var about = document.getElementById('about');
    if (btn && about) {
        btn.addEventListener('click', function() {
            var expanded = about.classList.toggle('expanded');
            btn.textContent = expanded ? '[Read Less]' : '[Read More]';
        });
    }
    if (collapse && about) {
        collapse.addEventListener('click', function() {
            about.classList.remove('expanded');
            if (btn) btn.textContent = '[Read More]';
        });
    }
})();

// =============================================
// HOVER IMAGE FOLLOWERS
// =============================================
function makeFollower(triggerId, imageId) {
    const trigger = document.getElementById(triggerId);
    const img     = document.getElementById(imageId);
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let raf = null;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function tick() {
        currentX = lerp(currentX, targetX, 0.08);
        currentY = lerp(currentY, targetY, 0.08);
        img.style.transform = 'translate(' + currentX + 'px, ' + currentY + 'px)';
        raf = requestAnimationFrame(tick);
    }

    trigger.addEventListener('mouseenter', function() {
        img.classList.add('visible');
        raf = requestAnimationFrame(tick);
    });

    trigger.addEventListener('mousemove', function(e) {
        targetX = e.clientX - img.offsetWidth  / 2;
        targetY = e.clientY - img.offsetHeight / 2;
    });

    trigger.addEventListener('mouseleave', function() {
        img.classList.remove('visible');
        cancelAnimationFrame(raf);
        raf = null;
    });
}

makeFollower('smith-diction', 'smith-diction-hover');
makeFollower('me', 'me-hover');
makeFollower('eye', 'eye-hover');

// =============================================
// PROJECTS — edit this array to update the gallery
//
// Each project has:
//   title        — project name
//   sub          — subtext shown in the rotated info strip
//   slides       — array of slides, each either:
//                    { type: "full", src: "path/to/image.jpg" }
//                    { type: "half", srcs: ["path/left.jpg", "path/right.jpg"] }
//   links        — array of { label, href } or { label, caseStudy: "key" }
//   description  — short paragraph shown on the right of the details panel
//   credits      — array of { role, names: [{ name, href? }, ...] }
//   tag          — "client" or "personal"
// =============================================
const projects = [
    {
        title: "Lifeblood",
        sub: "Publication — 2026",
        tag: "personal",
        slides: [
            { type: "full",  src: "images/lifeblood/holdingbook.jpg" },
            { type: "half",  srcs: ["images/lifeblood/bookCloseup.jpg", "images/lifeblood/bookCloseup2.jpg"] },
            { type: "full",  src: "images/lifeblood/page.jpg" },
            { type: "full",  src: "images/lifeblood/openingGatefold.gif" },
            { type: "full",  src: "images/lifeblood/lifebloodPages.gif" },
            { type: "full",  src: "images/lifeblood/envelope.gif" },
            { type: "full",  src: "images/lifeblood/envelopeFlat.jpg" },
            { type: "full",  src: "images/lifeblood/envelopeHoldingPhoto.jpg" },
            { type: "full",  src: "images/lifeblood/envelopeIndex.jpg" },
        ],
        links: [
            { label: "Case Study", caseStudy: "lifeblood" },
            // { label: "It's Nice That Feature", href: "#" },
        ],
        description: "Lifeblood is a photobook series in celebration of a bygone era of gay bars in Pittsburgh. In collaboration with QBurgh, a contemporary digital queer magazine, this project brings new form to a recently recovered archive of photography from Pittsburgh's gay bars between the 1960's and mid-2000's. It explores how we might access and document queer archives, bringing order and clarity without oversimplifying these traditionally undocumented histories.",
        credits: [
            { role: "Design", names: ["Caleb Sun"] },
            { role: "Archival Research", names: [
                { name: "Silas Maxwell Switzer", href: "https://www.silasmaxwellswitzer.com/" },
            ]}
        ]
    },
    {
        title: "Phipps",
        sub: "Brand Identity — 2025",
        tag: "personal",
        slides: [
            { type: "half",  srcs: ["images/phipps2/billboard2.jpg", "images/phipps2/tshirt.jpg"] },
            { type: "full",  src: "images/phipps2/ig-posts.jpg" },
            { type: "half",  srcs: ["images/phipps2/ig-story1.jpg", "images/phipps2/outdoor-sign.jpg"] },
            { type: "full",  src: "images/phipps2/billboard.jpg" },
            { type: "half",  srcs: ["images/phipps2/logotype-animation.gif", "images/phipps2/leaf.gif"] },
            { type: "half",  srcs: ["images/phipps2/business-cards.gif", "images/phipps2/signage.jpg"] },
            { type: "full",  src: "images/phipps2/poster-templates.gif" },
        ],
        links: [
            { label: "Case Study", caseStudy: "phipps" },
        ],
        description: "A timeless identity for a botanical garden that honors the past and looks eagerly towards the future.",
        credits: [
            { role: "Design", names: ["Caleb Sun"] },
        ]
    },
    {
        title: "Bloodfriends",
        sub: "Film Graphics — 2025",
        tag: "client",
        slides: [
            { type: "full",  src: "images/bloodfriends/Horizontal_banner.gif" },
            { type: "full",  src: "images/bloodfriends/brian.gif" },
            { type: "full",  src: "images/bloodfriends/monica.gif" },
            { type: "full",  src: "images/bloodfriends/sophia.gif" },
            { type: "full",  src: "images/bloodfriends/theo.gif" },
        ],
        links: [
            { label: "DocNYC Entry", href: "https://www.docnyc.net/film/shorts-cross-country-2025/blood-friends/" },
        ],
        description: "Bloodfriends is a documentary about an unlikely group of people who discover they were fathered by the same sperm donor. It explores kinship and closeness in uncharted territory, delivering a touching but unresolved sense of connection.\nI designed the title sequence and lower thirds, using rough hand-lettered typography with a nostalgic grotesk sans to create a feeling of familiarity and sensitivity. The system supports a summer camp-like tone that feels journalistic without being kitschy.",
        credits: [
            { role: "Design", names: ["Caleb Sun"] },
            { role: "Director/Producers", names: [
                { name: "Sam McCoy", href: "https://sammccoy.com/" },
                { name: "Hayley Ulmer", href: "https://www.imdb.com/name/nm8183250/" },
            ]}
        ]
    },
    {
        title: "Alchemy Earth",
        sub: "Event Identity — 2024",
        tag: "personal",
        slides: [
            { type: "full",  src: "images/alchemy/billboard1.jpg" },
            { type: "full",  src: "images/alchemy/indoor-wall.jpg" },
            { type: "half",  srcs: ["images/alchemy/tote-bag.jpg", "images/alchemy/tshirt.jpg"] },
            { type: "full",  src: "images/alchemy/speaker.jpg" },
            { type: "half",  srcs: ["images/alchemy/didactic-label.jpg", "images/alchemy/elevator-wayfinding.jpg"] },
            { type: "full",  src: "images/alchemy/layouts.gif" },
            { type: "full",  src: "images/alchemy/guidelines.jpg" },
        ],
        links: [
        ],
        description: "A modern, elegant identity for a ceramic arts biennial held in the birthplace of porcelain.",
        credits: [
            { role: "Design", names: ["Caleb Sun"] },
        ]
    },
    {
        title: "Design Lecture Series",
        sub: "Event Identity — 2024",
        tag: "personal",
        slides: [
            { type: "full",  src: "images/dls/DLS-hero.gif" },
            { type: "half",  srcs: ["images/dls/gray-unit.gif", "images/dls/text-effect.gif"] },
            { type: "full",  src: "images/dls/layers.gif" },
            { type: "half",  srcs: ["images/dls/ig-posts.gif", "images/dls/dls-collateral-6.jpg"] },            
            { type: "full",  src: "images/dls/gravity-demo.gif" },
            { type: "half",  srcs: ["images/dls/name-drop.gif", "images/dls/text-effect.gif"] },
            { type: "full",  src: "images/dls/dylan-stabilized.gif" },

        ],
        links: [
        ],
        description: "Carnegie Mellon School of Design Lecture Series is an annual run of lectures bringing diverse designers to Pittsburgh to deliver talks that expand students' horizons and understandings about all things design. This identity for the series hinges on themes of the talks and their role in design students' lives, as building blocks that come together to create an informed and enriched ethos.",
        credits: [
            { role: "Design", names: [
                { name: "Caleb Sun"},
                { name: "Amber Li", href: "https://amberjinli.com/" },
            ]},
        ]
    },

    {
        title: "Tickets to Mecca",
        sub: "Data Vis — 2024",
        tag: "personal",
        slides: [
            { type: "full",  src: "images/tickets-to-mecca/hero.gif" },
            { type: "full",  src: "images/tickets-to-mecca/label-legend.gif" },
            { type: "half",  srcs: ["images/tickets-to-mecca/photo-cameroon-individual.JPG", "images/tickets-to-mecca/photo-group.JPG"] },
        ],
        links: [
        ],
        description: "Data visualization of the visas issued for the 2024 Mecca pilgrimage to Saudi Arabia. Each ticket represents 5000 visas to their corresponding countries with information on region, relative cost, and population.",
        credits: [
            { role: "Design", names: ["Caleb Sun"] },
        ]
    },

    {
        title: "Memory of a Monarch",
        sub: "Publication Design — 2024",
        tag: "personal",
        slides: [
            { type: "full",  src: "images/memoriesOfAMonarch/book_scan.gif" },
            { type: "full",  src: "images/memoriesOfAMonarch/poster-outside.jpg" },
            { type: "full",  src: "images/memoriesOfAMonarch/memory-of-monarch.png" },
        ],
        links: [
        ],
        description: "Book and poster documenting the cross-border migratory patterns of monarch butterflies, and the metaphorical, multi-lingual implications of that journey.",
        credits: [
            { role: "Design", names: [
                { name: "Caleb Sun"},
                { name: "Ricky Chen", href: "linkedin.com/in/rckychen/" },
            ]},
        ]
    },

    {
        title: "Various",
        sub: "2023 – Present",
        tag: "personal",
        slides: [
            { type: "full",  src: "images/etc/design-week-graphic.gif" },
            { type: "full",  src: "images/etc/year-of-the-snake.png" },
            { type: "full",  src: "images/etc/washing-dishes.gif" },
            { type: "full",  src: "images/etc/sonny-1.jpg" },
            { type: "full",  src: "images/etc/or-to-taste-flipthru.gif" },            
        ],
        links: [
        ],
        description: "Various projects from across the years",
    },
];

// =============================================
// CASE STUDY TRANSITION
// =============================================
var caseStudyOpen = false;
var savedHomeNodes = null;
var savedGalleryNodes = null;

function buildCaseStudyHome(cs) {
    const li = document.createElement('li');
    li.className = 'project-contents';

    const nav = document.createElement('div');
    nav.className = 'project-nav';
    nav.style.position = 'static';
    const back = document.createElement('sub');
    back.setAttribute('data-back', '');
    back.className= 'back-button';
    back.style.cursor = 'crosshair';
    back.textContent = '[\u2190 Back]';
    nav.appendChild(back);
    li.appendChild(nav);

    const projectBody = document.createElement('div');
    projectBody.className = 'project-body';

    const header = document.createElement('div');
    header.className = 'project-header';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'project-name';

    const h1 = document.createElement('h1');
    h1.textContent = cs.title;
    nameDiv.appendChild(h1);

    const subEl = document.createElement('sub');
    subEl.textContent = cs.sub;
    nameDiv.appendChild(subEl);

    if (cs.collaboration) {
        const collabSub = document.createElement('sub');
        collabSub.appendChild(document.createTextNode('Client: '));
        const collabA = document.createElement('a');
        collabA.href = cs.collaboration.href;
        collabA.target = '_blank';
        collabA.textContent = cs.collaboration.label;
        collabSub.appendChild(collabA);
        nameDiv.appendChild(collabSub);
    }

    header.appendChild(nameDiv);
    projectBody.appendChild(header);

    

    if (cs.paragraphs && cs.paragraphs.length) {
        const wrap = document.createElement('div');
        wrap.className = 'project-description';
        cs.paragraphs.forEach(function(text) {
            const p = document.createElement('p');
            p.textContent = text;
            wrap.appendChild(p);
        });
        projectBody.appendChild(wrap);
    }

    if (cs.credits && cs.credits.length) {
        const creditsList = document.createElement('div');
        creditsList.className = 'credits-list';
        cs.credits.forEach(function(credit) {
            const item = document.createElement('div');
            item.className = 'credits-item';
            const role = document.createElement('sub');
            role.className = 'credits-role';
            role.textContent = credit.role;
            item.appendChild(role);
            credit.names.forEach(function(entry) {
                const nameEl = document.createElement('p');
                nameEl.className = 'credits-name';
                if (typeof entry === 'string') {
                    nameEl.textContent = entry;
                } else if (entry.href) {
                    const a = document.createElement('a');
                    a.href = entry.href;
                    a.target = '_blank';
                    a.textContent = entry.name;
                    nameEl.appendChild(a);
                } else {
                    nameEl.textContent = entry.name;
                }
                item.appendChild(nameEl);
            });
            creditsList.appendChild(item);
        });
        projectBody.appendChild(creditsList);
    }

    li.appendChild(projectBody);

    const navbottom = document.createElement('div');
    navbottom.className = 'project-nav';
    navbottom.style.position = 'static';
    const backbottom = document.createElement('sub');
    backbottom.setAttribute('data-back', '');
    backbottom.className= 'back-button';
    backbottom.style.cursor = 'crosshair';
    backbottom.textContent = '[\u2190 Back]';
    navbottom.appendChild(backbottom);

    li.appendChild(navbottom);

    return li;
}

function buildCaseStudyGallery(cs) {
    const wrap = document.createElement('div');
    wrap.className = 'case-study-images';
    cs.images.forEach(function(slide) {
        const div = document.createElement('div');
        if (slide.type === 'full') {
            div.className = 'cs-slide cs-slide-full';
            const img = document.createElement('img');
            img.src = slide.src;
            div.appendChild(img);
        } else {
            div.className = 'cs-slide cs-slide-half';
            slide.srcs.forEach(function(src) {
                const img = document.createElement('img');
                img.src = src;
                div.appendChild(img);
            });
        }
        wrap.appendChild(div);
    });
    return wrap;
}

function openCaseStudy(key) {
    if (caseStudyOpen) return;
    const cs = caseStudies[key];
    if (!cs) return;
    const homeUl = document.querySelector('ul.home');
    const galleryUl = document.getElementById('gallery');

    homeUl.classList.add('col-fading');
    galleryUl.classList.add('col-fading');

    homeUl.addEventListener('transitionend', function() {
        savedHomeNodes = document.createDocumentFragment();
        while (homeUl.firstChild) savedHomeNodes.appendChild(homeUl.firstChild);
        savedGalleryNodes = document.createDocumentFragment();
        while (galleryUl.firstChild) savedGalleryNodes.appendChild(galleryUl.firstChild);

        const homeContent = buildCaseStudyHome(cs);
        homeUl.appendChild(homeContent);
        homeUl.querySelector('[data-back]').addEventListener('click', closeCaseStudy);
        galleryUl.appendChild(buildCaseStudyGallery(cs));

        caseStudyOpen = true;
        homeUl.getBoundingClientRect();
        homeUl.classList.remove('col-fading');
        galleryUl.classList.remove('col-fading');
        homeUl.scrollTop = 0;
        galleryUl.scrollTop = 0;

        const navTags = document.querySelector('.right-nav-tags');
        navTags.innerHTML =
            '<a id="nav-breadcrumb-index"><sub>Index</sub></a>' +
            '<sub class="nav-breadcrumb-sep">/</sub>' +
            '<sub class="nav-breadcrumb-title">' + cs.title + '</sub>';
        navTags.querySelector('#nav-breadcrumb-index').addEventListener('click', closeCaseStudy);
    }, { once: true });
}

function closeCaseStudy() {
    if (!caseStudyOpen) return;
    const homeUl = document.querySelector('ul.home');
    const galleryUl = document.getElementById('gallery');

    homeUl.classList.add('col-fading');
    galleryUl.classList.add('col-fading');

    homeUl.addEventListener('transitionend', function() {
        while (homeUl.firstChild) homeUl.removeChild(homeUl.firstChild);
        while (galleryUl.firstChild) galleryUl.removeChild(galleryUl.firstChild);

        homeUl.appendChild(savedHomeNodes);
        galleryUl.appendChild(savedGalleryNodes);
        savedHomeNodes = null;
        savedGalleryNodes = null;
        caseStudyOpen = false;

        galleryUl.querySelectorAll('.slideshow-stage').forEach(function(stage) {
            const slides = stage.querySelectorAll('.slide');
            const counter = stage.closest('.project-slideshow').querySelector('.slideshow-counter');
            slides.forEach(function(s) { s.classList.remove('active'); });
            if (slides.length) {
                slides[0].classList.add('active');
                stage._current = 0;
                if (counter) counter.textContent = '1 / ' + slides.length;
            }
        });

        const navTags = document.querySelector('.right-nav-tags');
        navTags.innerHTML =
            '<a id="all"><sub>All</sub></a>' +
            '<a id="client"><sub>Client</sub></a>' +
            '<a id="personal"><sub>Personal</sub></a>';
        bindFilterListeners();

        homeUl.getBoundingClientRect();
        homeUl.classList.remove('col-fading');
        galleryUl.classList.remove('col-fading');
    }, { once: true });
}

// =============================================
// GALLERY RENDERING — no need to edit below
// =============================================
function buildGallery() {
    const gallery = document.getElementById('gallery');

    projects.forEach(function(project) {
        const total = project.slides.length;

        // Wrapper
        const li = document.createElement('li');
        li.className = 'gallery-item';
        if (project.tag) li.dataset.tag = project.tag;

        const slideshow = document.createElement('div');
        slideshow.className = 'project-slideshow';

        // Info panel (left strip, rotated CCW)
        const caseStudyLink = (project.links || []).find(function(l) { return l.caseStudy; });
        const info = document.createElement(caseStudyLink ? 'a' : 'div');
        info.className = 'slideshow-info';
        if (caseStudyLink) {
            info.href = '#';
            info.addEventListener('click', function(e) {
                e.preventDefault();
                openCaseStudy(caseStudyLink.caseStudy);
            });
        }

        const titleEl = document.createElement('p');
        titleEl.className = 'slideshow-title';
        titleEl.textContent = project.title;

        const subEl = document.createElement('sub');
        subEl.className = 'slideshow-sub';
        subEl.textContent = project.sub;

        const counterEl = document.createElement('sub');
        counterEl.className = 'slideshow-counter';
        counterEl.textContent = '1 / ' + total;

        info.appendChild(titleEl);
        info.appendChild(subEl);
        info.appendChild(counterEl);

        // Stage
        const stage = document.createElement('div');
        stage.className = 'slideshow-stage';

        // Build slide elements
        const slideEls = project.slides.map(function(slide, i) {
            const div = document.createElement('div');
            div.className = 'slide' + (i === 0 ? ' active' : '');

            if (slide.type === 'full') {
                const img = document.createElement('img');
                img.src = slide.src;
                img.className = 'slide-full';
                img.draggable = false;
                div.appendChild(img);
            } else {
                slide.srcs.forEach(function(src) {
                    const img = document.createElement('img');
                    img.src = src;
                    img.className = 'slide-half';
                    img.draggable = false;
                    div.appendChild(img);
                });
            }

            stage.appendChild(div);
            return div;
        });

        stage._current = 0;

        // Navigate to slide n
        function goTo(n) {
            slideEls[stage._current].classList.remove('active');
            stage._current = ((n % total) + total) % total;
            slideEls[stage._current].classList.add('active');
            counterEl.textContent = (stage._current + 1) + ' / ' + total;
        }

        // Click left half = previous, right half = next
        stage.addEventListener('click', function(e) {
            const rect = stage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            if (x < rect.width / 2) {
                goTo(stage._current - 1);
            } else {
                goTo(stage._current + 1);
            }
        });

        // Show directional cursor
        stage.addEventListener('mousemove', function(e) {
            const rect = stage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            stage.style.cursor = x < rect.width / 2 ? 'w-resize' : 'e-resize';
        });

        slideshow.appendChild(info);
        slideshow.appendChild(stage);

        // Details panel (revealed on hover)
        const panel = document.createElement('div');
        panel.className = 'project-details-panel';

        const inner = document.createElement('div');
        inner.className = 'project-details-inner';

        const content = document.createElement('div');
        content.className = 'project-details-content';

        // Left — links
        const linksCol = document.createElement('div');
        linksCol.className = 'details-links';
        (project.links || []).forEach(function(link) {
            const a = document.createElement('a');
            a.href = link.href || '#';
            if (link.caseStudy) {
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    openCaseStudy(link.caseStudy);
                });
            } else if (/^https?:\/\/|^mailto:/.test(link.href)) {
                a.target = '_blank';
            }
            const label = document.createElement('sub');
            label.textContent = link.label;
            a.appendChild(label);
            linksCol.appendChild(a);
        });

        // Right — description + credits
        const rightCol = document.createElement('div');
        rightCol.className = 'details-right';

        if (project.description) {
            const descWrap = document.createElement('div');
            project.description.split('\n').forEach(function(line) {
                const p = document.createElement('p');
                p.textContent = line;
                descWrap.appendChild(p);
            });
            rightCol.appendChild(descWrap);
        }

        if (project.credits && project.credits.length) {
            const creditsList = document.createElement('div');
            creditsList.className = 'credits-list';

            project.credits.forEach(function(credit) {
                const item = document.createElement('div');
                item.className = 'credits-item';

                const role = document.createElement('sub');
                role.className = 'credits-role';
                role.textContent = credit.role;
                item.appendChild(role);

                credit.names.forEach(function(entry) {
                    const nameEl = document.createElement('p');
                    nameEl.className = 'credits-name';
                    if (typeof entry === 'string') {
                        nameEl.textContent = entry;
                    } else if (entry.href) {
                        const a = document.createElement('a');
                        a.href = entry.href;
                        a.target = '_blank';
                        a.textContent = entry.name;
                        nameEl.appendChild(a);
                    } else {
                        nameEl.textContent = entry.name;
                    }
                    item.appendChild(nameEl);
                });

                creditsList.appendChild(item);
            });

            rightCol.appendChild(creditsList);
        }

        content.appendChild(linksCol);
        content.appendChild(rightCol);
        inner.appendChild(content);
        panel.appendChild(inner);

        li.appendChild(slideshow);
        li.appendChild(panel);
        gallery.appendChild(li);
    });
}

buildGallery();

// =============================================
// FILTERING
// =============================================
function filterGallery(tag) {
    var items = document.querySelectorAll('.gallery-item');

    items.forEach(function(item) {
        var match = tag === 'all' || item.dataset.tag === tag;

        if (match) {
            item.style.display = '';
            item.getBoundingClientRect();
            item.classList.remove('filtered-out');
        } else {
            item.classList.add('filtered-out');
            item.addEventListener('transitionend', function hide() {
                if (item.classList.contains('filtered-out')) {
                    item.style.display = 'none';
                }
                item.removeEventListener('transitionend', hide);
            });
        }
    });

    document.querySelectorAll('.right-nav-tags a').forEach(function(a) {
        a.classList.toggle('nav-active', a.id === tag);
    });
}

function bindFilterListeners() {
    document.getElementById('all').addEventListener('click',      function() { filterGallery('all'); });
    document.getElementById('client').addEventListener('click',   function() { filterGallery('client'); });
    document.getElementById('personal').addEventListener('click', function() { filterGallery('personal'); });
    document.getElementById('all').classList.add('nav-active');
}

bindFilterListeners();

// =============================================
// CLOCK
// =============================================
function updateClock() {
    const t = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('clock').textContent = t;
}
updateClock();
setInterval(updateClock, 1000);
