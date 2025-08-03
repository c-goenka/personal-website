import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        {index > 0 && (
                            <LuChevronRight size={14} className="text-muted" />
                        )}
                        {index === items.length - 1 ? (
                            <span className="text-muted">{item.label}</span>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-muted hover:text-muted-hover transition-colors"
                            >
                                {item.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}