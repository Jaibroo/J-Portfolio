import Link from "next/link";

const projects = [
  {
    title: "Hearing Aid App Redesign",
    description: "Improving quick access and usability for hearing aid users.",
    slug: "hearing-aid-app",
    type: "UX / Accessibility",
  },
  {
    title: "Smart Home Dashboard",
    description: "Redesigning device control with a room-based system.",
    slug: "smart-home-dashboard",
    type: "Interaction Design",
  },
  {
    title: "JIT Website Audit",
    description: "Helping users find youth resources more efficiently.",
    slug: "jit-website-audit",
    type: "Website Audit",
  },
  {
    title: "Multi-Scale Hearing Interface",
    description: "Exploring hearing aid support across watch, phone, and public displays.",
    slug: "multi-scale-hearing-interface",
    type: "Multi-Scale Design",
  },
  {
    title: "Portfolio Scroll Reveal",
    description: "A Next.js interaction study using scroll-based content reveal.",
    slug: "portfolio-scroll-reveal",
    type: "Next.js Interaction",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-10 py-20">
      <section className="max-w-5xl rounded-3xl bg-slate-800/70 p-10 shadow-xl">
        <p className="text-sm uppercase tracking-widest text-sky-300">
          Selected Work
        </p>

        <h1 className="mt-3 text-5xl font-bold text-slate-50">Projects</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          A collection of UX, interaction design, and development projects focused
          on making interfaces clearer, more useful, and easier to navigate.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}/`}
              className="block rounded-2xl border border-slate-600 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-widest text-sky-300">
                {project.type}
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-slate-50">
                {project.title}
              </h2>

              <p className="mt-3 text-slate-300">{project.description}</p>

              <p className="mt-6 text-sky-300">View project →</p>
            </Link>
          ))}
        </div>

        <Link
          className="mt-10 inline-block rounded-full border border-sky-400 px-6 py-3 text-sky-300 transition hover:bg-sky-400 hover:text-slate-950"
          href="/"
        >
          Back Home
        </Link>
      </section>
    </main>
  );
}