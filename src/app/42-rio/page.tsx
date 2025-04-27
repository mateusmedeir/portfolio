import { Metadata } from 'next'
import Footer from '@/components/footer'
import Topbar from '@/components/topbar'
import { useTranslations } from 'next-intl'
import { ExperienceHero } from '@/components/experience-hero'
import {
  ExperienceDescription,
  ExperienceDescriptionContent,
  ExperienceDescriptionHeader,
  ExperienceDescriptionList,
  ExperienceDescriptionListContent,
  ExperienceDescriptionListHeader,
  ExperienceDescriptionListItem,
  ExperienceDescriptionListTitle,
  ExperienceDescriptionText,
  ExperienceDescriptionTitle
} from '@/components/experience-description'

export const metadata: Metadata = {
  title: '42 Rio - Mateus Lopes'
}

export default function School42Rio() {
  const t = useTranslations('42 Rio')
  return (
    <main className="main">
      <Topbar />
      <ExperienceHero
        img={{ src: '/42-rio/full-logo.svg', alt: '42 Rio Logo' }}
        title="42 Rio"
        companyDescription={t('summary.company')}
        jobDescription={t('summary.job')}
        experienceDetails={{
          role: t('role'),
          collaborators: [
            'Lucas Fads (PO)',
            'Allan Prado',
            'Guilherme Clemente',
            'Gabriel Oliveira'
          ],
          duration: {
            start: new Date('November 2024')
          }
        }}
        skills={[
          'TypeScript',
          'React',
          'Next.js',
          'Python',
          'Django REST Framework',
          'PostgreSQL',
          'Docker',
          'Penpot',
          'ChartDB'
        ]}
      />

      <ExperienceDescription variant="highlight">
        <ExperienceDescriptionHeader>
          <ExperienceDescriptionTitle>
            {t('description.role.title')}
          </ExperienceDescriptionTitle>
        </ExperienceDescriptionHeader>
        <ExperienceDescriptionContent>
          <ExperienceDescriptionList>
            <ExperienceDescriptionListContent>
              {Array.from({ length: 5 }, (_, index) => (
                <ExperienceDescriptionListItem key={index}>
                  {t(`description.role.list-1.item-${index + 1}`)}
                </ExperienceDescriptionListItem>
              ))}
            </ExperienceDescriptionListContent>
          </ExperienceDescriptionList>
        </ExperienceDescriptionContent>
      </ExperienceDescription>

      <ExperienceDescription variant="default">
        <ExperienceDescriptionHeader>
          <ExperienceDescriptionTitle>
            {t('description.general.title')}
          </ExperienceDescriptionTitle>
        </ExperienceDescriptionHeader>
        <ExperienceDescriptionContent>
          <ExperienceDescriptionText>
            {t('description.general.text')}
          </ExperienceDescriptionText>
          {Object.entries({
            1: 2,
            2: 1,
            3: 2
          }).map(([key, value]) => (
            <ExperienceDescriptionList key={key}>
              <ExperienceDescriptionListHeader>
                <ExperienceDescriptionListTitle>
                  {key}. {t(`description.general.list-${key}.title`)}
                </ExperienceDescriptionListTitle>
              </ExperienceDescriptionListHeader>
              <ExperienceDescriptionListContent>
                {Array.from({ length: value }, (_, index) => (
                  <ExperienceDescriptionListItem key={index}>
                    {t(`description.general.list-${key}.item-${index + 1}`)}
                  </ExperienceDescriptionListItem>
                ))}
              </ExperienceDescriptionListContent>
            </ExperienceDescriptionList>
          ))}
        </ExperienceDescriptionContent>
      </ExperienceDescription>

      <ExperienceDescription variant="muted">
        <ExperienceDescriptionHeader>
          <ExperienceDescriptionTitle>
            {t('description.discovery.title')}
          </ExperienceDescriptionTitle>
        </ExperienceDescriptionHeader>
        <ExperienceDescriptionContent>
          <ExperienceDescriptionText>
            {t('description.discovery.text')}
          </ExperienceDescriptionText>
          {Object.entries({
            1: 3,
            2: 3
          }).map(([key, value]) => (
            <ExperienceDescriptionList key={key}>
              <ExperienceDescriptionListHeader>
                <ExperienceDescriptionListTitle>
                  {key}. {t(`description.discovery.list-${key}.title`)}
                </ExperienceDescriptionListTitle>
              </ExperienceDescriptionListHeader>
              <ExperienceDescriptionListContent>
                {Array.from({ length: value }, (_, index) => (
                  <ExperienceDescriptionListItem key={index}>
                    {t.rich(
                      `description.discovery.list-${key}.item-${index + 1}`,
                      {
                        bold: (children: React.ReactNode) => (
                          <strong className="font-bold">{children}</strong>
                        )
                      }
                    )}
                  </ExperienceDescriptionListItem>
                ))}
              </ExperienceDescriptionListContent>
            </ExperienceDescriptionList>
          ))}
        </ExperienceDescriptionContent>
      </ExperienceDescription>

      <ExperienceDescription variant="highlight">
        <ExperienceDescriptionHeader>
          <ExperienceDescriptionTitle>
            {t('description.problem-statement.title')}
          </ExperienceDescriptionTitle>
        </ExperienceDescriptionHeader>
        <ExperienceDescriptionContent>
          <ExperienceDescriptionText>
            {t('description.problem-statement.text')}
          </ExperienceDescriptionText>
        </ExperienceDescriptionContent>
      </ExperienceDescription>

      <ExperienceDescription variant="default">
        <ExperienceDescriptionHeader>
          <ExperienceDescriptionTitle>
            {t('description.solution.title')}
          </ExperienceDescriptionTitle>
        </ExperienceDescriptionHeader>
        <ExperienceDescriptionContent>
          {Object.entries({
            1: 5,
            2: 3,
            3: 2,
            4: 3,
            5: 3
          }).map(([key, value]) => (
            <ExperienceDescriptionList key={key}>
              <ExperienceDescriptionListHeader>
                <ExperienceDescriptionListTitle>
                  {key}. {t(`description.solution.list-${key}.title`)}
                </ExperienceDescriptionListTitle>
              </ExperienceDescriptionListHeader>
              <ExperienceDescriptionListContent>
                {Array.from({ length: value }, (_, index) => (
                  <ExperienceDescriptionListItem key={index}>
                    {t.rich(
                      `description.solution.list-${key}.item-${index + 1}`,
                      {
                        bold: children => (
                          <strong className="font-bold">{children}</strong>
                        )
                      }
                    )}
                  </ExperienceDescriptionListItem>
                ))}
              </ExperienceDescriptionListContent>
            </ExperienceDescriptionList>
          ))}
        </ExperienceDescriptionContent>
      </ExperienceDescription>

      <Footer />
    </main>
  )
}
