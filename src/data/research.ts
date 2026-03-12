export interface ResearchProject {
    id: string;
    title: string;
    description: string;
    status?: 'published' | 'submitted' | 'in-progress' | 'presented';
    venue?: string;
    year?: string;
    links: {
        pdf?: string;
        code?: string;
        demo?: string;
        website?: string;
        poster?: string
    };
}

export const researchProjects: ResearchProject[] = [
    {
        id: "think-aloud-ide",
        title: "Multi-Agent AI Code Editor with Speech Intelligence",
        description: "Prospective UIST 2026 submission 🤞",
        // description: "Exploring how AI-powered programming tools can reshape the way developers write, understand, and modify code, supporting better, faster, and more accessible software engineering through intelligent assistance and modern development workflows.",
        status: "in-progress",
        // year: "Expected 2026",
        links: {}
    },
    {
        id: "code-explanations",
        title: "Code Explanations: Automated Hierarchical Descriptions of Program Behavior",
        description: "This project introduces a tool that uses AI to generate layered code explanations—per-line, per-block, and by function parameter—to help users better understand and modify programs. Built with CodeMirror and GPT-4o, the system overlays interactive insights directly onto code. A pilot study showed its potential, and future work aims to expand its usability across skill levels, tasks, and languages.",
        // status: "submitted",
        venue: "CHI 2025 Workshop Submission (Not Published)",
        links: {
            pdf: "/papers/code-explanations-chi25.pdf",
            code: "https://github.com/c-goenka/code-explanations"
        }
    },
    {
        id: "memory-bottle",
        title: "Memory Bottle",
        description: "Memory Bottle is an interactive vessel that lets users preserve and relive fleeting moments by recording sound and color. Powered by an ESP32 and Arduino ecosystem, the system uses a state machine to manage sensor data and wireless uploads. Users simply tilt the bottle to 'pour' the memory out, triggering an immersive playback where the audio is heard and the captured color fills the room.",
        status: "published",
        venue: "Tangible, Embedded, and Embodied Interaction (TEI)",
        year: "2026",
        links: {
            pdf: "/papers/memory-bottle.pdf",
            code: "https://github.com/c-goenka/memory-bottle"
        },
    },
    {
        id: "bees-research",
        title: "A Quantitative Analysis of a Summer Bridge Program's Impact on Students' Non-Academic Indicators",
        description: "Evaluation a summer bridge program for underserved Computing students, measuring its impact on non-academic factors like sense of belonging, resource awareness, and science identity. The research found that both online and in-person formats improved outcomes, with in-person programs showing stronger effects, especially on social confidence.",
        status: "published",
        venue: "Frontiers in Education (FIE)",
        year: "2024",
        links: {
            pdf: "/papers/bees-fie2024.pdf",
            // code: "https://github.com/username/lorem-ipsum"
        }
    },
    {
        id: "programming-ambiguity",
        title: "Programming with Ambiguity",
        description: "Modern Large Language Models (LLMs) can synthesize code for us from simple natural language instructions. But, it also invents details we might or might not want. How might the advancement of LLMs change the future of programming?",
        status: "presented",
        venue: "Jacobs Design Showcase 2024",
        links: {
            poster: "/images/pail-poster.png",
        }
    },
];

export function getAllResearchProjects(): ResearchProject[] {
    return researchProjects;
}
