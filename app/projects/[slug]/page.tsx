import Link from "next/link";

const projectData = {
  "hearing-aid-app": {
    title: "Hearing Aid App Redesign",
    description:
      "A UX project focused on helping hearing aid users quickly adjust settings in changing sound environments.",
  },
  "smart-home-dashboard": {
    title: "Smart Home Dashboard Redesign",
    description:
      "A redesign that organizes smart home devices by room so users can find and control devices faster.",
  },
  "jit-website-audit": {
    title: "JIT Website Audit",
    description:
      "A website audit focused on helping young adults find resources more easily.",
  },
};

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectData[params.slug as keyof typeof projectData];

  if (!project) {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link className="underline mt-6 inline-block" href="/projects">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-10 py-20">
      <section className="max-w-3xl rounded-3xl bg-slate-800/70 p-10 shadow-xl">
        <p className="text-sm uppercase tracking-widest text-sky-300">
          Project Case Study
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-50">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          {project.description}
        </p>

        <Link
          className="mt-8 inline-block rounded-full border border-sky-400 px-6 py-3 text-sky-300 transition hover:bg-sky-400 hover:text-slate-950"
          href="/projects"
        >
          Back to Projects
        </Link>
      </section>
    </main>
  );
}