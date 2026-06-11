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
          "For many hearing aid users, common tasks like adjusting sound settings, switching programs, or fixing Bluetooth issues can become frustrating in the exact moments when users need support quickly.",
          "This matters because hearing aids are used throughout the day. A small usability issue is not just a one-time inconvenience — it can affect conversations, phone calls, television watching, restaurants, and other everyday environments.",
        ],
      },
      {
        id: "research",
        eyebrow: "Research",
        title: "Understanding the experiences behind the complaints.",
        body: [
          "Our team interviewed hearing aid users and reviewed existing companion apps to understand where people struggled most. We focused less on what features apps advertised and more on what users needed when their environment changed or something stopped working.",
          "Across interviews and competitive analysis, the same patterns kept appearing: unreliable Bluetooth connections, confusing audio terminology, limited customization, and support flows that arrived too late.",
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
          "To solve this, we created a dual-mode structure. Simple Mode prioritized quick adjustments, plain language, and large controls. Tech Mode gave advanced users deeper customization without overwhelming everyone else.",
        ],
        cards: [
          {
            title: "Simple Mode",
            text: "Designed for quick changes, larger touch targets, and minimal decision-making.",
          },
          {
            title: "Tech Mode",
            text: "Designed for users who wanted finer control over audio settings and listening programs.",
          },
          {
            title: "Guided troubleshooting",
            text: "Focused on helping users recover quickly instead of forcing them to search for help.",
          },
          {
            title: "Environment-based controls",
            text: "Organized adjustments around real situations like restaurants, calls, TV, and outdoors.",
          },
        ],
      },
      {
        id: "solution",
        eyebrow: "Solution",
        title: "A companion app focused on confidence, not configuration.",
        body: [
          "Lumen combines quick sound adjustments, personalized programs, environment-based recommendations, and guided troubleshooting into one companion experience.",
          "The goal was not to make users become hearing aid experts. The goal was to help them feel more independent when their listening environment changed or when something went wrong.",
        ],
      },
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "What this project helped me practice.",
        body: [
          "This was my first project working with a design team on a product where the user needs felt more specific and higher-stakes. At first, I thought a stronger app meant adding more features. As the research developed, I realized the better question was whether users could actually find, understand, and trust those features when they needed them.",
          "The biggest shift was learning to design around confidence. For hearing aid users, a confusing screen is not just bad usability — it can affect whether someone feels comfortable participating in a conversation or solving a problem on their own.",
          "Looking back, this project shows where I started as a designer: focused on screens, flows, and feature ideas. It also helped me build the foundation for later projects, where I became more intentional about research, rationale, and explaining why a design decision should change.",
        ],
      },
    ],
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
    sections: [
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "What this project helped me practice.",
        body: [
          "This project helped me think about how organization affects usability. Grouping devices by room made the dashboard easier to scan and closer to the way people think about their homes.",
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
          "Compared to Lumen, this project pushed me to think more strategically about navigation, stakeholder goals, and how users find support under pressure. It felt less like designing an interface from scratch and more like diagnosing where an existing experience was breaking down.",
        ],
      },
    ],
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
    sections: [
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "What this project helped me practice.",
        body: [
          "This project helped me understand how design changes across form factors and physical scale.",
        ],
      },
    ],
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
    sections: [
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "What this project helped me practice.",
        body: [
          "This project helped me connect visual design decisions to front-end implementation.",
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

        <div className="mt-10 grid gap-8 text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* CASE STUDY SECTIONS */}
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
        </section>
      ))}
    </main>
  );
}