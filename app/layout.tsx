import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.velaeva.com"),
  title: "Velaeva | Hands-Off AI Concierge For High-Ticket Businesses",
  description:
    "Velaeva installs hands-off AI concierge systems for high-intent businesses that want faster replies, warmer leads, and less front-desk drag.",
  keywords: [
    "AI concierge for service businesses",
    "done-for-you AI chatbot",
    "after-hours lead capture",
    "AI customer service",
    "WhatsApp AI concierge",
    "AI lead response",
    "AI concierge system",
    "hands-off AI customer service",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", sizes: "192x192" }],
  },
  openGraph: {
    title: "Velaeva.com | Hands-Off AI Concierge For High-Ticket Businesses",
    description:
      "A done-for-you AI concierge that handles after-hours questions, lead capture, and follow-up without turning into another dashboard for the owner.",
    url: "https://velaeva.com",
    siteName: "Velaeva.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velaeva.com | Hands-Off AI Concierge For High-Ticket Businesses",
    description:
      "Velaeva installs a hands-off AI concierge that keeps leads warm, handles customer questions, and reduces front-desk drag.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground"><SmoothScroll />{children}<Analytics /></body>
    </html>
  );
}
