import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Igor Casconi",
  description: "Desenvolvedor Mobile & Front-end",
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
