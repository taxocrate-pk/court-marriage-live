const short = new Set(['a','an','and','or','of','for','in','to','the','by','on','at','with','from','as','but','nor','are','am','is'])
export function titleCase(text='') {
 let i=0
 return String(text).replace(/CourtMarriage\.live/g,'CMLEGALBRAND').replace(/\b[A-Za-z][A-Za-z’'-]*\b/g,word=>{
  if (word === 'FAQs' || /^[A-Z]{2,}$/.test(word)) {i++;return word}
  const lower=word.toLowerCase();return i++>0&&short.has(lower)?lower:lower.charAt(0).toUpperCase()+lower.slice(1)
 }).replace(/CMLEGALBRAND/g,'CourtMarriage.live')
}
export const bodyWordCount = (sections) => sections.reduce((sum,section)=>sum+section.paragraphs.join(' ').split(/\s+/).filter(Boolean).length,0)
// FAQ eligibility uses substantive article text, not only paragraph prose.
// Hero, sidebar, FAQ, contextual navigation, related guides, references, update labels, image ALT and metadata are excluded.
export const countEditorialWords = text => (String(text).toLowerCase().match(/[a-z0-9]+(?:['’][a-z0-9]+)?/g) || []).length
export const firstArticleSubheading = page => page.firstSubheading || (page.focus === 'Nikah Nama' ? 'Reading the Prescribed Marriage Record' : page.focus === 'Online Nikah' ? 'Checking Participation, Authority and Documentation' : 'Documents and Circumstances to Review')
export function articleWordCount(page, sections) {
 const blocks = sections.flatMap(section => [section.heading, ...section.paragraphs])
 if (sections.length) blocks.push(firstArticleSubheading(page))
 if (sections.length > 2 && page.table) blocks.push(...page.table.headers, ...page.table.rows.flat())
 return blocks.reduce((sum, text) => sum + countEditorialWords(text), 0)
}
export function readableParagraphs(text) {
 const sentences=text.split(/(?<=[.!?])\s+/)
 const parts=[];let current=''
 for (const sentence of sentences){if(current&&(current+sentence).trim().split(/\s+/).length>70){parts.push(current.trim());current=''}current+=(current?' ':'')+sentence}
 if(current.trim())parts.push(current.trim())
 return parts
}
