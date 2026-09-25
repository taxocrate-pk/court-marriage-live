const nikahNamaProfiles = {
  'nikah-nama-english-urdu-karachi': {
    city: 'Karachi',
    region: 'Sindh',
    phone: '+92 333 1127830',
    ageNote: 'In Sindh, the Sindh Child Marriages Restraint Act, 2013 treats a person under eighteen, whether male or female, as a child. Age and identity records should therefore be checked before a Nikah Nama is prepared for a new marriage.',
    localNote: 'Karachi files can involve different Union Council, district and cantonment contexts, so the registrar and competent local authority should be identified from the actual marriage and address facts rather than from the city name alone.'
  },
  'nikah-nama-english-urdu-lahore': {
    city: 'Lahore',
    region: 'Punjab',
    phone: '+92 333 1127835',
    ageNote: 'Punjab now sets eighteen as the minimum age for both male and female contracting parties under the Punjab Child Marriage Restraint Act, 2026. A Lahore Nikah Nama file should therefore begin with reliable age and identity verification.',
    localNote: 'Lahore couples may live in different parts of the city or come from another Punjab district. The relevant Nikah Registrar and local registration authority should be identified before the final record is submitted.'
  },
  'nikah-nama-english-urdu-islamabad': {
    city: 'Islamabad',
    region: 'Islamabad Capital Territory',
    phone: '+92 333 1127836',
    ageNote: 'The Islamabad Capital Territory Child Marriage Restraint Act, 2025 treats a person under eighteen as a child. Reliable age evidence is therefore an essential preliminary check for a new Nikah Nama in Islamabad.',
    localNote: 'Islamabad is a federal territory and should not be administratively merged with Rawalpindi merely because the cities are adjacent. The appropriate local registration route should be confirmed from the facts of the marriage.'
  },
  'nikah-nama-english-urdu-rawalpindi': {
    city: 'Rawalpindi',
    region: 'Punjab',
    phone: '+92 333 1127831',
    ageNote: 'Punjab now sets eighteen as the minimum age for both male and female contracting parties under the Punjab Child Marriage Restraint Act, 2026. A Rawalpindi Nikah Nama file should therefore use reliable age and identity records.',
    localNote: 'Rawalpindi is within Punjab and is legally distinct from Islamabad. Twin-city residence or employment should not be used to assume that the same registrar or local authority has jurisdiction on both sides.'
  },
}

