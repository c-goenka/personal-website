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

export function getStatusLabel(status: Project['status']): string {
    switch (status) {
        case 'active':
            return 'ACTIVE';
        case 'completed':
            return 'COMPLETED';
        case 'archived':
            return 'ARCHIVED';
        default:
            return '';
    }
}

export function getStatusColor(status: Project['status']): string {
    switch (status) {
        case 'active':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
        case 'completed':
            return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
        case 'archived':
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
}

export function getTypeLabel(type: Project['type']): string {
    switch (type) {
        case 'software':
            return 'SOFTWARE';
        case 'hardware':
            return 'HARDWARE';
        case 'presentation':
            return 'PRESENTATION';
        case 'design':
            return 'DESIGN';
        case 'research':
            return 'RESEARCH';
        default:
            return '';
    }
}

export function getTypeColor(type: Project['type']): string {
    switch (type) {
        case 'software':
            return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400';
        case 'hardware':
            return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
        case 'presentation':
            return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
        case 'design':
            return 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400';
        case 'research':
            return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
}

export function getCategoryLabel(category: Project['category']): string {
    switch (category) {
        case 'personal':
            return 'PERSONAL';
        case 'academic':
            return 'ACADEMIC';
        case 'work':
            return 'WORK';
        default:
            return '';
    }
}

export function getCategoryColor(category: Project['category']): string {
    switch (category) {
        case 'personal':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
        case 'academic':
            return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
        case 'work':
            return 'bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
}

export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short'
    });
}