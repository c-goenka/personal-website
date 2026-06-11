// Link type to label mapping
const LINK_LABELS = {
    'github': 'GitHub',
    'demo': 'Demo',
    'website': 'Website',
    'pdf': 'PDF',
    'paper' : 'Paper',
    'code': 'Code',
    'documentation': 'Docs',
    'presentation': 'Presentation',
    'portfolio': 'Portfolio',
} as const;

export function getLinkLabel(type: string): string {
    return LINK_LABELS[type as keyof typeof LINK_LABELS] || type.charAt(0).toUpperCase() + type.slice(1);
}
