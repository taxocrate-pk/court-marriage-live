'use client'

import { useState } from 'react'

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan']
const faqs = [
  ['What is court marriage in Pakistan?', 'Court marriage is a legal marriage process completed through nikah and registration with the relevant Union Council or authorised registrar. The exact steps depend on your circumstances and city.'],
  ['Do both partners need to be present?', 'Usually, both parties need to be present for identity checks, consent and signatures. We explain the requirements for your case before your appointment.'],
  ['How long does the process take?', 'Timelines vary by city, documents and appointment availability. After an initial consultation, we give you a practical checklist and expected next steps.'],
  ['Can overseas Pakistanis or foreign nationals marry in Pakistan?', 'Yes, it may be possible with the correct passports, visas, affidavits and supporting documents. Our team can help you understand the route for your situation.'],
]

function Mark() {
  return <div className="brand-mark" aria-hidden="true"><span>CM</span></div>
}

function PhoneIcon() { return <span aria-hidden="true">↗</span> }
function Chevron() { return <span aria-hidden="true" className="chevron">⌄</span> }

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <div className="topbar"><div className="container topbar-inner"><span>Professional legal marriage services across Pakistan</span><span>Mon–Sat · 9:00am–8:00pm</span></div></div>
      <header className="site-header">
        <div className="container nav-inner">
          <a href="#home" className="brand"><Mark /><span><strong>CourtMarriage</strong><b>.live</b><small>Pakistan&apos;s marriage specialists</small></span></a>
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
            <a href="#home">Home</a>
            <a href="#court-marriage">Court Marriage <Chevron /></a>
            <a href="#nikah">Nikah Services <Chevron /></a>
            <a href="#blog">Blog</a><a href="#about">About Us</a><a href="#contact">Contact Us</a>
            <a className="nav-call" href="tel:+923001234567"><PhoneIcon /> Call now</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Trusted marriage professionals in Pakistan</div>
            <h1>Court Marriage in <em>Pakistan</em></h1>
            <p className="hero-lead">A clear, respectful and legally focused service for couples who want to complete their Nikah and marriage registration with confidence.</p>
            <div className="hero-actions"><a className="button button-primary" href="tel:+923001234567">Call for a consultation <PhoneIcon /></a><a className="button button-whatsapp" href="https://wa.me/923001234567">WhatsApp us <span>↗</span></a></div>
            <div className="trust-row"><span>✓ Confidential consultations</span><span>✓ City-wide support</span><span>✓ Clear document guidance</span></div>
          </div>
          <div className="hero-visual"><div className="hero-image-wrap"><img src="/court-marriage-hero.png" alt="Couple signing Nikah documentation with professional guidance" /></div><div className="floating-card"><span className="seal">✓</span><div><strong>Professional guidance</strong><small>From consultation to registration</small></div></div><div className="image-caption">Helping couples take the next step with clarity.</div></div>
        </div>
      </section>

      <section className="intro section" id="court-marriage"><div className="container two-col"><div><div className="section-kicker">Court marriage in Pakistan</div><h2>A straightforward path to your <span>marriage registration.</span></h2></div><div className="intro-text"><p>Getting married is personal. The paperwork should feel manageable. CourtMarriage.live provides practical assistance for couples navigating Nikah, affidavits and marriage registration in Pakistan.</p><p>We listen to your circumstances, review your documents and help you understand what happens next — without confusing jargon or unrealistic promises.</p><a className="text-link" href="#contact">Speak with our team <span>→</span></a></div></div></section>

      <section className="process section-muted"><div className="container"><div className="section-heading"><div><div className="section-kicker">How it works</div><h2>A process built around <span>clarity.</span></h2></div><p>Every case is different. Our role is to make the requirements and next steps clear from the first conversation.</p></div><div className="process-grid">{[['01','Tell us your situation','Share the basics with our team in a confidential consultation.'],['02','Review your documents','We identify what you have, what may be missing and what applies to your city.'],['03','Complete your Nikah','We help you prepare for the Nikah and required signatures with the relevant parties.'],['04','Register your marriage','Move forward with the applicable registration and receive guidance on your records.']].map(([n,t,d]) => <article className="process-card" key={n}><span className="step-no">{n}</span><h3>{t}</h3><p>{d}</p><span className="step-arrow">↗</span></article>)}</div></div></section>

      <section className="documents section"><div className="container documents-grid"><div className="document-visual"><div className="document-paper"><div className="document-head"><span>Marriage Registration</span><span>درج نکاح</span></div><div className="document-lines"><i /><i /><i /><i /><i /></div><div className="document-stamp">VERIFIED</div></div></div><div><div className="section-kicker">Prepare with confidence</div><h2>Documents you may <span>need.</span></h2><p className="body-copy">Requirements can vary depending on your age, nationality, previous marital status and city. We confirm the relevant list for you before you make an appointment.</p><ul className="check-list"><li>Original CNICs or passports for both parties</li><li>Recent passport-size photographs</li><li>Two adult Muslim witnesses with identification</li><li>Affidavits or supporting documents where required</li></ul><a className="button button-outline" href="#contact">Check your documents <span>→</span></a></div></div></section>

      <section className="services section-muted" id="nikah"><div className="container"><div className="section-heading"><div><div className="section-kicker">Our services</div><h2>Support for the moments <span>that matter.</span></h2></div></div><div className="service-grid">{[['01','Court Marriage','Practical guidance for couples completing a legal marriage process in Pakistan.'],['02','Nikah Services','Support with Nikah arrangements, documentation and the steps around your ceremony.'],['03','Marriage Registration','Guidance for registering your marriage and understanding your official records.'],['04','Online Nikah','Explore options for a remote Nikah where the legal and religious requirements can be met.'],['05','Overseas & Foreign Nationals','Personalised support for Pakistanis abroad and foreign nationals marrying in Pakistan.'],['06','Legal Consultation','A focused conversation to help you understand your options before you proceed.']].map(([n,t,d]) => <article className="service-card" key={n}><span className="service-no">{n}</span><h3>{t}</h3><p>{d}</p><a href="#contact">Learn more <span>→</span></a></article>)}</div></div></section>

      <section className="cities section"><div className="container"><div className="section-heading"><div><div className="section-kicker">Where we help</div><h2>Marriage services across <span>Pakistan.</span></h2></div><p>Local support, with a clear understanding of the practical requirements in each city.</p></div><div className="city-grid">{cities.map((city, i) => <a href="#contact" className="city-card" key={city}><span>0{i + 1}</span><strong>{city}</strong><b>Explore services →</b></a>)}</div></div></section>

      <section className="feature-band"><div className="container feature-grid"><div><div className="section-kicker light">For couples near or far</div><h2>Online Nikah and support for <span>overseas Pakistanis.</span></h2><p>Distance should not make the process harder to understand. We help you explore suitable arrangements for online Nikah, overseas Pakistanis and foreign nationals — based on your documents and circumstances.</p><a className="button button-light" href="#contact">Discuss your situation <span>→</span></a></div><div className="feature-list"><div><span>01</span><strong>Online Nikah</strong><p>Understand the practical requirements for a remote ceremony.</p></div><div><span>02</span><strong>Overseas Pakistanis</strong><p>Get guidance on documents, affidavits and registration routes.</p></div><div><span>03</span><strong>Foreign nationals</strong><p>Start with a document review tailored to your nationality.</p></div></div></div></section>

      <section className="why section" id="about"><div className="container"><div className="section-heading"><div><div className="section-kicker">Why CourtMarriage.live</div><h2>Professional help, without <span>the uncertainty.</span></h2></div></div><div className="why-grid">{[['01','Respectful communication','Your privacy, time and personal circumstances are treated with care.'],['02','Practical local knowledge','We focus on the documents and steps that matter for your situation.'],['03','Clear expectations','We explain what we know, what can vary and what happens next.'],['04','One focused team','Get consistent guidance from your first call through your next step.']].map(([n,t,d]) => <div className="why-item" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>

      <section className="faq section-muted"><div className="container faq-grid"><div><div className="section-kicker">Questions, answered</div><h2>Good decisions start with <span>good information.</span></h2><p>Have a question that is not listed? Call or WhatsApp our team for a private conversation about your circumstances.</p><a className="text-link" href="#contact">Ask a question <span>→</span></a></div><div className="faq-list">{faqs.map(([q,a], i) => <div className={openFaq === i ? 'faq-item active' : 'faq-item'} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><b>{openFaq === i ? '−' : '+'}</b></button>{openFaq === i && <p>{a}</p>}</div>)}</div></div></section>

      <section className="final-cta" id="contact"><div className="container final-inner"><div><div className="section-kicker light">Let&apos;s make the next step clear</div><h2>Ready to talk about your <em>marriage?</em></h2><p>Tell us what you need. We&apos;ll help you understand the right next step for your circumstances.</p></div><div className="hero-actions"><a className="button button-light" href="tel:+923001234567">Call now <PhoneIcon /></a><a className="button button-ghost-light" href="https://wa.me/923001234567">WhatsApp us <span>↗</span></a></div></div></section>

      <footer className="footer"><div className="container footer-grid"><div><a className="brand footer-brand" href="#home"><Mark /><span><strong>CourtMarriage</strong><b>.live</b><small>Pakistan&apos;s marriage specialists</small></span></a><p>Professional guidance for Court Marriage, Nikah and Marriage Registration in Pakistan.</p></div><div><h3>Explore</h3><a href="#court-marriage">Court Marriage</a><a href="#nikah">Nikah Services</a><a href="#about">About Us</a><a href="#contact">Contact Us</a></div><div><h3>Talk to us</h3><a href="tel:+923001234567">+92 300 1234567</a><a href="mailto:hello@courtmarriage.live">hello@courtmarriage.live</a><span>Mon–Sat · 9:00am–8:00pm</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} CourtMarriage.live. All rights reserved.</span><span>Privacy Policy · Terms of Service</span></div></footer>
    </main>
  )
}
