import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description?: string
  src?: string
  href?: string
  locked?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  src = '/placeholder.svg',
  href = '',
  locked = false
}) => {
  return (
    <Link
      className={`w-full flex flex-col gap-2 text-white group ${
        !!locked ? 'cursor-default' : ''
      }`}
      href={locked ? '' : href}
    >
      <div className="relative w-full h-64 xl sm:h-96 md:h-64">
        <Image
          className='group-hover:brightness-[0.75] transition duration-75'
          src={src}
          alt={title}
          fill
          style={{
            width: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-white/75">{description}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
