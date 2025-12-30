import Image from "next/image";
import Link from "next/link";
import { LuLinkedin, LuGithub, LuLink, LuFileUser } from "react-icons/lu";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
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
                <h1 className="text-3xl font-semibold mb-4">Hi! I'm Chetan.</h1>
                <p className="text-muted leading-relaxed">
                    I'm a software engineer completing my M.S. in EECS at UC Berkeley. I've built everything from compilers to ML systems, and I'm currently building tools that help developers work more effectively with AI coding agents.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                    I'm graduating in May 2026 and am interested in software engineering roles. Feel free to reach out at <a href="mailto:cgoenka@berkeley.edu" className="underline decoration-wavy underline-offset-4 decoration-decoration hover:text-muted-hover transition-colors">cgoenka@berkeley.edu</a>.
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
                            href="/chetan-goenka-resume.pdf"
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
        </div>
    );
}
