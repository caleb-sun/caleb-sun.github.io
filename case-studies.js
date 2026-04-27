// =============================================
// CASE STUDIES — edit this to update case study content
//
// Each entry key matches a caseStudy key used in the projects array in index.js.
// paragraphs — array of strings, each rendered as its own <p>
// images     — array of src paths shown as a vertical stack in the gallery column
// credits    — array of { role, names: [{ name, href? }, ...] }
// collaboration — optional { label, href } shown as "In collaboration with ___"
// =============================================
const caseStudies = {
    lifeblood: {
        title: "Lifeblood",
        sub: "Undergraduate Thesis — 2026",
        collaboration: {
            label: "QBurgh",
            href: "https://www.qburgh.com/",
        },
        paragraphs: [
            "Lifeblood is a photobook series in celebration of a bygone era of gay bars in Pittsburgh. In collaboration with QBurgh, a contemporary digital queer magazine, this project brings new form to a recently recovered archive of photography from Pittsburgh's gay bars between the 1960's and mid-2000's. It explores how we might access and document queer archives, bringing order and clarity without oversimplifying these traditionally undocumented histories.",
            "Lifeblood Part I: Stories of Survival and Community-Making in Pittsburgh's Bygone Gay Bars is an introduction to the messy histories of Pittsburgh's gay bar scene. Visual cues draw inspiration from OUT Magazine's original newspaper runs, from news-column inspired layouts to a reliance on dingbat symbols as navigation. Artifacts from the past and present are presented beside the Out Magazine photo archives to provide context, alongside essays that document the histories of the OUT archives and Pittsburgh's queer history at large.",
            "Lifeblood Part 2: Photos from Pittsburgh's Bygone Gay Bars is a reproduction of OUT Magazine photo archives. 165 select photos are reproduced to scale with front and back details, including original photographer notes and textures, then sorted into folders that mirror the physical OUT Magazine archives in real life. A guide booklet and numerical sticker labels accompany these photos to assist a reader in navigation, allowing for cross-reference with Lifeblood Part 1, other photographs in the collection, and re-organizing at the end of their engagement with the archive.",
            "Lifeblood presents a new method of queering archival accessibility. Institutional archives have traditionally concealed our history through imposing rules and limits to engagement. By removing the boundaries of archival practice and placing artifacts in a person's hands, and allowing the freedom to break, bend, re-order, cross-reference, and discover, Lifeblood empowers and humanizes the discovery of a generation of queer experience lost to time.",
        ],
        credits: [
            { role: "Design", names: [
                { name: "Caleb Sun" },
            ]},
            { role: "Archival Research and Documentation", names: [
                { name: "Silas Maxwell Switzer", href: "https://www.silasmaxwellswitzer.com/" },
            ]},
        ],
        images: [
            { type: "full", src: "images/lifeblood/holdingbook.jpg" },
            { type: "half", srcs: ["images/lifeblood/bookCloseup.jpg", "images/lifeblood/bookCloseup2.jpg"] },
            { type: "full", src: "images/lifeblood/page.jpg" },
            { type: "full", src: "images/lifeblood/openingGatefold.gif" },
            { type: "full", src: "images/lifeblood/lifebloodPages.gif" },
            { type: "full", src: "images/lifeblood/envelope.gif" },
            { type: "full", src: "images/lifeblood/envelopeFlat.jpg" },
            { type: "full", src: "images/lifeblood/envelopeHoldingPhoto.jpg" },
            { type: "full", src: "images/lifeblood/envelopeIndex.jpg" },
        ],
    },

    phipps: {
        title: "Phipps Conservatory and Botanical Gardens",
        sub: "Student Project — 2024",
        collaboration: {
            label: "Phipps",
            href: "https://www.phipps.conservatory.org/",
        },
        paragraphs: [
            "For nearly two centuries, Phipps has served as an urban oasis, providing respite from the hustle and bustle of industrial Pittsburgh. In the past 15 years, though, Phipps has pivoted into becoming a leader in sustainability, education, and regional community programs. This brand repositioning project breathes new life into the Phipps brand, with a focus on surfacing the diverse offerings the conservatory provides to the Pittsburgh community, and establishing Phipps as a global leader of sustainable conservation.",
            "At the core of this rebrand is an organization steeped in history and tradition, with a keen eye for modernization. A new logo that has the same bones as the time-honored original,a bold and vibrant color palette, and a botanical inspired patterning system create a sense of energy and leadership that reposition The Phipps as a global leader, establishing trust without ostracising younger audiences or coming across as overly corporate. These elements come together to create sub-identities for various Phipps verticals and gain more recognition for all that Phipps does.",
        ],
        credits: [
            { role: "Design", names: [
                { name: "Caleb Sun" },
            ]},
            { role: "Special Thanks", names: [
                { name: "Phipps Marketing Team, especially:"},
                { name: "Joe Reed" },
                { name: "Alexa Sinatra" },
            ]},
        ],
        images: [
            { type: "half", srcs: ["images/phipps2/billboard2.jpg", "images/phipps2/tshirt.jpg"] },
            { type: "full",  src: "images/phipps2/ig-posts.jpg" },
            { type: "half",  srcs: ["images/phipps2/ig-story1.jpg", "images/phipps2/outdoor-sign.jpg"] },
            { type: "full",  src: "images/phipps2/billboard.jpg" },
            { type: "half",  srcs: ["images/phipps2/logotype-animation.gif", "images/phipps2/leaf.gif"] },
            { type: "half",  srcs: ["images/phipps2/business-cards.gif", "images/phipps2/signage.jpg"] },
            { type: "full",  src: "images/phipps2/poster-templates.gif" },
        ],
    },
};
