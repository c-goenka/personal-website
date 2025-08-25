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
        id: "python-complier",
        title: "Python Compiler",
        description: "A compiler for a dialect of Python, featuring lexical analysis, parsing, semantic analysis, and RISC-V code generation.",
        technologies: ["Java", "Python", "RISC-V (Assembly Language)", "JFlex (Compiler Tool)", "CUP (Compiler Tool)"],
        date: "2024-01",
        links: {
            github: "https://github.com/c-goenka/python-complier"
        },
    },
    {
        id: "procedural-escape-game",
        title: "Procedurally Generated Escape Game",
        description: "A 2D tile-based procedural world generation game built in Java.",
        technologies: ["Java", "Algorithms"],
        date: "2023-01",
        links: {
            github: "https://github.com/c-goenka/procedural-escape-game"
        },
    },
    {
        id: "study-bears",
        title: "Bear Territory",
        description: "A mobile application designed to help students find nearby study locations.",
        technologies: ["React Native", "React", "Expo", "HTML", "Navigation & Maps APIs"],
        date: "2023-07",
        links: {
            github: "https://github.com/c-goenka/study-bears"
        },
    },
];

export function getAllProjects(): Project[] {
    return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(dateString: string): string {
    const [year, month] = dateString.split('-');
    return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short'
    });
}
