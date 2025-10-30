import type { Metadata } from "next"; // Object to set metadata
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[name] Personal Website",
  description: "A personal website for [name].",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
		// returns boilerplate
  return (
    <html lang="en">
      <body className={inter.className}><Navbar /> 
        {children}</body>
    </html>
  );
}