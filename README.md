# My Personal Website

<!-- My personal website combining simplicity, clarity, and warmth. Built with a clean, modern architecture focused on intuitive design, accessibility, and performance. -->

## Content

The site is organized into three main sections:

- **Home**: Introduction, bio, and contact information with quick links to the research and projects pages.
- **Research**: Academic work including publications, ongoing projects, and conference presentations. Each project shows its status along with relevant links to papers, demos, or code repositories.
- **Projects**: Technical portfolio showcasing software development, design work, and research implementations. Projects include technology stacks and demo links where available.

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

<!-- ## Development

Feel free to use this as a template for your own website. Here's how to download it locally and customize it:

### Prerequisites:

- Node.js 18+
- npm or yarn

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

### Content Customization:
- Update your personal information in `src/app/page.tsx`
- Replace research data in `src/data/research.ts`
- Add your projects in `src/data/projects.ts`
- Replace images and files in the `public/` directory

### Design Customization:
- Colors and themes are defined in `src/app/globals.css`
- The warm color palette can be easily adjusted by modifying CSS variables
- Font: To change from DM Sans, update the Google Fonts import in `src/app/layout.tsx` and modify the `--font-dm-sans` CSS variable in `globals.css`
- Typography and spacing use Tailwind classes throughout -->

---
