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
