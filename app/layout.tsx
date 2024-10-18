import './globals.css';
import localFont from 'next/font/local';
import { Source_Sans_3, DM_Sans } from 'next/font/google';
import { cnb } from 'cnbuilder';
import CustomMDXProvider from './MDXProvider';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  style: ['italic','normal'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  style: ['italic','normal'],
  display: 'swap',
  variable: '--font-source-sans',
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
          dm_sans.variable,
          source_sans.variable,
          stanford.variable,
        )}
      >
        <CustomMDXProvider>
          {children}
        </CustomMDXProvider>
      </body>
    </html>
  );
}
