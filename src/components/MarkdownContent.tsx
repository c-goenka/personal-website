import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
    content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
    return (
        <div className="prose prose-stone max-w-none dark:prose-invert">
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({children}) => <h1 className="text-2xl font-semibold mb-4 mt-8 text-foreground">{children}</h1>,
                    h2: ({children}) => <h2 className="text-xl font-semibold mb-3 mt-6 text-foreground">{children}</h2>,
                    h3: ({children}) => <h3 className="text-lg font-semibold mb-2 mt-4 text-foreground">{children}</h3>,
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
    );
}