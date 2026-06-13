export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    date: string;
    links: {
        github?: string;
        demo?: string;
        paper?: string;
        documentation?: string;
        presentation?: string;
        portfolio?: string;
        website?: string;
    };
}

export const projects: Project[] = [
    {
        id: "rlhf-instruction-following",
        title: "RLHF for Open-Ended Instruction Following",
        description: "An implementation of online policy-gradient RLHF (GRPO, DrGRPO, GSPO) for fine-tuning a 1.5B-parameter LLM on human preference pairs. The interesting parts include a replay-buffer method that builds preference pairs straight from policy rollouts, and a pessimistic reward-model ensemble that keeps the policy from gaming the reward.",
        technologies: ["Python", "PyTorch", "Modal", "W&B"],
        date: "2026-05",
        links: {},
    },
    {
        id: "python-compiler",
        title: "Python Compiler",
        description: "A compiler I built from scratch in Java for a Python dialect. Covers the whole journey from raw source code through lexing, parsing, and type checking down to RISC-V assembly, including a simple web IDE that lets you watch each stage happen.",
        technologies: ["Java", "Python", "RISC-V", "JFlex", "CUP"],
        date: "2024-06",
        links: {
            github: "https://github.com/c-goenka/python-compiler"
        },
    },
    {
        id: "code-compass",
        title: "Code Compass",
        description: "A VS Code extension that ties together the pieces you juggle while debugging - the docs, the ticket, and the code actually involved - so the context you need lives in one place.",
        technologies: ["TypeScript", "Python", "Flask", "PyTorch", "OpenCV"],
        date: "2024-05",
        links: {
            github: "https://github.com/Acumane/code-compass",
            paper: "/papers/code-compass.pdf",
        }
    },
    {
        id: "police-records",
        title: "Police Records Classification",
        description: "A tool for making sense of large piles of police records, using few-shot learning to sort documents into meaningful categories while keeping the results interpretable enough to trust.",
        technologies: ["Python", "SetFit", "Sentence Transformers (SBERT)", "Scikit-learn", "Hugging Face", "Plotly"],
        date: "2025-11",
        links: {
            github: "https://github.com/c-goenka/police-records-project"
        }
    },
    {
        id: "coding-task-extractor",
        title: "Coding Task Extractor",
        description: "A research helper that reads through papers and pulls out the coding tasks buried in their user studies, turning a tedious literature review into something an LLM pipeline can take the first pass on.",
        technologies: ["Python", "OpenAI API", "LangChain", "Vector Stores and Search (FAISS)", "Pydantic", "Pandas"],
        date: "2025-08",
        links: {
            github: "https://github.com/c-goenka/coding-task-extractor"
        },
    },
    {
        id: "procedural-escape-game",
        title: "Procedurally Generated Escape Game",
        description: "A 2D game engine that builds a fresh, fully solvable world every time you play, generating its rooms and corridors procedurally, and remembering your progress so you can save and replay.",
        technologies: ["Java", "Algorithms", "StdDraw / Algs4", "Git"],
        date: "2023-01",
        links: {
            github: "https://github.com/c-goenka/procedural-escape-game"
        },
    },
    {
        id: "board-wizard",
        title: "Board Wizard",
        description: "A companion for board-game night: ask a rules question in plain English and it answers straight from the rulebook, so nobody has to dig through the manual mid-game. Built on a RAG pipeline using the OpenAI API.",
        technologies: ["Python", "Streamlit", "LangChain", "OpenAI API"],
        date: "2025-03",
        links: {
            github: "https://github.com/c-goenka/board-wizard",
            demo: "https://boardwizard.streamlit.app/",
        }
    },
    {
        id: "study-bears",
        title: "Bear Territory",
        description: "A mobile app that helps students find a good place to study nearby.",
        technologies: ["React Native", "React", "Expo", "HTML", "Navigation & Maps APIs"],
        date: "2023-07",
        links: {
            github: "https://github.com/c-goenka/study-bears"
        },
    },
    // {
    //     id: "personal-website",
    //     title: "Personal Website",
    //     description: "This site - a place to show what I've built and what I'm exploring.",
    //     technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    //     date: "2025-07",
    //     links: {
    //         github: "https://github.com/c-goenka/personal-website",
    //         website: "https://cgoenka.me"
    //     }
    // },
    {
        id: "roots-visa",
        title: "Roots",
        description: "A design and prototyping project: a concept for a local food marketplace that nudges people toward greener choices, discovering nearby vendors, seeing the carbon footprint of a purchase, and earning small rewards for sustainable habits. Taken from research through to an interactive Figma prototype.",
        technologies: ["Figma", "Product Design", "Prototyping"],
        date: "2024-06",
        links: {
            demo: "https://www.figma.com/design/6JREZrQNdB7GbgKM7aYMOR/Roots-Prototype?node-id=0-1&p=f",
            presentation: "https://www.youtube.com/watch?v=yDruDeSWNSM"
        }
    },
];

export function getAllProjects(): Project[] {
    return projects;
}

export function formatDate(dateString: string): string {
    if (dateString === 'In Progress') return dateString;
    const [year, month] = dateString.split('-');
    return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short'
    });
}
