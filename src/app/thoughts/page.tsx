import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Thoughts() {
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

            <h1 className="text-3xl font-semibold mb-8">Thoughts</h1>
            
            <p className="text-muted leading-relaxed mb-4">
                This page will feature my blog posts, reflections on HCI research, design insights, and personal observations.
            </p>
            <p className="text-muted leading-relaxed">
                Coming soon: Blog posts about design, research, and technology.
            </p>
        </div>
    );
}
