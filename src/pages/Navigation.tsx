import { Link } from "react-router-dom";

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
    name: "Landing Page",
    path: "/landing",
  },
];

function Navigation() {
  return (
    <main className="min-h-screen bg-white text-black/80 px-8 py-16 font-bitter">
      <div className="mx-auto max-w-3xl my-[20vh]">

        <section className="mb-8">
          <h1 className="text-5xl font-bold mb-4">Design Lab</h1>
          <p className="text-lg text-black/60">
            Click Through my collection of UI/UX designs and prototypes.
          </p>
        </section>

        <hr className="border-black/10 mb-8" />

        <section className="grid gap-8">
          {designs.map((design) => (
            <Link key={design.path} to={design.path}>
              <div className="bg-gray-100 p-6 rounded-2xl shadow-sm border-2 border-gray-300 hover:bg-gray-200 transition-colors">
                <h2 className="text-2xl font-bold mb-2">{design.name}</h2>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}

export default Navigation;