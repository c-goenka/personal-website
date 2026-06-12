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
        title: "Think-Aloud Speech as Live Context for AI Coding Assistants",
        description: "A web-based IDE that captures the way developers naturally talk through a problem and feeds it to an AI coding assistant as live context — design reasoning and preferences you'd never stop to type. Three LLM agents classify the speech, keep a running model of your intentions, and decide when it's worth chiming in proactively, on top of a real-time pipeline streaming audio over WebSockets with pause-based transcript segmentation. Validated in an 11-participant study.",
        status: "in-progress",
        links: {}
    },
    {
        id: "froggi",
        title: "Sharing Space with Froggi: Developing Co-Creative Power Dynamics in a Human-AI Drawing Interaction",
        description: "A study of what it's like to share a canvas with an AI partner — how power shifts back and forth in a co-creative drawing interaction, and how those dynamics can be deliberately designed rather than left to chance.",
        venue: "To appear at Creativity & Cognition (C&C)",
        year: "2026",
        links: {}
    },
    {
        id: "code-explanations",
        title: "Code Explanations: Automated Hierarchical Descriptions of Program Behavior",
        description: "A tool that layers AI-generated explanations right onto your code — per line, per block, and per parameter — so a program becomes easier to read and safer to change. Built on CodeMirror and GPT-4o, with interactive insights rendered directly in the editor.",
        year: "2025",
        links: {
            pdf: "/papers/code-explanations-chi25.pdf",
            code: "https://github.com/c-goenka/code-explanations"
        }
    },
    {
        id: "memory-bottle",
        title: "Memory Bottle",
        description: "An interactive bottle that captures a moment — its sound and its color — and pours it back out when you tip it over, filling the room with the audio and light of when you saved it. Underneath, an ESP32 and a handful of sensors talk to a small server that keeps the audio and lights in sync.",
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
        description: "Evaluated a summer bridge program for underserved Computing students, measuring its impact on non-academic factors like sense of belonging, resource awareness, and science identity. The research found that both online and in-person formats improved outcomes, with in-person programs showing stronger effects, especially on social confidence.",
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
