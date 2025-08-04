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

            <h1 className="text-3xl font-semibold mb-8">Thoughts</h1>

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
