import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Photo Studio | Professional Photography",
  description:
    "Capture moments, create memories. Professional photography services for weddings, portraits, events, and more.",
  keywords:
    "photography, wedding photography, portrait photography, professional photographer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-white">{children}</body>
    </html>
  );
}
