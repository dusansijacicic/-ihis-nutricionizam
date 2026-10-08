// Sadržaj koji je za sada vidljiv samo u admin pregledu (vidi lib/preview.js).
// Sve činjenice su preuzete iz javnog sadržaja sajta (poziv za savetovanje, poziv za radionicu,
// stranica Usluge). Ništa iz šifrovanih prezentacija sa savetovanja ne sme u javni sadržaj.

export const FAQ_RADIONICA = {
  sr: {
    heading: 'Česta pitanja',
    items: [
      ['Gde se održava radionica?', 'U Vašem ili našem prostoru — mesto održavanja dogovaramo zajedno.'],
      ['Koliko traje radionica?', 'Radionica je jednodnevna: osnovna traje od 9 do 14 časova, a proširena od 9 do 15 časova.'],
      ['Koja je razlika između osnovne i proširene radionice?', 'Obe obuhvataju Pravilnik o deklarisanju, označavanju i reklamiranju hrane (EU Regulativa 1169/2011) i Pravilnik o prehrambenim i zdravstvenim izjavama (EU Regulativa 1924/2006). Proširena radionica dodatno obuhvata Pravilnik o hrani sa izmenjenim nutritivnim sastavom.'],
      ['Koliko košta radionica?', 'Kotizacija za osnovnu radionicu je 30.000 dinara + PDV, a za proširenu 35.000 dinara + PDV. Svaki četvrti i naredni učesnik iz iste firme ima popust od 15%.'],
      ['Koliko polaznika je potrebno?', 'Minimalan broj polaznika je 2.'],
      ['Šta obuhvata kotizacija?', 'Ekspertska predavanja, materijal za seminar i potvrdu o pohađanju seminara.'],
      ['Da li se radi na primerima naših proizvoda?', 'Da. Propisi se objašnjavaju kroz primere iz asortimana proizvoda Vaše firme, a na kraju radionice razgovaramo o deklaracijama proizvoda polaznika.'],
      ['Ko drži radionicu?', 'Predavač je dr Danica Zarić.'],
      ['Kako da se prijavimo?', 'Popunite prijavu na ovoj stranici i predložite 2–3 termina. Javićemo Vam se radi konačnog dogovora i poslati predračun.'],
    ],
  },
  en: {
    heading: 'Frequently asked questions',
    items: [
      ['Where is the workshop held?', 'At your premises or ours — we agree on the venue together.'],
      ['How long is the workshop?', 'It is a one-day workshop: the core workshop runs from 9:00 to 14:00 and the extended one from 9:00 to 15:00.'],
      ['What is the difference between the core and the extended workshop?', 'Both cover the Rulebook on the declaration, labeling and advertising of food (EU Regulation 1169/2011) and the Rulebook on nutrition and health claims (EU Regulation 1924/2006). The extended workshop also covers the Rulebook on food with modified nutritional composition.'],
      ['How much does the workshop cost?', 'The fee is RSD 30,000 + VAT for the core workshop and RSD 35,000 + VAT for the extended one. Every fourth and subsequent participant from the same company gets a 15% discount.'],
      ['How many participants are needed?', 'The minimum number of participants is 2.'],
      ['What does the fee cover?', 'Expert lectures, seminar materials and a certificate of attendance.'],
      ['Do you work with examples of our products?', 'Yes. The regulations are explained through examples from your company’s product range, and the workshop ends with a discussion of the participants’ product labels.'],
      ['Who leads the workshop?', 'The lecturer is Danica Zarić, PhD.'],
      ['How do we register?', 'Fill in the registration form on this page and propose 2–3 dates. We will contact you to agree on the final schedule and send the pro forma invoice.'],
    ],
  },
};

