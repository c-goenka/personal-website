import Link from "next/link";
import { getAllProjects, formatDate } from "@/data/projects";
import { getLinkLabel } from "@/utils/linkIcons";
import { LuArrowLeft } from "react-icons/lu";

export default function Projects() {
    const projects = getAllProjects();

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

            <h1 className="text-3xl font-semibold mb-2">Projects</h1>
            <p className="text-muted mb-8">Selected work, ordered by relevance</p>

            {/* Projects */}
            <div className="space-y-8">
                {projects.map((project) => (
                    <div key={project.id}>
                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-1 text-foreground">
                            {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-body leading-relaxed mb-2">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        {project.technologies.length > 0 && (
                            <p className="text-muted text-sm mb-2">
                                {project.technologies.join(" · ")}
                            </p>
                        )}

                        {/* Date and Links */}
                        <div className="flex items-center gap-4 text-sm flex-wrap">
                            <span className="text-muted">
                                {formatDate(project.date)}
                            </span>

                            {Object.entries(project.links).map(([type, url]) => (
                                url && (
                                    <Link
                                        key={type}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted hover:text-muted-hover transition-colors underline decoration-decoration underline-offset-4"
                                    >
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
