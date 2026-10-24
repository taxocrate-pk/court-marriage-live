import { notFound } from 'next/navigation'
import SitePage from '@/app/recovery-page'
import { allSiteSlugs, getSitePage } from '@/lib/site-pages'
import { recoveryMetadata } from '@/lib/recovery'
export const dynamicParams = false
export function generateStaticParams(){return allSiteSlugs.filter(slug=>!slug.includes('/')).map(slug=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;const page=getSitePage(slug);return page?recoveryMetadata(page):{}}
export default async function Page({params}){const {slug}=await params;const page=getSitePage(slug);if(!page)notFound();return <SitePage page={page}/>}
