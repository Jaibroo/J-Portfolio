"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const featuredProjects = [
  {
    title: "Lumen — Hearing Aid App",
    description:
      "A UX redesign focused on accessibility, clearer controls, and faster hearing aid adjustments.",
    slug: "hearing-aid-app",
    image: "/J-Portfolio/hearing-aid.png",
  },
  {
    title: "JIT Website Audit",
    description:
      "A mobile-first website audit focused on helping young adults find youth resources more efficiently.",
    slug: "jit-website-audit",
    image: "/J-Portfolio/jit-website.png",
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("Jairomartinez565@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen px-10 py-16 font-[Calluna,Georgia,serif]">
      {/* NAV */}
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-slate-700 bg-slate-950/90 px-10 py-5 backdrop-blur font-[Calluna,Georgia,serif]">
        <Link href="/" className="text-xl font-bold text-slate-50">
          Jairo Martinez Arenal
        </Link>

        <div className="flex gap-6 text-slate-300">
          <a href="#projects" className="hover:text-sky-300">
            Projects
          </a>
          <a href="#reflection" className="hover:text-sky-300">
            Reflection
          </a>
          <a href="#footer" className="hover:text-sky-300">
            Contact
          </a>
          <a href="/J-Portfolio/resume.pdf" className="hover:text-sky-300">
            Resume
          </a>
        </div>
      </nav>

      {/* 1. INTRO */}
      <section className="fade-in flex min-h-[50vh] flex-col justify-start border-b border-slate-700 pt-24 pb-12">
        <div className="max-w-6xl">
          <p className="text-4xl font-bold text-slate-200 md:text-5xl">
            Jairo Martinez Arenal
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight text-sky-300 md:text-7xl">
            UX/UI Designer
          </h1>

          <p className="mt-6 max-w-5xl text-xl leading-8 text-slate-300">
            I care about designing digital experiences that make people feel
            less lost and more in control. I&apos;m growing at the intersection
            of UX, front-end development, and product thinking, and this summer
            I&apos;ll be joining Design Co&apos;s Up-Grade Program to take on
            real-world product challenges with industry guidance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:jairomartinez565@gmail.com"
              className="flex items-center justify-center gap-2 bg-sky-400 px-8 py-4 text-lg font-medium text-slate-950 transition hover:bg-sky-300"
            >
              Get In Touch <span>↗</span>
            </a>

            <a
              href="/J-Portfolio/resume.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2 border border-sky-400 px-8 py-4 text-lg font-medium text-sky-300 transition hover:bg-sky-300 hover:text-slate-950"
            >
              Resume <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. PROJECTS */}
      <section
        id="projects"
        className="fade-in flex min-h-[80vh] flex-col justify-start border-b border-slate-700 pt-10 pb-16"
      >
        <div className="w-full max-w-none">
          <h2 className="text-5xl font-bold text-slate-50">Projects</h2>

          <div className="mt-8 grid w-full gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}/`}
                className="group relative h-[520px] overflow-hidden border border-slate-600 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-sky-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8 transition duration-300 group-hover:translate-y-[-18px]">
                  <h3 className="text-3xl font-bold text-slate-50">
                    {project.title}
                  </h3>

                  <div className="mt-4 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40">
                    <p className="max-w-xl text-lg leading-7 text-slate-200">
                      {project.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 bg-sky-300 px-5 py-3 font-medium text-slate-950">
                      View Project <span>↗</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REFLECTION */}
      <section
        id="reflection"
        className="fade-in border-b border-slate-700 py-16"
      >
        <div className="max-w-6xl">
          <p className="text-sm uppercase tracking-widest text-sky-300">
            Reflection & Self Assessment
          </p>

          <h2 className="mt-4 max-w-4xl text-5xl font-bold leading-tight text-slate-50">
            How my design process changed this quarter
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="border border-slate-700 bg-slate-800/60 p-6">
              <p className="text-sm uppercase tracking-widest text-slate-500">
                Earlier: Lumen
              </p>

              <h3 className="mt-4 text-2xl font-bold text-slate-50">
                I started by thinking in screens and features.
              </h3>

              <p className="mt-4 text-lg leading-7 text-slate-300">
                On Lumen, I focused on what the app could include: audio
                controls, modes, troubleshooting, and customization. That helped
                me learn product structure, but I was still learning how to
                connect each design choice back to a user problem.
              </p>
            </div>

            <div className="border border-sky-400 bg-slate-800/60 p-6">
              <p className="text-sm uppercase tracking-widest text-sky-300">
                Later: JIT
              </p>

              <h3 className="mt-4 text-2xl font-bold text-slate-50">
                I became more focused on evidence and prioritization.
              </h3>

              <p className="mt-4 text-lg leading-7 text-slate-300">
                With JIT, I had to look at an existing website, user feedback,
                mobile friction, and stakeholder goals. Instead of asking what
                could be added, I started asking what needed to be simplified,
                moved, renamed, or removed.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="border border-slate-700 bg-slate-900/60 p-6">
              <h3 className="text-2xl font-bold text-slate-50">
                Accessibility became broader.
              </h3>
              <p className="mt-4 text-lg leading-7 text-slate-300">
                I used to think about accessibility mostly through visual design:
                larger buttons, clearer spacing, and readable text. Now I also
                think about language, navigation, support flows, and whether
                users feel confident when something goes wrong.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-900/60 p-6">
              <h3 className="text-2xl font-bold text-slate-50">
                My rationale became stronger.
              </h3>
              <p className="mt-4 text-lg leading-7 text-slate-300">
                I became more careful about explaining why a design should
                change. A recommendation is stronger when it connects back to
                research, user behavior, or a specific point of friction instead
                of personal preference.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-900/60 p-6">
              <h3 className="text-2xl font-bold text-slate-50">
                I learned to design less, more intentionally.
              </h3>
              <p className="mt-4 text-lg leading-7 text-slate-300">
                My strongest improvements came from reducing confusion rather
                than adding more. This quarter helped me see that good design is
                often about helping users reach the right action with less
                effort.
              </p>
            </div>
          </div>

          <div className="mt-10 border-l-4 border-sky-300 bg-slate-800/60 p-6">
            <p className="text-sm uppercase tracking-widest text-sky-300">
              Self Assessment
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-slate-200">
              I still want to improve my visual polish and prototyping speed,
              but I can see a real shift in how I approach design. I moved from
              making screens that looked useful to making decisions that are
              easier to defend. Lumen taught me to pay attention to user needs.
              JIT taught me to prioritize those needs inside a real website with
              real constraints.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        className="relative flex flex-col justify-between gap-0 py-6 text-base text-slate-400 md:flex-row md:items-center"
      >
        <p className="uppercase tracking-widest">Created by yours truly.</p>

        <div className="flex flex-wrap gap-8 uppercase tracking-widest">
          <a
            href="https://www.linkedin.com/in/jairo-martinez-arenal-4b9811323/"
            target="_blank"
            className="hover:text-sky-300"
          >
            LinkedIn
          </a>

          <button
            onClick={copyEmail}
            className="uppercase tracking-widest hover:text-sky-300"
          >
            Email
          </button>

          <a
            href="https://github.com/Jaibroo"
            target="_blank"
            className="hover:text-sky-300"
          >
            GitHub
          </a>
        </div>

        {copied && (
          <div className="absolute right-0 -top-8 border border-sky-400 bg-slate-950 px-4 py-2 text-sm uppercase tracking-widest text-sky-300 shadow-xl">
            Email copied!
          </div>
        )}
      </footer>
    </main>
  );
}