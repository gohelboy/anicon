export const REGISTRY_BASE = "https://your-registry-url.com/r";

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
