import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../../types/technology";

type TechnologiesProps = {
  technologiesInformation: Promise<Technology[]>;
};

const Technologies = ({ technologiesInformation }: TechnologiesProps) => {
  const technologiesData = use(technologiesInformation);

  return (
    <section id="technologies" className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-base-content sm:text-4xl">
          Explore the <span>Technologies</span>
        </h1>
        <p className="mt-3 text-base-content/70">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {technologiesData.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
