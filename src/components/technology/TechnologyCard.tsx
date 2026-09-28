import type { Technology } from "../../types/technology";
import { FaStar } from "react-icons/fa";

type TechnologyCardProps = {
  technology: Technology;
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <article className="card h-full rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="card-body gap-0 p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="size-9 object-contain"
          />
          <span className="badge border-0 bg-primary/10 px-3 py-3 font-medium text-primary">
            {technology.badge}
          </span>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-base-content">
            {technology.name}
          </h2>
          <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-base-content/65">
            {technology.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-2 gap-y-3 border-t border-base-200 pt-4 text-xs">
          <span className="rounded bg-base-200 px-2 py-1 font-medium text-base-content/75">
            {technology.category}
          </span>
          <span className="text-base-content/65">{technology.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-base-content/80">
            <FaStar aria-hidden="true" className="text-amber-400" />
            {technology.rating.toFixed(1)}
          </span>
        </div>
        <button className="btn btn-neutral mt-4 min-h-10 h-10 w-full rounded-lg text-sm font-medium">
          Add to Stack
        </button>
      </div>
    </article>
  );
};

export default TechnologyCard;
