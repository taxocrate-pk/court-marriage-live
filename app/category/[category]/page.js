import { notFound } from 'next/navigation'
import SitePage from '@/app/recovery-page'
import { allSiteSlugs, getSitePage } from '@/lib/site-pages'
import { recoveryMetadata } from '@/lib/recovery'
export const dynamicParams=false
export function generateStaticParams(){return allSiteSlugs.filter(slug=>slug.startsWith('category/')).map(slug=>({category:slug.split('/')[1]}))}
export async function generateMetadata({params}){const {category}=await params;const page=getSitePage(`category/${category}`);return page?recoveryMetadata(page):{}}
export default async function Page({params}){const {category}=await params;const page=getSitePage(`category/${category}`);if(!page)notFound();return <SitePage page={page}/>}
