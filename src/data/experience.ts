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
        description: "Built a code explanation system on top of CodeMirror and OpenAI API — line-level, block-level, and data-flow explanations rendered as interactive overlays right inside the editor. Wrote 700+ lines of custom editor extensions to make it work, iterated on it with user studies, and shipped a function-level summarization tool on the back of that feedback.",
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
