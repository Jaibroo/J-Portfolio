import Image from "next/image";
import Link from "next/link";

const projectData = {
  "hearing-aid-app": {
    title: "Hearing Aid App Redesign",
    description:
      "A UX project focused on helping hearing aid users quickly adjust settings in changing sound environments.",
    image: "/J-Portfolio/hearing-aid.png",
  },

  "smart-home-dashboard": {
    title: "Smart Home Dashboard Redesign",
    description:
      "A redesign that organizes smart home devices by room so users can find and control devices faster.",
    image: "/J-Portfolio/smart-home.png",
  },

  "jit-website-audit": {
    title: "JIT Website Audit",
    description:
      "A website audit focused on helping young adults find resources more easily.",
    image: "/J-Portfolio/jit-website.png",
  },

  "multi-scale-hearing-interface": {
    title: "Multi-Scale Hearing Interface",
    description:
      "A project exploring how hearing aid support changes across inch, foot, and yard-scale interfaces.",
  },

  "portfolio-scroll-reveal": {
    title: "Portfolio Scroll Reveal",
    description:
      "A Next.js interaction study recreating a scroll-based reveal effect inspired by portfolio websites.",
  },
};

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-900 p-10 text-white">
        <h1 className="text-3xl font-bold">Project not found</h1>

        <Link className="mt-6 inline-block underline" href="/projects">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 px-10 py-20 text-white">
      <section className="mx-auto max-w-4xl rounded-3xl bg-slate-800/70 p-10 shadow-xl">
        <p className="text-sm uppercase tracking-widest text-sky-300">
          Project Case Study
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-50">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          {project.description}
        </p>

        {"image" in project && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </div>
        )}

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