export interface Experience {
    id: string;
    role: string;
    organization: string;
    date: string;
    description: string;
    link?: string;
}

export const experience: Experience[] = [
    {
        id: "berkeley-research-engineer",
        role: "Graduate Research Engineer",
        organization: "UC Berkeley EECS",
        date: "Jun 2024 - Present",
        description: "Building a web-based IDE that listens while developers think out loud and turns that speech into live context for an AI coding assistant — so it can act on reasoning and preferences you'd never stop to type. Architected the real-time speech pipeline (React/Node.js, WebSockets to an ASR service, Docker on AWS), orchestrated three LLM agents that classify the speech and decide when the AI should chime in, and validated it in an 11-participant study. Before that, built an AI code explanation system with 700+ lines of custom CodeMirror extensions.",
    },
    {
        id: "data100-course-staff",
        role: "Course Staff, Data 100",
        organization: "UC Berkeley",
        date: "Aug 2023 - May 2024",
        description: "Helped 25+ students a week debug their Python and SQL for Data 100 — pandas, NumPy, scikit-learn, matplotlib — and graded 5,000+ assignments across two semesters, writing scripts to handle the scale and giving structured feedback on data pipelines and statistical implementations.",
    },
    {
        id: "oracle-intern",
        role: "Data Science & Engineering Intern",
        organization: "Oracle",
        date: "Jun - Aug 2022",
        description: "Automated the sales prospecting process: built an ML scoring pipeline in Python and SQL that ranked 500+ enterprise prospects across four products, replacing manual prioritization. Also built the ETL layer that brought in marketing campaign data and calculated attribution rates, and rewrote the SQL powering the exec dashboards into something actually efficient.",
    },
];

export function getAllExperience(): Experience[] {
    return experience;
}
