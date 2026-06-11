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
          "Our starting point was a clear pattern: many hearing aid users were not struggling because they lacked motivation. They were struggling because the apps asked too much of them at the wrong moments.",
          "Common issues included unreliable Bluetooth pairing, small buttons, cluttered menus, unclear instructions, and support options that were difficult to find. For older adults or users with accessibility needs, these problems could turn a quick adjustment into something stressful.",
        ],
        imageLabel: "Add screenshots of existing app problems or early notes here",
      },
      {
        id: "research",
        eyebrow: "Research",
        title: "We focused on where users felt stuck, not just what features existed.",
        body: [
          "We reviewed hearing aid companion apps and user feedback from products like Oticon, MyPhonak, Cochlear, ReSound, and Widex. I learned that many complaints were less about wanting a flashy app and more about wanting the app to feel dependable.",
          "The research helped us narrow the project around confidence: Can users understand what is happening? Can they recover when something breaks? Can they make changes without needing someone else to step in?",
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
        id: "design-decisions",
        eyebrow: "Design Decisions",
        title: "The app needed to reduce pressure, not just add more controls.",
        body: [
          "Early ideas leaned toward adding more customization. But more controls can also create more confusion. The better direction was to separate quick everyday adjustments from deeper settings.",
        ],
        featureImages: [
          {
            title: "Simple Mode",
            text: "A calmer interface for quick changes, larger touch targets, and plain language controls.",
          },
          {
            title: "Tech Mode",
            text: "A more detailed interface for users who want deeper control over sound settings and listening programs.",
          },
        ],
      },
      {
        id: "solution",
        eyebrow: "Solution",
        title: "Lumen helps users adjust, recover, and keep moving.",
        body: [
          "The final direction centered on daily use: quick sound adjustments, clearer connection status, environment-based settings, and guided troubleshooting.",
        ],
        featureImages: [
          {
            title: "Environment Optimizer",
            text: "Instead of asking users to understand technical audio terms first, Lumen lets them start with situations like restaurants, TV, phone calls, or outdoors.",
          },
          {
            title: "Guided Troubleshooting",
            text: "When something goes wrong, the app gives users a direct recovery path instead of making them search through support pages.",
          },
        ],
      },
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "This project changed how I think about accessibility.",
        body: [
          "This was my first project working with a design team on a problem where the stakes felt more real. At first, I thought a better app meant giving users more features. Research showed me that more features only help if people can find them, understand them, and trust them.",
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
              <p
                key={paragraph}
                className="max-w-4xl text-xl leading-8 text-slate-300"
              >
                {paragraph}
              </p>
            ))}
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

          {"featureImages" in section && section.featureImages && (
            <div className="mt-10 space-y-10">
              {section.featureImages.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"
                >
                  <div className="flex h-[400px] items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400">
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
        </section>
      ))}
    </main>
  );
}