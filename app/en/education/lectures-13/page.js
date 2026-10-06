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
  title: 'Lectures — 13th Conference FOOD, NUTRITION & HEALTH',
  description: 'Presentations from the 13th Conference FOOD, NUTRITION & HEALTH, available to participants with a password.',
  robots: { index: false, follow: false },
  alternates: {
    languages: { sr: 'https://ihis-nutricionizam.rs/rs/education/predavanja-13', en: 'https://ihis-nutricionizam.rs/en/education/lectures-13' },
  },
};

export default function Lectures13() {
  const conf = PREDAVANJA['13'];
  const unlocked = verifyLectureToken(cookies().get(LECTURE_COOKIE_NAME)?.value);
  const decks = conf.decks.map((d) => ({ id: d.id, pages: d.pages, ...d.en }));

  return (
    <>
      <Header locale="en" current="education" langHref="/rs/education/predavanja-13" />
      <MobileNav locale="en" current="education" />

      <section className="mastwrap top-spaced">
        <div className="page-hero page-hero--accent" style={{ backgroundImage: "url('/assets/img/cover1.jpg')" }}>
          <div className="page-hero-overlay page-hero-overlay--accent"></div>
          <div className="page-hero-inner">
            <h1 className="page-title">Lectures</h1>
            <p className="page-crumbs">
              <a href="/en">Home</a> &rsaquo; <a href="/en/education">Education</a> &rsaquo; Lectures
            </p>
          </div>
        </div>

        <div className="section-light">
          <div className="container-sm">
            <div className="section-head">
              <span className="section-tag">{conf.en.date}</span>
              <h2 className="section-h">{conf.en.title}</h2>
              <span className="liner"></span>
              <p className="section-lead grey">
                {unlocked
                  ? 'Choose a lecture to view. The presentations are available for reading on the website only.'
                  : 'Presentations from the conference are available to participants for viewing on the website. Enter the password you received by e-mail.'}
              </p>
            </div>
            {unlocked ? <SlideDecks conf="13" decks={decks} locale="en" /> : <LectureGate locale="en" />}
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
