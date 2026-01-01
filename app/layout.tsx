import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import FloatingContact from "./components/FloatingContact";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vegeebook - Premium Cut Vegetables for Commercial Kitchens",
  description: "Streamline your kitchen operations with Vegeebook's freshly cut, hygienic, and zero-waste vegetable delivery service. Trusted by 50+ kitchens.",
  keywords: "cut vegetables, vegetable supply, commercial kitchen, pune, vegeebook, fresh produce, chopped vegetables",
  openGraph: {
    title: "Vegeebook - Premium Cut Vegetables",
    description: "Save 40% of your kitchen time with our ready-to-cook vegetables.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} bg-gray-50 text-gray-900 antialiased`}>
        <Loader />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <FloatingContact />
      </body>
    </html>
  );
}
