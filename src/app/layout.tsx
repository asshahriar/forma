import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forma — Design Infrastructure",
  description: "The design system for teams who ship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
