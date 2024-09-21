import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <Link className="w-full flex flex-col gap-2 text-white" href="">
      <Image className="w-full max-h-64 object-cover" src="/placeholder.svg" alt={title} width={256} height={256} />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
