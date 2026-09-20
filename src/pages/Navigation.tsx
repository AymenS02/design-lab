import TransitionLink from "../components/TransitionLink";

const designs = [
  {
    name: "Cart Experience",
    path: "/cart",
  },
  {
    name: "Squares in Circles",
    path: "/squaresincircles",
  },  
  {
    name: "Buttons",
    path: "/buttons",
  },
  {
    name: "FAQ Page",
    path: "/faq",
  }
];

function Navigation() {
  return (
    <main className="min-h-screen text-black/80 px-8 py-16 font-bitter">
      <div className="mx-auto max-w-3xl my-[20vh]">

        <section className="mb-8">
          <h1 className="text-5xl font-bold mb-4">
            Design Lab
          </h1>

          <p className="text-lg text-black/60">
            Click through my collection of UI/UX designs and prototypes.
          </p>
        </section>

        <hr className="border-black/10 mb-8" />

        <section className="grid gap-8">
          {designs.map((design) => (
            <TransitionLink
              key={design.path}
              to={design.path}
            >
              <div
                className="
                  bg-gray-100
                  p-6
                  rounded-2xl
                  shadow-sm
                  border-2
                  border-gray-300
                  hover:bg-gray-200
                  transition-colors
                  cursor-pointer
                "
              >
                <h2 className="text-2xl font-bold">
                  {design.name}
                </h2>
              </div>
            </TransitionLink>
          ))}
        </section>

      </div>
    </main>
  );
}

export default Navigation;