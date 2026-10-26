import assert from 'node:assert/strict'
import test from 'node:test'
import { articleWordCount, countEditorialWords, firstArticleSubheading } from '../lib/editorial.js'

test('editorial words treat punctuation as boundaries without counting markup', () => {
  assert.equal(countEditorialWords('Court Marriage — consent, records and Mahr.'), 6)
})

test('article count includes headings and table but excludes contextual navigation, FAQs and hero', () => {
  const sections = [
    { heading: 'First Topic', paragraphs: ['One paragraph here.'], links: [{ label: 'Read More', href: '/ignored/' }] },
    { heading: 'Second Topic', paragraphs: ['Another paragraph.'] },
    { heading: 'Third Topic', paragraphs: ['Final paragraph.'] },
  ]
  const page = {
    focus: 'Court Marriage', firstSubheading: 'A Useful Subheading',
    intro: 'The hero must not enter this denominator.',
    faqs: [['Question ignored?', 'Answer ignored.']],
    table: { caption: 'Caption excluded consistently with the audit', headers: ['Stage'], rows: [['Prepare'], ['Register']] },
  }
  // 13 heading/prose words + 3 subheading words + 3 table words; link labels excluded.
  assert.equal(articleWordCount(page, sections), 19)
})

test('a substantive heading can cross the FAQ threshold even when prose is below it', () => {
  const page = { firstSubheading: 'Review' }
  assert.equal(articleWordCount(page, [{ heading: 'Guidance', paragraphs: [Array(1197).fill('word').join(' ')] }]), 1199)
  assert.equal(articleWordCount(page, [{ heading: 'Guidance', paragraphs: [Array(1198).fill('word').join(' ')] }]), 1200)
})

test('renderer and counter use the same first subheading', () => {
  assert.equal(firstArticleSubheading({ focus: 'Online Nikah' }), 'Checking Participation, Authority and Documentation')
  assert.equal(firstArticleSubheading({ focus: 'Nikah Nama' }), 'Reading the Prescribed Marriage Record')
})
