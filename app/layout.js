import '../public/assets/css/ihis.css';
import Script from 'next/script';

export const metadata = {
  title: 'IHIS Nutricionizam',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;600&family=Montserrat:wght@300;400;600&family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
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
