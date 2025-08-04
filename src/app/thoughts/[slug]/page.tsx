import { LuCalendar } from "react-icons/lu";
import { notFound } from "next/navigation";
import { getThought, getAllThoughts, formatDate } from "@/data/thoughts";
import { MarkdownContent } from "@/components/MarkdownContent";
import { Breadcrumb } from "@/components/Breadcrumb";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ThoughtPage({ params }: PageProps) {
    const { slug } = await params;
    const thought = getThought(slug);

    if (!thought) {
        notFound();
    }

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Thoughts", href: "/thoughts" },
        { label: thought.title, href: `/thoughts/${thought.id}` }
    ];

    return (
        <div className="max-w-3xl mx-auto px-8 py-20">
            {/* Breadcrumb Navigation */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Article Header */}
            <article>
                <header className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{thought.emoji}</span>
                        <h1 className="text-3xl font-semibold">{thought.title}</h1>
                    </div>

                    {/* Date only */}
                    <div className="flex items-center gap-1 text-sm text-muted mb-8">
                        <LuCalendar size={14} />
                        {formatDate(thought.date)}
                    </div>
                </header>

                {/* Article Content */}
                <MarkdownContent content={thought.content} />
            </article>
        </div>
    );
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const thought = getThought(slug);

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
