import { cookies } from 'next/headers';
import Header from '../../../../components/Header';
import MobileNav from '../../../../components/MobileNav';
import Footer from '../../../../components/Footer';
import LectureGate from '../../../../components/LectureGate';
import SlideDecks from '../../../../components/SlideDecks';
import { PREDAVANJA } from '../../../../lib/content/predavanja';
import { verifyLectureToken, LECTURE_COOKIE_NAME } from '../../../../lib/predavanja';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Predavanja — 13. Savetovanje HRANA, ISHRANA & ZDRAVLJE',
  description: 'Prezentacije sa 13. Savetovanja HRANA, ISHRANA & ZDRAVLJE, dostupne učesnicima uz šifru.',
  robots: { index: false, follow: false },
  alternates: {
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/education/predavanja-13', en: 'https://ihis-nutricionizam.rs/en/education/lectures-13' },
  },
};

export default function Predavanja13() {
  const conf = PREDAVANJA['13'];
  const unlocked = verifyLectureToken(cookies().get(LECTURE_COOKIE_NAME)?.value);
  const decks = conf.decks.map((d) => ({ id: d.id, pages: d.pages, ...d.sr }));

  return (
    <>
      <Header locale="sr" current="education" langHref="/en/education/lectures-13" />
      <MobileNav locale="sr" current="education" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Predavanja</h1>
            <p className="page-crumbs">
              <a href="/rs">Početna</a> &rsaquo; <a href="/rs/education">Edukacija</a> &rsaquo; Predavanja
            </p>
          </div>
        </div>

        <div className="section-light">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">{conf.sr.date}</span>
              <h2 className="section-h">{conf.sr.title}</h2>
              <span className="liner"></span>
              <p className="section-lead grey">
                {unlocked
                  ? 'Izaberite predavanje za pregled. Prezentacije su dostupne samo za čitanje na sajtu.'
                  : 'Prezentacije sa savetovanja dostupne su učesnicima za pregled na sajtu. Unesite šifru koju ste dobili mejlom.'}
              </p>
            </div>
            {unlocked ? <SlideDecks conf="13" decks={decks} locale="sr" /> : <LectureGate locale="sr" />}
          </div>
        </div>
      </section>

      <Footer locale="sr" />
    </>
  );
}
