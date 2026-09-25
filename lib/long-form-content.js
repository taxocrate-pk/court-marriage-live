const cityProfiles = {
  'court-marriage-in-karachi': {
    city: 'Karachi',
    region: 'Sindh',
    law: 'The Sindh Child Marriages Restraint Act, 2013 treats a person under eighteen, male or female, as a child, so an age review is an essential part of any court marriage in Karachi.',
    local: 'Karachi cases often involve parties living in different districts, different Union Council areas, cantonment areas or other local jurisdictions. The correct registration route should therefore be confirmed from the actual facts rather than guessed from a city name alone.',
    pattern: 'Karachi also has a high volume of inter-city, overseas and mixed-nationality matters, which makes document review, address information and later use of the marriage record particularly important.'
  },
  'court-marriage-in-lahore': {
    city: 'Lahore',
    region: 'Punjab',
    law: 'The Punjab Child Marriage Restraint Act, 2026 sets eighteen as the minimum age for both male and female contracting parties in Punjab, so age documents must be checked before a court marriage in Lahore is planned.',
    local: 'Lahore matters should be handled with attention to the competent local registration authority, the licensed Nikah Registrar and the place connected with the marriage record. A lawyer should not treat every Lahore address as if the same office has jurisdiction.',
    pattern: 'Lahore receives many clients from other Punjab districts as well as overseas Pakistanis, so the difference between where a couple lives, where the Nikah is solemnised and where a record can lawfully be registered must be kept clear.'
  },
  'court-marriage-in-islamabad': {
    city: 'Islamabad',
    region: 'Islamabad Capital Territory',
    law: 'The Islamabad Capital Territory Child Marriage Restraint Act, 2025 treats a person under eighteen as a child. Age verification is therefore a central legal check for court marriage in Islamabad.',
    local: 'Islamabad is a federal territory and should not be mixed with Rawalpindi simply because the two cities are adjacent. The competent local authority, address details and the place connected with the Nikah and registration need to be identified correctly.',
    pattern: 'Islamabad frequently involves diplomats, foreign nationals, overseas Pakistanis and parties whose documents will later be used abroad, which increases the importance of passport data, marital-status evidence, translations and later attestation requirements.'
  },
  'court-marriage-in-karachi-lahore-islamabad-rawalpindi': {
    city: 'Rawalpindi',
    region: 'Punjab',
    law: 'The Punjab Child Marriage Restraint Act, 2026 sets eighteen as the minimum age for both male and female contracting parties in Punjab, including Rawalpindi.',
    local: 'Rawalpindi is legally and administratively distinct from Islamabad. A court marriage in Rawalpindi should therefore be documented and registered through the competent Punjab-side authority instead of assuming that an Islamabad office can handle every twin-city case.',
    pattern: 'Rawalpindi clients often move between the twin cities for work and residence. That practical reality makes jurisdiction, address evidence and the identity of the relevant Nikah Registrar more important than the informal label of a twin-city marriage.'
  },
  'court-marriage-services-in-faisalabad': {
    city: 'Faisalabad',
    region: 'Punjab',
    law: 'The Punjab Child Marriage Restraint Act, 2026 sets eighteen as the minimum age for both male and female contracting parties in Punjab, including Faisalabad.',
    local: 'Faisalabad court marriage matters should be connected with the competent local registration authority and an appropriately licensed Nikah Registrar. The correct route depends on the real addresses and circumstances of the parties.',
    pattern: 'Faisalabad often attracts parties from surrounding districts and industrial areas. Out-of-district residence, temporary accommodation and later use of the marriage certificate should be considered before documents are prepared.'
  },
  'court-marriages-in-multan': {
    city: 'Multan',
    region: 'Punjab',
    law: 'The Punjab Child Marriage Restraint Act, 2026 sets eighteen as the minimum age for both male and female contracting parties in Punjab, including Multan.',
    local: 'Multan court marriage matters should be planned around the competent local authority, the licensed Nikah Registrar and the actual location and address facts rather than a generic South Punjab checklist.',
    pattern: 'Multan regularly serves clients coming from other South Punjab districts. That makes prior document review useful where one or both parties have addresses, divorce records or family documents issued elsewhere.'
  },
}

const serviceProfiles = {
  'online-nikah-has-gained-popularity': {
    primary: 'Online Nikah in Pakistan',
    focus: 'remote or proxy Nikah arrangements for parties who are not in the same place',
    audience: 'Pakistanis living in different cities, overseas Pakistanis, couples affected by travel limitations and eligible parties who need a properly authorised proxy arrangement',
    risk: 'A video call, online meeting or digital signature should not be treated as a substitute for the legal and religious requirements of a valid Nikah or for the statutory registration process.',
    documents: 'Identity documents, proof of free consent, witness details, authority or wakalat documents where required, prior-marriage records and the information needed for the prescribed Nikah record should be reviewed before the ceremony.',
    registration: 'After solemnisation, the Nikah and Nikah Nama must still be dealt with through the competent registration route. Remote participation does not remove the requirement of proper marriage registration.'
  },
  'online-nikah-for-foreigners': {
    primary: 'Online Nikah for Foreigners',
    focus: 'Nikah and marriage documentation where one or both parties are foreign nationals or reside outside Pakistan',
    audience: 'foreign nationals marrying Pakistanis, overseas couples, dual nationals and parties who expect to use Pakistani marriage documents in another jurisdiction',
    risk: 'Nationality, religion, marital status, immigration position and destination-country rules can change the document requirements. No responsible service should promise that one universal embassy NOC or one standard affidavit applies to every foreign-national case.',
    documents: 'Passports, Pakistani identity documents where applicable, visa or entry information, evidence of current marital status, divorce or death records where relevant, translations and powers of attorney may all need case-specific review.',
    registration: 'Pakistani marriage registration and later foreign use are separate stages. A document accepted for local registration may still need translation, attestation, legalisation or another procedure before a foreign authority will accept it.'
  },
  'nikah-services': {
    primary: 'Nikah Services in Pakistan',
    focus: 'lawful Nikah solemnisation, correct Nikah Nama preparation and marriage registration support',
    audience: 'adult couples seeking a clear and properly documented Nikah, including local, inter-city and overseas cases',
    risk: 'The Nikah ceremony should not be reduced to a form-signing exercise. Free consent, the applicable religious requirements, witnesses, Mahr and accurate information in the marriage record all require attention.',
    documents: 'CNIC, NICOP or passport information, photographs where required, witness identification, prior-marriage documents and any authority documents for a proxy arrangement should be checked before the Nikah Nama is completed.',
    registration: 'A Nikah may be solemnised by a person other than the licensed Nikah Registrar, but the marriage must still be reported and registered through the lawful process under the Muslim Family Laws framework.'
  },
  'nikah-khawan-services-and-fees': {
    primary: 'Nikah Khawan Services in Pakistan',
    focus: 'arranging a suitable Nikah Khawan while keeping solemnisation, Nikah Nama completion and statutory registration roles legally distinct',
    audience: 'couples who need a Nikah Khawan for a home, office, marriage hall or remote/proxy arrangement and want the documentation handled correctly',
    risk: 'A Nikah Khawan is not automatically the same person as the licensed Nikah Registrar for the relevant area. Couples should know who is solemnising the Nikah, who is completing the prescribed record and who is responsible for lawful registration.',
    documents: 'Identity documents, witness information, Mahr details, marital-status records and the particulars needed for the prescribed Nikah Nama should be prepared before the ceremony instead of reconstructed afterwards.',
    registration: 'Where the Nikah is solemnised by someone other than the licensed Nikah Registrar, the marriage should be reported to the appropriate registrar for registration in accordance with the applicable legal framework.'
  },
  'nadra-marriage-certificate-in-pakistan': {
    primary: 'Marriage Registration Certificate in Pakistan',
    focus: 'the relationship between the Nikah Nama, local registration, a computerised marriage registration certificate and later NADRA-linked identity or family-record steps',
    audience: 'married couples who need a registered marriage record for personal, immigration, visa, passport, family, banking or other official use',
    risk: 'The popular phrase NADRA marriage certificate can create confusion. NADRA does not solemnise the Nikah and the local marriage registration function should not be presented as if every certificate is directly issued by NADRA itself.',
    documents: 'The registered Nikah Nama, CNIC or passport details, photographs or application material required by the local authority, and any correction or supporting record should be reviewed before certificate processing is promised.',
    registration: 'The correct sequence usually begins with a properly completed and registered Nikah record. A computerised marriage record and later identity or family-registration updates should be treated as connected but separate administrative steps.'
  },
}

