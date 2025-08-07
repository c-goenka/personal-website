import Link from "next/link";
import { getAllProjects, formatDate } from "@/data/projects";
import { getLinkIcon, getLinkLabel } from "@/utils/linkIcons";
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
            <p className="text-muted mb-6">A collection of my technical and creative projects.</p>

            {/* Under Construction Notice */}
            <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-600 dark:text-yellow-400">🚧</span>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200">Under Construction</h3>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    I&apos;ve added a few of my projects here and will be adding more soon.
                </p>
            </div>

            {/* Projects */}
            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.id} className="border border-border rounded-lg p-6 hover:border-muted transition-all duration-200">
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
