'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, memo } from 'react';
import { LuSun, LuMoon } from "react-icons/lu";

export const ThemeToggle = memo(function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-muted hover:text-muted-hover transition-colors p-2 rounded-lg hover:bg-muted/10"
            aria-label="Toggle theme"
        >
        {theme === 'dark' ? (
            <LuSun size={20} />
        ) : (
            <LuMoon size={20} />
        )}
        </button>
    );
});
