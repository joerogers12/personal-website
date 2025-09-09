import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joe Rogers's Site",
  description: "The digital portfolio site of software engineer, Joe Rogers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} data-bs-theme="dark">
        {children}
      </body>
    </html>
  );
}
