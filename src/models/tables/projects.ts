export interface ProjectData {
    name: string;
    skills: string[];
    description: string[];
    links: {
        site: string;
        repo: string;
    };
    image: string;
}

export const PROJECTS = [
    {
        name: "Node Flow",
        skills: [
            "React",
            "React Flow",
            "Tailwind",
            "Node.js",
            "Express",
            "PostgreSQL",
        ],
        description: [
            "Node Flow is a web application for modeling complex systems via stock and flow diagrams. Node Flow is unique in that it allows you to simulate flow of resources represented by the diagram.",
            "Future plans for Node Flow involve: Integrating a charting library, adding sample diagrams, and allowing users to save diagrams they've created via a Node.js backend.",
        ],
        links: {
            site: "https://node-flow-ten.vercel.app",
            repo: "https://github.com/TMarche/node-flow",
        },
        image: "bg-node-flow-02",
    },
    {
        name: "Bintendo",
        skills: ["React", "Redux", "Tailwind"],
        description: [
            "Bintendo is a clone of the Nintendo website, which has been altered to sell garbage bins.",
            "Bintendo is a combination news and eCommerce website that features a search system, shopping cart, and wish list.",
        ],
        links: {
            site: "https://bintendo.vercel.app",
            repo: "https://github.com/TMarche/nintendo",
        },
        image: "bg-bintendo-02-xs",
    },
    {
        name: "Interactive Fretboard",
        skills: ["React", "Redux", "Tailwind"],
        description: [
            "Interactive Fretboard is a a web application for modeling a guitar fretboard, allowing the user to explore different tunings, scales, and chords.",
            "Bintendo is a combination news and eCommerce website that features a search system, shopping cart, and wish list.",
            "",
        ],
        links: {
            site: "https://bintendo.vercel.app",
            repo: "https://github.com/TMarche/nintendo",
        },
        image: "bg-bintendo-02-xs",
    },
    {
        name: "Tribute",
        skills: ["React", "Redux", "Tailwind"],
        description: [
            "Bintendo is a clone of the Nintendo website, which has been altered to sell garbage bins.",
            "Bintendo is a combination news and eCommerce website that features a search system, shopping cart, and wish list.",
            "",
        ],
        links: {
            site: "https://bintendo.vercel.app",
            repo: "https://github.com/TMarche/nintendo",
        },
        image: "bg-bintendo-02-xs",
    },
];
