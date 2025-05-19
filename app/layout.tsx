import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Precision Auto Solutions | AI-Powered Auto Shop Management",
  description: "Revolutionize your auto repair business with Precision Auto Solutions. Our integrated information system offers automated scheduling, AI-powered invoicing, and flexible subscription plans to streamline your shop and delight your customers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=32&q=80" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80" />
        <meta property="og:image:alt" content="Precision Auto Solutions Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=180&q=80" />
      </head>
      <body className="bg-white dark:bg-gray-950 min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