const infoProfiles = {
  'about-us': {
    primary: 'About CourtMarriage.live',
    purpose: 'to explain how CourtMarriage.live approaches court marriage, Nikah, online Nikah and marriage registration work in Pakistan',
    audience: 'couples, families, overseas Pakistanis and foreign nationals who want to understand the service before sharing personal documents',
    emphasis: 'legal accuracy, confidentiality, city-specific contact routing, document review and realistic expectations instead of exaggerated marketing promises'
  },
  'blogs': {
    primary: 'Court Marriage and Nikah Blog',
    purpose: 'to provide practical educational material about court marriage, Nikah, marriage registration, online Nikah, foreign-national cases and related family-law documentation',
    audience: 'people researching a marriage process before taking legal advice, as well as clients who need a plain-language explanation of documents and procedure',
    emphasis: 'clear separation between general information and case-specific legal advice, with articles written around real search questions rather than thin keyword pages'
  },
  'contact-us': {
    primary: 'Contact CourtMarriage.live',
    purpose: 'to help a prospective client contact the correct city team and prepare enough information for a useful first consultation',
    audience: 'couples seeking court marriage, Nikah, marriage registration, online Nikah or foreign-national marriage assistance in Pakistan',
    emphasis: 'privacy, correct city routing, a focused document checklist and an explanation of what information should be available before an appointment'
  },
}