export const VEST_13 = {
  sr: {
    date: 'Oktobar 2026',
    title: 'Održano 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE',
    paragraphs: [
      '6. oktobra 2026. u hotelu Crowne Plaza u Beogradu održano je 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE, na temu „Zakonodavstvo hrane i dodataka ishrani – aktuelnosti, novine i inovacije 2026/2027“.',
      'Kako je najavljeno u pozivu, teme savetovanja bile su nova hrana (Novel Food), materijali i predmeti u kontaktu sa hranom, flaširane vode, hrana sa izmenjenim nutritivnim sastavom, hrana za specifične populacione grupe i inovacije u razvoju proizvoda, uz panel diskusiju sa pitanjima iz industrije.',
      'Prezentacije su dostupne učesnicima uz šifru, a fotografije sa savetovanja su u galeriji.',
    ],
    gallery: 'Galerija', galleryHref: '/rs/gallery#13-savetovanje',
    lectures: 'Prezentacije', lecturesHref: '/rs/education/predavanja-13',
    alt: 'Puna sala hotela Crowne Plaza u Beogradu na 13. savetovanju',
  },
  en: {
    date: 'October 2026',
    title: 'The 13th FOOD, NUTRITION & HEALTH Conference took place',
    paragraphs: [
      'On 6 October 2026, the 13th FOOD, NUTRITION & HEALTH conference was held at Hotel Crowne Plaza in Belgrade, on the topic “Food and dietary supplement legislation – current affairs, news and innovations 2026/2027”.',
      'As announced in the invitation, the topics were novel food, food contact materials and articles, bottled waters, food with modified nutritional composition, food for specific population groups and innovations in product development, with a panel discussion of questions from the industry.',
      'The presentations are available to participants with a password, and photos from the conference are in the gallery.',
    ],
    gallery: 'Gallery', galleryHref: '/en/gallery#13-savetovanje',
    lectures: 'Presentations', lecturesHref: '/en/education/lectures-13',
    alt: 'A full conference hall at Hotel Crowne Plaza, Belgrade',
  },
};

