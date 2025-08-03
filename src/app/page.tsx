import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="max-w-lg mx-auto px-8 py-20">
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
                <h1 className="text-3xl font-medium mb-4">Chetan Goenka</h1>
                <p className="text-gray-600 leading-relaxed">
                    HCI researcher and masters student at UC Berkeley, exploring the intersection of
                    human behavior and technology design. Currently investigating [specific research area]
                    to create more intuitive and accessible digital experiences.
                </p>
            </div>

            {/* Navigation Links */}
            <div className="mb-12">
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

            {/* Contact Links */}
            <div className="mb-12">
                <div className="flex flex-col gap-2">
                    <a
                        href="mailto:your.email@berkeley.edu"
                        className="text-gray-600 hover:text-black transition-colors"
                    >
                        your.email@berkeley.edu
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                    >
                        GitHub
                    </a>
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
