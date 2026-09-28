import { FaTimes } from "react-icons/fa";
import type { Technology } from "../../types/technology";

type SelectedStackProps = {
  technologies: Technology[];
  onRemove: (technologyId: number) => void;
  onClear: () => void;
};

const SelectedStack = ({
  technologies,
  onRemove,
  onClear,
}: SelectedStackProps) => {
  const countLabel = `${technologies.length} ${technologies.length === 1 ? "Technology" : "Technologies"} Selected`;

  return (
    <aside className="self-start rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm lg:sticky lg:top-24">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-base-content">Your Stack</h2>
          <p className="mt-1 text-sm text-base-content/60" aria-live="polite">
            {countLabel}
          </p>
        </div>
        {technologies.length > 0 && (
          <button
            className="btn btn-outline btn-error btn-xs"
            onClick={onClear}
            type="button"
          >
            Remove All
          </button>
        )}
      </div>

      {technologies.length === 0 ? (
        <p className="rounded-lg bg-base-200/60 px-4 py-5 text-center text-sm text-base-content/60">
          Your stack is empty. Add a technology to get started.
        </p>
      ) : (
        <ul className="space-y-2">
          {technologies.map((technology) => (
            <li
              className="flex items-center gap-3 rounded-lg border border-base-200 p-3"
              key={technology.id}
            >
              <img
                alt=""
                className="size-9 shrink-0 object-contain"
                src={technology.icon}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-base-content">
                  {technology.name}
                </p>
                <p className="text-xs text-base-content/60">
                  {technology.category}
                </p>
              </div>
              <button
                aria-label={`Remove ${technology.name} from your stack`}
                className="btn btn-ghost btn-circle btn-xs text-base-content/50 hover:text-error"
                onClick={() => onRemove(technology.id)}
                type="button"
              >
                <FaTimes aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default SelectedStack;
