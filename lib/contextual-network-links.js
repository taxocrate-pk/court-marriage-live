// Existing owned-network references are selected for the page's actual task,
// rather than presented as a universal reciprocal-link block.
const familyDisputeRoutes = new Set([
 'court-marriage-in-karachi', 'court-marriage-in-lahore',
 'court-marriage-in-islamabad', 'court-marriage-in-karachi-lahore-islamabad-rawalpindi',
 'court-marriage-services-in-faisalabad', 'court-marriages-in-multan',
 'court-marriage-civil-marriage-in-pakistan', 'court-marriage-and-civil-marriage-love-and-freedom',
 'divorce-in-islam-quranic-guidelines', 'clearing-the-path-court-marriage-in-pakistan',
 'information-about-court-marriage-in-pakistan', 'category/marriage-law'
])
const karachiRepresentationRoutes = new Set([
 'court-marriage-in-karachi', 'court-marriage-in-karachipakistan',
 'nikah-nama-english-urdu-karachi', 'nadra-marriage-certificate-service-in-karachi'
])
export function contextualNetworkLinks(slug) {
 const links=[]
 if (familyDisputeRoutes.has(slug)) links.push({href:'https://www.advocates.com.pk/',label:'Advocates of Pakistan',context:'For a separate family-law dispute requiring legal representation, explore'})
 if (karachiRepresentationRoutes.has(slug)) links.push({href:'https://karachilawyers.com.pk/',label:'Karachi Lawyers',context:'For separate legal representation in Karachi, consult'})
 return links
}
