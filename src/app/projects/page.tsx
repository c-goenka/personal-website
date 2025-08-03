import Link from "next/link";
import { LuExternalLink, LuFileText, LuCode, LuGlobe, LuPresentation, LuImage } from "react-icons/lu";
import { getAllProjects, getStatusLabel, getStatusColor, getTypeLabel, getTypeColor, getCategoryLabel, getCategoryColor, formatDate } from "../../data/projects";
import { Breadcrumb } from "../../components/Breadcrumb";

export default function Projects() {
    const projects = getAllProjects();
    
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" }
    ];

    const getLinkIcon = (type: string) => {
        switch (type) {
            case 'github':
                return <LuCode size={14} />;
            case 'demo':
            case 'website':
                return <LuGlobe size={14} />;
            case 'documentation':
                return <LuFileText size={14} />;
            case 'presentation':
                return <LuPresentation size={14} />;
            case 'portfolio':
                return <LuImage size={14} />;
            default:
                return <LuExternalLink size={14} />;
        }
    };

    const getLinkLabel = (type: string) => {
        switch (type) {
            case 'github':
                return 'GitHub';
            case 'demo':
                return 'Demo';
            case 'website':
                return 'Website';
            case 'documentation':
                return 'Docs';
            case 'presentation':
                return 'Slides';
            case 'portfolio':
                return 'Portfolio';
            default:
                return type.charAt(0).toUpperCase() + type.slice(1);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-8 py-20">
            {/* Breadcrumb Navigation */}
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="text-3xl font-semibold mb-2">Projects</h1>
            <p className="text-muted mb-12">A collection of software, hardware, design, and research work.</p>
            
            {/* Projects */}
            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.id} className="border border-border rounded-lg p-6 hover:border-muted hover:bg-muted/5 transition-all duration-200">
                        {/* Badges */}
                        <div className="flex items-start gap-2 mb-3 flex-wrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(project.status)}`}>
                                {getStatusLabel(project.status)}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-md ${getTypeColor(project.type)}`}>
                                {getTypeLabel(project.type)}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-md ${getCategoryColor(project.category)}`}>
                                {getCategoryLabel(project.category)}
                            </span>
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-3 text-foreground">
                            {project.title}
                        </h2>
                        
                        {/* Description */}
                        <p className="text-muted leading-relaxed mb-4">
                            {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 bg-muted/10 text-muted text-xs rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* Date and Links */}
                        <div className="flex items-center gap-4 text-sm flex-wrap">
                            {/* Date */}
                            <span className="text-muted">
                                {formatDate(project.date)}
                            </span>
                            
                            {/* Links */}
                            {Object.entries(project.links).map(([type, url]) => (
                                url && (
                                    <Link
                                        key={type}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-muted hover:text-muted-hover transition-colors"
                                    >
                                        {getLinkIcon(type)}
                                        {getLinkLabel(type)}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}