import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Train Tracker Belgium",
  description: "Provides real-time information about trains running in Belgium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="max-w-5xl mx-auto flex flex-col flex-1 w-full px4">
          <Header />
          <main className="flex-1 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}