function citySections(profile, page) {
  const c = profile.city
  const k = page.title
  return [
    {
      heading: `${k}: legal meaning and practical scope`,
      paragraphs: [
        `${k} is a practical search term used by adults who want to marry by free choice and complete the Nikah and registration process with proper documentation. For an ordinary Muslim marriage, the expression court marriage does not mean that every couple must sit before a judge and be married by a court. The central legal work normally concerns free consent, lawful Nikah, accurate identity and marital-status information, a properly completed Nikah Nama and registration through the competent Nikah Registrar and local authority. A court or police authority may become relevant in a protection dispute, coercion allegation or another contested matter, but that is different from the ordinary solemnisation of the marriage itself.`,
        `A useful ${k.toLowerCase()} service therefore begins by separating the religious act of Nikah, the prescribed marriage record, the role of the Nikah Registrar, local registration and any later certificate or identity-record step. Section 5 of the Muslim Family Laws Ordinance, 1961 requires Muslim marriages to be registered and provides for licensed Nikah Registrars. That statutory framework is more important than labels used in advertisements. CourtMarriage.live treats the expression court marriage as a client-facing term while explaining the actual legal process in plain language before any document is signed.`
      ]
    },
    {
      heading: `${k} eligibility, free consent and identity checks`,
      paragraphs: [
        `The first issue in ${k.toLowerCase()} is whether the parties are legally able to proceed. Identity, age, free consent and present marital status should be confirmed before a ceremony is arranged. A responsible adviser should speak to the parties in a way that allows each person to express consent independently. If there is an allegation of pressure, confinement, impersonation or document misuse, the matter cannot be treated like an ordinary appointment. Free choice is particularly important in court marriage work because many clients approach the service precisely because family members disagree with their decision.`,
        `Identity checks should be based on original or reliably verifiable CNIC, NICOP or passport information as appropriate. Names, parentage, dates of birth and identity numbers should be consistent across the Nikah Nama and supporting records. Where spellings differ, a party uses more than one nationality, or a passport and Pakistani identity record do not match exactly, the difference should be addressed before registration. Small mistakes made at the Nikah stage can create larger problems when the couple later seeks a computerised marriage record, passport change, visa, immigration benefit, family registration or correction of official data.`
      ]
    },
    {
      heading: `${k} age requirement in ${profile.region}`, 
      paragraphs: [
        `${profile.law} This point should be checked from reliable age evidence, not from appearance, family assurances or an approximate age entered for convenience. Child-marriage legislation carries criminal consequences and also places responsibilities on persons who perform, facilitate or register a prohibited marriage. A court marriage provider, lawyer, Nikah Khawan or registrar should therefore stop the process if the age requirement is not met or the evidence creates a genuine doubt that has not been resolved.`,
        `Age rules are also a reason not to copy old internet articles. Pakistan has province- and territory-specific child-marriage legislation, and the position has changed over time. A page about ${k.toLowerCase()} must be read in the context of the law applicable in ${profile.region} at the time of the proposed marriage. When a party comes from another province, the legal analysis should not be reduced to the rule that applied years ago at the place of birth. The practical approach is to verify current law, identity records and the place where the Nikah and registration are being arranged.`
      ]
    },
    {
      heading: `${k} documents and pre-Nikah review`,
      paragraphs: [
        `Documents for ${k.toLowerCase()} vary with the facts, but the review commonly starts with identity documents for both parties and the persons who will act as witnesses. Recent photographs may be needed for particular records or office requirements. If either party was previously married, the file should contain reliable evidence showing the present marital status, such as the relevant divorce, talaq, khula, dissolution or death record as applicable. Where a party is a foreign national, uses a foreign passport, lives overseas or will participate through an authorised representative, the document set can be materially different.`,
        `The purpose of a pre-Nikah review is not to create unnecessary paperwork. It is to prevent the couple from discovering after the ceremony that an essential fact was entered incorrectly or that the chosen registration route does not fit the case. ${profile.pattern} A short consultation before the appointment can identify name variations, incomplete divorce records, witness problems, an unsuitable proxy document or a jurisdiction issue while there is still time to correct it. That is more useful than promising that every ${k.toLowerCase()} can be completed from the same four-document checklist.`
      ]
    },
    {
      heading: `${k} procedure from consultation to Nikah`,
      paragraphs: [
        `A practical ${k.toLowerCase()} process can be organised into stages. First, the parties explain their circumstances and provide the basic documents. Second, eligibility, age, identity, marital status and any special issue are reviewed. Third, the Nikah arrangements are settled, including the witnesses, Mahr, any authorised representative and the information to be entered in the Nikah Nama. Fourth, the Nikah is solemnised with the required consent and religious formalities. Fifth, the prescribed record is completed carefully and sent through the lawful registration channel. Each stage has a different purpose and should not be compressed into a single marketing promise of instant registration.`,
        `The sequence can be quick in a straightforward adult case with complete records, but speed should not override accuracy. If a prior marriage has not been documented correctly, a foreign document needs translation, a power of attorney is unclear or the parties disagree about a material Nikah Nama entry, the better approach is to resolve the issue before signatures are obtained. CourtMarriage.live should give an expected workflow after reviewing the case rather than advertise a fixed timetable for every ${k.toLowerCase()} matter. Government processing time is controlled by the relevant authority, not by a private service provider.`
      ]
    },
    {
      heading: `${k}: Nikah Khawan and Nikah Registrar roles`,
      paragraphs: [
        `Clients often use the terms Nikah Khawan and Nikah Registrar as if they are interchangeable. They can be the same person in a particular case, but the roles are not conceptually identical. A Nikah Khawan or another competent person may solemnise the Nikah according to the applicable religious requirements. The statutory registration function under the Muslim Family Laws framework belongs to a licensed Nikah Registrar for the relevant area. Where a marriage is solemnised by someone other than the Nikah Registrar, it must be reported for registration in the manner required by law.`,
        `This distinction matters in ${k.toLowerCase()} because a beautifully conducted ceremony does not by itself answer the registration question. Couples should know who will solemnise the Nikah, who will complete the prescribed Nikah Nama, which registrar is responsible for the record and what happens after signatures are taken. ${profile.local} Keeping those responsibilities clear reduces the risk of an unregistered record, a document that cannot be traced later or a certificate application being sent to the wrong office.`
      ]
    },
    {
      heading: `${k} Nikah Nama, Mahr and important clauses`,
      paragraphs: [
        `The Nikah Nama is not merely a souvenir from the ceremony. It is the prescribed marriage record and should be completed with the same care given to any important legal document. Names, identity numbers, addresses, ages, marital status and witness information should be accurate. Mahr should be stated clearly, including the amount or property and the agreed mode or timing of payment. Blank spaces should not be treated casually, and a party should not be asked to sign without understanding the entries that affect rights and obligations.`,
        `For ${k.toLowerCase()}, couples may also need to consider any lawful special conditions, delegated rights or other entries permitted by the prescribed form. The correct advice depends on the parties and the applicable law; it should not be replaced by a standard instruction to leave every optional column blank. Before signing, both parties should have the opportunity to read or have the contents explained to them. A clear record at the beginning is particularly valuable if a dispute later arises about Mahr, maintenance, delegated divorce, residence, previous marital status or another term recorded in the Nikah Nama.`
      ]
    },
    {
      heading: `${k} registration, MRC and NADRA-related records`,
      paragraphs: [
        `After a lawful Nikah, registration should follow through the competent registrar and local authority. The original or registered Nikah Nama, the local marriage register and a computerised Marriage Registration Certificate are related records but they should not be described as if they are the same document. The phrase NADRA marriage certificate is commonly used by the public, yet NADRA does not solemnise the marriage and the local authority registration function should not be confused with a later NADRA identity or family-record process.`,
        `For ${k.toLowerCase()}, the safest explanation is to identify which document the client actually needs and why. A newly married couple may need the registered Nikah Nama for their personal record, a computerised certificate for an official application, a certified translation for foreign use, or a later update of identity and family information. One office may not perform all of these functions. A service should therefore explain the chain of documents, expected authority processing and any later attestation step instead of promising one certificate that automatically satisfies every Pakistani and foreign institution.`
      ]
    },
    {
      heading: `${k} for divorced or widowed persons`,
      paragraphs: [
        `A previous marriage does not by itself prevent a new lawful marriage, but current marital status must be clear. In a ${k.toLowerCase()} matter involving divorce, talaq or khula, the adviser should review the relevant decree, certificate, notice record or other evidence rather than accept a verbal statement that the earlier marriage has ended. The exact document depends on how the previous marriage was dissolved. If the former spouse has died, an official death record may be relevant. These checks protect both the new couple and the integrity of the registration record.`,
        `Special care is required when the earlier marriage occurred abroad, when a foreign divorce is relied upon, when Pakistani civil records have not been updated or when there is a dispute about whether a talaq became legally effective. The point is not to turn every ${k.toLowerCase()} into litigation. It is to avoid creating a second set of problems by recording a person as unmarried or divorced without adequate basis. A short legal review before the Nikah can prevent objections later in registration, immigration or family-law proceedings.`
      ]
    },
    {
      heading: `${k} for overseas Pakistanis and foreign nationals`,
      paragraphs: [
        `Overseas and foreign-national cases require more planning because the marriage may need to work in two legal and administrative systems. For ${k.toLowerCase()}, a foreign passport, NICOP, visa record, proof of marital status, translation, affidavit, power of attorney or consular document may be relevant depending on the case. No blanket rule makes an embassy NOC compulsory for every foreign national, just as no blanket rule makes it unnecessary in every case. Nationality, religion, residence, prior marital status and the authority that will later use the documents all matter.`,
        `Where one party cannot travel to ${c}, a proxy or remote arrangement may be considered if the legal and religious requirements can properly be met. The authority of the representative should be clear and identity and consent should be reliably established. A video call may assist communication, but it should not be marketed as a replacement for the substantive requirements of Nikah and registration. After the Pakistani record is completed, the couple may still need translation, MOFA attestation, consular legalisation or another destination-country procedure depending on where the document will be used.`
      ]
    },
    {
      heading: `${k} privacy, free-will concerns and protection issues`,
      paragraphs: [
        `Court marriage clients often share sensitive information about family disagreement, addresses, identity documents and private communications. A ${k.toLowerCase()} service should collect only the material reasonably needed for advice, documentation and registration, keep copies secure and avoid circulating client documents through unnecessary messaging groups. Privacy is not only a marketing feature; careless handling of identity records can expose a couple to fraud, family conflict or security problems. Clients should know who is receiving their documents and for what purpose.`,
        `Where an adult couple anticipates threats, unlawful confinement, violence or a false criminal allegation, the situation may require independent legal advice about protection or court proceedings. Marriage documentation alone does not guarantee personal safety and a private service provider should not promise immunity from every complaint. The facts should be assessed carefully and any protection application should be based on the actual legal remedy available. The objective is to support lawful adult choice while avoiding sensational claims that a particular affidavit or photograph automatically prevents all later disputes.`
      ]
    },
    {
      heading: `${k} fees, timing and what a quotation should cover`,
      paragraphs: [
        `The cost of ${k.toLowerCase()} can vary because clients may be asking for different combinations of work: consultation, document preparation, affidavits, Nikah Khawan attendance, Nikah Nama completion, registration follow-up, a computerised certificate, translation, attestation or representation in a separate protection matter. A responsible quotation should identify what is included and what government, registrar, translation, courier or attestation charges are separate. A low headline figure is not useful if the client discovers additional compulsory charges only after the ceremony.`,
        `Timing should be explained in the same way. A straightforward consultation and Nikah arrangement may be organised quickly when the parties and documents are ready, but registration and certificate issuance remain dependent on the competent authority and the completeness of the record. Foreign-national and previous-marriage cases can take longer because additional documents need review. CourtMarriage.live should give a case-specific estimate after seeing the facts rather than make an unconditional same-day promise for every ${k.toLowerCase()} matter.`
      ]
    },
    {
      heading: `${k} after the Nikah: keeping and using the marriage record`,
      paragraphs: [
        `After the Nikah and registration, both spouses should keep clear copies of the signed and registered documents and note the issuing or registering authority. If a computerised marriage certificate is obtained, its spellings and identity information should be checked against the Nikah Nama and identity documents. Errors are easier to address when discovered early. Couples planning travel or immigration should also confirm whether the receiving authority requires an English translation, attestation, apostille-equivalent process where applicable, consular legalisation or another form of verification.`,
        `A ${k.toLowerCase()} file should therefore be viewed as a record-management matter as well as a ceremony. The couple may later need proof of marriage for visa sponsorship, inheritance, banking, passport or identity updates, childbirth registration, family registration, insurance or litigation. A properly preserved registration trail is far more valuable than a collection of informal photographs or private affidavits that cannot be matched to the official marriage record. Where a correction is required, the appropriate procedure should be followed instead of altering copies or creating inconsistent versions of the same document.`
      ]
    },
    {
      heading: `Common mistakes in ${k.toLowerCase()} cases`,
      paragraphs: [
        `Common mistakes include using an old internet checklist without checking current age law, entering inconsistent names or identity numbers, treating a Nikah Khawan as automatically authorised to register every marriage, ignoring prior-marriage documents, signing blank Nikah Nama fields, choosing witnesses without confirming the applicable requirements, and assuming that a private affidavit replaces statutory registration. Another frequent problem is confusion between a registered Nikah Nama, a computerised Marriage Registration Certificate and a later NADRA family or identity update.`,
        `The practical answer is simple: slow down at the document-review stage. Verify age and identity, confirm free consent, identify the relevant registrar and authority, record Mahr and other terms accurately, and understand what document the couple will receive at each stage. ${profile.pattern} A careful ${k.toLowerCase()} service should make the process easier to understand without pretending that every case is identical. That approach protects the client, improves the quality of the official record and reduces the chance that a problem appears months later when the marriage document is needed for an important purpose.`
      ]
    },
  ]
}

