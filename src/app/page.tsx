import Image from "next/image";
import Link from "next/link";
import { LuLinkedin, LuGithub, LuFileUser } from "react-icons/lu";
import { getAllResearchProjects } from "@/data/research";
import { getAllProjects, formatDate } from "@/data/projects";
// import { getAllExperience } from "@/data/experience";
import { getLinkLabel } from "@/utils/linkIcons";
import { getStatusLabel } from "@/utils/badges";

export default function Home() {
    const allResearch = getAllResearchProjects();
    const allProjects = getAllProjects();
    // const allExperience = getAllExperience();

    const featuredResearch = allResearch.filter(r =>
        ['think-aloud-ide', 'memory-bottle'].includes(r.id)
    );

    const featuredProjects = allProjects.filter(p =>
        ['rlhf-instruction-following', 'python-compiler'].includes(p.id)
    );

    return (
        <div className="max-w-3xl mx-auto px-8 py-20">
            {/* Profile Photo */}
            <div className="mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <Image
                        src="/images/chetan.jpeg"
                        alt="Chetan's profile photo"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold mb-4">
                    Hi! I&apos;m <a href="https://cgoenka.mmm.page/me" target="_blank" rel="noopener noreferrer" className="underline">Chetan</a>.
                </h1>
                <p className="text-body leading-relaxed">
                    I&apos;m finishing my M.S. in EECS at UC Berkeley - graduating August 2026. I&apos;ve built full-stack apps, ML and RL systems, a compiler, and embedded hardware. Currently I&apos;m building and researching tools that help developers work more effectively with AI coding agents.
                </p>
                <p className="text-body leading-relaxed mt-4">
                    Feel free to reach out at <a href="mailto:cgoenka@berkeley.edu" className="underline decoration-wavy decoration-decoration underline-offset-4 hover:text-muted-hover transition-colors">cgoenka@berkeley.edu</a> if you&apos;d like to connect!
                </p>
            </div>

            {/* Links Section */}
            <div className="mb-12">
                <div className="flex gap-6">
                    {/* Contact Links */}
                    <div className="flex flex-col gap-2">
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
                    </div>

                    {/* Divider */}
                    <div className="border-l border-border h-22"></div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-2">
                        <Link
                            href="/projects"
                            className="text-muted hover:text-muted-hover transition-colors underline decoration-decoration underline-offset-4"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/research"
                            className="text-muted hover:text-muted-hover transition-colors underline decoration-decoration underline-offset-4"
                        >
                            Research
                        </Link>
                    </div>
                </div>
            </div>

            {/* Skills + Experience sections removed for now — kept commented in case we want them back.
            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-6">Skills</h2>
                <div className="text-sm space-y-1">
                    <div className="flex gap-3">
                        <span className="text-foreground w-40 shrink-0">Languages</span>
                        <span className="text-body">Python · JavaScript/TypeScript · Java · SQL · C/C++ · R · HTML/CSS · RISC-V</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-foreground w-40 shrink-0">Frameworks &amp; Tools</span>
                        <span className="text-body">PyTorch · React · Node.js · Docker · AWS · Flask · Pandas · NumPy · Git · OpenAI API</span>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-6">Experience</h2>
                <div className="space-y-6">
                    {allExperience.map((exp) => (
                        <div key={exp.id}>
                            <div className="flex items-baseline justify-between gap-4 flex-wrap">
                                <h3 className="text-base font-semibold text-foreground">
                                    {exp.role} · {exp.organization}
                                </h3>
                                <span className="text-muted text-sm">{exp.date}</span>
                            </div>
                            <p className="text-body leading-relaxed text-sm mt-1">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            */}

            {/* Projects Section */}
            {/* <div className="mb-12">
                <h2 className="text-xl font-semibold mb-6">Projects</h2>
                <div className="mb-8">
                    <div className="space-y-6">
                        {featuredProjects.map((project) => (
                            <div key={project.id}>
                                <h4 className="text-base font-semibold mb-1 text-foreground">
                                    {project.title}
                                </h4>

                                <p className="text-body leading-relaxed mb-3 text-sm">
                                    {project.description}
                                </p>

                                {project.technologies.length > 0 && (
                                    <p className="text-foreground text-sm mb-1.5">
                                        {project.technologies.join(" · ")}
                                    </p>
                                )}

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
                <div className="flex gap-4 text-sm mt-7">
                    <Link
                        href="/projects"
                        className="text-muted hover:text-muted-hover transition-colors underline decoration-decoration underline-offset-4"
                    >
                        View all projects →
                    </Link>
                </div>
            </div> */}

            {/* Research Section */}
            {/* <div className="mb-12">
                <h2 className="text-xl font-semibold mb-6">Research</h2>
                <div className="mb-8">
                    <div className="space-y-6">
                        {featuredResearch.map((project) => (
                            <div key={project.id}>
                                <h4 className="text-base font-semibold mb-1 text-foreground">
                                    {project.title}
                                </h4>

                                <p className="text-body leading-relaxed mb-3 text-sm">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4 text-sm flex-wrap">
                                    {project.status && (
                                        <span className="text-muted">
                                            {getStatusLabel(project.status)}
                                        </span>
                                    )}
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

                <div className="flex gap-4 text-sm mt-7">
                    <Link
                        href="/research"
                        className="text-muted hover:text-muted-hover transition-colors underline decoration-decoration underline-offset-4"
                    >
                        View all research →
                    </Link>
                </div>
            </div> */}
        </div>
    );
}
