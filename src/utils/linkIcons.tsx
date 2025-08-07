import { LuExternalLink, LuFileText, LuCode, LuGlobe, LuPresentation, LuImage } from "react-icons/lu";

// Link type to icon mapping
const LINK_ICONS = {
    // Research links
    'pdf': LuFileText,
    'code': LuCode,
    'demo': LuGlobe,
    'website': LuGlobe,
    'poster': LuPresentation,
    // Project links
    'github': LuCode,
    'paper': LuFileText,
    'documentation': LuFileText,
    'presentation': LuPresentation,
    'portfolio': LuImage,
} as const;

// Link type to label mapping
const LINK_LABELS = {
    'github': 'GitHub',
    'demo': 'Demo',
    'website': 'Website',
    'pdf': 'PDF',
    'paper' : 'Paper',
    'code': 'Code',
    'documentation': 'Docs',
    'presentation': 'Slides',
    'portfolio': 'Portfolio',
} as const;

export function getLinkIcon(type: string, size: number = 14) {
    const IconComponent = LINK_ICONS[type as keyof typeof LINK_ICONS] || LuExternalLink;
    return <IconComponent size={size} />;
}

export function getLinkLabel(type: string): string {
    return LINK_LABELS[type as keyof typeof LINK_LABELS] || type.charAt(0).toUpperCase() + type.slice(1);
}
