import '../public/assets/css/ihis.css';
import Script from 'next/script';
import { Sora, Inter } from 'next/font/google';
import OrgSchema from './OrgSchema';

// Zajednički <html> dokument za root layoute /rs, /en i /admin. Sajt ima više root
// layouta da bi engleske stranice dobile lang="en" (jedan layout ne zna jezik putanje).

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

export const SITE_URL = 'https://www.ihis-nutricionizam.rs';

export const siteMetadata = {
  metadataBase: new URL(SITE_URL),
  title: 'IHIS Nutricionizam',
  // Google Search Console — svojstvo https://www.ihis-nutricionizam.rs/
  verification: { google: 'qK7rWx1AzAvXG0tzFBwnzf_gLsfaZMu0dMtYROHyWcM' },
};

export default function SiteDocument({ lang, children }) {
  return (
    <html lang={lang} className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <OrgSchema />
      </head>
      <body>
        <div id="preloader"><div className="preloader-ring"></div></div>
        {children}
        <Script src="/assets/js/ihis.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
