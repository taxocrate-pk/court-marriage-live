const short = new Set(['a','an','and','or','of','for','in','to','the','by','on','at','with','from','as','but','nor','are','am','is'])
export function titleCase(text='') {
 let i=0
 return String(text).replace(/CourtMarriage\.live/g,'CMLEGALBRAND').replace(/\b[A-Za-z][A-Za-z’'-]*\b/g,word=>{
  if (word === 'FAQs' || /^[A-Z]{2,}$/.test(word)) {i++;return word}
  const lower=word.toLowerCase();return i++>0&&short.has(lower)?lower:lower.charAt(0).toUpperCase()+lower.slice(1)
 }).replace(/CMLEGALBRAND/g,'CourtMarriage.live')
}
export const bodyWordCount = (sections) => sections.reduce((sum,section)=>sum+section.paragraphs.join(' ').split(/\s+/).filter(Boolean).length,0)
export function readableParagraphs(text) {
 const sentences=text.split(/(?<=[.!?])\s+/)
 const parts=[];let current=''
 for (const sentence of sentences){if(current&&(current+sentence).trim().split(/\s+/).length>70){parts.push(current.trim());current=''}current+=(current?' ':'')+sentence}
 if(current.trim())parts.push(current.trim())
 return parts
}
