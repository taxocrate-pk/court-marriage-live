import Image from 'next/image'
import './recovery.css'
import { SiteHeader as RecoveryHeader, SiteFooter as RecoveryFooter, ContactActions, callHours } from '@/components/site-chrome'
import { titleCase } from '@/lib/editorial'
import { legacyPages } from '@/lib/legacy-page-definitions'
import { site, cityServices } from '@/lib/site-config'
import { recoveryPages, recoveryHref, recoveryAnchor, recoveryDate, recoveryDateLabel } from '@/lib/recovery'

const legacyTitles = {
  'court-marriage-in-karachi': 'Court Marriage in Karachi',
  'court-marriage-in-islamabad': 'Court Marriage in Islamabad',
  'court-marriage-in-lahore': 'Court Marriage in Lahore',
  'online-nikah-for-foreigners': 'Online Nikah for Foreigners',
  'nadra-marriage-certificate-in-pakistan': 'Marriage Registration Certificate in Pakistan',
  'nikah-nama-english-urdu-karachi': 'Nikah Nama in Karachi',
  'nikah-nama-english-urdu-lahore': 'Nikah Nama in Lahore',
}

const sources = [
  ['Muslim Family Laws Ordinance, 1961', 'https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf'],
  ['Local Government: Marriage Registration Procedure', 'https://lgcd.punjab.gov.pk/procedure_for_performing_functions'],
  ['Sindh Child Marriages Restraint Act, 2013', 'https://www.sindhlaws.gov.pk/setup/publications_SindhCode/PUB-15-000083.pdf'],
  ['Punjab Child Marriage Restraint Act 2026', 'https://www.punjablaws.gov.pk/lawspdf/3009.pdf'],
  ['Ministry of Foreign Affairs: Attestable Documents', 'https://apostille.mofa.gov.pk/list-of-public-documents'],
]

