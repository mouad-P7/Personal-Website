import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/context/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Mouad Ananouch",
  description: "Mouad Ananouch Personal Website",
};

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={cn(
            "overflow-x-clip border mx-auto min-h-screen w-full max-w-7xl flex flex-col bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Header />
          <main className="p-4 flex-1 flex flex-col max-sm:p-2">
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </ThemeProvider>
    </html>
  );
}
