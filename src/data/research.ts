export interface ResearchProject {
    id: string;
    title: string;
    description: string;
    status: 'published' | 'submitted' | 'in-progress';
    venue?: string;
    year?: string;
    links: {
        pdf?: string;
        code?: string;
        demo?: string;
        website?: string;
    };
}

export const researchProjects: ResearchProject[] = [
    {
        id: "lorem-ipsum-research",
        title: "Lorem Ipsum Dolor Sit Amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "published",
        venue: "CHI",
        year: "2024",
        links: {
            pdf: "/papers/lorem-ipsum-chi2024.pdf",
            code: "https://github.com/username/lorem-ipsum"
        }
    },
    {
        id: "consectetur-adipiscing",
        title: "Consectetur Adipiscing Elit",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.",
        status: "in-progress",
        venue: "Workshop Revision",
        links: {
            pdf: "/papers/consectetur-workshop-draft.pdf"
        }
    },
    {
        id: "tempor-incididunt",
        title: "Tempor Incididunt Ut Labore",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        status: "in-progress",
        year: "Expected 2025",
        links: {}
    }
];

export function getAllResearchProjects(): ResearchProject[] {
    return researchProjects;
}

