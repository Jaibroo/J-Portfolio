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
    skills: ["UX Research", "Interaction Design", "Accessibility", "Prototyping"],
    sections: [
      {
        id: "problem",
        eyebrow: "Problem",
        title: "Everyday hearing adjustments often require too much effort.",
        body: [
          "For many hearing aid users, adjusting sound settings, switching programs, or fixing Bluetooth issues can become frustrating in the exact moments when support needs to feel quick and reliable.",
        ],
        imageLabel: "Problem / user pain point visuals",
      },
      {
        id: "research",
        eyebrow: "Research",
        title: "Understanding the experiences behind the complaints.",
        body: [
          "Our team interviewed hearing aid users and reviewed existing companion apps to understand where people struggled most. We focused less on advertised features and more on what users needed when their environment changed or something stopped working.",
        ],
        cards: [
          {
            title: "Connectivity uncertainty",
            text: "Users were often unsure whether the hearing aid, phone, or app was causing the problem.",
          },
          {
            title: "Hidden controls",
            text: "Useful settings were often buried behind menus or unavailable without audiologist support.",
          },
          {
            title: "Technical language",
            text: "Terms like noise suppression and directional microphones were not always clear to users.",
          },
          {
            title: "Delayed support",
            text: "Troubleshooting often required searching, calling support, or waiting for appointments.",
          },
        ],
      },
      {
        id: "design-decisions",
        eyebrow: "Design Decisions",
        title: "One interface was not enough.",
        body: [
          "Early ideas focused on adding more controls, but that created a new problem: more functionality also meant more complexity. A first-time user and a technically confident user did not need the same interface.",
        ],
        featureImages: [
          {
            title: "Simple Mode",
            text: "Quick adjustments, plain language, and fewer decisions.",
          },
          {
            title: "Tech Mode",
            text: "Deeper customization for users who want more control.",
          },
        ],
      },
      {
        id: "solution",
        eyebrow: "Solution",
        title: "A companion app focused on confidence, not configuration.",
        body: [
          "Lumen combines quick sound adjustments, personalized programs, environment-based recommendations, and guided troubleshooting into one companion experience.",
        ],
        featureImages: [
          {
            title: "Environment Optimizer",
            text: "Adjust settings around real situations like restaurants, calls, TV, and outdoors.",
          },
          {
            title: "Guided Troubleshooting",
            text: "Help users recover quickly when connection or audio issues appear.",
          },
        ],
      },
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "What this project helped me practice.",
        body: [
          "This was my first project working with a design team on a product where the user needs felt specific and higher-stakes. At first, I thought a stronger app meant adding more features. As the research developed, I realized the better question was whether users could actually find, understand, and trust those features when they needed them.",
          "The biggest shift was learning to design around confidence. For hearing aid users, a confusing screen is not just bad usability — it can affect whether someone feels comfortable participating in a conversation or solving a problem on their own.",
          "Looking back, this project shows where I started as a designer: focused on screens, flows, and feature ideas. It helped me build the foundation for later projects, where I became more intentional about research, rationale, and explaining why a design decision should change.",
        ],
      },
    ],
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
    sections: [
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "What this project helped me practice.",
        body: [
          "Compared to Lumen, this project pushed me to think more strategically about navigation, stakeholder goals, and how users find support under pressure.",
        ],
      },
    ],
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
    <main className="min-h-screen bg-slate-900 px-10 py-16 font-[Calluna,Georgia,serif] text-white">
      <aside className="fixed left-10 top-28 hidden text-slate-400 lg:block">
        <Link href="/J-Portfolio/" className="hover:text-sky-300">
          ← Back
        </Link>

        <nav className="mt-12 flex flex-col gap-4 text-sm">
          <a href="#overview" className="hover:text-sky-300">
            Overview
          </a>
          {project.sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="hover:text-sky-300">
              {section.eyebrow}
            </a>
          ))}
        </nav>
      </aside>

      <section id="overview" className="mx-auto max-w-5xl border-b border-slate-700 pb-12">
        <p className="text-sm uppercase tracking-widest text-slate-400">
          {project.eyebrow}
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-50 md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-4xl text-xl leading-8 text-slate-300">
          {project.description}
        </p>

        {"image" in project && (
          <div className="mt-8 h-[420px] overflow-hidden border border-slate-700 bg-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="mt-8 grid gap-8 text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">Role</p>
            <p className="mt-3 text-lg text-slate-200">{project.role}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">Timeline</p>
            <p className="mt-3 text-lg text-slate-200">{project.timeline}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">Team</p>
            <p className="mt-3 text-lg text-slate-200">{project.team}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">Skills</p>
            <div className="mt-3 space-y-1 text-lg text-slate-200">
              {project.skills.map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mx-auto max-w-5xl border-b border-slate-700 py-16 last:border-b-0"
        >
          <p className="text-sm uppercase tracking-widest text-sky-300">
            {section.eyebrow}
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-slate-50 md:text-5xl">
            {section.title}
          </h2>

          <div className="mt-6 space-y-5">
            {section.body.map((paragraph) => (
              <p key={paragraph} className="max-w-4xl text-xl leading-8 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          {"imageLabel" in section && section.imageLabel && (
            <div className="mt-10 flex h-[360px] items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400">
              <p className="text-lg uppercase tracking-widest">{section.imageLabel}</p>
            </div>
          )}

          {"cards" in section && section.cards && (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {section.cards.map((card) => (
                <div key={card.title} className="border border-slate-700 bg-slate-800/60 p-6">
                  <h3 className="text-2xl font-bold text-slate-50">{card.title}</h3>
                  <p className="mt-4 text-lg leading-7 text-slate-300">{card.text}</p>
                </div>
              ))}
            </div>
          )}

          {"featureImages" in section && section.featureImages && (
            <div className="mt-10 space-y-10">
              {section.featureImages.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"
                >
                  <div className="flex h-[420px] items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400">
                    <p className="text-lg uppercase tracking-widest">
                      Image Placeholder {index + 1}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-slate-50">{item.title}</h3>
                    <p className="mt-4 text-xl leading-8 text-slate-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </main>
  );
}