import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description?: string;
  src?: string;
  locked?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, src = "/placeholder.svg", locked=false }) => {
  return (
    <Link className={`w-full flex flex-col gap-2 text-white ${!!locked ? 'cursor-default' : ''}`} href="">
      <Image
        className="w-full max-h-64 object-cover"
        src={src}
        alt={title}
        width={256}
        height={256}
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-white/75">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
