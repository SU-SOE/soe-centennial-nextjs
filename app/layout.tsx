import "./globals.css";
import localFont from "next/font/local";
import { Source_Sans_3, DM_Sans, DM_Mono } from "next/font/google";
import { cnb } from "cnbuilder";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-dm-sans",
});

const dm_mono = DM_Mono({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-dm-mono",
  weight: "300",
});

const source_sans = Source_Sans_3({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-source-sans",
});

const stanford = localFont({
  src: "./fonts/stanford.woff2",
  weight: "300",
  variable: "--font-stanford",
});

const appleIcons: Icon[] = [60, 72, 76, 114, 120, 144, 152, 180].map(
  (size) => ({
    url: `https://www-media.stanford.edu/assets/favicon/apple-touch-icon-${size}x${size}.png`,
    sizes: `${size}x${size}`,
  }),
);

const icons: Icon[] = [16, 32, 96, 128, 192, 196].map((size) => ({
  url:
    size === 128
      ? `https://www-media.stanford.edu/assets/favicon/favicon-${size}.png`
      : `https://www-media.stanford.edu/assets/favicon/favicon-${size}x${size}.png`,
  sizes: `${size}x${size}`,
}));

export const metadata = {
  metadataBase: new URL("https://su-soe.github.io/soe-centennial-nextjs/"),
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://su-soe.github.io/soe-centennial-nextjs/",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, ...icons],
    apple: appleIcons,
  },
};

export const revalidate = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cnb(
          dm_sans.variable,
          dm_mono.variable,
          source_sans.variable,
          stanford.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
