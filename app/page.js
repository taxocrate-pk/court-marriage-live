import Image from 'next/image'
import { cityContacts, cityServices, serviceLinks, site } from '@/lib/site-config'
import { homeSections, homeFaqs } from '@/lib/home-long-form'
import { SiteHeader, SiteFooter, ContactActions, callHours } from '@/components/site-chrome'
import { GuideSidebar } from '@/app/recovery-page'
import { titleCase } from '@/lib/editorial'
import { pageAssets, assetUrl } from '@/lib/site-pages'
import { pageHeadings } from '@/lib/page-headings'

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
    '@id': `${site.url}/#legalservice`,
    name: 'CourtMarriage.live',
    url: site.url,
    telephone: site.primaryPhoneDisplay,
    areaServed: ['Pakistan', 'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan'],
    serviceType: ['Court Marriage Assistance', 'Nikah Services', 'Marriage Registration Assistance', 'Online Nikah Assistance'],
  }

  const pageSchema = {
    '@context':'https://schema.org',
    '@graph':[
      {'@type':'WebPage','@id':`${site.url}/#webpage`,url:`${site.url}/`,name:pageHeadings['/'].h1,dateModified:'2026-10-27',about:{'@id':`${site.url}/#legalservice`}},
      {'@type':'LocalBusiness','@id':`${site.url}/#localbusiness`,name:'CourtMarriage.live',url:`${site.url}/`,telephone:site.primaryPhoneDisplay,areaServed:['Pakistan','Karachi','Lahore','Islamabad','Rawalpindi','Faisalabad','Multan']},
      {'@type':'BreadcrumbList','@id':`${site.url}/#breadcrumb`,itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:`${site.url}/`}]}
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.slice(0,10).map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader/><main className="home-unified">

      <nav className="breadcrumb-bar" aria-label="Breadcrumb"><div className="container"><a href="/">Home</a><span aria-hidden="true">›</span><span>Court Marriage In Pakistan</span></div></nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Court marriage and Nikah services in Pakistan</div>
            <h1>{pageHeadings['/'].h1}</h1><h2 className="hero-subtitle">Legal Guidance for Nikah, Documents and Registration</h2><div className="recovery-byline">Mohsin Ali Shah · Chairman, Qanoon Group · 40+ Years of Experience in Legal Practice and Network Management</div>
            <p className="hero-lead">Court Marriage in Pakistan assistance helps adults complete a lawful Nikah, prepare the relevant marriage documents and follow the applicable registration process with clear, confidential guidance.</p>
            <ContactActions/>
            <div className="trust-row"><span>✓ Confidential handling</span><span>✓ City-based support</span><span>✓ Clear document review</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <Image src={assetUrl(pageAssets['/'][0])} alt="Couple completing Nikah documentation in Pakistan" fill priority sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="floating-card"><span className="seal">✓</span><div><strong>Lawful Nikah & documentation</strong><small>Requirements reviewed case by case</small></div></div>

          </div>
        </div>
      </section>

      <div className="container recovery-layout"><article className="recovery-article">
      <section className="intro section" id="court-marriage">
        <div className="container two-col">
          <div><div className="section-kicker">Court Marriage In Pakistan</div><h2>What Court Marriage Actually Means.</h2><h3>Lawful Nikah, Documentation and Registration Guidance</h3></div>
          <div className="intro-text">
            <p>“Court marriage” is a widely used practical expression in Pakistan. For an ordinary Muslim marriage, it does not mean that every couple must marry before a judge or inside a courtroom. The usual focus is a lawful Nikah based on free consent, accurate identity and marital-status information, proper Nikah documentation and registration through the competent Nikah Registrar and local authority.</p>
            <p>The correct route can differ according to the parties’ ages, nationality, religion, previous marital status, city and intended use of the documents. CourtMarriage.live therefore starts with the facts instead of promising one fixed procedure for every couple.</p>
            <a className="text-link" href={serviceLinks.contact}>Discuss your circumstances <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="process section-muted">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">Court Marriage Procedure</div><h2>A Clear Path from Review to Registration.</h2></div><p>The sequence below is a practical overview. Individual documents and authority requirements can vary.</p></div>
          <div className="process-grid">
            {[
              ['01','Eligibility & document review','Check identity, age, free consent, marital status and any special nationality or registration issue.'],
              ['02','Nikah preparation','Confirm the appropriate Nikah arrangements, witnesses, Mahr and any wakalat or supporting declarations that are actually required.'],
              ['03','Nikah & Nikah Nama','Solemnise the Nikah in accordance with the applicable religious requirements and complete the prescribed marriage record accurately.'],
              ['04','Registration follow-up','Proceed through the authorised Nikah Registrar and competent local authority, followed by MRC or other civil-record steps where applicable.'],
            ].map(([n,t,d]) => <article className="process-card" key={n}><span className="step-no">{n}</span><h3>{titleCase(t)}</h3><p>{d}</p><span className="step-arrow">↗</span></article>)}
          </div>
        </div>
      </section>

      <section className="documents section">
        <div className="container documents-grid">
          <div className="document-visual photo-document">
            <Image src={assetUrl(pageAssets['/'][1])} alt="Illustrative marriage documents and wedding rings prepared for registration" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div className="photo-label">Nikah Nama signing</div>
          </div>
          <div>
            <div className="section-kicker">Court Marriage Documents</div>
            <h2>Prepare the Documents Your Case Requires.</h2>
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
          <div className="section-heading"><div><div className="section-kicker">Marriage Legal Services</div><h2>Court Marriage, Nikah and Registration Support.</h2></div><p>Choose the service matching your documents, intended ceremony and registration requirements.</p></div>
          <div className="service-grid">
            {services.map(([n,t,d,href]) => <article className="service-card" key={n}><span className="service-no">{n}</span><h3>{titleCase(t)}</h3><p>{d}</p><a href={href}>Learn more <span>→</span></a></article>)}
          </div>
        </div>
      </section>

      <section className="cities section">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">Court Marriage By City</div><h2>Local Guidance Across Major Pakistani Cities.</h2></div><p>Use the relevant city guide to prepare the documents and identify the competent local registration route.</p></div>
          <div className="city-grid">
            {cityServices.map((city, i) => <a href={city.href} className="city-card" key={city.name}><span>0{i + 1}</span><strong>{city.name}</strong><b>{city.phone || 'View service'} →</b></a>)}
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="container feature-grid">
          <div><div className="section-kicker light">Online Nikah & Overseas Cases</div><h2>Remote Nikah Requires More Than a Video Call.</h2><p>For overseas Pakistanis and foreign nationals, a remote or proxy arrangement may be possible when free consent, identity, the applicable religious requirements, representation where needed and the later registration process are properly addressed. Embassy, MOFA, immigration or destination-country requirements remain separate and should be checked for the intended use.</p><div className="hero-actions"><a className="button button-light" href={serviceLinks.onlineNikah}>Online Nikah service <span>→</span></a><a className="button button-ghost-light" href={serviceLinks.foreignNikah}>Foreign-national cases</a></div></div>
          <div className="feature-list">
            <div><span>01</span><strong>Online Nikah</strong><p>Case-specific arrangements for parties in different cities or countries.</p></div>
            <div><span>02</span><strong>Overseas Pakistanis</strong><p>Document, wakalat and registration guidance according to the actual circumstances.</p></div>
            <div><span>03</span><strong>Foreign nationals</strong><p>Nationality and destination-use requirements reviewed before promises are made.</p></div>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">Legal Team And Karachi Offices</div><h2>Regional Court Marriage and Nikah Coordination.</h2><h3>Lawyers for Marriage and Family Documentation</h3></div><p>Karachi: Mohsin Ali Mirani, Zaheer Ahmed Qazi and Sobia Mohsin handle relevant marriage and family matters. Islamabad: Muhammad Usman Bhatti, Advocate High Court, with coordination managed by Haider Mohsin. Rawalpindi: Raja Zarb-e-Hasnain Bhatti, Advocate High Court. Lahore: Junaid Kahloon, Advocate High Court. Mohsin Ali Shah serves as Chairman, overseeing client coordination, case preparation, research support and network management.</p></div>
          <div className="why-grid">
            <div className="why-item"><span>01</span><div><h3>DHA Phase 7, Karachi</h3><p>76C, Mezzanine Floor, Main Jami Commercial, Phase 7, DHA, Karachi.</p></div></div>
            <div className="why-item"><span>02</span><div><h3>Gulistan-e-Jauhar, Karachi</h3><p>A-220, 2nd Floor, Supreme Corner, Johar Chowrangi, Block 18, Gulistan-e-Jauhar, Karachi.</p></div></div>
          </div>
        </div>
      </section>

      <section className="why section" id="about">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">Why CourtMarriage.live</div><h2>Legal Accuracy Before Marketing Claims.</h2></div></div>
          <div className="why-grid">
            {[
              ['01','Clear legal distinctions','Nikah solemnisation, Nikah Nama registration, MRC processing and NADRA identity updates are not described as one automatic step.'],
              ['02','City-specific assistance','Karachi, Lahore, Islamabad and Rawalpindi contact routing is kept separate so clients reach the relevant team.'],
              ['03','Qualified expectations','Timelines, foreign-document requirements and authority decisions are explained as variable where they genuinely vary.'],
              ['04','Private handling','Sensitive personal and marriage information is treated as confidential client material.'],
            ].map(([n,t,d]) => <div className="why-item" key={n}><span>{n}</span><div><h3>{titleCase(t)}</h3><p>{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="longform-intro section-muted">
        <div className="container content-shell">
          <div className="section-kicker">Court Marriage In Pakistan Complete Guide</div>
          <h2>Legal, Practical and Registration Guidance in One National Pillar.</h2>
          <p>Court Marriage guidance explains the major issues an adult couple should understand before a Nikah, while recognising that province, nationality, previous marital status and the intended use of documents can change the answer.</p>
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
              <h2>{titleCase(section.heading)}</h2>
              {section.paragraphs.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
              {(index === 2 || index === 7 || index === 11) && (
                <div className="inline-cta">
                  <div><strong>Need a case-specific document review?</strong><span>Tell us your city, nationality and marital status before relying on a generic checklist.</span></div>
                  <a href={`tel:${site.primaryPhone}`}>Call {site.primaryPhoneDisplay}</a><small className="call-hours">{callHours}</small>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="faq section-muted longform-faq" id="frequently-asked-questions">
        <div className="container faq-grid">
          <div><div className="section-kicker">Court Marriage FAQs</div><h2>Answers to Common Marriage Questions.</h2><p>General information cannot replace a review of the couple’s documents and circumstances. For a case-specific answer, contact the relevant city team.</p><a className="text-link" href={serviceLinks.contact}>Ask about your case <span>→</span></a></div>
          <div className="faq-list">{homeFaqs.slice(0,10).map(([q,a]) => <details className="faq-item" key={q}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="container final-inner">
          <div><div className="section-kicker light">Confidential Consultation</div><h2>Ready to Discuss Your Marriage?</h2><p>Tell us your city, nationality and basic circumstances so the relevant requirements can be checked before you proceed.</p></div>
          <div className="hero-actions"><a className="button button-light" href={`tel:${site.primaryPhone}`}>Call {site.primaryPhoneDisplay} <PhoneIcon /></a><small className="call-hours">{callHours}</small><a className="button button-ghost-light" href={site.whatsapp}>WhatsApp us <span>↗</span></a></div>
        </div>
      </section>

      <section className="recovery-section recovery-sources"><p className="recovery-updated">Edited for CourtMarriage.live · Last Updated: <time dateTime="2026-10-27">27 October 2026</time></p></section></article><GuideSidebar showReferences={false} sections={homeSections} anchor={(section,index)=>anchorFromHeading(section.heading,index)}/></div></main><SiteFooter preserveCityCalls/>
    </>
  )
}
