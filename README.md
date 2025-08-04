# My Personal Website

Welcome to the code respository of my personal website!

This website is a personal expression of my love for design. I've combined my passion for simplicity, clarity, and warmth to create something that feels both professional and playful (in a gentle way). Every element, from the typography choices to the color palette, reflects my belief that good design should be intuitive, accessible, and beautiful.

Beyond aesthetics, I've ensured the site is optimized, fast, and efficient. The clean architecture and modern tech stack deliver a smooth experience while maintaining the visual warmth that makes it feel human and approachable.

## Content

The site is organized into three main sections, designed for easy navigation:

- **Home**: Introduction, bio, and contact information with quick links to the research and projects pages.
- **Research**: Academic work including publications, ongoing projects, and conference presentations. Each project shows its status along with relevant links to papers, demos, or code repositories.
- **Projects**: Technical portfolio showcasing software development, hardware projects, design work, and research implementations. Projects are categorized by type and include technology stacks and demo links where available.

## Tech Stack and Design Details

- **Framework**: Next.js 15.4 and React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Fonts**: DM Sans
- **Themes**: next-themes for persistent dark/light mode
- **Icons**: Lucide React icons

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Home page with bio and links
│   ├── research/     # Academic research showcase
│   └── projects/     # Technical portfolio
├── components/       # Reusable React components
├── data/            # Centralized content management
└── utils/           # Shared utilities and helpers
```

## Development

### Prerequisites:

- Node.js 18+
- npm, yarn, or pnpm

### To run locally on your device:

1. Clone the repository
    ```bash
    git clone https://github.com/c-goenka/personal-website.git
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Using This as a Template

If you liked the design of my website, feel free to use this codebase as a starting point for your own personal website! Here's how to customize it:

### Content Customization:
- Update your personal information in `src/app/page.tsx`
- Replace research data in `src/data/research.ts`
- Add your projects in `src/data/projects.ts`
- Replace images in the `public/` directory

### Design Customization:
- Colors and themes are defined in `src/app/globals.css`
- The warm color palette can be easily adjusted by modifying CSS variables
- Font: To change from DM Sans, update the Google Fonts import in `src/app/layout.tsx` and modify the `--font-dm-sans` CSS variable in `globals.css`
- Typography and spacing use Tailwind classes throughout

### Structure:
The site uses a clean, modular architecture that's easy to extend. The centralized data management in the `data/` folder makes it simple to add new content types or modify existing ones without touching the UI components.

---

💛 Built with care by Chetan • [View Live Site](https://cgoenka.me)
