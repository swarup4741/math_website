import type { Metadata } from "next";
import { Inter } from "next/font/google" 
import "./globals.css";
import { ThemeProvider } from '@components/theme-provider'
import Navigation from "@components/Navigation";

export const metadata: Metadata = {
  title: "Swarup Kumar Das",
  description: "Hi, I am graduate student in TCG CREST working in low-dimensional topology.",
  verification: {
    google: "HJeA2AkdrCjT6aE2kfF5DvoERrJcXjaHQi8W4ZSfA00"
  },
  category: 'personal',
  creator: 'Swarup Kumar Das',
  publisher: 'Swarup Kumar Das'
};

const font = Inter({subsets: ["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main>
          <Navigation/>
          <div className="container px-6 md:px-8 lg:px-10 pt-5 md:py-10 lg:py-12 mx-auto overflow-hidden">
          {children}
          </div>
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
