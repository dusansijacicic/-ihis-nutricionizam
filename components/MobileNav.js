import { NAV } from '../lib/nav';

export default function MobileNav({ locale, current }) {
  const nav = NAV[locale];

  return (
    <nav className="mastnav">
      <div className="mastnav-left"></div>
      <div className="mastnav-right">
        <button className="mastnav-close">&times;</button>
        <ul className="nav-links">
          {nav.items.map((item) => (
            <li key={item.key}>
              <a href={item.href} className={`main-link${current === item.key ? ' is-current' : ''}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-contact">
          <p>{nav.address}</p>
          <p className="mt-8"><a href="tel:+381113341994">+381 11 33 41 994</a></p>
          <div className="social-links">
            <a href="https://www.facebook.com/ihis.nutricionizam.7/" target="_blank" rel="noreferrer"><i className="ion-social-facebook"></i></a>
            <a href="https://www.instagram.com/ihisnutricionizam/" target="_blank" rel="noreferrer"><i className="ion-social-instagram"></i></a>
            <a href="https://www.linkedin.com/in/danica-zaric-32239683/" target="_blank" rel="noreferrer"><i className="ion-social-linkedin"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
