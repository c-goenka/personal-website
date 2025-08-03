'use client'

import { useState } from 'react';
import { LuChevronDown, LuChevronRight } from 'react-icons/lu';

interface TableOfContentsProps {
    headings: Array<{ text: string; level: number; id: string }>;
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    if (headings.length === 0) return null;

    return (
        <div className="mb-8 border border-border rounded-lg p-4">
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="flex items-center gap-2 w-full text-left text-sm font-medium text-foreground hover:text-muted-hover transition-colors"
            >
                {isCollapsed ? <LuChevronRight size={16} /> : <LuChevronDown size={16} />}
                Table of Contents
            </button>

            {!isCollapsed && (
                <div className="mt-3 pt-3 border-t border-border">
                    <ul className="space-y-1">
                        {headings.map((heading, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className={`text-muted mt-0.5 ${
                                    heading.level === 2 ? '' : 'ml-4'
                                }`}>
                                    {heading.level === 2 ? '•' : '◦'}
                                </span>
                                <a
                                    href={`#${heading.id}`}
                                    className={`block py-1 text-sm text-muted hover:text-muted-hover transition-colors ${
                                        heading.level === 2 ? '' : ''
                                    }`}
                                >
                                    {heading.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
