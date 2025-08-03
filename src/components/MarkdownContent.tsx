import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TableOfContents } from './TableOfContents';

interface MarkdownContentProps {
    content: string;
    showTOC?: boolean;
}

// Simple function to generate slug from heading text
function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

// Extract headings from markdown content
function extractHeadings(content: string) {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = generateSlug(text);
        headings.push({ text, level, id });
    }

    return headings;
}

export function MarkdownContent({ content, showTOC = false }: MarkdownContentProps) {
    const headings = showTOC ? extractHeadings(content) : [];
    return (
        <div>
            {showTOC && <TableOfContents headings={headings} />}
            <div className="prose prose-stone max-w-none dark:prose-invert">
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({children}) => <h1 className="text-2xl font-semibold mb-4 mt-8 text-foreground">{children}</h1>,
                        h2: ({children}) => {
                            const text = children?.toString() || '';
                            const id = generateSlug(text);
                            return <h2 id={id} className="text-xl font-semibold mb-3 mt-6 text-foreground">{children}</h2>;
                        },
                        h3: ({children}) => {
                            const text = children?.toString() || '';
                            const id = generateSlug(text);
                            return <h3 id={id} className="text-lg font-semibold mb-2 mt-4 text-foreground">{children}</h3>;
                        },
                    p: ({children}) => <p className="mb-4 text-foreground leading-relaxed">{children}</p>,
                    ul: ({children}) => <ul className="mb-4 ml-6 list-disc text-foreground">{children}</ul>,
                    ol: ({children}) => <ol className="mb-4 ml-6 list-decimal text-foreground">{children}</ol>,
                    li: ({children}) => <li className="mb-1 text-foreground">{children}</li>,
                    strong: ({children}) => <strong className="font-semibold text-foreground">{children}</strong>,
                    em: ({children}) => <em className="italic text-foreground">{children}</em>,
                    code: ({children}) => <code className="px-1 py-0.5 bg-muted/20 rounded text-sm font-mono text-foreground">{children}</code>,
                    pre: ({children}) => <pre className="mb-4 p-4 bg-muted/10 rounded-lg overflow-x-auto">{children}</pre>,
                    blockquote: ({children}) => <blockquote className="mb-4 pl-4 border-l-4 border-muted/30 italic text-muted">{children}</blockquote>,
                    hr: () => <hr className="my-8 border-border" />,
                    a: ({href, children}) => <a href={href} className="text-foreground underline decoration-wavy underline-offset-4 decoration-decoration hover:text-muted-hover transition-colors">{children}</a>
                }}
                >
                    {content.trim()}
                </ReactMarkdown>
            </div>
        </div>
    );
}