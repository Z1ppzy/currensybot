// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "https://github.com/shadcn.png" // Опционально
};

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>

        <body className={`${geistSans.className}`}>
        {/*<ThemeProvider>*/}
            <div className="min-h-screen bg-[#0d0d2b] dark:bg-gray-900">

                <main>        <Header /> {children}</main>
            </div>
        {/*</ThemeProvider>*/}
        </body>
        </html>
    );
}