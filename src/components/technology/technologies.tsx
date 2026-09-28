import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import SelectedStack from "./SelectedStack";
import type { Technology } from "../../types/technology";

type TechnologiesProps = {
  technologiesInformation: Promise<Technology[]>;
  selectedTechnologies: Technology[];
  onAddTechnology: (technology: Technology) => void;
  onRemoveTechnology: (technologyId: number) => void;
  onClearStack: () => void;
};

const Technologies = ({
  technologiesInformation,
  selectedTechnologies,
  onAddTechnology,
  onRemoveTechnology,
  onClearStack,
}: TechnologiesProps) => {
  const technologiesData = use(technologiesInformation);

  return (
    <section id="technologies" className="container mx-auto px-4 py-16">
      <div className="text-center sm:text-left py-2">
        <h1 className="text-3xl font-bold text-base-content sm:text-4xl">
          Explore the{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="mt-3 text-base-content/70">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologiesData.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isAdded={selectedTechnologies.some(
                (selected) => selected.id === technology.id,
              )}
              onAdd={onAddTechnology}
            />
          ))}
        </div>
        <SelectedStack
          technologies={selectedTechnologies}
          onRemove={onRemoveTechnology}
          onClear={onClearStack}
        />
      </div>
    </section>
  );
};

export default Technologies;
