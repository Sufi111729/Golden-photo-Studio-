import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Golden Photo Studio | Professional Photography Services in Kasia, Kushinagar",
    template: "%s | Golden Photo Studio",
  },
  description:
    "Professional photography services in Kasia, Kushinagar since 1980. Wedding photography, portraits, events, products & studio shoots. Book your session today with Golden Photo Studio.",
  keywords: [
    "photography kasia",
    "wedding photography kushinagar",
    "portrait photography kasia",
    "professional photographer kushinagar",
    "photo studio kasia",
    "event photography",
    "family portraits",
    "professional headshots",
    "golden photo studio",
    "photography services kushinagar",
    "best photographer kasia",
    "wedding photographer near me",
  ],
  authors: [
    {
      name: "Golden Photo Studio",
      url: "https://goldenphotostudio.netlify.app",
    },
  ],
  creator: "Golden Photo Studio",
  publisher: "Golden Photo Studio",
  category: "Photography Services",
  classification: "Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goldenphotostudio.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Golden Photo Studio | Professional Photography Services in Kasia, Kushinagar",
    description:
      "Professional photography services in Kasia, Kushinagar since 1980. Wedding photography, portraits, events & studio work. Capture moments, create memories.",
    url: "https://goldenphotostudio.netlify.app",
    siteName: "Golden Photo Studio",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F6efebc511b8f444288d493a58e0a6eb7%2F9270b234fb324a098964be4203cc18e8?format=webp&width=1200",
        width: 1200,
        height: 630,
        alt: "Golden Photo Studio - Professional Photography Services in Kasia, Kushinagar since 1980",
        type: "image/webp",
      },
    ],
    locale: "en_IN",
    type: "website",
    emails: ["contact@goldenphotostudio.com"],
    phoneNumbers: ["+919140477247"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Photo Studio | Professional Photography Services",
    description:
      "Capture moments, create memories. Professional photography services for weddings, portraits, events, and more.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F6efebc511b8f444288d493a58e0a6eb7%2F9270b234fb324a098964be4203cc18e8?format=webp&width=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: [
      "MdZNHkAb4qM8oT4i6ABiKySojfySXZ2gXvlZroQK6DQ",
      "DlaHmPmlVwBw51X08iM59L7uhCNAM_7CgT2sfbvGFEs",
    ],
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "https://cdn.builder.io/api/v1/image/assets%2F6efebc511b8f444288d493a58e0a6eb7%2F9270b234fb324a098964be4203cc18e8?format=png&width=32",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "https://cdn.builder.io/api/v1/image/assets%2F6efebc511b8f444288d493a58e0a6eb7%2F9270b234fb324a098964be4203cc18e8?format=png&width=16",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "https://cdn.builder.io/api/v1/image/assets%2F6efebc511b8f444288d493a58e0a6eb7%2F9270b234fb324a098964be4203cc18e8?format=png&width=180",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Golden Photo Studio",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6efebc511b8f444288d493a58e0a6eb7%2F9270b234fb324a098964be4203cc18e8?format=webp&width=1200",
    description:
      "Professional photography services for weddings, portraits, events, and more. Capture moments, create memories with Golden Photo Studio.",
    url: "https://goldenphotostudio.netlify.app",
    telephone: "+1-555-0123",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Photography Lane",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7128",
      longitude: "-74.0060",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    serviceType: [
      "Wedding Photography",
      "Portrait Photography",
      "Event Photography",
      "Family Photography",
      "Professional Headshots",
    ],
    areaServed: {
      "@type": "City",
      name: "Your City",
    },
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.builder.io" />
        <link rel="preconnect" href="https://i.ibb.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body bg-white">{children}</body>
    </html>
  );
}
