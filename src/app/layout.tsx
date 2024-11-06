import type { Metadata } from "next";
import { Inter } from "next/font/google" 
import "./globals.css";
import { ThemeProvider } from '@components/theme-provider'
import Navigation from "@components/Navigation";

export const metadata: Metadata = {
  title: "Swarup Kumar Das",
  description: "Personal website",
};

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main>
          <Navigation/>
          <div className="container max-w-4xl px-6 md:px-8 lg:px-10 pt-5 md:py-10 lg:py-12 mx-auto overflow-hidden">
          {children}
          </div>
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
