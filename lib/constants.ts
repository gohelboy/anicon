export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://an-icon.vercel.app";

export const SITE_NAME = "Anicon";

export const SITE_DESCRIPTION =
  "Open-source animated icon registry for React. Install 500+ Motion-powered SVG icons like shadcn components with one CLI command.";

export const REGISTRY_BASE = "https://an-icon.vercel.app/r";

export const installCommandsByPm = {
  pnpm: (url: string) => `pnpm dlx shadcn@latest add ${url}`,
  npm: (url: string) => `npx shadcn@latest add ${url}`,
  bun: (url: string) => `bunx shadcn@latest add ${url}`,
  yarn: (url: string) => `yarn dlx shadcn@latest add ${url}`,
} as const;

export type PackageManager = keyof typeof installCommandsByPm;

export const PACKAGE_MANAGERS = Object.keys(
  installCommandsByPm
) as PackageManager[];