function sections(profile, page) {
  const city = profile.city
  const title = page.title
  return [
    {
      heading: `${title}: what the document is and why it matters`,
      paragraphs: [
        `A Nikah Nama in ${city} is the prescribed marriage record used to document a Muslim Nikah and the material particulars of the marriage. It records the identities of the spouses, the relevant witness and registrar particulars, Mahr and other information required by the prescribed form. It should not be treated as a decorative certificate or a form that can safely be completed from memory after the ceremony. The entries become part of the documentary trail relied upon for marriage registration and may later be important in family-law, inheritance, immigration, passport, banking and civil-status matters.`,
        `The legal importance of the Nikah Nama comes from the marriage and registration framework, including section 5 of the Muslim Family Laws Ordinance, 1961 and the rules governing Nikah Registrars. A licensed Nikah Registrar performs the statutory registration function for the relevant area. If another person solemnises the Nikah, the marriage still has to reach the competent registrar in the manner required by law. For that reason, a ${city} Nikah Nama service should identify the solemnisation and registration roles before the document is signed, not only after a couple asks for a certificate.`
      ]
    },
    {
      heading: `Nikah Nama in ${city}: Urdu form, English translation and foreign use`,
      paragraphs: [
        `Clients commonly ask for an “English Nikah Nama” because they need marriage evidence for an embassy, immigration file, foreign civil-status office or another institution. The safer legal approach is to distinguish the prescribed and registered Nikah record from an English translation or bilingual presentation prepared for a receiving authority. A translation can be extremely useful, but it should accurately reflect the registered source document and should not be advertised as automatically replacing every original or official certificate in Pakistan or abroad.`,
        `For Nikah Nama services in ${city}, the intended use should be identified early. A couple using the marriage record only in Pakistan may need a different document set from a couple filing a spouse visa or registering the marriage in another country. A foreign authority may request a certified translation, a computerised Marriage Registration Certificate, MOFA attestation, consular legalisation or another verification step. The receiving authority ultimately determines what it accepts. CourtMarriage.live should therefore prepare a clear Pakistani record first and then assist with the appropriate translation or authentication path rather than promising universal acceptance of one English document.`
      ]
    },
    {
      heading: `Legal registration of a Nikah Nama in ${city}`,
      paragraphs: [
        `A signed Nikah Nama and a registered marriage record are closely connected, but couples should understand the registration stage. Section 5 of the Muslim Family Laws Ordinance, 1961 requires Muslim marriages to be registered and provides for licensed Nikah Registrars. The practical process requires accurate completion of the prescribed record and submission through the competent registration channel. A private ceremony, photographs, an affidavit or a document signed by the parties cannot substitute for the statutory registration process.`,
        `${profile.localNote} This is particularly important when the bride and groom have addresses in different localities, when the Nikah takes place away from their normal residence or when an overseas party is represented through an authorised person. The registration route should be identified from the applicable rules and actual facts. A well-prepared Nikah Nama in ${city} should leave a traceable official record so certified copies or later marriage-registration documents can be obtained without reconstructing the entire event from informal evidence.`
      ]
    },
    {
      heading: `Age and identity checks before preparing a Nikah Nama in ${city}`,
      paragraphs: [
        `${profile.ageNote} A responsible service should not rely on appearance, family assurances or an approximate age entered for convenience. CNIC, NICOP, passport or other reliable identity records should be reviewed and any material discrepancy should be resolved before the Nikah is solemnised or the prescribed marriage record is finalised. Child-marriage laws can impose serious consequences on persons who contract, facilitate, solemnise or register a prohibited marriage.`,
        `Identity accuracy is equally important. Names, parentage, dates of birth, identity numbers and addresses should be written consistently with the documents that will later support registration. A small spelling difference may look harmless at the ceremony but can cause difficulty when a couple applies for a computerised marriage certificate, updates family records or presents the Nikah Nama to a foreign authority. Where a person holds more than one passport or has inconsistent English spellings across records, the discrepancy should be discussed before the document is completed rather than corrected informally afterwards.`
      ]
    },
    {
      heading: `Nikah Nama in ${city}: recording free consent and marital status`,
      paragraphs: [
        `A Nikah Nama should reflect a marriage entered with free consent. Court marriage and free-will marriage enquiries often arise where families disagree with the couple, making it especially important that each adult party understands the proposed Nikah and can communicate the decision independently. The document should not be used to manufacture consent after the fact. If there is evidence of coercion, impersonation, incapacity or uncertainty about a party's wishes, the process should stop until the issue is resolved.`,
        `Current marital status must also be recorded responsibly. A person who was previously married may need to provide the relevant talaq, divorce, khula, dissolution or death record, depending on how the previous marriage ended. A verbal claim that an earlier marriage is over is not a reliable foundation for a new official record. In a ${city} Nikah Nama file involving a foreign divorce or overseas marriage, translation, authentication or further legal review may be needed before the new status is entered. Accurate status information protects both spouses and reduces future problems in registration and litigation.`
      ]
    },
    {
      heading: `Mahr in a Nikah Nama in ${city}`,
      paragraphs: [
        `Mahr is a substantive term of the Muslim marriage and should be recorded clearly in the Nikah Nama. The parties should agree on the amount or property, understand whether it is prompt, deferred or divided between the two, and ensure the entry reflects the actual agreement. Vague language or a figure inserted without the bride's knowledge can create avoidable disputes. If jewellery, property or another asset is used instead of a simple cash figure, the description should be sufficiently clear to identify what was promised.`,
        `A good Nikah Nama service in ${city} should discuss Mahr before signatures are taken. The adviser or registrar should not make assumptions based on family custom or use a standard figure without instructions. If part of the Mahr has already been paid, the record should reflect the parties' agreement accurately. Because Mahr disputes can later reach a Family Court, the original wording matters. The object is not to turn the ceremony into litigation drafting; it is to make sure that an important financial term is documented with the clarity expected of a serious marriage contract.`
      ]
    },
    {
      heading: `Special conditions and delegated rights in a Nikah Nama in ${city}`,
      paragraphs: [
        `The prescribed Nikah Nama contains entries capable of recording important contractual information. Couples should be given the opportunity to understand any lawful special conditions or delegated rights relevant to their marriage instead of being told automatically to leave optional portions blank. The precise legal effect of a proposed condition depends on its wording and applicable law, so a party who wants a significant financial, residence, education, employment or other condition should obtain appropriate advice before the ceremony.`,
        `A Nikah Nama in ${city} should record the parties' actual agreement at the time of the Nikah. It is risky to assume that a material entry can simply be rewritten informally after registration. If the spouses later make another lawful agreement, its legal effect and the correct form of documentation should be considered separately rather than altering the original record. Clear drafting at the outset is therefore preferable. Each party should read the relevant entries or have them explained before signing, particularly where delegated divorce rights or substantial financial conditions are being discussed.`
      ]
    },
    {
      heading: `Witness information and signatures on a ${city} Nikah Nama`,
      paragraphs: [
        `Witness arrangements should be handled according to the applicable religious requirements and recorded accurately in the Nikah Nama. The service should confirm the identities of the persons acting as witnesses and avoid using names merely because a form needs to be filled. Their particulars should be written consistently with identity records where the prescribed document requires them. The same principle applies to the signatures or thumb impressions of the parties and any authorised representative.`,
        `Where a Nikah is conducted through a remote or proxy arrangement, the evidentiary value of clear witness and authority information becomes even more important. A video connection can assist communication, but it should not be used to create a false record of physical presence or authority. For a Nikah Nama in ${city}, the file should make it possible to understand who consented, who witnessed the relevant acts, who solemnised the Nikah and who performed the registration function. That clarity strengthens the official record and reduces later disputes about the circumstances of the marriage.`
      ]
    },
    {
      heading: `Nikah Khawan and Nikah Registrar roles in ${city}`,
      paragraphs: [
        `The terms Nikah Khawan and Nikah Registrar are often used together, but they describe different functions. A Nikah Khawan or another competent person may solemnise the marriage according to the applicable religious requirements. A licensed Nikah Registrar has the statutory registration role for the relevant area. In some cases one person performs both roles, but couples should not assume that every Nikah Khawan is licensed to register every marriage regardless of locality.`,
        `Before preparing a Nikah Nama in ${city}, the couple should know who will solemnise the Nikah and who will deal with the official registration. If the Nikah is solemnised by someone other than the competent registrar, the marriage must still be reported and registered through the proper channel. This distinction matters because a beautifully completed private form is not the same thing as a traceable registered record. CourtMarriage.live should therefore coordinate the ceremony and documentation with the registration route rather than treating registrar involvement as an optional later service.`
      ]
    },
    {
      heading: `Nikah Nama and Marriage Registration Certificate in ${city}`,
      paragraphs: [
        `The Nikah Nama and a computerised Marriage Registration Certificate are related but distinct records. The Nikah Nama records the marriage contract and particulars; registration places the marriage in the official local record; and a computerised certificate may then be obtained through the competent civil-registration process. The popular expression “NADRA marriage certificate” can cause confusion because NADRA does not solemnise the Nikah and the local registration function should not be described as if every certificate is directly issued by NADRA itself.`,
        `A couple in ${city} should first identify which document an institution is asking for. A Pakistani office may accept a registered Nikah Nama for one purpose while an embassy asks for a computerised certificate and certified English translation. Later NADRA identity or family-record updates are another administrative stage. Treating these records separately makes it easier to correct mistakes and to provide the right document without unnecessary expense. CourtMarriage.live should explain the chain from Nikah Nama to registration and certificate rather than using one label for every marriage-related record.`
      ]
    },
    {
      heading: `Nikah Nama in ${city} for overseas Pakistanis and foreign nationals`,
      paragraphs: [
        `Overseas Pakistani and foreign-national marriages require additional attention because the Nikah Nama may be used outside Pakistan. Passport details, CNIC or NICOP information, current marital status, visa or entry records, foreign divorce documents, translations and powers of attorney may be relevant depending on the circumstances. No single embassy NOC rule applies to every nationality. The correct checklist should be based on the actual passport, religion, residence, previous marriage and the authority that will later receive the document.`,
        `Where a party cannot attend in ${city}, a proxy or remote Nikah may be considered if the applicable religious and legal requirements, identity, consent and authority arrangements can properly be satisfied. The Nikah Nama must still be completed and registered through a lawful route. After registration, the couple may need an English translation, MOFA attestation, consular legalisation or another destination-country procedure. A Pakistani Nikah Nama service can prepare a strong local record, but it should not promise that every foreign state will accept the same document without its own formalities.`
      ]
    },
    {
      heading: `Corrections and mistakes in a Nikah Nama in ${city}`,
      paragraphs: [
        `Common Nikah Nama mistakes include misspelled names, incorrect identity numbers, incomplete addresses, unclear Mahr entries, inaccurate marital status and blank fields that nobody explained to the parties. These errors should be prevented at the drafting stage. If an error is discovered after registration, the correct remedy depends on the type of mistake and the record held by the competent authority. A couple should not create a privately edited scan and assume that the official record has been corrected.`,
        `For a registered Nikah Nama in ${city}, any correction should be handled through the lawful administrative or legal route applicable to the record. Supporting identity documents may be needed, and a material dispute can require more than a clerical request. This is another reason to check the document before everyone leaves the ceremony. Names, identity numbers, dates, Mahr and other important entries should be read back against the source documents. Prevention is faster and less expensive than trying to reconcile inconsistent marriage records later.`
      ]
    },
    {
      heading: `Certified copies, English translation and attestation of a ${city} Nikah Nama`,
      paragraphs: [
        `A spouse may later need a certified copy of the registered marriage record because the original is lost, an immigration authority wants a fresh copy or a legal case requires documentary evidence. The availability and form of a copy depend on the authority holding the record. CourtMarriage.live should help the client identify the registrar or local authority rather than suggest that any newly typed form is equivalent to the registered source. Traceability to the official record is the important point.`,
        `For foreign use, an English translation should reproduce the names, dates, Mahr and other relevant entries accurately. Depending on the destination, the translation or marriage certificate may need certification, MOFA attestation, embassy legalisation or another verification process. The rules of the receiving authority should be checked before money is spent on unnecessary steps. A ${city} Nikah Nama that has been correctly registered gives the couple a sound source document from which translations and later certifications can be prepared with much less uncertainty.`
      ]
    },
    {
      heading: `Nikah Nama service fees in ${city} and what should be included`,
      paragraphs: [
        `A quotation for Nikah Nama services in ${city} should identify what work is included. Preparation of the prescribed form, Nikah Khawan attendance, registrar coordination, local registration, a computerised Marriage Registration Certificate, certified copies, English translation, courier and attestation are different tasks and may not all be included in one fee. Government and third-party charges should be distinguished where possible. A low headline price is not useful if the client later discovers that registration or the document actually needed for an embassy is separate.`,
        `Complexity also affects the fee. A straightforward local first marriage is different from a foreign-national case involving a prior divorce and overseas power of attorney. CourtMarriage.live should review enough facts to give a realistic scope before collecting documents or scheduling a ceremony. The client should also be told which processing times are controlled by a registrar, local authority, MOFA, embassy or foreign institution. Transparent scope and realistic timing are part of professional Nikah Nama work and help avoid disputes after the Nikah.`
      ]
    },
    {
      heading: `How to prepare for Nikah Nama services in ${city}`,
      paragraphs: [
        `Before contacting a Nikah Nama service in ${city}, the couple should gather clear identity documents, current address information, ages, marital-status details and any record relating to a previous marriage. They should also think about Mahr and whether any lawful special conditions need discussion. If one party is abroad, the country of residence and proposed participation method should be disclosed. If the record will be used for immigration or another foreign purpose, the destination country and intended use should be mentioned at the beginning.`,
        `The next step should be based on the file rather than a generic script. A straightforward matter may proceed to scheduling after document review, while a complex file may need a corrected identity record, certified divorce document, translation, authority instrument or legal opinion first. This is not delay for its own sake. The purpose is to make the original Nikah Nama accurate, register it through the correct channel and give the couple a reliable record that can be used years later without explaining avoidable contradictions.`
      ]
    },
  ]
}

