import { Metadata } from 'next'
import Footer from '@/components/footer'
import Topbar from '@/components/topbar'
import { useTranslations } from 'next-intl'
import { ExperienceHero, ExperienceProject } from '@/components/experience-hero'

export const metadata: Metadata = {
  title: 'Garrafa no Mar - Mateus Lopes'
}

export default function GarrafaNoMar() {
  const t = useTranslations('Garrafa')
  return (
    <main className="main relative">
      <Topbar />
      <ExperienceHero
        img={{ src: '/gnm/full-logo.svg', alt: 'Garrafa no Mar Logo' }}
        title="Garrafa no Mar"
        companyDescription={t('summary.company')}
        experienceDetails={{
          role: t('role'),
          duration: {
            start: new Date('May 2023'),
            end: new Date('September 2024')
          }
        }}
        skills={[
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'Nest.js',
          'Angular',
          'Ionic',
          'Node.js',
          'Nx',
          'Tailwind CSS',
          'Prisma',
          'Swagger',
          'PostgreSQL'
        ]}
        links={[
          {
            href: 'https://www.garrafanomar.com.br/',
            text: 'garrafanomar.com.br'
          },
          {
            href: 'https://play.google.com/store/apps/details?id=com.garrafa.app',
            text: 'Google Play Store'
          }
        ]}
      />
      <Footer />
    </main>
  )
}
