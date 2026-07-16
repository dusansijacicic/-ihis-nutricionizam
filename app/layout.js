import '../public/assets/css/ihis.css';
import Script from 'next/script';
import { Raleway, Montserrat, Open_Sans } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin', 'latin-ext'],
  weight: ['200', '300', '400', '600'],
  variable: '--font-raleway',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata = {
  title: 'IHIS Nutricionizam',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr" className={`${raleway.variable} ${montserrat.variable} ${openSans.variable}`}>
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
