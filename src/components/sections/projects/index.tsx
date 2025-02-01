import { useTranslations } from 'next-intl'
import ProjectCard from '@/components/cards/project-card'

const Projects = () => {
  const t = useTranslations('Home.Projects')

  return (
    <section id="projects" className="w-full bg-black-200 py-20">
      <div className="container flex flex-col gap-8">
        <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard title="42 Rio" src="/42-rio/logo.avif" href="/42-rio" />
          <ProjectCard
            title="Vitalongis"
            src="/vl/logo.avif"
            href="/vitalongis"
          />
          <ProjectCard
            title="Garrafa no Mar"
            href="/garrafa"
            src="/gnm/logo.avif"
          />
          <ProjectCard
            title="Garrafa no Mar Website"
            description="Website"
            href="/garrafa#web"
            src="/gnm/web-banner.avif"
          />
          <ProjectCard
            title="Garrafa no Mar v2"
            description="Mobile app"
            href="/garrafa#app-v2"
          />
          <ProjectCard
            title="Garrafa no Mar v1"
            description="Mobile app"
            href="/garrafa#app-v1"
          />
          <ProjectCard
            title="Ishida Brasil"
            description="Website"
            src="/ishida/banner.avif"
          />
          <ProjectCard
            title="Advanced Outdoor Solutions"
            description="Website"
            href="/outdoor"
            src="/aos/banner.avif"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