function cityFaqs(profile, page) {
  const c = profile.city
  const k = page.title
  return [
    [`Does ${k.toLowerCase()} mean marriage before a judge?`, `Not ordinarily. For a Muslim marriage, the practical process usually centres on lawful Nikah, proper documentation and registration through the competent Nikah Registrar and local authority. A court becomes relevant where a separate legal remedy, protection issue or dispute requires judicial intervention.`],
    [`What is the minimum age for ${k.toLowerCase()}?`, `${profile.law} Original and reliable age documents should be checked before arrangements are made.`],
    [`Which documents are needed for ${k.toLowerCase()}?`, `CNIC, NICOP or passport information is normally central. Witness identification, photographs, prior-marriage records, a death record, power of attorney, translation or foreign-national documents may be required according to the facts. A case-specific checklist is safer than a universal list.`],
    [`Can a couple marry in ${c} without family permission?`, `An adult marriage is based on the free consent of the contracting parties, subject to the applicable law and religious requirements. Family disagreement does not justify falsifying age, identity or marital-status information. Where safety or coercion is an issue, independent legal advice may also be required.`],
    [`Can ${k.toLowerCase()} be completed in one day?`, `Some private service work and the Nikah itself may be organised quickly in a straightforward case with complete records, but official registration, certificate issuance, attestation or other authority-controlled steps follow their own process. A fixed same-day promise should not be made before the file is reviewed.`],
    [`Is a Nikah Khawan the same as a Nikah Registrar in ${c}?`, `Not necessarily. One person may perform both roles in a particular case, but solemnisation and statutory registration are distinct functions. The relevant licensed Nikah Registrar and local authority should be identified before the record is finalised.`],
    [`Can an overseas Pakistani arrange ${k.toLowerCase()} remotely?`, `A remote or proxy arrangement may be possible where identity, free consent, religious requirements, witnesses, authority or wakalat and later registration can all be satisfied. A video call by itself is not the entire legal process.`],
    [`Is an embassy NOC compulsory for every foreign national in ${c}?`, `No blanket answer applies. Requirements can depend on nationality, religion, visa position, marital status, the local registration practice and the destination where the marriage record will later be used.`],
    [`What is the difference between Nikah Nama and Marriage Registration Certificate?`, `The Nikah Nama is the prescribed marriage record. A computerised Marriage Registration Certificate is a related civil record generated through the competent local process. Later NADRA identity or family-record updates are separate administrative steps.`],
    [`How should we prepare for a ${k.toLowerCase()} consultation?`, `Have clear identity documents, current addresses, marital-status information and any prior divorce, khula, talaq, death, passport or foreign documents available. Tell the adviser in advance if one party is abroad, under security pressure or unable to attend in person.`],
  ]
}

