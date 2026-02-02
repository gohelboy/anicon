import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Icons – Anicon",
  description:
    "Browse and search animated icons. Install like shadcn components. Powered by Motion.",
};

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
