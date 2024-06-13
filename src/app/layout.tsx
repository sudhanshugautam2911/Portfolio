import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudhanshu's Portfolio",
  description: "Personal portfolio website by sudhanshu gautam"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(spaceGrotesk.className, "bg-black text-white")}>
        {children}
      </body>
    </html>
  );
}