function serviceSections(profile) {
  const p = profile.primary
  return [
    {
      heading: `${p}: what the service actually covers`,
      paragraphs: [
        `${p} should be understood as a structured legal and documentation service, not as a slogan. The central purpose is ${profile.focus}. A useful service begins by identifying the parties, confirming free consent and present marital status, understanding where each person is located and deciding which legal and religious requirements apply. The process should then connect the Nikah to a reliable documentary trail and the competent registration authority. A provider should explain each stage instead of giving the impression that a single online form, affidavit or video meeting automatically creates a complete registered marriage.`,
        `The people most likely to need ${p.toLowerCase()} include ${profile.audience}. Their cases can look similar on the surface but differ materially once nationality, previous marriage, age, place of residence, planned ceremony, proxy authority and intended use of the documents are examined. For that reason, CourtMarriage.live should start with a short factual review and then provide a tailored checklist. The objective is to make the process understandable while preserving legal accuracy and a clear separation between solemnisation, Nikah Nama preparation, registration and any later certificate, translation or attestation step.`
      ]
    },
    {
      heading: `${p} and the Muslim Family Laws registration framework`,
      paragraphs: [
        `For Muslim marriages in Pakistan, section 5 of the Muslim Family Laws Ordinance, 1961 provides that every marriage solemnised under Muslim law shall be registered in accordance with that framework. Union Councils or the relevant local structure license Nikah Registrars, and a marriage solemnised by another person is to be reported for registration. This legal background remains important when discussing ${p.toLowerCase()} because private arrangements cannot be allowed to replace the statutory marriage record. The method of communication may change, but the need for a reliable registration route does not disappear.`,
        `A client should therefore ask practical questions: who will solemnise the Nikah, who is the relevant Nikah Registrar, how will the prescribed form be completed, where will the record be registered and what certificate or certified copy will be available afterwards? ${profile.registration} This is especially important where the parties are in different countries or intend to use the marriage documents for immigration, passport, inheritance or family-registration purposes. The official trail should be planned before the ceremony rather than reconstructed only after an embassy, court or immigration authority asks for proof.`
      ]
    },
    {
      heading: `${p}: identity, age and free consent`,
      paragraphs: [
        `Identity and free consent are foundational in ${p.toLowerCase()}. A remote or document-heavy process creates more opportunities for impersonation, misunderstanding or reliance on an outdated scan. Original identity information should be verified as far as reasonably possible and the names, dates of birth, parentage and identity numbers used in the Nikah record should be consistent with the documents that will later support registration. If the parties speak different languages, the contents of the Nikah and any authority document should be explained in a language each person understands.`,
        `Age must be checked under the law applicable to the place and circumstances of the marriage. Sindh, Punjab and Islamabad now have legislation setting eighteen as the relevant minimum age for both sexes in their respective jurisdictions. A service should not rely on an old gender-based internet rule or accept an approximate age. Where a party's date of birth differs between records, the discrepancy should be resolved before the Nikah is scheduled. A provider involved in ${p.toLowerCase()} should never facilitate a prohibited child marriage or create paperwork intended to conceal a party's true age.`
      ]
    },
    {
      heading: `${p} documents and case-specific checklist`,
      paragraphs: [
        `${profile.documents} The exact list depends on the service. A straightforward adult Pakistani couple may require a relatively simple file, while a foreign national, divorced person, widow or overseas party may need several additional records. The right approach is to identify the legal purpose of each document. A passport proves identity and nationality; a divorce record addresses previous marital status; a power of attorney shows the scope of representation; a translation allows an authority to understand a foreign-language document.`,
        `For ${p.toLowerCase()}, document quality matters as much as document quantity. Blurred scans, cropped passports, unsigned authority letters and inconsistent spellings can delay registration or create doubt. Couples should avoid sending sensitive identity documents to multiple unverified persons merely to obtain competing quotations. A professional intake process should explain which documents are necessary at the preliminary stage and which originals or certified records will be required later. Where a foreign document is relied upon, the need for certification, translation, attestation or legalisation should be checked instead of assumed.`
      ]
    },
    {
      heading: `${p} and the role of witnesses`,
      paragraphs: [
        `Witness arrangements are an important part of Nikah planning and should be handled according to the applicable religious requirements and the facts of the case. In ${p.toLowerCase()}, the fact that parties communicate remotely does not justify inventing witness details or treating people who did not observe the relevant acts as formal witnesses. The service should identify who will act as witnesses, confirm their identity information and ensure they understand the role they are performing. Their particulars should be recorded accurately where the prescribed document requires them.`,
        `Remote participation also raises practical questions about how the witnesses, parties, Nikah Khawan and any authorised representative communicate and how the sequence is documented. Technology can support a lawful arrangement, but it should not be used to create a false appearance of presence or consent. If a particular school of law, authority or factual situation requires a different arrangement, the adviser should identify that issue before the ceremony. Clear witness planning protects the validity and evidentiary value of the marriage record and reduces later arguments about who was present and what was agreed.`
      ]
    },
    {
      heading: `${p}: Mahr and Nikah Nama clauses`,
      paragraphs: [
        `Mahr should be agreed clearly before the Nikah Nama is finalised. The amount or property, whether it is prompt or deferred, and any agreed payment arrangement should be recorded accurately. The couple should also understand the other entries in the prescribed Nikah Nama rather than treating it as a ceremonial form that can be filled in by someone else after the event. ${p} can involve extra communication steps, so it is particularly important to confirm the contents with both parties before signatures or authorised acts occur.`,
        `Where lawful special conditions, delegated rights or other permitted entries are relevant, they should be discussed in advance. Blank columns should not be converted into a default policy merely because that is convenient for a service provider. A party who cannot read the form should have the material terms explained. If the couple later relies on the record in maintenance, Mahr, dissolution, immigration or inheritance proceedings, the accuracy of the original Nikah Nama becomes important. Good ${p.toLowerCase()} practice therefore treats the form as a substantive legal record rather than an administrative afterthought.`
      ]
    },
    {
      heading: `${p} where one party has a previous marriage`,
      paragraphs: [
        `Previous marital status needs careful review in ${p.toLowerCase()}. A divorced person should be able to show the relevant documentary basis for the present status, whether that arises from talaq, khula, judicial dissolution or another lawful process. A widow or widower may need an official death record. If the earlier marriage or divorce occurred abroad, a foreign decree or certificate may need translation, authentication or legal analysis before it can safely be relied upon for a Pakistani marriage record.`,
        `A service should not assume that a person's description of the earlier relationship is enough for official purposes. Likewise, the existence of a divorce decree does not always answer every question about notices, effectiveness or record updates. The file should be assessed according to how the previous marriage ended and what the competent authority requires. This is particularly important in ${p.toLowerCase()} because remote communication can tempt parties to send only selected screenshots or informal statements. The objective is to establish a reliable present status before a new Nikah is recorded.`
      ]
    },
    {
      heading: `${p} for overseas Pakistanis`,
      paragraphs: [
        `Overseas Pakistanis commonly need ${p.toLowerCase()} because travel dates, employment, immigration status or family circumstances make simultaneous physical presence difficult. The process should begin with passport, CNIC or NICOP review and a clear explanation of where each party will be located at the relevant time. If an authorised representative will act, the authority document should identify the person and the acts permitted with enough precision to avoid doubt. Local notarisation, consular attestation or another authentication step may be needed depending on where the document is executed and how it will be used.`,
        `After the Nikah, an overseas couple should think ahead to the destination country. A Pakistani registered marriage document may need an English translation, MOFA attestation, embassy or consular legalisation, or another verification procedure. These are separate from the validity and registration of the Nikah itself. CourtMarriage.live should therefore ask where the couple intends to use the document and explain that Pakistani processing cannot guarantee automatic acceptance by every foreign immigration, civil-status or court authority. Planning the post-marriage document path early can prevent avoidable delay.`
      ]
    },
    {
      heading: `${p} for foreign nationals`,
      paragraphs: [
        `Foreign-national cases require an individual checklist. Nationality, religion, visa or entry position, residence, current marital status and the law of the destination country can all affect the documents requested in practice. Some cases may involve a consular letter, affidavit, proof of single status, divorce document, translation or additional identification; others may not. A responsible ${p.toLowerCase()} service should not advertise a universal embassy NOC as if one form applies to every passport holder.`,
        `It is also important to separate Pakistani marriage requirements from later recognition abroad. A local authority may accept a marriage for registration while a foreign state asks for additional evidence before recording it in its own civil system. Conversely, a foreign document that appears sufficient to the couple may need authentication before a Pakistani authority can rely on it. The safest process is to review the actual passport, marital-status evidence and intended destination use, then prepare the Nikah and registration file around those facts.`
      ]
    },
    {
      heading: `${p}: registration and computerised marriage record`,
      paragraphs: [
        `${profile.registration} Couples should understand the difference between the signed Nikah Nama, the registered Nikah record and any computerised Marriage Registration Certificate produced through the competent local authority. The public often calls the computerised document a NADRA marriage certificate, but NADRA is not the body that solemnises the marriage and the local registration step should not be described as a direct NADRA ceremony or approval.`,
        `For ${p.toLowerCase()}, the registration trail is especially important because the parties may not be physically present later to correct an error. Names, identity numbers, nationality and marital-status details should be checked before the record is submitted. If the document will be used abroad, the couple should ask for the appropriate certified or translated version rather than editing scans themselves. A clean and traceable record is more useful for visa, family, inheritance and identity purposes than a collection of informal affidavits or screenshots that cannot be matched to the official marriage register.`
      ]
    },
    {
      heading: `${p}: what technology can and cannot do`,
      paragraphs: [
        `${profile.risk} Technology is useful for identity interviews, document exchange, translation, scheduling and communication among parties in different places. It can also help create a contemporaneous record that instructions were discussed. But technology should support the legal process rather than be advertised as the legal process itself. A platform, Zoom call or WhatsApp conversation has no power to waive age law, correct an invalid authority document or replace statutory registration.`,
        `Clients should also consider privacy. Passports, CNIC images, signatures and family documents should not be uploaded indiscriminately to public links or shared with multiple unknown intermediaries. A professional ${p.toLowerCase()} workflow should use limited access, explain why a document is requested and avoid retaining material longer than reasonably required. Remote work can be efficient, but it also increases the importance of confirming who is on the other side of the communication and whether the person giving instructions is genuinely the contracting party.`
      ]
    },
    {
      heading: `${p} fees and service scope`,
      paragraphs: [
        `A quotation for ${p.toLowerCase()} should say what the client is paying for. The scope may include legal consultation, document review, drafting an authority document, arranging a Nikah Khawan, preparing the Nikah Nama, registrar coordination, registration follow-up, certificate assistance, translation, courier or attestation support. Government fees and third-party charges should be identified separately where possible. A headline fee without a scope can create disputes when the client later discovers that a certificate, attestation or foreign-document review was not included.`,
        `The amount can also vary with complexity. A straightforward local Nikah does not involve the same work as a foreign-national case with prior divorce records and overseas powers of attorney. CourtMarriage.live should therefore obtain enough facts to price the work responsibly. The client should be told which steps depend on a government office or another authority and cannot be guaranteed by the private service. Clear pricing and realistic expectations are part of professional service, not an obstacle to conversion.`
      ]
    },
    {
      heading: `${p} timeline and appointment planning`,
      paragraphs: [
        `Clients often ask how quickly ${p.toLowerCase()} can be completed. The answer depends on what is meant by completed. A consultation and document review may be done quickly; a Nikah may be arranged promptly when the parties, witnesses and documents are ready; registration and certificate issuance then depend on the competent authority. If a foreign document needs authentication or a previous marriage record is incomplete, additional time should be expected. A single promise covering every stage is therefore misleading.`,
        `A better planning method is to work backwards from any genuine deadline. If the couple has a flight, visa interview, family event or immigration filing date, that date should be disclosed at the first consultation. The adviser can then identify which private steps can reasonably be scheduled and which official stages remain outside direct control. In ${p.toLowerCase()}, time-zone differences and courier or consular requirements may also matter. Early disclosure of the real deadline allows the service to prioritise the correct documents instead of rushing into an incomplete Nikah record.`
      ]
    },
    {
      heading: `Common mistakes in ${p.toLowerCase()}`,
      paragraphs: [
        `Common mistakes include relying on an online template without checking current law, using an expired or unreadable identity document, assuming a video call alone creates a registered marriage, treating every Nikah Khawan as the relevant licensed registrar, failing to document a previous divorce, leaving material Nikah Nama entries unexplained, and promising universal recognition abroad. Another frequent problem is the use of the phrase NADRA marriage certificate without explaining which local authority actually handles the marriage-registration record.`,
        `The practical solution is a staged review. Confirm identity, age, free consent and marital status; decide how the Nikah will be solemnised; prepare any authority or witness arrangement; complete the Nikah Nama accurately; register the marriage through the proper channel; and then deal with certificate, translation, attestation or foreign use. That sequence keeps ${p.toLowerCase()} focused on a legally useful result rather than on the appearance of speed. Clients should prefer a provider willing to identify uncertainty over one that offers a fixed answer before seeing the documents.`
      ]
    },
  ]
}

