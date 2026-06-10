"use client";

import Link from "next/link";
import { useEffect } from "react";

const featuredProjects = [
  {
    title: "Hearing Aid App Redesign",
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
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="min-h-screen px-10 py-16">
      {/* NAV */}
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-slate-700 bg-slate-950/90 px-10 py-5 backdrop-blur">
        <Link href="/" className="text-xl font-bold text-slate-50">
          Jairo Martinez Arenal
        </Link>

        <div className="flex gap-6 text-slate-300">
          <a href="#projects" className="hover:text-sky-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-sky-300">
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
          <p className="text-5xl font-bold text-slate-200 md:text-6xl">
            Jairo Martinez Arenal
          </p>

          <h1 className="mt-5 text-6xl font-bold tracking-tight text-sky-300 md:text-8xl">
            UX/UI Designer
          </h1>

          <p className="mt-6 max-w-5xl text-xl leading-8 text-slate-300">
            I design accessible, human-centered digital experiences with a
            growing focus on front-end development and product thinking. This
            summer, I plan to continue sharpening my design process through
            Design Co&apos;s Summer Upgrade Program while building stronger case
            studies, cleaner interfaces, and more intentional user flows.
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
        <div className="max-w-7xl">
          <h2 className="text-5xl font-bold text-slate-50">Projects</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}/`}
                className="group relative h-[500px] overflow-hidden border border-slate-600 bg-slate-900 shadow-xl transition hover:border-sky-400"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-slate-50">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end bg-slate-950/80 p-8 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="max-w-xl text-lg leading-7 text-slate-200">
                    {project.description}
                  </p>

                  <p className="mt-6 text-xl font-medium text-sky-300">
                    View Project ↗
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT */}
      <section
        id="contact"
        className="fade-in flex min-h-[70vh] flex-col justify-center"
      >
        <div className="max-w-2xl bg-slate-800/70 p-10 shadow-xl">
          <p className="text-sm uppercase tracking-widest text-sky-300">
            Like what you see?
          </p>

          <h2 className="mt-3 text-5xl font-bold text-slate-50">
            Let&apos;s Connect
          </h2>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="flex items-center justify-center gap-2 border border-slate-500 px-8 py-4 text-center text-lg text-slate-100 transition hover:bg-sky-300 hover:text-slate-950"
              href="/J-Portfolio/resume.pdf"
            >
              Resume <span>↗</span>
            </a>

            <a
              className="flex items-center justify-center gap-2 border border-slate-500 px-8 py-4 text-center text-lg text-slate-100 transition hover:bg-sky-300 hover:text-slate-950"
              href="https://linkedin.com"
              target="_blank"
            >
              LinkedIn <span>↗</span>
            </a>

            <a
              className="flex items-center justify-center gap-2 border border-slate-500 px-8 py-4 text-center text-lg text-slate-100 transition hover:bg-sky-300 hover:text-slate-950"
              href="mailto:jairomartinez565@gmail.com"
            >
              Email <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}