export const DEKLARISANJE = {
  sr: {
    path: '/rs/deklarisanje',
    metaTitle: 'Deklarisanje prehrambenih proizvoda — izrada i provera deklaracija | IHIS Nutricionizam',
    metaDescription: 'Izrada i provera deklaracija prehrambenih proizvoda, usklađivanje sa propisima Srbije i EU i primena nutritivnih i zdravstvenih izjava.',
    heroTitle: 'Deklarisanje prehrambenih proizvoda',
    crumbs: [['Početna', '/rs'], ['Usluge', '/rs/services'], ['Deklarisanje', '/rs/deklarisanje']],
    tag: 'Usluga',
    heading: 'Deklaracije usklađene sa propisima Srbije i EU',
    lead: 'Izrađujemo i proveravamo deklaracije prehrambenih proizvoda, usklađujemo ih sa zahtevima zakonodavstva Srbije i EU i savetujemo u primeni nutritivnih i zdravstvenih izjava.',
    servicesTag: 'Šta radimo',
    servicesHeading: 'Podrška u deklarisanju',
    services: [
      { icon: 'ion-document-text', title: 'Izrada deklaracija', text: 'Deklaracije za nove proizvode, u skladu sa zahtevima zakonodavstva Srbije i Evropske unije.' },
      { icon: 'ion-checkmark-circled', title: 'Provera postojećih deklaracija', text: 'Provera postojećih deklaracija i njihovo usklađivanje sa važećim propisima.' },
      { icon: 'ion-chatbox-working', title: 'Nutritivne i zdravstvene izjave', text: 'Savetovanje u primeni nutritivnih i zdravstvenih izjava koje se navode na deklaraciji hrane.' },
      { icon: 'ion-ios-flask', title: 'Funkcionalni sastojci', text: 'Izbor, primena i pravilno deklarisanje funkcionalnih sastojaka, kao i proizvoda sa dodatom nutritivnom vrednošću.' },
    ],
    regsTag: 'Propisi',
    regsHeading: 'Propisi koje primenjujemo',
    regs: [
      ['Pravilnik o deklarisanju, označavanju i reklamiranju hrane', 'EU Regulativa 1169/2011'],
      ['Pravilnik o prehrambenim i zdravstvenim izjavama koje se navode na deklaraciji hrane', 'EU Regulativa 1924/2006'],
      ['Pravilnik o hrani sa izmenjenim nutritivnim sastavom', null],
    ],
    workshopTag: 'Edukacija',
    workshopHeading: 'Radionica o deklarisanju za Vaš tim',
    workshopText: 'Jednodnevna radionica za osobe koje izrađuju deklaracije i idejna rešenja ambalaže — kroz primere iz asortimana proizvoda Vaše firme, u Vašem ili našem prostoru.',
    workshopCta: 'Radionica o deklarisanju', workshopHref: '/rs/radionica',
    articlesTag: 'Blog',
    articlesHeading: 'Korisni članci',
    articles: [
      ['Kako čitati nutritivnu deklaraciju', '/rs/blog/how-to-read-nutrition-label'],
      ['Zdravstvene i nutritivne izjave', '/rs/blog/nutrition-and-health-claims'],
      ['Prirodno, bez GMO, bez glutena', '/rs/blog/natural-non-gmo-gluten-free-labels'],
    ],
    ctaHeading: 'Zatražite ponudu',
    ctaText: 'Opišite nam vaše proizvode i potrebe i kontaktiraćemo vas sa predlogom saradnje.',
    ctaButton: 'Kontaktirajte nas', ctaHref: '/rs/contact',
  },
  en: {
    path: '/en/food-labeling',
    metaTitle: 'Food Labeling — Preparing and Reviewing Food Labels | IHIS Nutricionizam',
    metaDescription: 'Preparing and reviewing food product labels, compliance with Serbian and EU legislation, and the use of nutrition and health claims.',
    heroTitle: 'Food Labeling',
    crumbs: [['Home', '/en'], ['Services', '/en/services'], ['Food labeling', '/en/food-labeling']],
    tag: 'Service',
    heading: 'Labels compliant with Serbian and EU legislation',
    lead: 'We prepare and review food product labels, align them with the requirements of Serbian and EU legislation, and advise on the use of nutrition and health claims.',
    servicesTag: 'What we do',
    servicesHeading: 'Labeling support',
    services: [
      { icon: 'ion-document-text', title: 'Preparing labels', text: 'Labels for new products, in line with the requirements of Serbian and European Union legislation.' },
      { icon: 'ion-checkmark-circled', title: 'Reviewing existing labels', text: 'Review of existing labels and their alignment with current regulations.' },
      { icon: 'ion-chatbox-working', title: 'Nutrition and health claims', text: 'Advice on the use of nutrition and health claims on food labels.' },
      { icon: 'ion-ios-flask', title: 'Functional ingredients', text: 'Selection, application and correct labeling of functional ingredients, and of products with added nutritional value.' },
    ],
    regsTag: 'Regulations',
    regsHeading: 'Regulations we apply',
    regs: [
      ['Rulebook on the declaration, labeling and advertising of food', 'EU Regulation 1169/2011'],
      ['Rulebook on nutrition and health claims on food labels', 'EU Regulation 1924/2006'],
      ['Rulebook on food with modified nutritional composition', null],
    ],
    workshopTag: 'Training',
    workshopHeading: 'A labeling workshop for your team',
    workshopText: 'A one-day workshop for those who prepare labels and packaging concepts — with examples from your company’s product range, at your premises or ours.',
    workshopCta: 'Labeling Workshop', workshopHref: '/en/workshop',
    articlesTag: 'Blog',
    articlesHeading: 'Useful articles',
    articles: [
      ['How to read a nutrition label', '/en/blog/how-to-read-nutrition-label'],
      ['Nutrition and health claims', '/en/blog/nutrition-and-health-claims'],
      ['Natural, non-GMO, gluten-free', '/en/blog/natural-non-gmo-gluten-free-labels'],
    ],
    ctaHeading: 'Request a quote',
    ctaText: 'Tell us about your products and needs and we will contact you with a proposal.',
    ctaButton: 'Contact us', ctaHref: '/en/contact',
  },
};

export const BLOG_CTA = {
  sr: {
    tag: 'Radionica o deklarisanju',
    heading: 'Želite da Vaš tim izrađuje ispravne deklaracije?',
    text: 'Na jednodnevnoj radionici prolazimo kroz propise Srbije i EU na primerima proizvoda Vaše firme.',
    primary: ['Radionica o deklarisanju', '/rs/radionica'],
    secondary: ['Usluga deklarisanja', '/rs/deklarisanje'],
  },
  en: {
    tag: 'Labeling Workshop',
    heading: 'Want your team to prepare compliant labels?',
    text: 'In a one-day workshop we go through Serbian and EU regulations using examples of your company’s products.',
    primary: ['Labeling Workshop', '/en/workshop'],
    secondary: ['Food labeling service', '/en/food-labeling'],
  },
};
