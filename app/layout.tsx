import type { Metadata, Viewport } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const title = "Jivitesh Sharma | Data Scientist and AI Systems Engineer";
const description = "Portfolio of Jivitesh Sharma, a data scientist and AI systems engineer working across machine learning, graph AI, NLP, generative AI and production delivery.";

export const viewport: Viewport = {
  themeColor: "#070a10",
};

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Jivitesh Sharma, Data Scientist and AI Systems Engineer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
