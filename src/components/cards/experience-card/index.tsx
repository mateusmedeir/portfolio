import Link from "next/link";
import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  href: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, href }) => {
  return (
    <Link className="w-full flex flex-col gap-2 text-black-100" href={href}>
      <Image className="w-full max-h-64 object-cover" src="/placeholder.svg" alt={title} width={256} height={256} />
      <h3 className="text-lg font-semibold">{title}</h3>
    </Link>
  );
};

export default ExperienceCard;
