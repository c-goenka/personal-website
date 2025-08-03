import Link from 'next/link';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-white">
            <nav className="max-w-2xl mx-auto p-8 pb-0">
                <div className="flex space-x-6">
                    <Link
                    href="/"
                    className="text-gray-600 hover:text-black transition-colors"
                    >
                    Home
                    </Link>
                    <Link
                    href="/research"
                    className="text-gray-600 hover:text-black transition-colors"
                    >
                    Research
                    </Link>
                    <Link
                    href="/thoughts"
                    className="text-gray-600 hover:text-black transition-colors"
                    >
                    Thoughts
                    </Link>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}
