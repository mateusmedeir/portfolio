import { Metadata } from 'next'
import Footer from '@/components/footer'
import Topbar from '@/components/topbar'
import { useTranslations } from 'next-intl'
import { ExperienceHero } from '@/components/experience-hero'

export const metadata: Metadata = {
  title: 'Youtube Redesign - Mateus Lopes'
}

export default function YTRedesign() {
  const t = useTranslations('YT Redesign')
  return (
    <main className="main">
      <Topbar />
      <ExperienceHero
        img={{
          src: '/yt-redesign/full-logo.svg',
          alt: 'Youtube Redesign Logo'
        }}
        title="Youtube Redesign"
        companyDescription={t('summary.company')}
        skills={['Javascript', 'TypeScript', 'React', 'Next.js']}
        links={[
          {
            href: 'https://youtuberedesign.com',
            text: 'youtuberedesign.com'
          },
          {
            href: 'https://chromewebstore.google.com/detail/youtube-redesign/fpeaolalpkekllklmmenekfeaegbocop',
            text: 'Chrome Web Store'
          }
        ]}
      />
      <Footer />
    </main>
  )
}
