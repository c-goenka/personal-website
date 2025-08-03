import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Research() {
    return (
        <div className="max-w-3xl mx-auto px-8 py-20">
            {/* Back to Home */}
            <div className="mb-8">
                <Link 
                    href="/" 
                    className="text-muted hover:text-muted-hover transition-colors text-sm flex items-center gap-2"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            <h1 className="text-3xl font-semibold mb-8">Research</h1>
            
            {/* Research Interests */}
            <div className="mb-12">
                <h2 className="text-xl font-medium mb-4">Research Interests</h2>
                <p className="text-muted leading-relaxed mb-6">
                    Human-computer interaction, user experience design, accessibility,
                    behavioral design patterns, and emerging interaction paradigms.
                </p>
            </div>

            {/* Placeholder for Projects */}
            <div className="mb-12">
                <h2 className="text-xl font-medium mb-4">Current Projects</h2>
                <p className="text-muted leading-relaxed mb-4">
                    This section will showcase my research projects, publications, and academic work.
                </p>
                <p className="text-muted leading-relaxed">
                    Coming soon: Project details, demos, and publication links.
                </p>
            </div>
        </div>
    );
}
