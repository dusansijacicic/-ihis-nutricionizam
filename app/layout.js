import '../public/assets/css/ihis.css';
import Script from 'next/script';
import { Sora, Inter } from 'next/font/google';

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'IHIS Nutricionizam',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
      </head>
      <body>
        <div id="preloader"><div className="preloader-ring"></div></div>
        {children}
        <Script src="/assets/js/ihis.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
