export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    type: 'software' | 'hardware' | 'presentation' | 'design' | 'research';
    category: 'personal' | 'academic' | 'work';
    status: 'active' | 'completed' | 'archived';
    date: string;
    links: {
        github?: string;
        demo?: string;
        documentation?: string;
        presentation?: string;
        portfolio?: string;
        website?: string;
    };
}

export const projects: Project[] = [
    {
        id: "lorem-web-app",
        title: "Lorem Ipsum Web Application",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        type: "software",
        category: "personal",
        status: "active",
        date: "2024-08",
        links: {
            github: "https://github.com/username/lorem-web-app",
            demo: "https://lorem-app.demo.com",
            documentation: "/docs/lorem-web-app.pdf"
        }
    },
    {
        id: "consectetur-iot",
        title: "Consectetur IoT Prototype",
        description: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technologies: ["Arduino", "Raspberry Pi", "Python", "3D Printing"],
        type: "hardware",
        category: "academic",
        status: "completed",
        date: "2024-07",
        links: {
            github: "https://github.com/username/consectetur-iot",
            portfolio: "/portfolio/iot-prototype-photos.pdf",
            documentation: "/docs/iot-prototype-report.pdf"
        }
    },
    {
        id: "adipiscing-presentation",
        title: "Adipiscing Research Presentation",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        technologies: ["Figma", "PowerPoint", "Data Visualization"],
        type: "presentation",
        category: "academic",
        status: "completed",
        date: "2024-06",
        links: {
            presentation: "/presentations/adipiscing-research.pdf",
            demo: "https://adipiscing-demo.com"
        }
    },
    {
        id: "tempor-ml-model",
        title: "Tempor Machine Learning Pipeline",
        description: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
        technologies: ["Python", "TensorFlow", "Pandas", "Docker"],
        type: "software",
        category: "work",
        status: "completed",
        date: "2024-05",
        links: {
            github: "https://github.com/username/tempor-ml",
            documentation: "/docs/ml-pipeline-report.pdf"
        }
    },
    {
        id: "dolore-ui-design",
        title: "Dolore Mobile UI Design",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
        technologies: ["Figma", "Sketch", "Prototyping", "User Research"],
        type: "design",
        category: "personal",
        status: "archived",
        date: "2024-03",
        links: {
            portfolio: "/portfolio/mobile-ui-designs.pdf",
            demo: "https://dolore-prototype.figma.com"
        }
    }
];

export function getAllProjects(): Project[] {
    return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}


export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short'
    });
}