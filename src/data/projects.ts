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
        id: "python-complier",
        title: "Python Compiler",
        description: "Compiler for Python dialect featuring a complete compilation pipeline with lexical analysis, parsing, semantic analysis, and RISC-V code generation.",
        technologies: ["Java", "Python", "RISC-V (Assembly Language)", "JFlex (Compiler Tool)", "CUP (Compiler Tool)"],
        date: "2024-05",
        links: {
            github: "https://github.com/c-goenka/python-complier"
        },
    },
    {
        id: "board-wizard",
        title: "Board Wizard",
        description: "AI-powered board game companion that helps players quickly find and understand rules without flipping through lengthy manuals.",
        technologies: ["Python", "Streamlit", "LangChain", "OpenAI API"],
        date: "2025-03",
        links: {
            github: "https://github.com/c-goenka/board-wizard",
            demo: "https://boardwizard.streamlit.app/",
        }
    },
    {
        id: "police-records",
        title: "Police Records Classification",
        description: "NLP-based classification system designed to organize official police documentation using SetFit for few-shot learning and classical algorithms for interpretable analysis.",
        technologies: ["Python", "SetFit", "Sentence Transformers (SBERT)", "Scikit-learn", "Hugging Face", "Plotly"],
        date: "2025-11",
        links: {
            github: "https://github.com/c-goenka/police-records-project"
        }
    },
    {
        id: "procedural-escape-game",
        title: "Procedurally Generated Escape Game",
        description: "2D game engine using deterministic procedural generation, rejection sampling, and neighbor checking to create unique, solvable worlds with save/replay states.",
        technologies: ["Java", "Algorithms", "StdDraw / Algs4", "Git"],
        date: "2023-01",
        links: {
            github: "https://github.com/c-goenka/procedural-escape-game"
        },
    },
    {
        id: "code-compass",
        title: "Code Compass",
        description: "VS Code extension that provides a framework to connect documentation, the debugging ticket description and the relevant functions/code snippets of the project.",
        technologies: ["TypeScript", "Python", "Flask", "PyTorch", "OpenCV"],
        date: "2024-05",
        links: {
            github: "https://github.com/Acumane/code-compass",
            paper: "/papers/code-compass.pdf",
        }
    },
    {
        id: "coding-task-extractor",
        title: "Coding Task Extractor",
        description: "Literature review tool that uses a Python and LLM based pipeline to extract coding tasks described in user studies from research papers.",
        technologies: ["Python", "OpenAI API", "LangChain", "Vector Stores and Search (FAISS)", "Pydantic", "Pandas"],
        date: "In Progress",
        links: {
            github: "https://github.com/c-goenka/coding-task-extractor"
        },
    },
    {
        id: "personal-website",
        title: "Personal Website",
        description: "My personal portfolio website featuring a clean design and responsive layout to showcase my research and projects.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        date: "2025-07",
        links: {
            github: "https://github.com/c-goenka/personal-website",
            website: "https://cgoenka.me"
        }
    },
    {
        id: "roots-visa",
        title: "Roots",
        description: "Local food marketplace that promotes eco-friendly habits through carbon footprint tracking, vendor discovery, and a rewards system for sustainable purchases.",
        technologies: [],
        date: "2024-07",
        links: {
            demo: "https://www.figma.com/design/6JREZrQNdB7GbgKM7aYMOR/Roots-Prototype?node-id=0-1&p=f",
            presentation: "https://www.youtube.com/watch?v=yDruDeSWNSM"
        }
    },
    {
        id: "study-bears",
        title: "Bear Territory",
        description: "Mobile application designed to help students find nearby study locations.",
        technologies: ["React Native", "React", "Expo", "HTML", "Navigation & Maps APIs"],
        date: "2023-07",
        links: {
            github: "https://github.com/c-goenka/study-bears"
        },
    },
    {
        id: "shortcuts-overlay",
        title: "Shortcuts Overlay",
        description: "Shortcuts overlay screen to display my keyboard and mouse shortcuts.",
        technologies: ["Python", "tkinter"],
        date: "In Progress",
        links: {
            // github: "https://github.com/c-goenka/shortcuts-overlay"
        },
    }
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
