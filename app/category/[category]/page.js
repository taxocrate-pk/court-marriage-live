import { notFound } from 'next/navigation'
import RecoveryPage from '@/app/recovery-page'
import { recoveryPages, recoveryPage, recoveryMetadata } from '@/lib/recovery'

export const dynamicParams = false

export function generateStaticParams() {
  return recoveryPages.filter((page) => page.kind === 'category').map((page) => ({ category: page.slug.split('/')[1] }))
}

export async function generateMetadata({ params }) {
  const { category } = await params
  const page = recoveryPage(`category/${category}`)
  return page ? recoveryMetadata(page) : {}
}

export default async function CategoryPage({ params }) {
  const { category } = await params
  const page = recoveryPage(`category/${category}`)
  if (!page || page.kind !== 'category') notFound()
  return <RecoveryPage page={page} />
}
