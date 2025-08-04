import Link from "next/link";
import { getAllThoughts, formatDate } from "@/data/thoughts";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Thoughts() {
    const thoughts = getAllThoughts();
    
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Thoughts", href: "/thoughts" }
    ];

    return (
        <div className="max-w-3xl mx-auto px-8 py-20">
            {/* Breadcrumb Navigation */}
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="text-3xl font-semibold mb-6">Thoughts</h1>
            
            {/* Under Construction Notice */}
            <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-600 dark:text-yellow-400">🚧</span>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200">Under Construction</h3>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    This page contains placeholder content. Real thoughts and reflections will be added soon.
                </p>
            </div>

            {/* Thoughts Cards */}
            <div className="space-y-6">
                {thoughts.map((thought) => (
                    <Link
                        key={thought.id}
                        href={`/thoughts/${thought.id}`}
                        className="block group"
                    >
                        <div className="border border-border rounded-lg p-5 hover:border-muted hover:bg-muted/5 transition-all duration-200 hover:shadow-sm">
                            {/* Header with emoji */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">{thought.emoji}</span>
                                <h2 className="text-xl font-semibold group-hover:text-muted-hover transition-colors">
                                    {thought.title}
                                </h2>
                            </div>

                            {/* Preview text */}
                            <p className="text-muted leading-relaxed mb-3">
                                {thought.preview}
                            </p>

                            {/* Date only */}
                            <div className="text-sm text-muted">
                                {formatDate(thought.date)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
