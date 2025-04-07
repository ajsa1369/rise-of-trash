import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Rise of Trash - Turning Scams Into Justice, Empowering Web3 Victims',
  description: 'Rise of Trash is a decentralized platform dedicated to fighting crypto scams, protecting victims, and incentivizing whistleblowers through the $TRASH token ecosystem.',
  keywords: 'Rise of Trash, $TRASH token, crypto scams, whistleblower, DAO governance, blockchain, web3, victim protection',
  openGraph: {
    title: 'Rise of Trash - Turning Scams Into Justice',
    description: 'Join the decentralized movement fighting crypto scams and empowering Web3 victims.',
    url: 'https://riseoftrash.com',
    siteName: 'Rise of Trash',
    images: [
      {
        url: 'https://riseoftrash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rise of Trash',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rise of Trash - Turning Scams Into Justice',
    description: 'Join the decentralized movement fighting crypto scams and empowering Web3 victims.',
    creator: '@riseoftrash',
    images: ['https://riseoftrash.com/twitter-image.jpg'],
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
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-G8G6R63NKN" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G8G6R63NKN');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
