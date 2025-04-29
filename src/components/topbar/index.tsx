import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Topbar = () => {
  const t = useTranslations('Components.Topbar')
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="container">
        <div className="relative flex justify-between py-4">
          <Link className="font-bold text-black-100" href="/">
            Mateus Lopes
          </Link>
          <div className="max-w-60 w-full flex flex-wrap gap-6 justify-end">
            <Link
              href="/#projects"
              className="hover:text-black-100 text-black-100/60"
            >
              {t('projects')}
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="hover:text-black-100 text-black-100/60"
            >
              {t('resume')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
