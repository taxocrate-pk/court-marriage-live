import Image from 'next/image'
import { cityContacts, cityServices, serviceLinks, site } from '@/lib/site-config'
import { homeSections, homeFaqs } from '@/lib/home-long-form'

const services = [
  ['01', 'Court Marriage in Pakistan', 'Free-will Nikah, document review and registration assistance for eligible couples.', '#court-marriage'],
  ['02', 'Nikah Services', 'Nikah arrangements with attention to consent, identity, witnesses and the applicable religious requirements.', serviceLinks.nikahServices],
  ['03', 'Marriage Registration', 'Guidance on Nikah Nama registration and the later computerised marriage-record process where applicable.', serviceLinks.marriageCertificate],
  ['04', 'Online Nikah', 'Remote and proxy Nikah assistance where the legal and religious requirements can properly be met.', serviceLinks.onlineNikah],
  ['05', 'Foreign & Overseas Cases', 'Case-specific document review for overseas Pakistanis and foreign nationals.', serviceLinks.foreignNikah],
  ['06', 'Nikah Khawan Services', 'Coordination for Nikah solemnisation while keeping the Nikah Khawan and statutory registration roles clear.', serviceLinks.nikahKhawan],
]

function Mark() {
  return <div className="brand-mark" aria-hidden="true"><span>CM</span></div>
}

function PhoneIcon() { return <span aria-hidden="true">↗</span> }

function anchorFromHeading(heading, index) {
  const clean = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return `${clean || 'section'}-${index + 1}`
}

