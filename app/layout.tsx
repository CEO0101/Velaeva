import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://velaeva.com"),
  title: "Velaeva.com | Hands-Off AI Concierge For High-Ticket Businesses",
  description:
    "Velaeva installs hands-off AI concierge systems for high-intent businesses that want faster replies, warmer leads, and less front-desk drag.",
  keywords: [
    "AI concierge for businesses",
    "AI chatbot for car dealerships",
    "AI assistant for med spa leads",
    "done-for-you AI chatbot",
    "WhatsApp AI concierge",
    "after-hours lead response",
    "AI customer service for high-ticket businesses",
    "real estate AI concierge",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg" }],
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
      <body className="min-h-full bg-background text-foreground">{children}<Analytics /><SpeedInsights /></body>
    </html>
  );
}
