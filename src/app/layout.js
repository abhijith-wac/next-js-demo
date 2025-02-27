import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Best E-Commerce Store | Buy Top Products Online",
  description: "Shop the latest products with best prices, deals, and fast shipping.",
  keywords: "e-commerce, shopping, buy online, best deals, fast shipping",
  authors: [{ name: "Your Store Name", url: "https://yourstore.com" }],
  metadataBase: new URL("https://yourstore.com"), // Replace with your domain
  openGraph: {
    title: "Best E-Commerce Store | Buy Top Products Online",
    description: "Shop the latest products with best prices, deals, and fast shipping.",
    url: "https://yourstore.com",
    siteName: "Your E-Commerce Store",
    images: [
      {
        url: "https://yourstore.com/default-og-image.jpg", // Dynamic images should be added per page
        width: 1200,
        height: 630,
        alt: "Best E-Commerce Store",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best E-Commerce Store | Buy Top Products Online",
    description: "Shop the latest products with best prices, deals, and fast shipping.",
    images: ["https://yourstore.com/default-og-image.jpg"], // Replace with a real image
    site: "@YourTwitterHandle", // Add your Twitter handle
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Basic SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Your Store Name",
              "url": "https://yourstore.com",
              "logo": "https://yourstore.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/yourstore",
                "https://www.twitter.com/yourstore",
                "https://www.instagram.com/yourstore",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
