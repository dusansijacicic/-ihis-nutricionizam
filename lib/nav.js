export const NAV = {
  sr: {
    home: '/rs',
    items: [
      { key: 'about', href: '/rs/about', label: 'O nama' },
      { key: 'services', href: '/rs/services', label: 'Usluge' },
      { key: 'research', href: '/rs/research', label: 'Istraživanje i razvoj' },
      { key: 'tech', href: '/rs/tech', label: 'Tehnologija' },
      { key: 'education', href: '/rs/education', label: 'Edukacija' },
      { key: 'blog', href: '/rs/blog', label: 'Blog' },
      { key: 'contact', href: '/rs/contact', label: 'Kontakt' },
      {
        key: 'conference', label: '13. Savetovanje', highlight: true,
        children: [
          { key: 'invitation', href: '/rs/invitation', label: 'Poziv' },
          { key: 'registration', href: '/rs/registration', label: 'Prijava' },
          { key: 'sponsorship', href: '/rs/sponsorship', label: 'Poziv za sponzorstvo' },
        ],
      },
    ],
    address: <>Batajnički drum 9 deo, br. 8<br />11080 Beograd, Srbija</>,
  },
  en: {
    home: '/en',
    items: [
      { key: 'about', href: '/en/about', label: 'About Us' },
      { key: 'services', href: '/en/services', label: 'Services' },
      { key: 'research', href: '/en/research', label: 'Research & Development' },
      { key: 'tech', href: '/en/tech', label: 'Technology' },
      { key: 'education', href: '/en/education', label: 'Education' },
      { key: 'blog', href: '/en/blog', label: 'Blog' },
      { key: 'contact', href: '/en/contact', label: 'Contact' },
      {
        key: 'conference', label: '13th Conference', highlight: true,
        children: [
          { key: 'invitation', href: '/en/invitation', label: 'Invitation' },
          { key: 'registration', href: '/en/registration', label: 'Registration' },
          { key: 'sponsorship', href: '/en/sponsorship', label: 'Sponsorship' },
        ],
      },
    ],
    address: <>Batajnicki drum 9 deo, br. 8<br />11080 Belgrade, Serbia</>,
  },
};
