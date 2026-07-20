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
        title: "Think-Aloud Speech as Context for AI Code Generation",
        description: "A web-based IDE that captures the way developers naturally talk through a problem and feeds it to an AI coding assistant as live context, capturing design reasoning and preferences you'd never stop to type. Evaluated in an 11-participant user study.",
        // description: "A web-based IDE that captures the way developers naturally talk through a problem and feeds it to an AI coding assistant as live context, capturing design reasoning and preferences you'd never stop to type. Three LLM agents classify the speech, keep a running model of your intentions, and decide when it's worth chiming in proactively, on top of a real-time pipeline streaming audio over WebSockets with pause-based transcript segmentation. Validated in an 11-participant user study.",
        status: "in-progress",
        links: {
            pdf: "/papers/think-aloud-ide.pdf",
        }
    },
    {
        id: "froggi",
        title: "Sharing Space with Froggi: Developing Co-Creative Power Dynamics in a Human-AI Drawing Interaction",
        description: "Froggi-Draw is a co-doodling system where you and an AI share a canvas, calling on Froggi to add to the drawing whenever you want. Instead of dropping a polished image on the canvas, it sends your strokes through a diffusion-inpainting pipeline (fal.ai Flux, Pillow, SciPy, Potrace) and breaks the result back into rough, hand-drawn-style strokes that sit alongside yours rather than overpowering them. Built on React and Flask, studied with eight artists over a week.",
        venue: "To appear at Creativity & Cognition (C&C)",
        year: "2026",
        links: {
            demo: "https://froggi-draw.vercel.app"
        }
    },
    {
        id: "memory-bottle",
        title: "Memory Bottle",
        description: "An interactive bottle that captures the sensory experience of a moment and pours it back out when you tip it over at the accompanying ritual station, filling the room with the audio and light of when you saved it. Built with Arduino ESP32s and a handful of sensors that talk to a small server, keeping the audio and lights in sync.",
        venue: "Published at Tangible, Embedded, and Embodied Interaction (TEI)",
        year: "2026",
        links: {
            pdf: "/papers/memory-bottle.pdf",
            code: "https://github.com/c-goenka/memory-bottle"
        },
    },
    {
        id: "code-explanations",
        title: "Code Explanations: Automated Hierarchical Descriptions of Program Behavior",
        description: "A tool that layers AI-generated explanations right onto your code - per line, per code block, and per data parameter, so a program becomes easier to read and safer to change. Built on CodeMirror and GPT-4o, with interactive insights rendered directly in the code editor.",
        links: {
            pdf: "/papers/code-explanations-chi25.pdf",
            code: "https://github.com/c-goenka/code-explanations"
        }
    },
    {
        id: "bees-research",
        title: "A Quantitative Analysis of a Summer Bridge Program's Impact on Students' Non-Academic Indicators",
        description: "Evaluated a summer bridge program for underserved Computing students, measuring its impact on non-academic factors like sense of belonging, resource awareness, and science identity. Our research found that both online and in-person formats improved outcomes, with in-person programs showing stronger effects, especially on social confidence.",
        venue: "Published at Frontiers in Education (FIE)",
        year: "2024",
        links: {
            pdf: "/papers/bees-fie2024.pdf",
        }
    },
    {
        id: "programming-ambiguity",
        title: "Programming with Ambiguity",
        description: "Modern Large Language Models (LLMs) can synthesize code for us from simple natural language instructions. But, it also invents details we might or might not want. How might the advancement of LLMs change the future of programming?",
        venue: "Presented at the Jacobs Design Showcase 2024",
        links: {
            poster: "/images/pail-poster.png",
        }
    },
];

export function getAllResearchProjects(): ResearchProject[] {
    return researchProjects;
}
