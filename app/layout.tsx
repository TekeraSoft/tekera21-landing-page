import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tekra21 | Coming Soon",
  description: "Tekra21: Geleceğin E-Ticaret Platformu",
  keywords:
    "Tekra21, e-ticaret, dijital ticaret, online mağaza, teknoloji, inovasyon, platform",
  authors: [{ name: "Tekra21 Team" }],
  openGraph: {
    title: "Tekra21 | Coming Soon",
    description: "Tekra21: Geleceğin E-Ticaret Platformu",
    siteName: "Tekra21",
    type: "website",
    url: "https://www.tekra21.com",
  },
  twitter: {
    title: "Tekra21 | Coming Soon",
    description: "Tekra21: Geleceğin E-Ticaret Platformu",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Tekra21: Geleceğin E-Ticaret Platformu"
        />
        <meta
          name="keywords"
          content="Tekra21, e-ticaret, dijital ticaret, online mağaza, teknoloji, inovasyon, platform"
        />
        <meta name="author" content="Tekra21 Team" />
        <meta property="og:title" content="Tekra21 | Coming Soon" />
        <meta
          property="og:description"
          content="Tekra21: Geleceğin E-Ticaret Platformu"
        />
        <meta property="og:url" content="https://www.tekra21.com" />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="Tekra21 | Coming Soon" />
        <meta
          property="twitter:description"
          content="Tekra21: Geleceğin E-Ticaret Platformu"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