function faqs(profile, page) {
  const city = profile.city
  return [
    [`What is a Nikah Nama in ${city}?`, `It is the prescribed marriage record documenting the particulars of a Muslim Nikah. It should be completed accurately and dealt with through the competent Nikah Registrar and local registration process.`],
    [`Is an English Nikah Nama the same as the original registered Nikah Nama?`, `An English translation or bilingual document can be useful, especially for foreign use, but it should accurately reflect the registered source record. A receiving authority may also request a computerised marriage certificate, certification or attestation.`],
    [`Who registers a Nikah Nama in ${city}?`, `The statutory registration function is performed through the relevant licensed Nikah Registrar and competent local authority under the applicable marriage-registration framework.`],
    [`What age is required for a new Nikah Nama in ${city}?`, `${profile.ageNote}`],
    [`Can Mahr and special conditions be written in the Nikah Nama?`, `Mahr should be recorded clearly. Lawful special conditions or delegated rights may also be relevant, but significant terms should be understood and drafted carefully before the parties sign.`],
    [`What if one spouse was previously married?`, `The present marital status should be supported by the appropriate talaq, divorce, khula, dissolution or death record. Foreign documents may require translation or authentication.`],
    [`Can an overseas Pakistani complete a Nikah Nama for a remote Nikah?`, `A remote or proxy arrangement may be possible when identity, free consent, witnesses, authority and the applicable religious and registration requirements are properly satisfied.`],
    [`Is a computerised marriage certificate the same as the Nikah Nama?`, `No. The Nikah Nama is the marriage record; a computerised Marriage Registration Certificate is a related civil-registration document. Later NADRA identity or family-record updates are separate.`],
    [`Can a mistake in a registered Nikah Nama simply be edited?`, `No. The appropriate correction process depends on the official record and the type of error. A privately edited scan does not correct the registered source.`],
    [`What should we bring for Nikah Nama services in ${city}?`, `Bring clear identity documents, age information, current addresses, marital-status records and any previous-marriage or overseas documents. Discuss Mahr and any proposed special conditions before the ceremony.`],
  ]
}

export function getNikahNamaContent(slug, page) {
  const profile = nikahNamaProfiles[slug]
  if (!profile) return { sections: [], faqs: [] }
  return { sections: sections(profile, page), faqs: faqs(profile, page) }
}

export function isNikahNamaSlug(slug) {
  return Boolean(nikahNamaProfiles[slug])
}
