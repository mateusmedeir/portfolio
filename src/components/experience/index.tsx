import Image from 'next/image'
import { useTranslations } from 'next-intl'
import toCapitalCase from '@/libs/toCapitalCase'

interface ImgProps {
  src: string
  alt: string
}

interface DurationProps {
  start: Date
  end?: Date
}

interface ExperienceHeroDetailsProps {
  role: string
  collaborators?: string[]
  agency?: string
  duration: DurationProps | number
}

interface ExperienceHeroProps {
  img?: ImgProps
  title: string
  companyDescription: string
  jobDescription?: string
  skills?: string[]
  experienceDetails: ExperienceHeroDetailsProps
}

const ExperienceHero: React.FC<ExperienceHeroProps> = ({
  img = { src: '/placeholder.svg', alt: 'Placeholder' },
  title,
  companyDescription,
  jobDescription,
  skills,
  experienceDetails
}) => {
  const t = useTranslations('Components.ExperienceHero')

  let startTime = ''
  let endTime = ''

  if (typeof experienceDetails.duration !== 'number') {
    startTime = `${toCapitalCase(
      experienceDetails.duration.start.toLocaleString(t('duration.locale'), {
        month: 'long'
      })
    )} ${experienceDetails.duration.start.getFullYear()}`
    endTime = experienceDetails.duration.end
      ? `${toCapitalCase(
          experienceDetails.duration.end.toLocaleString(t('duration.locale'), {
            month: 'long'
          })
        )} ${experienceDetails.duration.end.getFullYear()}`
      : t('duration.present')
  }

  return (
    <section className="w-full grid gap-8 py-10">
      <Image
        className="mx-auto max-w-[112rem] w-full h-[40rem] object-cover md:px-5"
        src={img.src}
        alt={img.alt}
        width={1080}
        height={1080}
        priority
      />
      <div className="container">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="flex flex-col col-span-2 gap-4">
            <h1 className="text-black-100 font-bold text-2xl">{title}</h1>
            <p className="text-black-100">{companyDescription}</p>
            <p className="text-black-100">{jobDescription}</p>
            {!!skills?.length && (
              <div className="flex flex-col gap-4">
                <h2 className="text-black-100 font-bold text-xl">Techs</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <p
                      key={index}
                      className="text-black-100 py-1.5 px-4 bg-gray-100 w-fit rounded-md"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="md:w-fit w-full ml-auto md:flex md:flex-col grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-black-100 font-bold">{t('role')}</h2>
              <p className="text-black-100">{experienceDetails.role}</p>
            </div>
            {!!experienceDetails.collaborators && (
              <div>
                <h2 className="text-black-100 font-bold">
                  {t('collaborators')}
                </h2>
                {experienceDetails.collaborators?.map((collaborator, index) => (
                  <p key={index} className="text-black-100">
                    {collaborator}
                  </p>
                ))}
              </div>
            )}
            {!!experienceDetails.agency && (
              <div>
                <h2 className="text-black-100 font-bold">{t('agency')}</h2>
                <p className="text-black-100">{experienceDetails.agency}</p>
              </div>
            )}
            <div>
              <h2 className="text-black-100 font-bold">
                {t('duration.title')}
              </h2>
              <p className="text-black-100">
                {typeof experienceDetails.duration === 'number'
                  ? t('duration.weeks', { weeks: experienceDetails.duration })
                  : t('duration.time', { start: startTime, end: endTime })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ExperienceProjectProps {
  img?: ImgProps
}

const ExperienceProject: React.FC<ExperienceProjectProps> = ({
  img = { src: '/placeholder.svg', alt: 'Placeholder' }
}) => {
  return (
    <section className="container py-8">
      <Image
        className="w-full h-full"
        src={img.src}
        alt={img.alt}
        width={1080}
        height={1080}
      />
    </section>
  )
}

export { ExperienceHero, ExperienceProject }
