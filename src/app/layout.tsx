import type { Metadata } from "next";
import "./globals.css";
import ThemesProvider from "./theme/ThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "600", "700", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Pure Wash - Premium Car Wash Services",
  description:
    "Professional car wash services with premium quality. Book your car wash appointment online with Pure Wash for the best care your vehicle deserves.",
  keywords:
    "car wash, auto detailing, vehicle cleaning, professional car wash, Pure Wash",
  authors: [{ name: "Pure Wash Team" }],
  openGraph: {
    title: "Pure Wash - Premium Car Wash Services",
    description:
      "Professional car wash services with premium quality. Book your car wash appointment online.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pure Wash Logo",
      },
    ],
  },
  metadataBase: new URL("http://localhost:3000"),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <ThemesProvider>
        <body className={`${cairo.className} ${cairo.variable} antialiased`}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </body>
      </ThemesProvider>
    </html>
  );
}
