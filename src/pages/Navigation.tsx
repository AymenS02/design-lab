import { Link } from "react-router-dom";

const designs = [
  {
    name: "Cart Experience",
    description: "E-commerce checkout and cart interactions",
    path: "/cart",
    number: "01",
  },
  {
    name: "Dashboard",
    description: "Analytics and data visualization UI",
    path: "/dashboard",
    number: "02",
  },
  {
    name: "Landing Page",
    description: "Marketing pages and hero sections",
    path: "/landing",
    number: "03",
  },
];

function Navigation() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white px-8 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">
            Aymen Shoteri
          </p>

          <h1 className="mt-6 text-7xl font-bold tracking-tight">
            Design
            <span className="block text-zinc-500">
              Laboratory.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            A collection of UI experiments, interactions, and interface
            explorations built with React, Tailwind, and motion.
          </p>
        </section>


        {/* Designs */}
        <section className="grid gap-6 md:grid-cols-3">

          {designs.map((design) => (
            <Link
              key={design.path}
              to={design.path}
              className="
                group relative overflow-hidden
                rounded-3xl border border-white/10
                bg-white/5 p-8
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-2
                hover:border-white/30
                hover:bg-white/10
              "
            >

              {/* Number */}
              <span className="
                text-sm text-zinc-500
                transition-colors
                group-hover:text-white
              ">
                {design.number}
              </span>


              {/* Title */}
              <h2 className="
                mt-12 text-3xl font-semibold
                tracking-tight
              ">
                {design.name}
              </h2>


              {/* Description */}
              <p className="
                mt-4 text-zinc-400
                leading-relaxed
              ">
                {design.description}
              </p>


              {/* Arrow */}
              <div className="
                mt-10 flex items-center gap-2
                text-sm text-zinc-400
                transition-all
                group-hover:text-white
                group-hover:gap-4
              ">
                Explore
                <span>→</span>
              </div>


              {/* Hover glow */}
              <div className="
                pointer-events-none absolute
                -right-10 -top-10
                h-32 w-32
                rounded-full
                bg-blue-500/20
                blur-3xl
                opacity-0
                transition-opacity
                group-hover:opacity-100
              "/>

            </Link>
          ))}

        </section>

      </div>
    </main>
  );
}

export default Navigation;