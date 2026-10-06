// Prezentacije sa savetovanja koje se prikazuju na zaštićenoj stranici (samo pregled,
// bez preuzimanja). Slajdovi su šifrovani u private/predavanja/<savetovanje>/<id>/<strana>.enc,
// a pravi ih scripts/predavanja-build.py — broj strana mora da se poklapa sa izlazom skripte.
export const PREDAVANJA = {
  '13': {
    sr: { title: '13. Savetovanje HRANA, ISHRANA & ZDRAVLJE', date: '06. oktobar 2026.' },
    en: { title: '13th Conference FOOD, NUTRITION & HEALTH', date: '6th October 2026' },
    decks: [
      {
        id: '1', pages: 21,
        sr: { title: 'Hrana za specifične populacione grupe – nova regulativa', author: 'Prof. dr Ivan Stanković, Farmaceutski fakultet, Beograd' },
        en: { title: 'Food for specific population groups – new regulation', author: 'Prof. Ivan Stanković, PhD., Faculty of Pharmacy, Belgrade' },
      },
      {
        id: '2', pages: 24,
        sr: { title: 'FTIR spektroskopija – LYZA serija FTIR spektrometara', author: 'Ivan Dimitrijević, MC Labor' },
        en: { title: 'FTIR spectroscopy – LYZA series FTIR spectrometers', author: 'Ivan Dimitrijević, MC Labor' },
      },
      {
        id: '3', pages: 41,
        sr: { title: 'Pravilnik o materijalima i predmetima u kontaktu sa hranom', author: 'Dipl. inž. Mirjana Veljković, Ministarstvo zdravlja Republike Srbije' },
        en: { title: 'Rulebook on materials and articles in contact with food', author: 'Mirjana Veljković, MSc Eng, Ministry of Health of the Republic of Serbia' },
      },
      {
        id: '4', pages: 21,
        sr: { title: 'Hrana sa izmenjenim nutritivnim sastavom: regulatorni zahtevi, obaveze proizvođača i najčešće nedoumice', author: 'Prof. dr Milka Popović, Medicinski fakultet, Institut za javno zdravlje Vojvodine' },
        en: { title: 'Food with modified nutritional composition: regulatory requirements, producer obligations and common doubts', author: 'Prof. Milka Popović, PhD., Faculty of Medicine, Institute of Public Health of Vojvodina' },
      },
      {
        id: '5', pages: 21,
        sr: { title: 'Nova hrana i inovativne procesne tehnologije: izazovi za nauku i prehrambenu industriju', author: 'Prof. dr Marica Rakin, Tehnološko-metalurški fakultet, Beograd' },
        en: { title: 'Novel food and innovative processing technologies: challenges for science and the food industry', author: 'Prof. Marica Rakin, PhD., Faculty of Technology and Metallurgy, Belgrade' },
      },
      {
        id: '6', pages: 27,
        sr: { title: 'Nova zakonska regulativa o vodi u originalnoj ambalaži', author: 'Dr Goran Stamenković, Ministarstvo zdravlja Republike Srbije' },
        en: { title: 'New legislation on water in original packaging', author: 'Goran Stamenković, PhD., Ministry of Health of the Republic of Serbia' },
      },
      {
        id: '7', pages: 56,
        sr: { title: 'Dileme u primeni Pravilnika o novoj hrani', author: 'Prim. dr Vesna Pantić Palibrk, Gradski zavod za javno zdravlje Beograd' },
        en: { title: 'Dilemmas in applying the Rulebook on novel food', author: 'Prim. Vesna Pantić Palibrk, MD, City Institute of Public Health, Belgrade' },
      },
      {
        id: '8', pages: 42,
        sr: { title: 'Okrugli sto – pitanja iz industrije', author: 'Panel diskusija, moderator: dr Danica Zarić' },
        en: { title: 'Round table – questions from the industry', author: 'Panel discussion, moderator: Danica Zarić, PhD.' },
      },
    ],
  },
};
