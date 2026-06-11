import Image from "next/image";
import Link from "next/link";

const projectData = {
  "hearing-aid-app": {
    eyebrow: "ACM Summer Projects • 2025",
    title: "Lumen — Hearing Aid App",
    description:
      "A hearing aid app concept made for people who need quick controls, clear help, and less confusion when their hearing aids are not doing what they need.",
    image: "/J-Portfolio/Lumen1.png",
    role: "UX Designer",
    timeline: "June – September 2025",
    team: "4 Designers, 1 Project Manager",
    skills: ["UX Research", "Accessibility", "Interaction Design", "Prototyping"],
    sections: [
      {
        id: "problem",
        eyebrow: "Problem",
        title: "The app should help users feel calm, not make them dig around.",
        body: [
          "For this project, the main issue was pretty simple: hearing aid apps have a lot of important controls, but they can feel annoying to use when someone just wants to fix sound, reconnect, or change a setting fast.",
          "A lot of the problems we looked at were things like confusing menus, Bluetooth issues, tiny buttons, unclear labels, and help sections that felt hidden. If a user is already stressed because they cannot hear well, the app should not add more stress.",
        ],
        imageLabel: "Existing app issues / competitor screenshots",
        imageSrc: "/J-Portfolio/lumen2.png",
      },
      {
        id: "research",
        eyebrow: "Research",
        title: "We looked for the moments where users would probably give up.",
        body: [
          "We looked at hearing aid apps like Oticon, MyPhonak, Cochlear, ReSound, and Widex. I was not just looking at what features they had. I was looking at where the experience started to feel confusing or too technical.",
          "The biggest pattern was that users did not need the app to feel fancy. They needed it to be clear when something was connected, easy to adjust in the moment, and helpful when something went wrong.",
        ],
        cards: [
          {
            title: "Connection issues",
            text: "If Bluetooth stopped working, users could be left guessing if the problem was the phone, the app, or the hearing aids.",
          },
          {
            title: "Messy navigation",
            text: "Some controls were buried in menus, which made simple changes feel like way more work than they should be.",
          },
          {
            title: "Help felt too far away",
            text: "When something broke, the app did not always guide users step by step. It often pushed the problem somewhere else.",
          },
          {
            title: "Older users needed more clarity",
            text: "Small text, technical words, and crowded screens made the app harder for users who were less comfortable with technology.",
          },
        ],
      },
      {
        id: "early-concepts",
        eyebrow: "Early Concepts",
        title: "At first, I thought more controls would make the app better.",
        body: [
          "My early ideas were mostly about adding things: more settings, more sound controls, more ways to customize. That made sense at first, but it also started making the app feel heavier.",
          "This was one of the first points where I realized that adding more is not always the answer. If the user cannot find the thing they need quickly, then the extra feature does not really help.",
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
        title: "The design got better when we stopped treating every user the same.",
        body: [
          "The biggest change was realizing that not every user wants the same level of control. Some people just want volume, battery, and a quick fix button. Other people want deeper settings and more control over the sound.",
          "So instead of forcing everyone into one busy interface, we split the experience into Simple Mode and Tech Mode. That made the app feel less overwhelming without removing advanced options completely.",
        ],
        comparison: {
          beforeTitle: "Before",
          beforeText:
            "One general interface where too many settings were fighting for attention at the same time.",
          beforeImage: "/J-Portfolio/lumen5.png",
          afterTitle: "After",
          afterText:
            "A two-mode setup: Simple Mode for quick everyday use, and Tech Mode for users who want more control.",
          afterImage: "/J-Portfolio/lumen6.png",
          reason:
            "We changed this because a hearing aid app should match the user’s comfort level. A simple user should not have to sort through advanced settings, and a more technical user should not feel limited.",
        },
      },
      {
        id: "design-decisions",
        eyebrow: "Design Rationale",
        title: "Each main feature had to answer a real user problem.",
        body: [
          "I tried to make sure the features were not just there because they sounded cool. Each one had to connect back to something users might actually struggle with, like adjusting sound quickly, fixing connection problems, or choosing the right setting for a place they are in.",
        ],
        featureImages: [
          {
            title: "Simple Mode",
            text: "Simple Mode was for users who just need the basics without digging through a bunch of settings. Bigger controls, clearer labels, and fewer choices made it easier to use quickly.",
            src: "/J-Portfolio/lumen7.png",
          },
          {
            title: "Guided Troubleshooting",
            text: "The troubleshooting flow was added because connection problems can be confusing. Instead of making users guess what went wrong, the app walks them through what to check first.",
            src: "/J-Portfolio/lumen8.png",
          },
          {
            title: "Environment Optimizer",
            text: "The Environment Optimizer was based on how people actually talk about sound. Most users think in places like TV, restaurants, outside, or phone calls, not technical audio terms.",
            src: "/J-Portfolio/lumen9.png",
          },
        ],
      },
      {
        id: "solution",
        eyebrow: "Final Solution",
        title: "Lumen became a calmer way to adjust, recover, and keep going.",
        body: [
          "The final version focused on the moments that matter most during everyday use: checking connection, changing volume, picking a setting for the environment, and getting help when something stops working.",
          "The goal was not to make the app feel packed with features. It was to make the important actions easier to find and less scary to use.",
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
        title: "This project taught me that accessibility is more than making things bigger.",
        body: [
          "Before Lumen, I mostly thought about accessibility as bigger buttons, cleaner spacing, and readable text. Those things still matter, but this project showed me that accessibility also comes from clear wording, fewer steps, and helping users recover when something goes wrong.",
          "I also learned that a feature is only useful if the user understands it at the right time. A hidden setting or confusing label can make a good idea feel useless.",
          "Looking back, Lumen was where I started learning how to connect a screen to a user problem. I was still figuring it out, but it helped me move past just making screens and start thinking more about why each choice should exist.",
        ],
      },
    ],
  },

  "jit-website-audit": {
    eyebrow: "Design for America • 2026",
    title: "JIT Website Audit",
    description:
      "A website audit for Just in Time for Foster Youth, focused on making the site easier to move through for young adults looking for support.",
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
        title: "The site had helpful resources, but finding them felt harder than it needed to be.",
        body: [
          "JIT helps young adults ages 18–27 with things like housing, school, jobs, money, and other support. The problem was not that the website had nothing useful. The problem was that the useful stuff was kind of buried.",
          "On mobile, it felt like users had to scroll, open menus, backtrack, and guess where to go next. For someone who is trying to get help quickly, that is a pretty frustrating place to start.",
        ],
        imageLabel: "Current JIT homepage / mobile menu screenshots",
        imageSrc: "/J-Portfolio/jit2.png",
      },
      {
        id: "research",
        eyebrow: "Research",
        title: "We tried to figure out where people would get stuck first.",
        body: [
          "I looked at the mobile site, survey responses, and other nonprofit websites to see what was working and what felt confusing. I paid the most attention to simple things: Can someone tell where to start? Can they find resources without thinking too hard? Does the menu actually help?",
          "The biggest issue was direction. The site had a lot of pages, but it did not always make the next step obvious.",
        ],
        cards: [
          {
            title: "Too much scrolling",
            text: "Important content was there, but users had to keep moving through long pages before getting to it.",
          },
          {
            title: "Unclear first step",
            text: "The homepage did not immediately tell young adults where to go if they needed help.",
          },
          {
            title: "Menu overload",
            text: "The menu had so many options that it started feeling like another page instead of a shortcut.",
          },
          {
            title: "Mobile friction",
            text: "Some sections felt heavy on a phone because of large images, dense content, and small details that were easy to miss.",
          },
        ],
      },
      {
        id: "audit",
        eyebrow: "Audit Findings",
        title: "A lot of the issues came down to the site feeling busy at the wrong moments.",
        body: [
          "When I was marking up the site, I noticed that some problems were visual, but most of the bigger problems were about order and clarity. The site had pieces that worked, but they were not always placed where a young adult would expect them.",
        ],
        splitImages: [
          {
            label: "Annotated homepage issues",
            src: "/J-Portfolio/jit6.png",
          },
          {
            label: "Annotated navigation / menu issues",
            src: "/J-Portfolio/jit4.png",
          },
        ],
      },
      {
        id: "prioritization",
        eyebrow: "Prioritization",
        title: "I had to stop treating every issue like it was equally important.",
        body: [
          "At first, it was easy to point out everything that looked off: the menu, the footer, the images, the colors, the section order, and the amount of text. But that list was way too broad.",
          "The stronger direction was to focus on the things that would actually help someone find support faster: clearer page flow, cleaner navigation, and better organization.",
        ],
        comparison: {
          beforeTitle: "Before",
          beforeText:
            "A long list of problems that included layout, menu length, image sizing, footer spacing, contrast, and page order.",
          beforeImage: "/J-Portfolio/jit3.png",
          afterTitle: "After",
          afterText:
            "A smaller set of priorities focused on what users would need first: where to start, where to click, and how to find resources.",
          afterImage: "/J-Portfolio/jit5.png",
          reason:
            "I made this change because a big list of complaints is not that useful. The recommendations needed to point toward what should actually be fixed first, especially for users coming to the site for help.",
        },
      },
      {
        id: "recommendations",
        eyebrow: "Design Process",
        title: "Before jumping into screens, we needed a cleaner plan for the site.",
        body: [
          "This part became less about making random screen changes and more about building the pieces we needed before designing. We needed to understand the structure, agree on the visual rules, and then use that to make low-fidelity screens that actually followed the same logic.",
        ],
        featureImages: [
          {
            title: "Information Architecture",
            text: "Before making screens, we mapped out how the site should flow. This helped us understand what pages mattered most, how sections should connect, and what path a young adult would probably need to follow first.",
            src: "/J-Portfolio/jit7.png",
          },
          {
            title: "Design System",
            text: "Since multiple people were working on the project, we needed one place for our design choices. The design system helped keep buttons, colors, spacing, and content styles consistent instead of having every screen feel like a separate idea.",
            src: "/J-Portfolio/jit8.png",
          },
          {
            title: "Low-Fidelity Screens",
            text: "After the audit, information architecture, and design system, we started turning everything into low-fidelity screens. These helped us test the layout and flow before worrying too much about final visuals.",
            src: "/J-Portfolio/jit9.png",
          },
        ],
      },
      {
        id: "solution",
        eyebrow: "Final Direction",
        title: "The final direction made the site feel easier to follow.",
        body: [
          "The final direction focused on making the site less overwhelming. The goal was to help users understand what JIT offers, find the right resource area, and move through the site without feeling like they had to dig for everything.",
        ],
        galleryImages: [
          {
            label: "Proposed homepage structure",
            src: "/J-Portfolio/jit10.png",
          },
          {
            label: "Simplified mobile menu",
            src: "/J-Portfolio/jit11.png",
          },
          {
            label: "Resource card layout",
            src: "/J-Portfolio/jit12.png",
          },
        ],
      },
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "This project made me think more carefully about what should stay, move, or be removed.",
        body: [
          "JIT felt different from Lumen because I was not starting from a blank page. I had to work with a real website that already had content, goals, and a lot of moving parts.",
          "I learned that a redesign is not always about adding new sections. A lot of the work was deciding what needed to be simplified, what needed to move up, and what was making the site harder to use.",
          "This project helped me get better at explaining my choices. Instead of just saying something looked cluttered, I had to point to the actual issue: too much scrolling, unclear labels, or a menu that made users work too hard.",
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
          <div
            className={
              project.title === "Lumen — Hearing Aid App"
                ? "mx-auto mt-8 h-[390px] w-full max-w-3xl overflow-hidden border border-slate-700 bg-slate-800 px-2"
                : project.title === "JIT Website Audit"
                  ? "mt-8 h-[390px] overflow-hidden border border-slate-700 bg-slate-800 px-2"
                  : "mt-8 h-[390px] overflow-hidden border border-slate-700 bg-slate-800"
            }
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              className="h-full w-full object-contain"
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
            <div
              className={
                "imageSrc" in section && section.imageSrc === "/J-Portfolio/lumen2.png"
                  ? "mx-auto mt-10 h-[340px] w-full max-w-3xl overflow-hidden border border-slate-700 bg-slate-800 px-2"
                  : "imageSrc" in section && section.imageSrc === "/J-Portfolio/jit2.png"
                    ? "mt-10 h-[340px] overflow-hidden border border-slate-700 bg-slate-800 px-2"
                    : "mt-10 h-[340px] overflow-hidden border border-slate-700 bg-slate-800"
              }
            >
              {"imageSrc" in section && section.imageSrc ? (
                <Image
                  src={section.imageSrc}
                  alt={section.imageLabel}
                  width={1400}
                  height={900}
                  className="h-full w-full object-contain"
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
                      className="h-full w-full object-contain"
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
                        className="h-full w-full object-contain"
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
                        className="h-full w-full object-contain"
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
                        className="h-full w-full object-contain"
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
                      index === 0 && src === "/J-Portfolio/lumen11.png"
                        ? "mx-auto h-[420px] w-full max-w-3xl overflow-hidden border border-slate-700 bg-slate-800 px-2 md:col-span-2"
                        : index === 0 && src === "/J-Portfolio/jit10.png"
                          ? "h-[420px] overflow-hidden border border-slate-700 bg-slate-800 px-2 md:col-span-2"
                          : index === 0
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
                        className="h-full w-full object-contain"
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