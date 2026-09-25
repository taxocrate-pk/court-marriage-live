import Image from 'next/image'
import { notFound } from 'next/navigation'
import { cityContacts, cityServices, serviceLinks, site } from '@/lib/site-config'
import { getLongFormContent } from '@/lib/long-form-content'

const pages = {
  'court-marriage-in-karachi': {
    title: 'Court Marriage in Karachi',
    description: 'Court marriage in Karachi with professional assistance for Nikah, documents and marriage registration.',
    kicker: 'Court marriage Karachi',
    intro: 'Professional assistance for adults seeking a lawful Nikah, accurate marriage documents and the applicable registration process in Karachi.',
    phone: cityContacts.Karachi,
  },
  'court-marriage-in-lahore': {
    title: 'Court Marriage in Lahore',
    description: 'Court marriage in Lahore with assistance for Nikah, documentation and marriage registration requirements.',
    kicker: 'Court marriage Lahore',
    intro: 'Court marriage assistance in Lahore focused on free consent, correct Nikah documentation and the relevant registration formalities.',
    phone: cityContacts.Lahore,
  },
  'court-marriage-in-islamabad': {
    title: 'Court Marriage in Islamabad',
    description: 'Court marriage in Islamabad with professional Nikah and marriage registration assistance.',
    kicker: 'Court marriage Islamabad',
    intro: 'Professional court marriage and Nikah assistance in Islamabad with case-specific document review and registration guidance.',
    phone: cityContacts.Islamabad,
  },
  'court-marriage-in-karachi-lahore-islamabad-rawalpindi': {
    title: 'Court Marriage in Rawalpindi',
    description: 'Court marriage assistance in Rawalpindi with Nikah documentation and marriage registration guidance.',
    kicker: 'Court marriage Rawalpindi',
    intro: 'This established legacy URL is retained during migration and refined around Rawalpindi court marriage intent.',
    phone: cityContacts.Rawalpindi,
  },
  'court-marriage-services-in-faisalabad': {
    title: 'Court Marriage Services in Faisalabad',
    description: 'Court marriage services in Faisalabad for Nikah, documents and marriage registration assistance.',
    kicker: 'Court marriage Faisalabad',
    intro: 'Professional assistance for court marriage, Nikah documentation and registration requirements in Faisalabad.',
  },
  'court-marriages-in-multan': {
    title: 'Court Marriage in Multan',
    description: 'Court marriage in Multan with assistance for Nikah, marriage documentation and registration.',
    kicker: 'Court marriage Multan',
    intro: 'Court marriage and Nikah assistance in Multan with a focus on legal accuracy, documentation and the applicable registration process.',
  },
  'online-nikah-has-gained-popularity': {
    title: 'Online Nikah in Pakistan',
    description: 'Online Nikah assistance for eligible couples in Pakistan and overseas, subject to applicable legal and religious requirements.',
    kicker: 'Online Nikah services',
    intro: 'Online or proxy Nikah can require careful attention to identity, consent, witnesses, authority or wakalat arrangements and later registration.',
  },
  'online-nikah-for-foreigners': {
    title: 'Online Nikah for Foreigners',
    description: 'Online Nikah assistance for foreign nationals and overseas couples with case-specific documentation guidance.',
    kicker: 'Foreign national Nikah',
    intro: 'Foreign-national and overseas Nikah cases require case-specific review because nationality, marital status and destination-country requirements can differ.',
  },
  'nikah-services': {
    title: 'Nikah Services in Pakistan',
    description: 'Professional Nikah services with documentation and marriage registration assistance in Pakistan.',
    kicker: 'Nikah services Pakistan',
    intro: 'Nikah services for couples who need clear assistance with solemnisation arrangements, documentation and the relevant registration steps.',
  },
  'nikah-khawan-services-and-fees': {
    title: 'Nikah Khawan Services in Pakistan',
    description: 'Nikah Khawan services with professional assistance for Nikah documentation and registration requirements.',
    kicker: 'Nikah Khawan services',
    intro: 'Coordination for Nikah solemnisation with clear distinction between the Nikah Khawan role and the statutory marriage-registration process.',
  },
  'nadra-marriage-certificate-in-pakistan': {
    title: 'Marriage Registration Certificate in Pakistan',
    description: 'Guidance on Nikah Nama registration, computerised Marriage Registration Certificate and related civil record steps in Pakistan.',
    kicker: 'Marriage registration certificate',
    intro: 'Nikah Nama, local marriage registration, computerised marriage certificates and later NADRA identity-record steps are related but distinct processes.',
  },
  'about-us': {
    title: 'About CourtMarriage.live',
    description: 'About CourtMarriage.live and its professional court marriage, Nikah and marriage registration assistance in Pakistan.',
    kicker: 'About CourtMarriage.live',
    intro: 'CourtMarriage.live provides professional assistance for court marriage, Nikah, marriage documentation and related registration matters in Pakistan.',
  },
  'blogs': {
    title: 'Court Marriage & Nikah Blog',
    description: 'Articles and practical information about court marriage, Nikah, marriage documents and registration in Pakistan.',
    kicker: 'Court marriage resources',
    intro: 'Legal and practical information about court marriage, Nikah, marriage registration, overseas cases and related documentation.',
  },
  'contact-us': {
    title: 'Contact CourtMarriage.live',
    description: 'Contact CourtMarriage.live for court marriage, Nikah and marriage registration assistance in Pakistan.',
    kicker: 'Contact CourtMarriage.live',
    intro: 'Speak with our team about court marriage, Nikah, documents or marriage registration. City-specific contact numbers are shown below.',
  },
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) return {}
  return {
    title: `${page.title} | CourtMarriage.live`,
    description: page.description,
    alternates: { canonical: `/${slug}/` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${site.url}/${slug}/`,
      siteName: 'CourtMarriage.live',
      type: 'website',
      images: [{ url: '/court-marriage-hero.png', alt: page.title }],
    },
  }
}

function Mark() {
  return <div className="brand-mark" aria-hidden="true"><span>CM</span></div>
}

function telNumber(display) {
  return display ? `+${display.replace(/[^0-9]/g, '')}` : site.primaryPhone
}

function anchorFromHeading(heading, index) {
  const clean = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return `${clean || 'section'}-${index + 1}`
}

export default async function LegacyPage({ params }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) notFound()

  const phoneDisplay = page.phone || site.primaryPhoneDisplay
  const phone = telNumber(phoneDisplay)
  const { sections, faqs } = getLongFormContent(slug, page)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: page.title, item: `${site.url}/${slug}/` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqs.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

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
            <a href="/court-marriage-in-karachi/">Karachi</a>
            <a href="/court-marriage-in-lahore/">Lahore</a>
            <a href="/court-marriage-in-islamabad/">Islamabad</a>
            <a href={serviceLinks.onlineNikah}>Online Nikah</a>
            <a href={serviceLinks.blogs}>Blog</a>
            <a href={serviceLinks.contact}>Contact Us</a>
            <a className="nav-call" href={`tel:${phone}`}>Call now</a>
          </nav>
          <details className="mobile-nav">
            <summary aria-label="Open navigation">☰</summary>
            <div className="mobile-menu">
              <a href="/">Home</a>
              <a href="/court-marriage-in-karachi/">Karachi</a>
              <a href="/court-marriage-in-lahore/">Lahore</a>
              <a href="/court-marriage-in-islamabad/">Islamabad</a>
              <a href={serviceLinks.onlineNikah}>Online Nikah</a>
              <a href={serviceLinks.contact}>Contact Us</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> {page.kicker}</div>
            <h1>{page.title}</h1>
            <p className="hero-lead">{page.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`tel:${phone}`}>Call for consultation ↗</a>
              <a className="button button-whatsapp" href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}>WhatsApp us ↗</a>
            </div>
            <div className="trust-row"><span>✓ Confidential handling</span><span>✓ Clear document review</span><span>✓ Legal accuracy first</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <Image src="/court-marriage-hero.png" alt={`${page.title} - Nikah and marriage documentation assistance`} fill priority sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {slug === 'contact-us' && (
        <section className="section contact-strip">
          <div className="container">
            <div className="section-heading"><div><div className="section-kicker">City contact numbers</div><h2>Contact the <span>relevant city team.</span></h2></div></div>
            <div className="city-grid">
              {Object.entries(cityContacts).map(([city, number]) => (
                <a className="city-card" key={city} href={`tel:${telNumber(number)}`}><strong>{city}</strong><b>{number}</b></a>
              ))}
            </div>
          </div>
        </section>
      )}

      {sections.length > 0 && (
        <>
          <section className="longform-intro section">
            <div className="container content-shell">
              <div className="section-kicker">Complete legal and practical guide</div>
              <h2>{page.title}: <span>what you should know before proceeding.</span></h2>
              <p>This page is intentionally detailed so a client can understand the major legal, documentation and registration issues before booking a service. Individual facts can change the answer, so general information should not be treated as a substitute for review of a specific file.</p>
              <nav className="content-toc" aria-label="On this page">
                <strong>On this page</strong>
                <ol>
                  {sections.map((section, index) => (
                    <li key={section.heading}><a href={`#${anchorFromHeading(section.heading, index)}`}>{section.heading}</a></li>
                  ))}
                </ol>
              </nav>
            </div>
          </section>

          <div className="longform-content">
            {sections.map((section, index) => (
              <section className={index % 2 === 1 ? 'content-section content-section-muted' : 'content-section'} id={anchorFromHeading(section.heading, index)} key={section.heading}>
                <div className="container content-shell">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
                  {(index === 2 || index === 7 || index === 11) && (
                    <div className="inline-cta">
                      <div><strong>Need advice on your own documents?</strong><span>Speak to the relevant team before relying on a generic checklist.</span></div>
                      <a href={`tel:${phone}`}>Call {phoneDisplay}</a>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </>
      )}

      {faqs.length > 0 && (
        <section className="section-muted longform-faq">
          <div className="container faq-grid">
            <div>
              <div className="section-kicker">Frequently asked questions</div>
              <h2>{page.title} <span>FAQs.</span></h2>
              <p>These answers explain common issues in general terms. Documents, nationality, previous marital status and the relevant authority can change the advice for an individual case.</p>
              <a className="text-link" href={serviceLinks.contact}>Ask about your case <span>→</span></a>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details className="faq-item" key={question}>
                  <summary><span>{question}</span><b>+</b></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section related-longform">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">Related court marriage services</div><h2>Continue to the <span>right service or city page.</span></h2></div></div>
          <div className="city-grid">
            <a className="city-card" href={serviceLinks.onlineNikah}><strong>Online Nikah</strong><b>View service →</b></a>
            <a className="city-card" href={serviceLinks.marriageCertificate}><strong>Marriage Registration</strong><b>View service →</b></a>
            <a className="city-card" href="/court-marriage-in-karachi/"><strong>Karachi</strong><b>{cityContacts.Karachi} →</b></a>
            <a className="city-card" href="/court-marriage-in-lahore/"><strong>Lahore</strong><b>{cityContacts.Lahore} →</b></a>
            <a className="city-card" href="/court-marriage-in-islamabad/"><strong>Islamabad</strong><b>{cityContacts.Islamabad} →</b></a>
            <a className="city-card" href={serviceLinks.contact}><strong>Contact Us</strong><b>{phoneDisplay} →</b></a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-inner">
          <div><div className="section-kicker light">CourtMarriage.live</div><h2>Need case-specific <em>guidance?</em></h2><p>Contact the team before relying on a generic checklist, particularly for foreign-national, previous-marriage or overseas cases.</p></div>
          <div className="hero-actions"><a className="button button-light" href={`tel:${phone}`}>Call {phoneDisplay}</a><a className="button button-ghost-light" href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}>WhatsApp us</a></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="/"><Mark /><span><strong>CourtMarriage</strong><b>.live</b><small>Marriage legal services</small></span></a><p>Professional assistance for Court Marriage, Nikah and Marriage Registration in Pakistan.</p></div>
          <div><h3>Major cities</h3>{cityServices.slice(0,4).map((city) => <a key={city.name} href={city.href}>{city.name}</a>)}</div>
          <div><h3>Talk to us</h3><a href={`tel:${phone}`}>{phoneDisplay}</a><a href={serviceLinks.contact}>Contact page</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} CourtMarriage.live. All rights reserved.</span><span><a href="/">Home</a></span></div>
      </footer>
    </main>
  )
}
