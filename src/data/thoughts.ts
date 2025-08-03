export interface Thought {
    id: string;
    title: string;
    date: string;
    readingTime: string;
    wordCount: string;
    preview: string;
    content: string;
}

export const thoughts: Thought[] = [
    {
        id: "sample-thought",
        title: "Lorem Ipsum Dolor Sit Amet",
        date: "2024-08-01",
        readingTime: "5 min read",
        wordCount: "1,200 words",
        preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        content: `# Lorem Ipsum Dolor Sit Amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Sed Ut Perspiciatis Unde Omnis

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

## At Vero Eos Et Accusamus

### Neque Porro Quisquam Est
At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

### Similique Sunt In Culpa
Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

## Temporibus Autem Quibusdam

Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus:

- Omnis voluptas assumenda est
- Omnis dolor repellendus
- Temporibus autem quibusdam et aut
- Officiis debitis aut rerum necessitatibus

## Itaque Earum Rerum

Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

**Excepteur sint occaecat** cupidatat non proident, sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

---

*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*`
    }
];

// Utility functions
export function getThought(id: string): Thought | undefined {
    return thoughts.find(thought => thought.id === id);
}

export function getAllThoughts(): Thought[] {
    return thoughts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}