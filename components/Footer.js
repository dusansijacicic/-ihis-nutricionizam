import { NAV } from '../lib/nav';

const STR = {
  sr: {
    tagline: 'Naučno-istraživačka kompanija u oblasti nutricionizma.',
    navTitle: 'Navigacija',
    contactTitle: 'Kontakt',
    rights: 'Sva prava zadržana.',
  },
  en: {
    tagline: 'A scientific research company in the field of nutrition science.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
  },
};

export default function Footer({ locale }) {
  const nav = NAV[locale];
  const t = STR[locale];

  return (
    <footer className="mastfoot">
      <div className="foot-inner">
        <div className="foot-col">
          <div className="foot-logo"><img src="/assets/img/logo.png" alt="IHIS Nutricionizam" /></div>
          <p>{t.tagline}</p>
          <ul className="foot-social">
            <li><a href="https://www.facebook.com/ihis.nutricionizam.7/" target="_blank" rel="noreferrer"><span className="ion-social-facebook"></span></a></li>
            <li><a href="https://www.instagram.com/ihisnutricionizam/" target="_blank" rel="noreferrer"><span className="ion-social-instagram"></span></a></li>
            <li><a href="https://www.linkedin.com/in/danica-zaric-32239683/" target="_blank" rel="noreferrer"><span className="ion-social-linkedin"></span></a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h6>{t.navTitle}</h6>
          {nav.items.map((item) => (
            <p key={item.key}><a href={item.href}>{item.label}</a></p>
          ))}
        </div>
        <div className="foot-col">
          <h6>{t.contactTitle}</h6>
          <p>{nav.address}</p>
          <p className="mt-8">
            <a href="tel:+381113341994">+381 11 33 41 994</a><br />
            <a href="tel:+381648780117">+381 64 87 80 117</a><br />
            <a href="tel:+381658496845">+381 65 84 96 845</a>
          </p>
          <p className="mt-8">
            <a href="mailto:office@ihis-nutricionizam.rs">office@ihis-nutricionizam.rs</a><br />
            <a href="mailto:danica.zaric@ihis-nutricionizam.rs">danica.zaric@ihis-nutricionizam.rs</a>
          </p>
        </div>
      </div>
      <div className="foot-credits">
        <p>&copy; 2025 IHIS Nutricionizam d.o.o. {t.rights}</p>
        <p>www.ihis-nutricionizam.rs</p>
      </div>
    </footer>
  );
}
