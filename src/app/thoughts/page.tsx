import Link from "next/link";
import { LuArrowLeft, LuClock, LuFileText } from "react-icons/lu";
import { getAllThoughts, formatDate } from "../../data/thoughts";

export default function Thoughts() {
    const thoughts = getAllThoughts();

    return (
        <div className="max-w-3xl mx-auto px-8 py-20">
            {/* Back to Home */}
            <div className="mb-8">
                <Link
                    href="/"
                    className="text-muted hover:text-muted-hover transition-colors text-sm flex items-center gap-2"
                >
                    <LuArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            <h1 className="text-3xl font-semibold mb-8">Thoughts</h1>

            {/* Thoughts Cards */}
            <div className="space-y-6">
                {thoughts.map((thought) => (
                    <Link
                        key={thought.id}
                        href={`/thoughts/${thought.id}`}
                        className="block group"
                    >
                        <div className="border border-border rounded-lg p-6 hover:border-muted hover:bg-muted/5 transition-all duration-200 hover:shadow-sm">
                            {/* Header */}
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold group-hover:text-muted-hover transition-colors">
                                    {thought.title}
                                </h2>
                            </div>

                            {/* Preview text */}
                            <p className="text-muted leading-relaxed mb-4">
                                {thought.preview}
                            </p>

                            {/* Metadata */}
                            <div className="flex items-center gap-4 text-sm text-muted">
                                <span>{formatDate(thought.date)}</span>
                                <span className="flex items-center gap-1">
                                    <LuClock size={14} />
                                    {thought.readingTime}
                                </span>
                                <span className="flex items-center gap-1">
                                    <LuFileText size={14} />
                                    {thought.wordCount}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