function serviceFaqs(profile) {
  const p = profile.primary
  return [
    [`What does ${p.toLowerCase()} include?`, `It generally includes a factual consultation, document review, planning for the Nikah, the necessary witness or authority arrangements, accurate Nikah Nama preparation and guidance on the lawful registration route. The exact scope should be confirmed in the quotation.`],
    [`Can ${p.toLowerCase()} be completed entirely through WhatsApp or video call?`, `Technology can support communication and remote participation, but it does not waive legal or religious requirements. Identity, consent, witnesses, authority where needed and statutory registration still have to be handled properly.`],
    [`What identity documents are required for ${p.toLowerCase()}?`, `CNIC, NICOP or passport details are commonly required according to the parties. Foreign-national, divorced, widowed or proxy cases may need additional documents, translations or authenticated records.`],
    [`Is family permission required for adult parties?`, `Adult marriage depends on the free consent of the contracting parties subject to applicable law and religious requirements. Family disagreement should not lead to false identity, age or marital-status information. Safety concerns may require separate legal advice.`],
    [`Can a divorced person use ${p.toLowerCase()}?`, `Yes, if legally eligible, but the previous marriage and its dissolution should be documented properly. The required record depends on whether the earlier marriage ended by talaq, khula, judicial dissolution, death or a foreign process.`],
    [`How is a Nikah registered after ${p.toLowerCase()}?`, `The marriage should be dealt with through the competent Nikah Registrar and local registration authority under the applicable legal framework. A remote ceremony does not remove the registration requirement.`],
    [`Is a NADRA marriage certificate issued directly by NADRA?`, `The phrase is widely used, but it can be misleading. The marriage is registered through the competent local system; a computerised marriage record and later NADRA identity or family updates are connected but separate administrative matters.`],
    [`Are embassy documents always required?`, `No universal answer applies. Foreign-national requirements can vary with nationality, marital status, visa position, the local authority and the country where the marriage document will later be used.`],
    [`How long does ${p.toLowerCase()} take?`, `Private preparation and the Nikah can sometimes be arranged quickly when the case is straightforward, but official registration, certificate, translation or attestation steps have their own timelines. An estimate should follow document review.`],
    [`How should sensitive documents be shared?`, `Use a controlled channel and provide only what is reasonably necessary. Avoid distributing passports, CNICs and signatures to multiple unknown intermediaries merely to compare prices.`],
  ]
}

