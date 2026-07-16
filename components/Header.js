import { NAV } from '../lib/nav';

export default function Header({ locale, current, langHref }) {
  const nav = NAV[locale];
  const other = locale === 'sr' ? 'EN' : 'SR';

  return (
    <header className="masthead">
      <div className="hdr-inner">
        <a href={nav.home} className="main-logo">
          <img src="/assets/img/logo.png" alt="IHIS Nutricionizam" />
        </a>
        <ul className="hdr-links">
          {nav.items.map((item) => (
            <li key={item.key}>
              <a href={item.href} className={current === item.key ? 'is-current' : ''}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={langHref} className="lang-switch">{other}</a>
        <button className="menu-trigger"><span></span><span></span><span></span></button>
      </div>
    </header>
  );
}
