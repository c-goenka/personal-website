import Image from "next/image";
import Link from "next/link";
import { LuLinkedin, LuGithub, LuLink, LuFileUser } from "react-icons/lu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getAllResearchProjects } from "@/data/research";
import { getAllProjects, formatDate } from "@/data/projects";
import { getStatusLabel, getStatusColor } from "@/utils/badges";
import { getLinkIcon, getLinkLabel } from "@/utils/linkIcons";

export default function Home() {
    const allResearch = getAllResearchProjects();
    const allProjects = getAllProjects();

    // Featured research
    const featuredResearch = allResearch.filter(r =>
        ['code-explanations', 'memory-bottle'].includes(r.id)
    );

    // Featured projects
    const featuredProjects = allProjects.filter(p =>
        ['python-complier', 'board-wizard'].includes(p.id)
    );

    return (
        <div className="max-w-3xl mx-auto px-8 py-20">
            {/* Profile Photo and Theme Toggle */}
            <div className="mb-8 flex justify-between items-start">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <Image
                        src="/images/chetan.jpeg"
                        alt="Chetan's profile photo"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                    />
                </div>
                <ThemeToggle />
            </div>

            {/* Name */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold mb-4">Hi! I&apos;m Chetan.</h1>
                <p className="text-muted leading-relaxed">
                    I&apos;m a software engineer completing my M.S. in EECS at UC Berkeley. I&apos;ve built full-stack applications, ML systems, and compilers. I&apos;m currently building tools that help developers work more effectively with AI coding agents.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                    I&apos;m graduating in May 2026 and am interested in software engineering roles. Feel free to reach out at <a href="mailto:cgoenka@berkeley.edu" className="underline decoration-wavy underline-offset-4 decoration-decoration hover:text-muted-hover transition-colors">cgoenka@berkeley.edu</a>.
                </p>
            </div>

            {/* Links Section */}
            <div className="mb-12">
                <div className="flex gap-6">
                    {/* Contact Links */}
                    <div className="flex flex-col gap-2">
                        <a
                            href="https://linkedin.com/in/cgoenka"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Chetan's LinkedIn profile"
                            className="text-muted hover:text-muted-hover transition-colors flex items-center gap-2"
                        >
                            <LuLinkedin size={18} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/c-goenka"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Chetan's GitHub profile"
                            className="text-muted hover:text-muted-hover transition-colors flex items-center gap-2"
                        >
                            <LuGithub size={18} />
                            GitHub
                        </a>
                        <a
                            href="/chetan_goenka_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Chetan's resume (PDF)"
                            className="text-muted hover:text-muted-hover transition-colors flex items-center gap-2"
                        >
                            <LuFileUser size={18} />
                            Resume
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="border-l border-border h-22"></div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-2">
                        <Link
                            href="/research"
                            className="text-muted hover:text-muted-hover transition-colors flex items-center gap-2"
                        >
                            <LuLink size={16} />
                            Research
                        </Link>
                        <Link
                            href="/projects"
                            className="text-muted hover:text-muted-hover transition-colors flex items-center gap-2"
                        >
                            <LuLink size={16} />
                            Projects
                        </Link>
                    </div>
                </div>
            </div>

            {/* Featured Work Section */}
            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-6">Featured Work</h2>

                {/* Featured Research */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 text-muted">Research</h3>
                    <div className="space-y-4">
                        {featuredResearch.map((project) => (
                            <div key={project.id} className="border border-border rounded-lg p-5 hover:border-muted transition-all duration-200">
                                {/* Status Badge */}
                                {/* {project.status && (
                                    <div className="flex items-start gap-3 mb-2">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(project.status)}`}>
                                            {getStatusLabel(project.status)}
                                        </span>
                                    </div>
                                )} */}

                                {/* Title */}
                                <h4 className="text-lg font-semibold mb-2 text-foreground">
                                    {project.title}
                                </h4>

                                {/* Description */}
                                <p className="text-muted leading-relaxed mb-3 text-sm">
                                    {project.description}
                                </p>

                                {/* Venue and Links */}
                                <div className="flex items-center gap-4 text-sm flex-wrap">
                                    {project.venue && (
                                        <span className="text-muted">
                                            {project.venue} {project.year}
                                        </span>
                                    )}
                                    {project.year && !project.venue && (
                                        <span className="text-muted">{project.year}</span>
                                    )}

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

                {/* Featured Projects */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4 text-muted">Projects</h3>
                    <div className="space-y-4">
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="border border-border rounded-lg p-5 hover:border-muted transition-all duration-200">
                                {/* Title */}
                                <h4 className="text-lg font-semibold mb-2 text-foreground">
                                    {project.title}
                                </h4>

                                {/* Description */}
                                <p className="text-muted leading-relaxed mb-3 text-sm">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-3">
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

                {/* View All Links */}
                <div className="flex gap-4 text-sm mt-7">
                    <Link
                        href="/research"
                        className="text-muted hover:text-muted-hover transition-colors"
                    >
                        View all research →
                    </Link>
                    <Link
                        href="/projects"
                        className="text-muted hover:text-muted-hover transition-colors"
                    >
                        View all projects →
                    </Link>
                </div>
            </div>
        </div>
    );
}
