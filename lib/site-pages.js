import { legacyPages } from './legacy-page-definitions'
import { recoveryPages as recovery } from './recovery'
import { getLongFormContent } from './long-form-content'
import { getNikahNamaContent } from './nikah-nama-content'
import { titleCase, readableParagraphs, bodyWordCount } from './editorial'
import { cityGuidance } from './city-guidance'
import { pageHeadings } from './page-headings'
import { cityServiceCopy } from './city-service-copy'
import { nikahNamaCityCopy } from './nikah-nama-city-copy'
import { serviceSpecificCopy } from './service-specific-copy'
import { siteInformationCopy } from './site-information-copy'

export const pageAssets = {
 'court-marriage-in-karachi': ['court-marriage-karachi','court-marriage-karachi-records'],
 'court-marriage-in-lahore': ['court-marriage-lahore','court-marriage-lahore-records'],
 'court-marriage-in-islamabad': ['court-marriage-islamabad','court-marriage-islamabad-records'],
 'court-marriage-in-karachi-lahore-islamabad-rawalpindi': ['court-marriage-rawalpindi','court-marriage-rawalpindi-records'],
 'court-marriage-services-in-faisalabad': ['court-marriage-faisalabad','court-marriage-faisalabad-records'],
 'court-marriages-in-multan': ['court-marriage-multan','court-marriage-multan-records'],
 'nikah-nama-english-urdu-karachi': ['nikah-nama-karachi','nikah-nama-karachi-translation'],
 'nikah-nama-english-urdu-lahore': ['nikah-nama-lahore','nikah-nama-lahore-translation'],
 'nikah-nama-english-urdu-islamabad': ['nikah-nama-islamabad','nikah-nama-islamabad-translation'],
 'nikah-nama-english-urdu-rawalpindi': ['nikah-nama-rawalpindi','nikah-nama-rawalpindi-translation'],
 'online-nikah-has-gained-popularity': ['online-nikah-pakistan'],
 'online-nikah-for-foreigners': ['online-nikah-foreigners'],
 'nikah-services': ['nikah-services-pakistan'],
 'nikah-khawan-services-and-fees': ['nikah-khawan-guidance'],
 'nadra-marriage-certificate-in-pakistan': ['marriage-certificate-pakistan'],
 'about-us': ['about-private-legal-practice'],
 'blogs': ['marriage-guides-library'],
 'contact-us': ['contact-legal-guidance'],
 '/': ['home-marriage-guidance','home-registration-records'],
}
export const assetUrl = key => `/images/site/${key}.webp`
const documentTable = {caption:'Preparation, Registration and Record Checks',headers:['Stage','Review','Next Step'],rows:[['Before Nikah','Identity, age, consent and marital status','Resolve material discrepancies'],['Nikah Nama','Mahr, conditions and participant particulars','Read the prescribed entries before signing'],['Registration','Competent registrar and local record','Keep acknowledgements and registered copies'],['Document Use','Recipient’s current requirements','Arrange required translation or authentication']]}
const focusFor = slug => slug.startsWith('nikah-nama-')?'Nikah Nama':slug.startsWith('online-nikah')?'Online Nikah':slug.startsWith('nikah-khawan')?'Nikah Khawan Services':slug==='nikah-services'?'Nikah Services':slug.startsWith('nadra-marriage')?'Marriage Registration Certificate':slug==='blogs'?'Court Marriage Guides':slug==='about-us'?'CourtMarriage.live':slug==='contact-us'?'CourtMarriage.live':'Court Marriage'
const subtitleFor = focus => focus==='Nikah Nama'?'Accurate Marriage Records, Mahr and Registration Guidance':focus==='Online Nikah'?'Remote Participation, Authorised Representation and Civil Records':focus==='Marriage Registration Certificate'?'Local Record Review and Certificate Application Assistance':focus==='Nikah Khawan Services'?'Solemnisation Arrangements and Registration Responsibilities':focus==='Nikah Services'?'Consent, Marriage Terms and Proper Documentation':'Legal Guidance for Documents, Nikah and Registration'
export function getSitePage(slug) {
 const restored=recovery.find(p=>p.slug===slug)
 let page=restored
 if(!page){
  const base=legacyPages[slug];if(!base)return null
  const regular=getLongFormContent(slug,base);const nama=getNikahNamaContent(slug,base)
  const content=regular.sections.length?regular:nama;const focus=focusFor(slug)
  const city=Object.keys({Karachi:1,Lahore:1,Islamabad:1,Rawalpindi:1,Faisalabad:1,Multan:1}).find(city=>base.title.includes(city))
  let intro=base.intro
  if(slug==='court-marriage-in-karachi-lahore-islamabad-rawalpindi')intro='Court Marriage in Rawalpindi requires free consent, reliable identity and marital-status records, accurate Nikah documentation and the competent Punjab registration route.'
  else if(!intro.toLowerCase().startsWith(focus.toLowerCase()))intro=`${focus}${city?` in ${city}`:''} assistance begins with a review of the available documents and the circumstances relevant to the requested service.`
  page={...base,slug,seo:`${base.title} | CourtMarriage.live`,focus,kind:['about-us','contact-us'].includes(slug)?'webpage':slug==='blogs'?'category':'service',intro,sections:content.sections,faqs:content.faqs,related:['planning-your-court-marriage-in-pakistan','nikah-certificates-guardian-of-union','the-ins-outs-of-court-marriage-in-pakistan'],table:documentTable,updated:'2026-10-24',city}
 }
 const contentOverride=cityServiceCopy[slug] || nikahNamaCityCopy[slug] || serviceSpecificCopy[slug] || siteInformationCopy[slug]
 if(contentOverride)page={...page,...contentOverride}
 const localCity=page.city||Object.keys(cityGuidance).find(city=>page.title.includes(city))
 page={...page,city:localCity}
 const images=pageAssets[slug]
 const headings = pageHeadings[slug]
 const seo = headings?.seo || (slug.startsWith('nikah-nama-') ? `Nikah Nama in ${page.city}: Urdu, English and Registration` : page.seo)
 const sections=page.sections.map((section,index)=>{
  let heading=section.heading
  // Lead with the section's actual topic; retain service wording later where it helps.
  if(page.city)heading=heading.replace(new RegExp(`^(?:Court Marriage|Nikah Nama) in ${page.city}(?:\\s*[:–—-]\\s*|\\s+)`,'i'),'')
  heading=heading.replace(/^and\s+/i,'')
  return {...section,heading:titleCase(heading),paragraphs:section.paragraphs.flatMap(readableParagraphs)}
 })
 if (page.city && legacyPages[slug] && !contentOverride) {
  const local=cityGuidance[page.city]
  const paragraphs=page.focus==='Nikah Nama'?[local.nama||local.paragraphs[0]]:local.paragraphs
  sections.splice(2,0,{heading:local.heading,paragraphs:paragraphs.flatMap(readableParagraphs),links:[{href:page.focus==='Nikah Nama'?(page.city==='Rawalpindi'?'/court-marriage-in-karachi-lahore-islamabad-rawalpindi/':`/court-marriage-in-${page.city.toLowerCase()}/`):'/nikah-certificates-guardian-of-union/',label:page.focus==='Nikah Nama'?`Court Marriage in ${page.city}`:'Understanding the Registered Marriage Record'}]})
 }
 const count=bodyWordCount(sections)
 const properNames = text => Object.keys(cityGuidance).reduce((value,city)=>value.replace(new RegExp(`\\b${city}\\b`,'gi'),city),text)
 const faqs=(count>=1200?page.faqs.slice(0,10):page.faqs).map(([question,answer])=>[properNames(question),properNames(answer)])
 return {...page,profile:cityGuidance[page.city]?.profile,seo:titleCase(seo),title:titleCase(headings?.h1 || page.title),heroSubtitle:page.heroSubtitle||subtitleFor(page.focus),sections,faqs,mainWords:count,heroSrc:page.heroSrc || (images?assetUrl(images[0]):`/images/recovery/${page.image}.webp`),secondarySrc:page.secondarySrc!==undefined?page.secondarySrc:(images?(images[1]?assetUrl(images[1]):null):`/images/recovery/${page.image}-checklist.webp`),imageAlt:page.imageAlt||`${page.focus}${page.city?` in ${page.city}`:''}: illustrative marriage document preparation`,diagramAlt:page.diagramAlt||`${page.focus}: a separate illustration of document review and record preparation`}
}
export const allSiteSlugs = [...Object.keys(legacyPages),...recovery.filter(p=>!legacyPages[p.slug]).map(p=>p.slug)]
