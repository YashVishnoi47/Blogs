import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Blog",
  description: "It is Blog Application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex flex-col justify-center items-center">
          <Navbar />
          <main className="w-full h-screen ">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
