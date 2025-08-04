import Link from "next/link";
import { getAllProjects, formatDate } from "@/data/projects";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getStatusLabel, getStatusColor, getTypeLabel, getTypeColor, getCategoryLabel, getCategoryColor } from "@/utils/badges";
import { getLinkIcon, getLinkLabel } from "@/utils/linkIcons";

export default function Projects() {
    const projects = getAllProjects();
    
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" }
    ];


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