function infoSections(profile) {
  const p = profile.primary
  return [
    {
      heading: `${p}: purpose and scope`,
      paragraphs: [
        `${p} exists ${profile.purpose}. The page is written for ${profile.audience}. Court marriage work sits at the intersection of personal choice, family law, religious solemnisation, identity documents and local registration. That means useful information must do more than repeat a phone number. It should explain what the service can do, where official authority begins, which facts change the answer and when a reader should obtain case-specific legal advice before acting.`,
        `The editorial and service approach emphasises ${profile.emphasis}. CourtMarriage.live does not treat the phrase court marriage as proof that every couple must marry before a judge. For an ordinary Muslim marriage, the usual work centres on lawful Nikah, the prescribed Nikah Nama, the role of the licensed Nikah Registrar and registration through the competent local authority. Courts may be relevant for protection, family disputes or another separate remedy, but the website should not confuse those proceedings with the ordinary solemnisation of the Nikah.`
      ]
    },
    {
      heading: `${p} and legal accuracy`,
      paragraphs: [
        `Legal accuracy is particularly important in marriage-service content because age rules, local registration practice and official documentation can change. Pakistan does not operate one identical administrative office for every city and province. Sindh, Punjab and Islamabad also have their own current child-marriage legislation. A useful page should therefore identify the jurisdiction before stating a minimum age, document checklist or registration procedure. Old blog posts copied from another city can create real risk if they describe a rule that has been amended.`,
        `The website also distinguishes statutory requirements from common market language. Terms such as court marriage, online Nikah and NADRA marriage certificate are widely searched, but they can oversimplify the legal reality. Good content uses the familiar term so a reader can find the page, then explains what the term actually refers to. That approach is better for clients and for long-term search quality than repeating an inaccurate phrase simply because competitors use it.`
      ]
    },
    {
      heading: `${p}: how a court marriage enquiry is assessed`,
      paragraphs: [
        `A useful first enquiry normally covers the names and ages of the parties, city or country of residence, nationality, present marital status, availability of identity documents and whether both parties can attend. The adviser should also ask whether either person has been married before, whether a party is abroad, whether family opposition creates a safety issue and what the couple needs after the Nikah. These facts determine whether the matter is a straightforward local Nikah or requires additional legal and documentary work.`,
        `The purpose of intake is not to interrogate a client. It is to avoid giving a confident answer to the wrong facts. A person asking about a same-city adult Nikah needs different guidance from a foreign national relying on an overseas divorce and a power of attorney. When the important facts are identified at the beginning, the service can give a more accurate document list, fee scope and expected sequence. That saves time and reduces the temptation to create paperwork first and solve legal problems later.`
      ]
    },
    {
      heading: `${p} and free consent`,
      paragraphs: [
        `Free consent should remain visible throughout the service. Court marriage enquiries often arise where families disagree with the couple, but family disagreement and legal incapacity are not the same thing. An adult should be able to express the decision independently and understand the Nikah terms. If a person appears coerced, confused, underage or unable to communicate freely, the service should not simply proceed because another person has brought the documents or paid the fee.`,
        `A careful consent process also improves the quality of the Nikah Nama. Mahr, identity details and any lawful special conditions should be discussed with the parties instead of being filled in later by an intermediary. Where language is a barrier, material terms should be explained. Where one party is remote, the authority and consent arrangement should be documented clearly. Respecting consent is therefore not only an ethical principle; it has practical value for the validity, evidentiary strength and future use of the marriage record.`
      ]
    },
    {
      heading: `${p}: marriage registration explained`,
      paragraphs: [
        `Section 5 of the Muslim Family Laws Ordinance, 1961 provides for registration of Muslim marriages and licensed Nikah Registrars. That framework should be reflected consistently across CourtMarriage.live. A person who solemnises a Nikah and a person licensed to register marriages may be the same individual, but the roles should not be assumed to be identical in every case. If the Nikah is solemnised by another person, the marriage should still reach the appropriate registrar and local authority for lawful registration.`,
        `Readers should also understand the document chain. The signed Nikah Nama, registered Nikah record, computerised Marriage Registration Certificate and later NADRA identity or family-record updates are connected but distinct. A website that describes all of them as one automatic NADRA certificate creates confusion. CourtMarriage.live should identify the particular document the client needs and explain which authority controls that stage. This helps a couple plan for immigration, inheritance, banking, passport or family-record use after the ceremony.`
      ]
    },
    {
      heading: `${p} for overseas and foreign-national readers`,
      paragraphs: [
        `Overseas and foreign-national readers need cautious information because their marriage documents may cross legal systems. A Pakistani Nikah and registration process may be valid locally while a foreign civil-status, immigration or court authority asks for translation, attestation, legalisation or additional proof. The website should never promise that one Pakistani document is automatically accepted everywhere. Instead, it should explain the local process and encourage the client to check the intended destination use.`,
        `Foreign passports, visas, single-status evidence, divorce records, powers of attorney and translations may be relevant depending on the case. No universal embassy NOC applies to every foreign national. The correct approach is to identify nationality, religion, residence, marital status and the authority that will later receive the marriage document. This level of qualification makes the content more useful than a simple list of foreign-national requirements copied across every country page.`
      ]
    },
    {
      heading: `${p}: online Nikah and proxy arrangements`,
      paragraphs: [
        `Online Nikah is another area where familiar marketing language can conceal important distinctions. Technology can connect the parties, witnesses, Nikah Khawan and advisers, but a video meeting does not itself waive the requirements of Nikah or statutory registration. Where an authorised representative acts for a party, the authority should be valid and sufficiently clear. Identity and free consent should be established, and the later registration path should be planned before the ceremony.`,
        `The same caution applies to scanned signatures and digital documents. A scan may be useful for preliminary review, but an authority may still require an original, notarised, attested or certified document. The website should explain what can be done remotely and what may still require an original record or official process. This prevents clients from assuming that online means no documentation or no government involvement.`
      ]
    },
    {
      heading: `${p}: privacy and document handling`,
      paragraphs: [
        `Marriage enquiries contain highly sensitive personal information. CNICs, passports, addresses, signatures, divorce documents and family details should be handled as confidential client material. A prospective client should not be encouraged to post these documents publicly or send them to multiple unknown contacts merely to obtain a price estimate. The service should request only the information reasonably necessary at each stage and explain why a particular record is needed.`,
        `Privacy is especially important in free-will marriages where family opposition may exist. A casual disclosure of an address or identity document can create a security problem. CourtMarriage.live should therefore use controlled contact routes, city-specific phone numbers and clear internal handling. Where a protection concern exists, the client should receive case-specific legal advice rather than a marketing assurance that the marriage papers themselves will prevent every form of harassment or complaint.`
      ]
    },
    {
      heading: `${p}: fees, quotations and expectations`,
      paragraphs: [
        `A professional quotation should identify the work included. Court marriage enquiries can involve consultation, affidavit or document drafting, Nikah Khawan arrangements, Nikah Nama completion, registrar coordination, local registration, certificate assistance, translation, attestation, courier or separate court proceedings. These are not always one bundled service. Government and third-party fees should be distinguished where possible so the client can compare quotations on a like-for-like basis.`,
        `Expectations about timing should also be specific. A private provider may be able to arrange a consultation or ceremony quickly, but it cannot guarantee the internal processing speed of a government office, foreign embassy or another authority. A reliable page should say what is under the service provider's control and what is not. This is more credible than using same-day language for every stage of every case.`
      ]
    },
    {
      heading: `${p}: city-specific service routing`,
      paragraphs: [
        `CourtMarriage.live uses city-specific routing because local facts matter. Karachi, Lahore, Islamabad and Rawalpindi should not all display the same local number or be treated as one administrative jurisdiction. The city pages can share national legal principles while still addressing the correct provincial or territorial age law, local registration context and contact team. Faisalabad and Multan also need their own Punjab-focused pages rather than paragraphs added merely to capture city keywords.`,
        `City routing is also useful for client service. A caller should be able to reach the team dealing with the relevant city instead of explaining the same facts repeatedly after being transferred. Where a couple lives in one city and proposes to marry in another, the website should invite them to disclose both locations so the adviser can identify the appropriate registration route. The purpose of local pages is therefore practical as well as SEO-related.`
      ]
    },
    {
      heading: `${p}: editorial standards for legal content`,
      paragraphs: [
        `Long legal pages should be useful rather than padded. CourtMarriage.live uses headings to answer a real question every few paragraphs, avoids invented guarantees and distinguishes general information from advice on a specific file. Important legal statements should be checked against current legislation and official material before publication. When an answer can vary by nationality, province, marital status or local authority, the page should say so clearly instead of forcing every visitor into one simplified rule.`,
        `The site should also avoid thin city pages that merely replace Karachi with Lahore in the same paragraph. Some legal principles will naturally repeat, but the page should develop the local issue that makes the search useful: Punjab's current age law, Islamabad's territorial distinction, Karachi's Sindh framework, twin-city jurisdiction or foreign-national document use. This improves both client understanding and topical relevance.`
      ]
    },
    {
      heading: `${p}: when separate legal representation may be needed`,
      paragraphs: [
        `Not every marriage enquiry is only a documentation matter. Threats, confinement, violence, a false criminal allegation, a dispute about existing marital status, an injunction, guardianship issue or another contested family-law problem may require separate legal representation. The marriage service should identify that distinction early and avoid suggesting that an affidavit, photograph or registered Nikah Nama automatically resolves every dispute.`,
        `Where court proceedings are genuinely required, the client should receive advice based on the relevant cause of action and facts. This is different from manufacturing litigation merely to make an ordinary Nikah look more official. A mature service model recognises when a client needs a registrar, when a client needs a lawyer and when both roles are involved in separate stages.`
      ]
    },
    {
      heading: `${p}: after-marriage document planning`,
      paragraphs: [
        `The service should not end with the ceremony. Couples should know which original and registered records to keep, how to check spellings, what to do if a correction is needed and whether a computerised certificate is required. A person planning a visa, immigration petition, foreign spouse registration or passport change should identify those goals early because the destination authority may ask for a particular translation or authentication chain.`,
        `Good after-marriage planning also helps with ordinary life events. Marriage records can be relevant to inheritance, birth registration, insurance, banking, family registration and later family litigation. A clean official trail is therefore valuable even where the couple has no immediate immigration plan. CourtMarriage.live should encourage clients to preserve the record rather than rely on photographs of documents stored only in a messaging application.`
      ]
    },
    {
      heading: `${p}: practical next step`,
      paragraphs: [
        `A prospective client should gather the core identity documents, current address information and evidence of present marital status before contacting the team. If a party is abroad, include the country and likely participation method. If either person was previously married, mention how that marriage ended. If a foreign authority will later use the document, say which country and purpose. These details allow the first consultation to produce a meaningful checklist instead of a generic response.`,
        `The next step should then be proportionate to the file. A simple matter may move directly to scheduling; a complex matter may need a document correction, legal opinion, translation, authority document or separate protection advice first. The aim is not to create delay but to prevent the more expensive delay that occurs when a marriage record is completed incorrectly. That service philosophy is the practical foundation of ${p}.`
      ]
    },
  ]
}

