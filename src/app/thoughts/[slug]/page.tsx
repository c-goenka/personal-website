import Link from "next/link";
import { LuArrowLeft, LuClock, LuFileText, LuCalendar } from "react-icons/lu";
import { notFound } from "next/navigation";
import { getThought, getAllThoughts, formatDate } from "../../../data/thoughts";
import { MarkdownContent } from "../../../components/MarkdownContent";

interface PageProps {
    params: {
        slug: string;
    };
}

export default function ThoughtPage({ params }: PageProps) {
    const thought = getThought(params.slug);

    if (!thought) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto px-8 py-20">
            {/* Back to Thoughts */}
            <div className="mb-8">
                <Link
                    href="/thoughts"
                    className="text-muted hover:text-muted-hover transition-colors text-sm flex items-center gap-2"
                >
                    <LuArrowLeft size={16} />
                    Back to Thoughts
                </Link>
            </div>

            {/* Article Header */}
            <article>
                <header className="mb-8">
                    <h1 className="text-3xl font-semibold mb-4">{thought.title}</h1>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm text-muted mb-8">
                        <span className="flex items-center gap-1">
                            <LuCalendar size={14} />
                            {formatDate(thought.date)}
                        </span>
                        <span className="flex items-center gap-1">
                            <LuClock size={14} />
                            {thought.readingTime}
                        </span>
                        <span className="flex items-center gap-1">
                            <LuFileText size={14} />
                            {thought.wordCount}
                        </span>
                    </div>
                </header>

                {/* Article Content */}
                <MarkdownContent content={thought.content} showTOC={true} />
            </article>
        </div>
    );
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps) {
    const thought = getThought(params.slug);

    if (!thought) {
        return {
            title: 'Thought Not Found'
        };
    }

    return {
        title: `${thought.title} | Chetan Goenka`,
        description: thought.preview,
    };
}

// Generate static params for all thoughts (for static generation)
export async function generateStaticParams() {
    return getAllThoughts().map((thought) => ({
        slug: thought.id,
    }));
}
