import Image from 'next/image'
import { useTranslations } from 'next-intl'
import toCapitalCase from '@/libs/toCapitalCase'
import { ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'

interface ImgProps {
  src: string
  alt: string
}

interface DurationProps {
  start: Date
  end?: Date
}

interface ExperienceHeroLinkProps {
  href: string
  text: string
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
  links?: ExperienceHeroLinkProps[]
  experienceDetails?: ExperienceHeroDetailsProps
}

const ExperienceHero: React.FC<ExperienceHeroProps> = ({
  img = { src: '/placeholder.svg', alt: 'Placeholder' },
  title,
  companyDescription,
  jobDescription,
  skills,
  links,
  experienceDetails
}) => {
  const t = useTranslations('Components.ExperienceHero')

  let startTime = ''
  let endTime = ''

  if (experienceDetails && typeof experienceDetails.duration !== 'number') {
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
        className="mx-auto max-w-[112rem] w-full h-[40rem] max-md:h-[34rem] max-2xs:h-[24rem] object-cover md:px-5"
        src={img.src}
        alt={img.alt}
        width={1080}
        height={1080}
        priority
      />
      <div className="container">
        <div
          className={`grid ${
            !!experienceDetails ? 'md:grid-cols-3' : ''
          } grid-cols-1 gap-4`}
        >
          <div
            className={`flex flex-col ${
              !!experienceDetails ? 'col-span-2' : ''
            } gap-8`}
          >
            <div className={`w-full flex flex-col gap-4`}>
              <div className="flex flex-col gap-2">
                <h1 className="text-black-100 font-bold text-2xl">{title}</h1>
                <p className="text-black-100 whitespace-pre-line">
                  {companyDescription}
                </p>
                {!!jobDescription &&
                  jobDescription.split('\n').map((line, index) => (
                    <p
                      key={index}
                      className="text-black-100 whitespace-pre-line"
                    >
                      {line}
                    </p>
                  ))}
              </div>
              {!!skills?.length && (
                <div className="flex flex-col gap-2">
                  <h2 className="text-black-100 font-bold text-xl">Techs</h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <p
                        key={index}
                        className="text-black-100 text-sm py-1.5 px-4 bg-gray-100 w-fit rounded-full"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {!!links?.length && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target="_blank"
                      className="w-fit flex gap-2 text-black-100 py-1.5 px-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
                    >
                      {link.text}
                      <ExternalLinkIcon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {!!experienceDetails && (
            <div className="md:w-fit w-full ml-auto md:flex md:flex-col grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-black-100 font-bold text-lg">
                  {t('role')}
                </h3>
                <p className="text-black-100">{experienceDetails.role}</p>
              </div>
              {!!experienceDetails.collaborators && (
                <div>
                  <h3 className="text-black-100 font-bold text-lg">
                    {t('collaborators')}
                  </h3>
                  {experienceDetails.collaborators?.map(
                    (collaborator, index) => (
                      <p key={index} className="text-black-100">
                        {collaborator}
                      </p>
                    )
                  )}
                </div>
              )}
              {!!experienceDetails.agency && (
                <div>
                  <h3 className="text-black-100 font-bold text-lg">
                    {t('agency')}
                  </h3>
                  <p className="text-black-100">{experienceDetails.agency}</p>
                </div>
              )}
              <div>
                <h3 className="text-black-100 font-bold text-lg">
                  {t('duration.title')}
                </h3>
                <p className="text-black-100">
                  {typeof experienceDetails.duration === 'number'
                    ? t('duration.weeks', { weeks: experienceDetails.duration })
                    : t('duration.time', { start: startTime, end: endTime })}
                </p>
              </div>
            </div>
          )}
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
