import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReduxProvider } from "./redux/Providers";




export const metadata: Metadata = {
  title: "Talentra",
  description: "Find Your Dream Job with Talentra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-yellow-50">
        <ReduxProvider>
          <Navbar />
          <main className="w-full overflow-x-hidden">
          {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
