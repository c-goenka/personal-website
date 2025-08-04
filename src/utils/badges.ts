// Shared badge utility functions

// Status badge mappings
const STATUS_LABELS = {
    // Research statuses
    'published': 'PUBLISHED',
    'submitted': 'SUBMITTED',
    'presented': 'PRESENTED',
    'in-progress': 'IN PROGRESS',
    // Project statuses  
    'active': 'ACTIVE',
    'completed': 'COMPLETED',
    'archived': 'ARCHIVED',
} as const;

const STATUS_COLORS = {
    // Research statuses
    'published': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'submitted': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    'presented': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    // Project statuses
    'active': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    'completed': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'archived': 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
} as const;

// Project type mappings
const TYPE_LABELS = {
    'software': 'SOFTWARE',
    'hardware': 'HARDWARE',
    'presentation': 'PRESENTATION',
    'design': 'DESIGN',
    'research': 'RESEARCH',
} as const;

const TYPE_COLORS = {
    'software': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
    'hardware': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    'presentation': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    'design': 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400',
    'research': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400',
} as const;

// Project category mappings
const CATEGORY_LABELS = {
    'personal': 'PERSONAL',
    'academic': 'ACADEMIC',
    'work': 'WORK',
} as const;

const CATEGORY_COLORS = {
    'personal': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    'academic': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
    'work': 'bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400',
} as const;

// Default colors
const DEFAULT_COLOR = 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';

// Exported utility functions
export function getStatusLabel(status: keyof typeof STATUS_LABELS): string {
    return STATUS_LABELS[status] || '';
}

export function getStatusColor(status: keyof typeof STATUS_COLORS): string {
    return STATUS_COLORS[status] || DEFAULT_COLOR;
}

export function getTypeLabel(type: keyof typeof TYPE_LABELS): string {
    return TYPE_LABELS[type] || '';
}

export function getTypeColor(type: keyof typeof TYPE_COLORS): string {
    return TYPE_COLORS[type] || DEFAULT_COLOR;
}

export function getCategoryLabel(category: keyof typeof CATEGORY_LABELS): string {
    return CATEGORY_LABELS[category] || '';
}

export function getCategoryColor(category: keyof typeof CATEGORY_COLORS): string {
    return CATEGORY_COLORS[category] || DEFAULT_COLOR;
}