export default function Page() {
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'CourtMarriage.live',
    url: site.url,
    telephone: site.primaryPhoneDisplay,
    areaServed: ['Pakistan', 'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan'],
    serviceType: ['Court Marriage Assistance', 'Nikah Services', 'Marriage Registration Assistance', 'Online Nikah Assistance'],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="topbar">
        <div className="container topbar-inner">
          <span>Professional court marriage and Nikah assistance across Pakistan</span>
          <span>Karachi {cityContacts.Karachi} · Islamabad {cityContacts.Islamabad}</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <a href="/" className="brand" aria-label="CourtMarriage.live home">
            <Mark />
            <span><strong>CourtMarriage</strong><b>.live</b><small>Marriage legal services</small></span>
          </a>

          <nav className="nav-links desktop-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <details className="nav-dropdown">
              <summary>Court Marriage <span>⌄</span></summary>
              <div className="nav-menu">
                {cityServices.map((city) => <a key={city.name} href={city.href}>Court Marriage in {city.name}</a>)}
              </div>
            </details>
            <details className="nav-dropdown">
              <summary>Nikah Services <span>⌄</span></summary>
              <div className="nav-menu">
                <a href={serviceLinks.onlineNikah}>Online Nikah</a>
                <a href={serviceLinks.foreignNikah}>Online Nikah for Foreigners</a>
                <a href={serviceLinks.nikahKhawan}>Nikah Khawan Services</a>
                <a href={serviceLinks.marriageCertificate}>Marriage Registration Certificate</a>
              </div>
            </details>
            <a href={serviceLinks.blogs}>Blog</a>
            <a href={serviceLinks.about}>About Us</a>
            <a href={serviceLinks.contact}>Contact Us</a>
            <a className="nav-call" href={`tel:${site.primaryPhone}`}><PhoneIcon /> Call now</a>
          </nav>

          <details className="mobile-nav">
            <summary aria-label="Open navigation">☰</summary>
            <div className="mobile-menu">
              <a href="/">Home</a>
              <a href="#court-marriage">Court Marriage</a>
              <a href={serviceLinks.onlineNikah}>Online Nikah</a>
              <a href={serviceLinks.nikahServices}>Nikah Services</a>
              <a href={serviceLinks.blogs}>Blog</a>
              <a href={serviceLinks.about}>About Us</a>
              <a href={serviceLinks.contact}>Contact Us</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Court marriage and Nikah services in Pakistan</div>
            <h1>Court Marriage in <em>Pakistan</em></h1>
            <p className="hero-lead">Professional assistance for adults who want to complete a lawful Nikah, prepare the relevant marriage documents and follow the applicable registration process with clear, confidential guidance.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`tel:${site.primaryPhone}`}>Call for consultation <PhoneIcon /></a>
              <a className="button button-whatsapp" href={site.whatsapp}>WhatsApp us <span>↗</span></a>
            </div>
            <div className="trust-row"><span>✓ Confidential handling</span><span>✓ City-based support</span><span>✓ Clear document review</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <Image src="/court-marriage-hero.png" alt="Couple completing Nikah documentation in Pakistan" fill priority sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="floating-card"><span className="seal">✓</span><div><strong>Lawful Nikah & documentation</strong><small>Requirements reviewed case by case</small></div></div>
            <div className="image-caption">Marriage solemnisation, documentation and registration are related but distinct steps.</div>
          </div>
        </div>
      </section>

      <section className="intro section" id="court-marriage">
        <div className="container two-col">
          <div><div className="section-kicker">Court marriage in Pakistan</div><h2>What court marriage <span>actually means.</span></h2></div>
          <div className="intro-text">
            <p>“Court marriage” is a widely used practical expression in Pakistan. For an ordinary Muslim marriage, it does not mean that every couple must marry before a judge or inside a courtroom. The usual focus is a lawful Nikah based on free consent, accurate identity and marital-status information, proper Nikah documentation and registration through the competent Nikah Registrar and local authority.</p>
            <p>The correct route can differ according to the parties’ ages, nationality, religion, previous marital status, city and intended use of the documents. CourtMarriage.live therefore starts with the facts instead of promising one fixed procedure for every couple.</p>
            <a className="text-link" href={serviceLinks.contact}>Discuss your circumstances <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="process section-muted">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">Court marriage procedure</div><h2>A clear path from <span>review to registration.</span></h2></div><p>The sequence below is a practical overview. Individual documents and authority requirements can vary.</p></div>
          <div className="process-grid">
            {[
              ['01','Eligibility & document review','Check identity, age, free consent, marital status and any special nationality or registration issue.'],
              ['02','Nikah preparation','Confirm the appropriate Nikah arrangements, witnesses, Mahr and any wakalat or supporting declarations that are actually required.'],
              ['03','Nikah & Nikah Nama','Solemnise the Nikah in accordance with the applicable religious requirements and complete the prescribed marriage record accurately.'],
              ['04','Registration follow-up','Proceed through the authorised Nikah Registrar and competent local authority, followed by MRC or other civil-record steps where applicable.'],
            ].map(([n,t,d]) => <article className="process-card" key={n}><span className="step-no">{n}</span><h3>{t}</h3><p>{d}</p><span className="step-arrow">↗</span></article>)}
          </div>
        </div>
      </section>

      <section className="documents section">
        <div className="container documents-grid">
          <div className="document-visual photo-document">
            <Image src="https://www.court-marriage.com/wp-content/uploads/2022/05/online-nikah-02554.webp" alt="Bride signing Nikah Nama during a Muslim Nikah ceremony" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div className="photo-label">Nikah Nama signing</div>
          </div>
          <div>
            <div className="section-kicker">Court marriage documents</div>
            <h2>Prepare the documents your <span>case requires.</span></h2>
            <p className="body-copy">A valid identity document is normally fundamental. Additional requirements depend on the parties and the authority involved, so a generic checklist should not be treated as a legal guarantee.</p>
            <ul className="check-list">
              <li>CNIC, NICOP or passport documents for the parties</li>
              <li>Recent photographs where required for the relevant record</li>
              <li>Witness identity details according to the applicable Nikah procedure</li>
              <li>Divorce, death or other prior-marriage records where relevant</li>
              <li>Wakalatnama, affidavit, NOC or foreign-national documents only where the case requires them</li>
            </ul>
            <a className="button button-outline" href={serviceLinks.contact}>Check your documents <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="services section-muted" id="nikah">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">Marriage legal services</div><h2>Court marriage, Nikah and <span>registration support.</span></h2></div><p>Each service page retains its established URL while the content is expanded around one clear search intent.</p></div>
          <div className="service-grid">
            {services.map(([n,t,d,href]) => <article className="service-card" key={n}><span className="service-no">{n}</span><h3>{t}</h3><p>{d}</p><a href={href}>Learn more <span>→</span></a></article>)}
          </div>
        </div>
      </section>

      <section className="cities section">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">Court marriage by city</div><h2>Local guidance across <span>major Pakistani cities.</span></h2></div><p>City pages retain their established legacy slugs and focus on the law and registration context relevant to that location.</p></div>
          <div className="city-grid">
            {cityServices.map((city, i) => <a href={city.href} className="city-card" key={city.name}><span>0{i + 1}</span><strong>{city.name}</strong><b>{city.phone || 'View service'} →</b></a>)}
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="container feature-grid">
          <div><div className="section-kicker light">Online Nikah & overseas cases</div><h2>Remote Nikah requires more than <span>a video call.</span></h2><p>For overseas Pakistanis and foreign nationals, a remote or proxy arrangement may be possible when free consent, identity, the applicable religious requirements, representation where needed and the later registration process are properly addressed. Embassy, MOFA, immigration or destination-country requirements remain separate and should be checked for the intended use.</p><div className="hero-actions"><a className="button button-light" href={serviceLinks.onlineNikah}>Online Nikah service <span>→</span></a><a className="button button-ghost-light" href={serviceLinks.foreignNikah}>Foreign-national cases</a></div></div>
          <div className="feature-list">
            <div><span>01</span><strong>Online Nikah</strong><p>Case-specific arrangements for parties in different cities or countries.</p></div>
            <div><span>02</span><strong>Overseas Pakistanis</strong><p>Document, wakalat and registration guidance according to the actual circumstances.</p></div>
            <div><span>03</span><strong>Foreign nationals</strong><p>Nationality and destination-use requirements reviewed before promises are made.</p></div>
          </div>
        </div>
      </section>

      <section className="why section" id="about">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">Why CourtMarriage.live</div><h2>Legal accuracy before <span>marketing claims.</span></h2></div></div>
          <div className="why-grid">
            {[
              ['01','Clear legal distinctions','Nikah solemnisation, Nikah Nama registration, MRC processing and NADRA identity updates are not described as one automatic step.'],
              ['02','City-specific assistance','Karachi, Lahore, Islamabad and Rawalpindi contact routing is kept separate so clients reach the relevant team.'],
              ['03','Qualified expectations','Timelines, foreign-document requirements and authority decisions are explained as variable where they genuinely vary.'],
              ['04','Private handling','Sensitive personal and marriage information is treated as confidential client material.'],
            ].map(([n,t,d]) => <div className="why-item" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="longform-intro section-muted">
        <div className="container content-shell">
          <div className="section-kicker">Court Marriage in Pakistan complete guide</div>
          <h2>Legal, practical and registration guidance <span>in one national pillar.</span></h2>
          <p>This detailed guide expands the homepage beyond a sales landing page. It explains the major issues an adult couple should understand before a Nikah, while recognising that province, nationality, previous marital status and the intended use of documents can change the answer.</p>
          <nav className="content-toc" aria-label="Court Marriage in Pakistan guide">
            <strong>On this page</strong>
            <ol>
              {homeSections.map((section, index) => <li key={section.heading}><a href={`#${anchorFromHeading(section.heading, index)}`}>{section.heading}</a></li>)}
            </ol>
          </nav>
        </div>
      </section>

      <div className="longform-content">
        {homeSections.map((section, index) => (
          <section className={index % 2 === 1 ? 'content-section content-section-muted' : 'content-section'} id={anchorFromHeading(section.heading, index)} key={section.heading}>
            <div className="container content-shell">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
              {(index === 2 || index === 7 || index === 11) && (
                <div className="inline-cta">
                  <div><strong>Need a case-specific document review?</strong><span>Tell us your city, nationality and marital status before relying on a generic checklist.</span></div>
                  <a href={`tel:${site.primaryPhone}`}>Call {site.primaryPhoneDisplay}</a>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="faq section-muted longform-faq">
        <div className="container faq-grid">
          <div><div className="section-kicker">Court marriage FAQs</div><h2>Answers to common <span>marriage questions.</span></h2><p>General information cannot replace a review of the couple’s documents and circumstances. For a case-specific answer, contact the relevant city team.</p><a className="text-link" href={serviceLinks.contact}>Ask about your case <span>→</span></a></div>
          <div className="faq-list">{homeFaqs.map(([q,a]) => <details className="faq-item" key={q}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="container final-inner">
          <div><div className="section-kicker light">Confidential consultation</div><h2>Ready to discuss your <em>marriage?</em></h2><p>Tell us your city, nationality and basic circumstances so the relevant requirements can be checked before you proceed.</p></div>
          <div className="hero-actions"><a className="button button-light" href={`tel:${site.primaryPhone}`}>Call {site.primaryPhoneDisplay} <PhoneIcon /></a><a className="button button-ghost-light" href={site.whatsapp}>WhatsApp us <span>↗</span></a></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="/"><Mark /><span><strong>CourtMarriage</strong><b>.live</b><small>Marriage legal services</small></span></a><p>Private legal-service assistance for Court Marriage, Nikah and marriage documentation in Pakistan. CourtMarriage.live is not NADRA, a Union Council, a court, MOFA or an embassy.</p></div>
          <div><h3>Explore</h3><a href="#court-marriage">Court Marriage</a><a href={serviceLinks.onlineNikah}>Online Nikah</a><a href={serviceLinks.nikahServices}>Nikah Services</a><a href={serviceLinks.about}>About Us</a><a href={serviceLinks.blogs}>Blogs</a></div>
          <div><h3>City contacts</h3><a href="tel:+923331127830">Karachi · {cityContacts.Karachi}</a><a href="tel:+923331127835">Lahore · {cityContacts.Lahore}</a><a href="tel:+923331127836">Islamabad · {cityContacts.Islamabad}</a><a href="tel:+923331127831">Rawalpindi · {cityContacts.Rawalpindi}</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} CourtMarriage.live. All rights reserved.</span><span>Legal information is general and requirements may vary by case and jurisdiction.</span></div>
      </footer>
    </main>
  )
}
