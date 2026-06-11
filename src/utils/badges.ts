// Badge utility functions

// Status label mappings
const STATUS_LABELS = {
    // Research statuses
    'published': 'Published',
    'submitted': 'Submitted',
    'presented': 'Presented',
    'in-progress': 'In Progress',
} as const;

export function getStatusLabel(status: keyof typeof STATUS_LABELS): string {
    return STATUS_LABELS[status] || '';
}
