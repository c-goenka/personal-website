// Badge utility functions

// Status badge mappings
const STATUS_LABELS = {
    // Research statuses
    'published': 'PUBLISHED',
    'submitted': 'SUBMITTED',
    'presented': 'PRESENTED',
    'in-progress': 'IN PROGRESS',
} as const;

const STATUS_COLORS = {
    // Research statuses
    'published': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'submitted': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    'presented': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
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
