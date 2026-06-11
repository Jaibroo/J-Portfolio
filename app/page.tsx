"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const featuredProjects = [
  {
    title: "Lumen — Hearing Aid App",
    description:
      "A UX redesign focused on accessibility, clearer controls, and faster hearing aid adjustments.",
    slug: "hearing-aid-app",
    image: "/J-Portfolio/Lumen1.png",
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
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
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
            What I learned about design this quarter
          </h2>

          <p className="mt-6 max-w-5xl text-xl leading-8 text-slate-300">
            This quarter honestly changed how I look at design. At first, I was
            mainly thinking about making screens and adding useful features. But
            after working on Lumen and JIT, I started realizing that design is
            more about making choices that actually help people, not just adding
            more stuff to a page.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="border border-slate-700 bg-slate-800/60 p-7">
              <p className="text-sm uppercase tracking-widest text-slate-500">
                Earlier: Lumen
              </p>

              <h3 className="mt-4 text-2xl font-bold text-slate-50">
                I was still learning how to connect features to real problems.
              </h3>

              <p className="mt-4 text-lg leading-7 text-slate-300">
                With Lumen, I was excited about all the things the app could
                have, like audio controls, modes, troubleshooting, and different
                settings. That project helped me understand how an app could be
                structured, but I was still learning how to explain why each
                choice mattered for the user.
              </p>
            </div>

            <div className="border border-sky-400 bg-slate-800/60 p-7">
              <p className="text-sm uppercase tracking-widest text-sky-300">
                Later: JIT
              </p>

              <h3 className="mt-4 text-2xl font-bold text-slate-50">
                I got better at noticing what needed to be cleaned up.
              </h3>

              <p className="mt-4 text-lg leading-7 text-slate-300">
                JIT felt different because it was not about creating something
                from zero. It was more about looking at a real website and
                figuring out why it felt confusing. I had to think more about
                scrolling, menus, wording, and what users would actually need
                first.
              </p>
            </div>
          </div>

          <div className="mt-10 border border-slate-700 bg-slate-900/70 p-7">
            <h3 className="text-3xl font-bold text-slate-50">
              The biggest thing I learned
            </h3>

            <div className="mt-5 grid gap-6 md:grid-cols-3">
              <p className="text-lg leading-7 text-slate-300">
                I learned that accessibility is not only about making things
                bigger or easier to see. It is also about clear wording, simple
                navigation, and helping users know what to do when something
                goes wrong.
              </p>

              <p className="text-lg leading-7 text-slate-300">
                I also got better at giving reasons for my design choices.
                Instead of just saying something looks better, I tried to connect
                changes back to feedback, user confusion, or a real problem in
                the experience.
              </p>

              <p className="text-lg leading-7 text-slate-300">
                Most importantly, I learned that sometimes better design means
                removing things. A cleaner menu or a clearer first step can be
                more helpful than adding another button or section.
              </p>
            </div>
          </div>

          <div className="mt-10 border-l-4 border-sky-300 bg-slate-800/60 p-7">
            <p className="text-sm uppercase tracking-widest text-sky-300">
              Self Assessment
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-slate-200">
              I still want to get faster at prototyping and improve the visual
              polish of my work, but I do feel like I grew a lot this quarter.
              I went from thinking mostly about what I could design to thinking
              more about what users actually need. Lumen helped me practice
              building an app idea, and JIT helped me understand how to make a
              real website feel less overwhelming. I am still learning, but I
              feel way more confident explaining my choices now.
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