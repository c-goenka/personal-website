import Link from "next/link";
import { getAllResearchProjects } from "@/data/research";
import { getStatusLabel, getStatusColor } from "@/utils/badges";
import { getLinkIcon, getLinkLabel } from "@/utils/linkIcons";
import { LuArrowLeft } from "react-icons/lu";

export default function Research() {
    const projects = getAllResearchProjects();

    return (
        <div className="max-w-3xl mx-auto px-8 py-20">
            {/* Back to Home */}
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-muted hover:text-muted-hover transition-colors mb-8"
            >
                <LuArrowLeft size={16} />
                Back to Home
            </Link>

            <h1 className="text-3xl font-semibold mb-2">Research</h1>
            <p className="text-muted mb-6">Exploring human-computer interaction and AI-assisted programming.</p>

            {/* Research Projects */}
            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.id} className="border border-border rounded-lg p-6 hover:border-muted hover:bg-muted/5 transition-all duration-200">
                        {/* Status Badge and Title */}
                        <div className="flex items-start gap-3 mb-3">
                            <span className={`px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(project.status)}`}>
                                {getStatusLabel(project.status)}
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

                        {/* Venue and Links */}
                        <div className="flex items-center gap-4 text-sm">
                            {/* Venue Info */}
                            {project.venue && (
                                <span className="text-muted">
                                    {project.venue} {project.year}
                                </span>
                            )}
                            {project.year && !project.venue && (
                                <span className="text-muted">{project.year}</span>
                            )}

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
