import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github} from "lucide-react";

export default function Home() {
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
                <h1 className="text-3xl font-semibold mb-4">Hi! I&apos;m Chetan.</h1>
                <p className="text-gray-600 leading-relaxed">
                    I&apos;m an HCI researcher and EECS M.S. student at UC Berkeley, exploring how human behavior and technology design intersect through machine learning and AI. I&apos;m passionate about creating solutions that address real-world challenges and enhance human-computer interactions.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                    Currently investigating how AI coding tools can be designed to better serve both professional developers and programming beginners, focusing on creating more intuitive, personalized, and effective coding experiences.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                    I am interested in science, philosophy, design, and programming tools. If you&apos;re interested in collaborating, or just want to chat, feel free to reach out at <a href="mailto:cgoenka@berkeley.edu" className="underline decoration-wavy underline-offset-4 hover:text-black transition-colors">cgoenka@berkeley.edu</a>
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
                            className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                        >
                            <Linkedin size={18} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/c-goenka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="border-l border-gray-400 h-15"></div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-2">
                        <Link
                            href="/research"
                            className="text-gray-600 hover:text-black transition-colors"
                        >
                            Research
                        </Link>
                        <Link
                            href="/thoughts"
                            className="text-gray-600 hover:text-black transition-colors"
                        >
                            Thoughts
                        </Link>
                    </div>
                </div>
            </div>

            {/* Terminal Hint */}
            <div>
                <button
                    className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-mono"
                    title="Enter the lab"
                >
                    &gt;_
                </button>
            </div>
        </div>
    );
}
