import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Browse 500+ Animated Icons",
  description:
    "Search and preview 500+ animated SVG icons for React. Install any icon like a shadcn component with one CLI command. Powered by Motion.",

  alternates: {
    canonical: "/icons",
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/icons`,
    siteName: SITE_NAME,
    title: `Browse Icons – ${SITE_NAME}`,
    description:
      "Search and preview 500+ animated SVG icons for React. Install like shadcn components.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} icon browser – 500+ animated icons`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Browse Icons – ${SITE_NAME}`,
    description:
      "Search and preview 500+ animated SVG icons for React. Powered by Motion.",
    images: ["/og-image.png"],
  },
};

/* JSON-LD: CollectionPage for the icons browser */
function IconsJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Browse Animated Icons – ${SITE_NAME}`,
    description:
      "Search, preview and install 500+ animated SVG icons for React.",
    url: `${SITE_URL}/icons`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Icons",
          item: `${SITE_URL}/icons`,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <IconsJsonLd />
      {children}
    </>
  );
}