export default function RecoveryPage({ page }) {
  const url = `${site.url}${recoveryHref(page)}`
  const display = page.phone || site.primaryPhoneDisplay
  const phone = '+' + display.replace(/[^0-9]/g, '')
  const related = page.related.map((slug) => recoveryPages.find((item) => item.slug === slug) || { slug, title: legacyPages[slug]?.title || legacyTitles[slug] || 'Marriage Documentation Guidance', intro: 'Explore the documents, process and local guidance for this service.' })
  const archive = page.kind === 'category' ? recoveryPages.filter((item) => item.kind !== 'category' && (page.slug === 'blogs' ? true : page.slug.endsWith('marriage-services') ? item.kind === 'service' || item.image === 'city-comparison' : item.kind === 'article')) : []
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': page.kind === 'category' ? 'CollectionPage' : 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, dateModified: recoveryDate, inLanguage: 'en', primaryImageOfPage: { '@type': 'ImageObject', url: `${site.url}${page.heroSrc}`, width: 1200, height: 800 } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` }, { '@type': 'ListItem', position: 2, name: page.title, item: url }] },
      ...(page.kind === 'article' ? [{ '@type': 'Article', headline: page.title, description: page.description, mainEntityOfPage: { '@id': `${url}#webpage` }, image: `${site.url}${page.heroSrc}`, dateModified: recoveryDate, author: { '@type': 'Organization', name: 'CourtMarriage.live', url: site.url }, publisher: { '@type': 'Organization', name: 'CourtMarriage.live', logo: { '@type': 'ImageObject', url: `${site.url}/court-marriage-live-services-logo.png` } } }] : []),
      ...(page.kind === 'service' ? [{ '@type': 'Service', name: page.title, serviceType: page.focus, areaServed: { '@type': 'Country', name: 'Pakistan' }, provider: { '@type': 'Organization', name: 'CourtMarriage.live', url: site.url }, url }] : []),
      { '@type': 'FAQPage', mainEntity: page.faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
      ...(archive.length ? [{ '@type': 'ItemList', itemListElement: archive.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.title, url: `${site.url}${recoveryHref(item)}` })) }] : []),
    ],
  }
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <RecoveryHeader phone={phone} display={display}/>
    <main className="recovery-page">
      <nav className="breadcrumb-bar" aria-label="Breadcrumb"><div className="container"><a href="/">Home</a><span aria-hidden="true">/</span><span>{page.title}</span></div></nav>
      <section className="hero recovery-hero"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow">Marriage and Legal Documentation</div><h1>{page.title}</h1><h2 className="hero-subtitle">{page.heroSubtitle}</h2><div className="recovery-byline">Mohsin Ali Shah · Chairman, Qanoon Group · 40+ Years of Experience in Legal Practice and Network Management</div><p className="hero-lead">{page.intro}</p><ContactActions phone={phone} display={display}/><p className="recovery-consult">Initial Ten-Minute Telephone Consultation Free</p></div><figure className="recovery-hero-photo"><Image src={page.heroSrc} alt={page.imageAlt || `Illustration of ${page.focus.toLowerCase()} documentation and preparation`} width={1200} height={800} priority sizes="(max-width: 800px) 100vw, 50vw" /></figure></div></section>
      <div className="container recovery-layout">
        <article className="recovery-article">{page.slug === 'contact-us' && <section className="recovery-section"><h2>Contact and Office Appointments</h2><p>Pakistan Legal Helpline (WhatsApp): {site.primaryPhoneDisplay}. Please confirm an appointment and the relevant document checklist before visiting.</p><h3>Karachi Johar Office</h3><p>A-220, 2nd Floor, Supreme Corner, Johar Chowrangi, Block 18, Gulistan-e-Johar, Karachi.</p><h3>Karachi DHA Branch</h3><p>76-C, Mezzanine, Main Jami Commercial, Phase 7, DHA, Karachi.</p><h3>Faisalabad Office</h3><p>Rana Shafqat Rasool, M.A., LL.B., Advocate High Court. Chamber No. 6, Jalal Law Chambers, Near Bakhshi Khana, District Courts, Faisalabad. Please use the central helpline to arrange assistance.</p></section>}
          {archive.length > 0 && <section id="resource-directory" className="recovery-section"><h2>{page.slug.endsWith('marriage-services') ? 'Marriage Services and City Guides' : 'Marriage Law and Practical Guides'}</h2><div className="recovery-directory">{archive.map((item) => <a href={recoveryHref(item)} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p><span>Read the Guide →</span></a>)}</div></section>}
          {page.sections.map((section, index) => <section className="recovery-section" id={recoveryAnchor(index)} key={section.heading}><h2>{titleCase(section.heading)}</h2>{index === 0 && <h3>{page.focus === 'Nikah Nama' ? 'Reading the Prescribed Marriage Record' : page.focus === 'Online Nikah' ? 'Checking Participation, Authority and Documentation' : 'Documents and Circumstances to Review'}</h3>}{section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            {index === 2 && <div className="recovery-table-wrap" role="region" aria-label={page.table.caption} tabIndex={0}><table><caption>{page.table.caption}</caption><thead><tr>{page.table.headers.map((heading) => <th scope="col" key={heading}>{heading}</th>)}</tr></thead><tbody>{page.table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>}
            {index === 4 && page.secondarySrc && <figure className="recovery-checklist"><Image src={page.secondarySrc} alt={page.diagramAlt} width={1200} height={600} sizes="(max-width: 800px) 100vw, 70vw" /></figure>}
            {section.links?.length > 0 && <p className="recovery-context-links">Continue Reading: {section.links.map((link, i) => <span key={link.href}>{i > 0 && ' · '}<a href={link.href}>{link.label}</a></span>)}</p>}
          </section>)}
          <section className="recovery-section" id="frequently-asked-questions"><h2>{page.focus} FAQs</h2><div className="faq-list">{page.faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary><span>{question}</span><b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}</div></section>
          <section className="recovery-section recovery-related" id="related-guides"><h2>Related {page.focus} Guidance</h2>{related.map((item) => <p key={item.slug}><a href={recoveryHref(item)}>{item.title}</a></p>)}<p>For wider family-law matters, explore <a href="https://www.advocates.com.pk/">Advocates of Pakistan</a>. For Karachi legal representation, visit <a href="https://karachilawyers.com.pk/">Karachi Lawyers</a>.</p></section>
          <section className="recovery-section recovery-sources" id="official-references"><h2>Official Legal and Registration References</h2><ul>{sources.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul><p>These guides concern adult Muslim marriage and related documentation. Special circumstances require review under the applicable law and the competent authority's current procedure.</p><p className="recovery-updated">Edited for CourtMarriage.live · Last Updated: <time dateTime={recoveryDate}>{recoveryDateLabel}</time></p></section>
        </article>
        <GuideSidebar sections={page.sections} related={related} phone={phone} display={display} directory={archive.length > 0} profile={page.profile}/>
      </div>
    </main><RecoveryFooter />
  </>
}

export function GuideSidebar({sections,related=[],phone=site.primaryPhone,display=site.primaryPhoneDisplay,directory=false,profile={heading:'Sobia Mohsin — Family Law and Marriage Documentation',text:'Sobia Mohsin, Mohsin Ali Mirani and Zaheer Ahmed Qazi handle relevant matrimonial and family matters. The appropriate practitioner is identified from the assignment.'},anchor=(_,index)=>recoveryAnchor(index)}) {
 return (<aside className="recovery-sidebar" aria-label="Guide Navigation and Contact"><div className="recovery-sidebar-inner"><nav aria-label="On This Page"><h2>On This Page</h2><ol>{directory && <li><a href="#resource-directory">Resource Directory</a></li>}{sections.map((section, index) => <li key={section.heading}><a href={`#${anchor(section,index)}`}>{section.heading}</a></li>)}<li><a href="#frequently-asked-questions">Frequently Asked Questions</a></li><li><a href="#official-references">Official References</a></li></ol></nav><div className="recovery-sidebar-card"><h2>Discuss Your Documents</h2><p>Start with the city, available records and intended use. Our initial ten-minute telephone consultation is free.</p><ContactActions phone={phone} display={display}/></div><div className="recovery-sidebar-card"><h2>Legal and Documentation Team</h2><h3>{profile.heading}</h3><p>{profile.text}</p><p>Mohsin Ali Shah serves as Chairman, with client coordination, case preparation, research support and network management responsibilities.</p><a className="text-link" href="/about-us/">About Our Practice →</a></div><nav aria-label="Related Guides"><h2>Related Guides</h2>{related.map((item) => <a href={recoveryHref(item)} key={item.slug}>{item.title}</a>)}</nav><nav aria-label="Important Pages"><h2>Important Pages</h2><a href="/category/marriage-services/">Marriage Services</a><a href="/category/marriage-law/">Marriage Law</a><a href="/blogs/">Latest Guides</a><a href="/contact-us/">Contact and Offices</a></nav></div></aside>)
}
