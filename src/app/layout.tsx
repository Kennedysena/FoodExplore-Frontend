import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins, Roboto } from "next/font/google";

import { cn } from "cn";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Food Explorer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: o next-themes (e extensões como o LocatorJS) alteram o <html>
    // antes do React hidratar
    <html lang="pt-br" className={cn(roboto.variable, poppins.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
