import './globals.css';
import localFont from 'next/font/local';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import { cnb } from 'cnbuilder';


const source_sans = Source_Sans_3({
  subsets: ['latin'],
  style: ['italic','normal'],
  display: 'swap',
  variable: '--font-source-sans',
});

const source_serif = Source_Serif_4({
  subsets: ['latin'],
  style: ['italic','normal'],
  display: 'swap',
  variable: '--font-source-serif',
});

const stanford = localFont({
  src: './fonts/stanford.woff2',
  weight: '300',
  variable: '--font-stanford',
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
          source_sans.variable,
          source_serif.variable,
          stanford.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
