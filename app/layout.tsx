import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tekra21 | Coming Soon",
  description: "Tekra21: Geleceğin E-Ticaret Platformu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
