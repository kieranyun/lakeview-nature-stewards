import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lakeview Nature Stewards",
    template: "%s · Lakeview Nature Stewards",
  },
  description:
    "Neighborhood volunteers working with SF Rec & Parks to restore the native coastal-bluff ecosystem of the Lakeview Ashton Mini Park.",
  openGraph: {
    title: "Lakeview Nature Stewards",
    description:
      "Restoring the native coastal-bluff ecosystem of the Lakeview Ashton Mini Park in San Francisco.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <Header />
        <main className="overflow-x-clip flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
