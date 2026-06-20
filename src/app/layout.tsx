import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raphael Sampaio — Senior React Native Engineer",
  description:
    "Portfolio of Raphael Sampaio, Senior React Native Engineer based in Fortaleza, Brazil. Open to remote contractor roles.",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
