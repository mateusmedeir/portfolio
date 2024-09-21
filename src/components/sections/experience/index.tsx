import ExperienceCard from "@/components/cards/experience-card";

const Experience = () => {
  return (
    <section id="works" className="w-full bg-gray-100 px-5 sm:px-10 py-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-8 ">
        <h2 className="text-black-100 text-2xl font-bold">My Experience</h2>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          <ExperienceCard title="Atitude 247" href="" />
          <ExperienceCard title="Garrafa no Mar" href="garrafa-no-mar" />
          <ExperienceCard title="Vitalongis" href="" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
