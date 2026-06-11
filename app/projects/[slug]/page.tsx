import Image from "next/image";
import Link from "next/link";

const projectData = {
  "hearing-aid-app": {
    eyebrow: "ACM Summer Projects • 2025",
    title: "Lumen — Hearing Aid App",
    description:
      "A hearing aid companion app for users who need clearer controls, easier troubleshooting, and less stressful ways to manage their hearing aids day to day.",
    image: "/J-Portfolio/hearing-aid.png",
    role: "UX Designer",
    timeline: "June – September 2025",
    team: "4 Designers, 1 Project Manager",
    skills: ["UX Research", "Accessibility", "Interaction Design", "Prototyping"],
    sections: [
      {
        id: "problem",
        eyebrow: "Problem",
        title: "Hearing aid apps often make simple tasks feel harder than they should.",
        body: [
          "Our starting point was a clear pattern: users were not struggling because they lacked motivation. They were struggling because the apps asked too much of them at the wrong moments.",
          "Common issues included unreliable Bluetooth pairing, small buttons, cluttered menus, unclear instructions, and support options that were difficult to find.",
        ],
        imageLabel: "Existing app issues / competitor screenshots",
      },
      {
        id: "research",
        eyebrow: "Research",
        title: "We focused on where users felt stuck, not just what features existed.",
        body: [
          "We reviewed hearing aid companion apps and user feedback from products like Oticon, MyPhonak, Cochlear, ReSound, and Widex. The main pattern was not that users wanted a more advanced app. They wanted the app to feel dependable when they needed it.",
        ],
        cards: [
          {
            title: "Connection issues",
            text: "Users often did not know whether the hearing aid, phone, Bluetooth, or app was causing the problem.",
          },
          {
            title: "Cluttered navigation",
            text: "Important controls were hard to spot, especially when menus were dense or labels were unclear.",
          },
          {
            title: "Support gap",
            text: "When problems happened, users were often pushed toward email support instead of getting help inside the app.",
          },
          {
            title: "Older adult needs",
            text: "Small text, tiny buttons, and technical language made the app harder for seniors and less tech-comfortable users.",
          },
        ],
      },
      {
        id: "early-concepts",
        eyebrow: "Early Concepts",
        title: "At first, we treated the problem like a feature gap.",
        body: [
          "Our early direction leaned toward adding more controls, more customization, and more ways to adjust sound. That seemed helpful at first, but it also risked making the app harder to scan and harder to trust.",
        ],
        splitImages: [
          {
            label: "Early dashboard sketch / wireframe",
          },
          {
            label: "Early audio controls / feature ideas",
          },
        ],
      },
      {
        id: "iteration",
        eyebrow: "Design Evolution",
        title: "The design improved when we stopped treating every user the same.",
        body: [
          "The biggest revision was moving away from one interface for everyone. A first-time user and a technically confident user needed different levels of control, so we separated quick daily adjustments from deeper settings.",
        ],
        comparison: {
          beforeTitle: "Before",
          beforeText:
            "One general interface with too many settings competing for attention.",
          afterTitle: "After",
          afterText:
            "A dual-mode structure: Simple Mode for quick changes and Tech Mode for deeper control.",
          reason:
            "We made this change because more functionality did not automatically mean more usability. The interface needed to match different levels of comfort instead of forcing every user through the same flow.",
        },
      },
      {
        id: "design-decisions",
        eyebrow: "Design Rationale",
        title: "Each revision was tied back to a specific user problem.",
        body: [
          "Rather than presenting features as standalone ideas, we framed each major design choice around a user need we found in research.",
        ],
        featureImages: [
          {
            title: "Simple Mode",
            text: "Created for users who need quick changes, larger touch targets, and plain language controls.",
          },
          {
            title: "Guided Troubleshooting",
            text: "Added because users often did not know where a connection issue was coming from.",
          },
          {
            title: "Environment Optimizer",
            text: "Added because users think in situations like restaurants, TV, and phone calls — not audio engineering terms.",
          },
        ],
      },
      {
        id: "solution",
        eyebrow: "Final Solution",
        title: "Lumen helps users adjust, recover, and keep moving.",
        body: [
          "The final direction centered on daily use: quick sound adjustments, clearer connection status, environment-based settings, and guided troubleshooting.",
        ],
        galleryImages: [
          "Final dashboard screen",
          "Simple Mode screen",
          "Environment Optimizer screen",
          "Troubleshooting flow screen",
        ],
      },
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "This project changed how I think about accessibility.",
        body: [
          "This was my first project working with a design team on a problem where the user needs felt specific and higher-stakes. At first, I thought a better app meant giving users more features. Research showed me that more features only help if people can find them, understand them, and trust them.",
          "The biggest lesson was that accessibility is not only about making text bigger or buttons easier to tap. It also shows up in wording, menu structure, error recovery, and how much confidence a user has when something does not work.",
          "Looking back, Lumen shows where I started: focused on screens, flows, and feature ideas. It gave me a foundation for later work, where I became more careful about explaining why a design decision should change.",
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
            <a
              key={section.id}
              href={`#${section.id}`}
              className="hover:text-sky-300"
            >
              {section.eyebrow}
            </a>
          ))}
        </nav>
      </aside>

      <section
        id="overview"
        className="mx-auto max-w-5xl border-b border-slate-700 pb-12"
      >
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
          <div className="mt-8 h-[390px] overflow-hidden border border-slate-700 bg-slate-800">
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

      {project.sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className="mx-auto max-w-5xl border-b border-slate-700 py-16 last:border-b-0"
        >
          <div
            className={
              sectionIndex % 2 === 0
                ? "grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start"
                : "grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start"
            }
          >
            <div className={sectionIndex % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <p className="text-sm uppercase tracking-widest text-sky-300">
                {section.eyebrow}
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-50 md:text-5xl">
                {section.title}
              </h2>
            </div>

            <div className={sectionIndex % 2 === 0 ? "md:order-2" : "md:order-1"}>
              <div className="space-y-5">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-xl leading-8 text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {"imageLabel" in section && section.imageLabel && (
            <div className="mt-10 flex h-[340px] items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400">
              <p className="text-lg uppercase tracking-widest">
                {section.imageLabel}
              </p>
            </div>
          )}

          {"cards" in section && section.cards && (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {section.cards.map((card) => (
                <div
                  key={card.title}
                  className="border border-slate-700 bg-slate-800/60 p-6"
                >
                  <h3 className="text-2xl font-bold text-slate-50">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-lg leading-7 text-slate-300">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {"splitImages" in section && section.splitImages && (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {section.splitImages.map((item) => (
                <div
                  key={item.label}
                  className="flex h-[360px] items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400"
                >
                  <p className="text-lg uppercase tracking-widest">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {"comparison" in section && section.comparison && (
            <div className="mt-10 space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="border border-slate-700 bg-slate-800/60 p-6">
                  <p className="text-sm uppercase tracking-widest text-slate-500">
                    {section.comparison.beforeTitle}
                  </p>

                  <div className="mt-5 flex h-[280px] items-center justify-center border border-dashed border-slate-600 bg-slate-900/70 text-center text-slate-400">
                    <p className="uppercase tracking-widest">
                      Before Image Placeholder
                    </p>
                  </div>

                  <p className="mt-5 text-lg leading-7 text-slate-300">
                    {section.comparison.beforeText}
                  </p>
                </div>

                <div className="border border-sky-400 bg-slate-800/60 p-6">
                  <p className="text-sm uppercase tracking-widest text-sky-300">
                    {section.comparison.afterTitle}
                  </p>

                  <div className="mt-5 flex h-[280px] items-center justify-center border border-dashed border-sky-500 bg-slate-900/70 text-center text-sky-300">
                    <p className="uppercase tracking-widest">
                      After Image Placeholder
                    </p>
                  </div>

                  <p className="mt-5 text-lg leading-7 text-slate-300">
                    {section.comparison.afterText}
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-sky-300 bg-slate-800/60 p-6">
                <p className="text-sm uppercase tracking-widest text-sky-300">
                  Why this changed
                </p>

                <p className="mt-3 text-xl leading-8 text-slate-200">
                  {section.comparison.reason}
                </p>
              </div>
            </div>
          )}

          {"featureImages" in section && section.featureImages && (
            <div className="mt-10 space-y-12">
              {section.featureImages.map((item, index) => (
                <div
                  key={item.title}
                  className={
                    index % 2 === 0
                      ? "grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"
                      : "grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center"
                  }
                >
                  <div
                    className={
                      index % 2 === 0
                        ? "flex h-[400px] items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400"
                        : "flex h-[400px] items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400 md:order-2"
                    }
                  >
                    <p className="text-lg uppercase tracking-widest">
                      Image Placeholder {index + 1}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-slate-50">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-xl leading-8 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {"galleryImages" in section && section.galleryImages && (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {section.galleryImages.map((label, index) => (
                <div
                  key={label}
                  className={
                    index === 0
                      ? "flex h-[420px] items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400 md:col-span-2"
                      : "flex h-[320px] items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400"
                  }
                >
                  <p className="text-lg uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </main>
  );
}