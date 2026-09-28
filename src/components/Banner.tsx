import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-base-100">
      <div className="container mx-auto grid items-center gap-8 px-4 py-4 text-center sm:py-12 md:grid-cols-2 md:gap-16 md:py-24">
        {/* Headline and actions introduce the stack builder. */}
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center md:mx-0 md:items-start md:text-left">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Plan your next build
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-base-content sm:text-5xl lg:text-6xl">
            Build Your Ideal{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-base-content/70 sm:text-lg md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a className="btn-brand btn-sm sm:btn-md" href="#technologies">
              Explore Technologies
            </a>
            <a
              className="btn btn-ghost btn-sm font-semibold text-base-content hover:bg-base-200 sm:btn-md"
              href="#about"
            >
              Learn More
            </a>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm font-medium text-base-content/60 md:justify-start">
            <span>Frontend</span>
            <span className="text-primary">/</span>
            <span>Backend</span>
            <span className="text-primary">/</span>
            <span>Database</span>
            <span className="text-primary">/</span>
            <span>Tools</span>
          </div>
        </div>

        {/* The framed illustration balances the headline on larger screens. */}
        <div className="rounded-2xl border border-base-200 bg-base-200/40 p-2 shadow-sm sm:p-4 md:p-6">
          <img
            src={bannerImg}
            alt="Illustration representing a modern development stack"
            className="mx-auto h-auto w-full max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
