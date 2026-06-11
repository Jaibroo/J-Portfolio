import Image from "next/image";
import Link from "next/link";

const projectData = {
  "hearing-aid-app": {
    eyebrow: "ACM Summer Projects • 2025",
    title: "Lumen — Hearing Aid App",
    description:
      "A hearing aid companion app for users who need clearer controls, easier troubleshooting, and less stressful ways to manage their hearing aids day to day.",
    image: "/J-Portfolio/Lumen1.png",
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
        imageSrc: "/J-Portfolio/lumen2.png",
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
            src: "/J-Portfolio/lumen3.png",
          },
          {
            label: "Early audio controls / feature ideas",
            src: "/J-Portfolio/lumen4.png",
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
          beforeImage: "/J-Portfolio/lumen5.png",
          afterTitle: "After",
          afterText:
            "A dual-mode structure: Simple Mode for quick changes and Tech Mode for deeper control.",
          afterImage: "/J-Portfolio/lumen6.png",
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
            src: "/J-Portfolio/lumen7.png",
          },
          {
            title: "Guided Troubleshooting",
            text: "Added because users often did not know where a connection issue was coming from.",
            src: "/J-Portfolio/lumen8.png",
          },
          {
            title: "Environment Optimizer",
            text: "Added because users think in situations like restaurants, TV, and phone calls — not audio engineering terms.",
            src: "/J-Portfolio/lumen9.png",
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
          {
            label: "Final dashboard screen",
            src: "/J-Portfolio/lumen11.png",
          },
          {
            label: "Simple Mode screen",
            src: "/J-Portfolio/lumen12.png",
          },
          {
            label: "Environment Optimizer screen",
            src: "/J-Portfolio/lumen14.png",
          },
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
      "A mobile-first website audit for Just in Time for Foster Youth, focused on helping young adults find resources faster through clearer navigation and more intentional information structure.",
    image: "/J-Portfolio/jit-website.png",
    role: "Web Designer",
    timeline: "January – March 2026",
    team: "Design for America UCSD",
    skills: [
      "Website Audit",
      "UX Research",
      "Information Architecture",
      "Mobile Accessibility",
    ],
    sections: [
      {
        id: "challenge",
        eyebrow: "Challenge",
        title: "Finding help should not require searching through an entire website.",
        body: [
          "JIT serves young adults ages 18–27 who may be looking for housing, education, employment, financial support, or other life resources. The issue was not that resources were missing. The issue was that the website made those resources harder to locate than they needed to be.",
          "On mobile, the experience felt especially heavy: long menus, large images, unclear next steps, and too much scrolling made the site feel more like a list of pages than a guided support system.",
        ],
        imageLabel: "Current JIT homepage / mobile menu screenshots",
      },
      {
        id: "research",
        eyebrow: "Research",
        title: "We looked for the moments where users lost direction.",
        body: [
          "Instead of only judging the website visually, we reviewed the mobile experience, collected survey feedback, and compared JIT’s structure against other nonprofit and youth-support websites.",
          "The strongest pattern was wayfinding. Users needed faster answers to basic questions: Where do I start? Which resource applies to me? What should I click next?",
        ],
        cards: [
          {
            title: "Too much scrolling",
            text: "Users had to move through long pages and menus before reaching important resource pathways.",
          },
          {
            title: "Unclear first step",
            text: "The homepage did not immediately guide young adults toward support or eligibility-related actions.",
          },
          {
            title: "Menu overload",
            text: "The navigation included many options at once, making it harder to quickly choose a direction.",
          },
          {
            title: "Mobile friction",
            text: "Large images, small touch targets, and dense sections made the site feel slower and harder to scan.",
          },
        ],
      },
      {
        id: "audit",
        eyebrow: "Audit Findings",
        title: "The main problem was not visual polish. It was navigation pressure.",
        body: [
          "The audit helped me separate surface-level design issues from problems that directly affected users trying to find help. A color or layout issue mattered less than whether a young adult could quickly understand where to go next.",
        ],
        splitImages: [
          { label: "Annotated homepage issues" },
          { label: "Annotated navigation / menu issues" },
        ],
      },
      {
        id: "prioritization",
        eyebrow: "Prioritization",
        title: "Not every issue needed the same level of attention.",
        body: [
          "This project pushed me to prioritize. Instead of treating every critique as equal, I focused on the problems most likely to block resource discovery: navigation, mobile scanning, and unclear pathways to support.",
        ],
        comparison: {
          beforeTitle: "Before",
          beforeText:
            "A broad list of website issues: layout, menu length, imagery, footer design, contrast, and page organization.",
          afterTitle: "After",
          afterText:
            "A focused set of recommendations centered on resource discovery, mobile navigation, and clearer next steps.",
          reason:
            "I made this shift because a real client project needs prioritization. The most important recommendations were the ones that helped young adults find support faster, not just the ones that made the site look cleaner.",
        },
      },
      {
        id: "recommendations",
        eyebrow: "Design Recommendations",
        title: "The recommendations focused on helping users choose a path faster.",
        body: [
          "Each recommendation connected back to a specific user problem from the audit. The goal was to make the site feel less overwhelming and more action-oriented.",
        ],
        featureImages: [
          {
            title: "Simplify the mobile menu",
            text: "Reduce long scrolling by grouping pages into clearer categories and making resource-related actions easier to spot.",
          },
          {
            title: "Move resources forward",
            text: "Prioritize resource discovery earlier on the homepage so young adults do not have to search through donor or organization-focused content first.",
          },
          {
            title: "Clarify calls to action",
            text: "Use direct labels that explain what users can do next, such as finding support, checking eligibility, or joining the JIT network.",
          },
        ],
      },
      {
        id: "solution",
        eyebrow: "Final Direction",
        title: "A clearer website structure for users who need support quickly.",
        body: [
          "The final direction centered on shorter paths, clearer labels, better mobile scanning, and a stronger separation between youth resources, donor content, and general organization information.",
        ],
        galleryImages: [
          "Proposed homepage structure",
          "Simplified mobile menu",
          "Resource card layout",
          "Implementation priority plan",
        ],
      },
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "JIT shows how my process became more evidence-driven.",
        body: [
          "Compared to Lumen, this project felt less like designing a new product from scratch and more like diagnosing where an existing experience was breaking down. That pushed me to think beyond screens and focus on navigation, hierarchy, and stakeholder priorities.",
          "I became more careful about explaining why something should change. Instead of saying a section looked cluttered, I had to connect that clutter to user behavior: too much scrolling, unclear first steps, and difficulty finding resources.",
          "This project shows growth from feature-focused design toward strategic design. I was not just asking what could be added. I was asking what should be simplified, moved, renamed, or removed so users could reach support with less friction.",
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

        <Link className="mt-6 inline-block underline" href="/">
          Back to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 px-10 py-16 font-[Calluna,Georgia,serif] text-white">
      <aside className="fixed left-10 top-28 hidden text-slate-400 lg:block">
        <Link href="/" className="hover:text-sky-300">
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
            <div className="mt-10 h-[340px] overflow-hidden border border-slate-700 bg-slate-800">
              {"imageSrc" in section && section.imageSrc ? (
                <Image
                  src={section.imageSrc}
                  alt={section.imageLabel}
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400">
                  <p className="text-lg uppercase tracking-widest">
                    {section.imageLabel}
                  </p>
                </div>
              )}
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
                  className="h-[360px] overflow-hidden border border-slate-700 bg-slate-800"
                >
                  {"src" in item && item.src ? (
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={1000}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400">
                      <p className="text-lg uppercase tracking-widest">
                        {item.label}
                      </p>
                    </div>
                  )}
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

                  <div className="mt-5 h-[280px] overflow-hidden border border-slate-700 bg-slate-900/70">
                    {"beforeImage" in section.comparison &&
                    section.comparison.beforeImage ? (
                      <Image
                        src={section.comparison.beforeImage}
                        alt="Before design"
                        width={1000}
                        height={700}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center border border-dashed border-slate-600 text-center text-slate-400">
                        <p className="uppercase tracking-widest">
                          Before Image Placeholder
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="mt-5 text-lg leading-7 text-slate-300">
                    {section.comparison.beforeText}
                  </p>
                </div>

                <div className="border border-sky-400 bg-slate-800/60 p-6">
                  <p className="text-sm uppercase tracking-widest text-sky-300">
                    {section.comparison.afterTitle}
                  </p>

                  <div className="mt-5 h-[280px] overflow-hidden border border-sky-500 bg-slate-900/70">
                    {"afterImage" in section.comparison &&
                    section.comparison.afterImage ? (
                      <Image
                        src={section.comparison.afterImage}
                        alt="After design"
                        width={1000}
                        height={700}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center border border-dashed border-sky-500 text-center text-sky-300">
                        <p className="uppercase tracking-widest">
                          After Image Placeholder
                        </p>
                      </div>
                    )}
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
                        ? "h-[400px] overflow-hidden border border-slate-700 bg-slate-800"
                        : "h-[400px] overflow-hidden border border-slate-700 bg-slate-800 md:order-2"
                    }
                  >
                    {"src" in item && item.src ? (
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={1000}
                        height={900}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400">
                        <p className="text-lg uppercase tracking-widest">
                          Image Placeholder {index + 1}
                        </p>
                      </div>
                    )}
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
              {section.galleryImages.map((item, index) => {
                const label = typeof item === "string" ? item : item.label;
                const src = typeof item === "string" ? null : item.src;

                return (
                  <div
                    key={label}
                    className={
                      index === 0
                        ? "h-[420px] overflow-hidden border border-slate-700 bg-slate-800 md:col-span-2"
                        : "h-[320px] overflow-hidden border border-slate-700 bg-slate-800"
                    }
                  >
                    {src ? (
                      <Image
                        src={src}
                        alt={label}
                        width={1400}
                        height={900}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center border border-dashed border-slate-600 bg-slate-800/50 text-center text-slate-400">
                        <p className="text-lg uppercase tracking-widest">
                          {label}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      ))}
    </main>
  );
}