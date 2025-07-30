import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./globals.css";
import { ReactNode } from "react";
import QueryProvider from "./query-provider";

export const metadata: Metadata = {
  title: "Train Tracker Belgium",
  description: "Provides real-time information about trains running in Belgium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <QueryProvider>
          <div className="max-w-5xl mx-auto flex flex-col flex-1 w-full px4">
            <Header />
            <main className="flex-1 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}