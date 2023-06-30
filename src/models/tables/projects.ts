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
        name: "Tribute",
        skills: [
            "React",
            "Redux",
            "React Flow",
            "Tailwind",
            "Node.js",
            "Express",
            "PostgreSQL",
        ],
        description: [
            "Tribute is a web application that simulates combat between AI agents in a 'Battle Royale' style showdown.",
            "Users can create and save tributes, items, maps, and game configurations.",
        ],
        links: {
            site: "https://github.com/TMarche/tribute-02-fe",
            repo: "https://github.com/TMarche/tribute-02-fe",
        },
        image: "bg-tribute-01",
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
    // {
    //     name: "Interactive Fretboard",
    //     skills: ["React", "Tailwind"],
    //     description: [
    //         "Interactive Fretboard is a a web application that models a guitar fretboard, allowing the user to explore different tunings, scales, and chords.",
    //         "Rather than having static chords and scales for the standard tuning, the app dynamically calculates chords and scales, allowing the user to experiment with tunings and string counts.",
    //     ],
    //     links: {
    //         site: "https://github.com/TMarche/guitar-02",
    //         repo: "https://github.com/TMarche/guitar-02",
    //     },
    //     image: "bg-interactive-fretboard-01-s",
    // },
];
