# Anicon

**Animated icons** you can install like [shadcn](https://ui.shadcn.com) components. Built with [Motion](https://motion.dev/) (formerly Framer Motion).

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the registry site and icon showcase.

## Build the registry

Generate the registry JSON files (used when others install icons via the CLI):

```bash
npm run registry:build
```

This writes files to `public/r/` (e.g. `public/r/icon-heart.json`). Serve the app (or deploy) so these URLs are reachable.

## Install an icon in your project

From a project that uses [shadcn](https://ui.shadcn.com/docs/installation) (with `components.json`):

```bash
pnpm dlx shadcn@latest add https://your-deployed-url.com/r/icon-heart.json
```

The CLI will copy the icon component and add `motion` if needed.

## Add a new icon

1. Create a folder under `registry/default/`, e.g. `registry/default/icon-my-icon/`.
2. Add a React component that uses `motion` from `motion/react`. Export it (e.g. `IconMyIcon`).
3. Add an entry to `registry.json` under `items`:

   ```json
   {
     "name": "icon-my-icon",
     "type": "registry:component",
     "title": "Animated My Icon",
     "description": "Short description.",
     "dependencies": ["motion"],
     "files": [
       {
         "path": "registry/default/icon-my-icon/icon-my-icon.tsx",
         "type": "registry:component"
       }
     ]
   }
   ```

4. Run `npm run registry:build` and redeploy.

## Icons in this registry

- **icon-heart** – Heart with hover/tap scale animation
- **icon-sparkle** – Sparkle with hover/tap scale and rotate

## Tech

- [Next.js](https://nextjs.org/) (App Router)
- [Motion](https://motion.dev/) for animations
- [shadcn registry](https://ui.shadcn.com/docs/registry) format and CLI
