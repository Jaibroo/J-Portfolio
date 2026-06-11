import Image from "next/image";
import Link from "next/link";

const projectData = {
  "hearing-aid-app": {
    eyebrow: "ACM Summer Projects • 2025",
    title: "Lumen — Hearing Aid App",
    description:
      "A hearing aid companion app designed to help users adjust sound settings, troubleshoot connection issues, and feel more confident in changing listening environments.",
    image: "/J-Portfolio/hearing-aid.png",
    role: "UX Designer",
    timeline: "June – September 2025",
    team: "4 Designers, 1 Project Manager",
    skills: ["UX Research", "Product Design", "Prototyping", "Accessibility"],
  },

  "smart-home-dashboard": {
    eyebrow: "COGS 125 • 2025",
    title: "Smart Home Dashboard",
    description:
      "A dashboard redesign that organizes smart home devices by room so users can find and control devices faster.",
    image: "/J-Portfolio/smart-home.png",
    role: "UX Designer",
    timeline: "Spring 2025",
    team: "Individual Project",
    skills: ["Interface Design", "Information Architecture", "Prototyping"],
  },

  "jit-website-audit": {
    eyebrow: "Design for America • 2026",
    title: "JIT Website Audit",
    description:
      "A website audit focused on helping young adults find youth resources more easily through clearer navigation and mobile-first recommendations.",
    image: "/J-Portfolio/jit-website.png",
    role: "Web Designer",
    timeline: "January – March 2026",
    team: "Design for America UCSD",
    skills: ["Website Audit", "UX Research", "Accessibility", "Mobile Design"],
  },

  "multi-scale-hearing-interface": {
    eyebrow: "COGS 125 • 2025",
    title: "Multi-Scale Hearing Interface",
    description:
      "A project exploring how hearing aid support changes across inch, foot, and yard-scale interfaces.",
    role: "UX Designer",
    timeline: "Spring 2025",
    team: "Individual Project",
    skills: ["Multi-Scale Design", "Interaction Design", "Prototyping"],
  },

  "portfolio-scroll-reveal": {
    eyebrow: "Next.js Interaction Study • 2025",
    title: "Portfolio Scroll Reveal",
    description:
      "A Next.js interaction study recreating a scroll-based reveal effect inspired by portfolio websites.",
    role: "Designer + Developer",
    timeline: "Spring 2025",
    team: "Individual Project",
    skills: ["Next.js", "React", "Interaction Design"],
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
      <main className="min-h-screen bg-slate-900 p-10 font-[Calluna,Georgia,serif] text-white">
        <h1 className="text-3xl font-bold">Project not found</h1>

        <Link className="mt-6 inline-block underline" href="/projects">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 px-10 py-20 font-[Calluna,Georgia,serif] text-white">
      {/* LEFT SIDE NAV */}
      <aside className="fixed left-10 top-28 hidden text-slate-400 lg:block">
        <Link href="/J-Portfolio/" className="hover:text-sky-300">
          ← Back
        </Link>

        <nav className="mt-12 flex flex-col gap-4 text-sm">
          <a href="#overview" className="hover:text-sky-300">
            Overview
          </a>
          <a href="#details" className="hover:text-sky-300">
            Details
          </a>
          <a href="#reflection" className="hover:text-sky-300">
            Reflection
          </a>
        </nav>
      </aside>

      {/* HEADER / OVERVIEW */}
      <section
        id="overview"
        className="mx-auto max-w-5xl border-b border-slate-700 pb-16"
      >
        <p className="text-sm uppercase tracking-widest text-slate-400">
          {project.eyebrow}
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-50 md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-300">
          {project.description}
        </p>

        {"image" in project && (
          <div className="mt-10 overflow-hidden border border-slate-700 bg-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </div>
        )}

        <div
          id="details"
          className="mt-10 grid gap-8 text-slate-300 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Role
            </p>
            <p className="mt-3 text-lg text-slate-200">{project.role}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Timeline
            </p>
            <p className="mt-3 text-lg text-slate-200">{project.timeline}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Team
            </p>
            <p className="mt-3 text-lg text-slate-200">{project.team}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Skills
            </p>

            <div className="mt-3 space-y-1 text-lg text-slate-200">
              {project.skills.map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section id="reflection" className="mx-auto max-w-5xl py-16">
        <p className="text-sm uppercase tracking-widest text-sky-300">
          Reflection
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-50">
          What this project helped me practice
        </h2>

        <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-300">
          This project pushed me to think beyond screens and features. I had to
          consider how users actually move through changing sound environments,
          where they lose confidence, and how interface decisions can make
          support feel more immediate and understandable.
        </p>
      </section>
    </main>
  );
}