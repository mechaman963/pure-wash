import type { Metadata } from "next";
import "./globals.css";
import ThemesProvider from "./theme/ThemeProvider";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "600", "700", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Pure Wash",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemesProvider>
        <body className={`${cairo.className} ${cairo.variable} antialiased`}>
          {children}
        </body>
      </ThemesProvider>
    </html>
  );
}
