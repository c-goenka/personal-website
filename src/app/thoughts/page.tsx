import Link from "next/link";

export default function Thoughts() {
    return (
        <div className="max-w-2xl mx-auto p-8">
            {/* Back to Home */}
            <div className="mb-8">
                <Link 
                    href="/" 
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                    ← Back to Home
                </Link>
            </div>

            <h1 className="text-3xl font-medium mb-8">Thoughts</h1>
            
            <p className="text-gray-600 mb-4">
                This page will feature my blog posts, reflections on HCI research, design insights, and personal observations.
            </p>
            <p className="text-gray-600">
                Coming soon: Blog posts about design, research, and technology.
            </p>
        </div>
    );
}
