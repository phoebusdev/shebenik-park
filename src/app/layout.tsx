import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shebenik National Park - Albania's Pristine Wilderness",
  description: "Discover Shebenik National Park, Albania's second-largest national park. Explore glacial lakes, ancient forests, and spot rare wildlife including the endangered Balkan lynx.",
  keywords: "Shebenik National Park, Albania tourism, hiking, wildlife, Balkan lynx, glacial lakes, UNESCO World Heritage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
