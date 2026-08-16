import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Jivitesh Sharma | Data Scientist and AI Systems Engineer";
const description = "Portfolio of Jivitesh Sharma, a data scientist and AI systems engineer working across machine learning, graph AI, NLP, generative AI and production delivery.";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jivitesh-ai-systems.jivi-m.chatgpt.site";

export const viewport: Viewport = {
  themeColor: "#070a10",
};

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description,
    images: [{ url: `${basePath}/og.png`, width: 1730, height: 909, alt: "Jivitesh Sharma, Data Scientist and AI Systems Engineer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