function infoFaqs(profile) {
  const p = profile.primary
  return [
    [`What is the purpose of ${p}?`, `${profile.purpose}. It is intended for ${profile.audience}.`],
    [`Does CourtMarriage.live claim that every court marriage happens before a judge?`, `No. For an ordinary Muslim marriage, the usual process concerns lawful Nikah, proper documentation and registration. Court proceedings are separate and become relevant only where a legal dispute or remedy requires them.`],
    [`Why are city pages different?`, `Age legislation, local administrative context, registrar jurisdiction and contact routing can differ. The site therefore keeps Karachi, Punjab cities and Islamabad distinct instead of using one national checklist for every location.`],
    [`Why does the site qualify foreign-national requirements?`, `Because nationality, marital status, visa position and the intended foreign use of documents can change what is needed. A universal embassy NOC rule would be inaccurate.`],
    [`What does marriage registration involve?`, `A Muslim marriage should be recorded through the competent Nikah Registrar and local authority under the applicable legal framework. The signed Nikah Nama, registered record, computerised certificate and later NADRA updates are related but distinct.`],
    [`Can legal advice be given from a short website enquiry?`, `General guidance can identify likely issues, but a reliable case-specific opinion may require identity, age, marital-status and jurisdiction documents. Complex files should be reviewed before a promise is made.`],
    [`How are client documents treated?`, `Identity and family records should be handled confidentially and shared only with persons reasonably involved in the consultation, Nikah, registration or other authorised work.`],
    [`Does a fast Nikah guarantee fast government processing?`, `No. Private preparation may be quick in a straightforward file, but registration, certificate, attestation and foreign-authority processing have their own timelines.`],
    [`Why does CourtMarriage.live use long-form content?`, `Because marriage decisions often involve several linked questions. A page should explain the process, documents, risks and authority roles instead of forcing a client to rely on a thin sales paragraph.`],
    [`What should a new client prepare before contacting the team?`, `Identity documents, ages, current addresses, marital-status information and details of any previous marriage or overseas/foreign-national issue are the best starting point.`],
  ]
}

export function getLongFormContent(slug, page) {
  if (cityProfiles[slug]) {
    return { sections: citySections(cityProfiles[slug], page), faqs: cityFaqs(cityProfiles[slug], page) }
  }
  if (serviceProfiles[slug]) {
    return { sections: serviceSections(serviceProfiles[slug]), faqs: serviceFaqs(serviceProfiles[slug]) }
  }
  if (infoProfiles[slug]) {
    return { sections: infoSections(infoProfiles[slug]), faqs: infoFaqs(infoProfiles[slug]) }
  }
  return { sections: [], faqs: [] }
}
