import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
