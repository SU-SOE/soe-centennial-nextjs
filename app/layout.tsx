import "./globals.css";
import localFont from "next/font/local";
import { Source_Sans_3, DM_Sans, DM_Mono } from "next/font/google";
import { cnb } from "cnbuilder";

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
  variable: "--font-font-dm-mono",
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
