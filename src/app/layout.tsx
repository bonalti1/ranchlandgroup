import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { site } from "@/data/site";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ranchland-group.com"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "South Texas ranches for sale",
    "hunting land South Texas",
    "Golden Triangle whitetail ranches",
    "Zapata Webb La Salle county land",
    "ranch brokerage South Texas",
    "Ranch Land Group",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.name,
    url: "https://ranchland-group.com",
    logo: "https://ranchland-group.com/brand/lockup-brown.png",
    image: "https://ranchland-group.com/media/hero-poster.jpg",
    telephone: site.phone,
    email: site.email,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "McAllen",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: [
      "South Texas",
      "Zapata County TX",
      "Webb County TX",
      "Starr County TX",
      "Jim Hogg County TX",
      "Duval County TX",
      "Dimmit County TX",
      "La Salle County TX",
    ],
    sameAs: Object.values(site.social),
  };

  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${lora.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
