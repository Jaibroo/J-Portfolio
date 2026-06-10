"use client";

import Link from "next/link";
import { useEffect } from "react";

const featuredProjects = [
  {
    title: "Hearing Aid App Redesign",
    description: "Improving quick access and usability for hearing aid users.",
    slug: "hearing-aid-app",
    image: "/J-Portfolio/hearing-aid.png",
  },
  {
    title: "Smart Home Dashboard",
    description: "Redesigning device control with a room-based system.",
    slug: "smart-home-dashboard",
    image: "/J-Portfolio/smart-home.png",
  },
  {
    title: "JIT Website Audit",
    description: "Helping users find youth resources more efficiently.",
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
    <main className="min-h-screen px-10 py-20">
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
      <section className="fade-in flex min-h-[62vh] flex-col justify-start border-b border-slate-700 pt-32 pb-16">
        <div className="max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1.6fr_0.9fr] md:items-center">
            <div>
              <p className="text-4xl font-bold text-slate-200 md:text-5xl">
                Jairo Martinez Arenal
              </p>

              <h1 className="mt-5 text-6xl font-bold tracking-tight text-slate-50 md:text-8xl">
                UX/UI Designer
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
                I design accessible, human-centered digital experiences with a
                growing focus on front-end development, interaction design, and
                building tools that feel clear, useful, and easy to navigate.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:jairomartinez565@gmail.com"
                  className="rounded-full bg-sky-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-300"
                >
                  Get In Touch
                </a>

                <a
                  href="/J-Portfolio/resume.pdf"
                  target="_blank"
                  className="rounded-full border border-sky-400 px-6 py-3 font-medium text-sky-300 transition hover:bg-sky-400 hover:text-slate-950"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-widest text-sky-300">
                Currently
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-slate-50">
                Growing as a UX designer and front-end builder.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                This summer, I plan to continue sharpening my design process
                through Design Co&apos;s Summer Upgrade Program while improving
                my portfolio, case studies, and development skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECTS */}
      <section
        id="projects"
        className="fade-in flex min-h-[85vh] flex-col justify-start border-b border-slate-700 pt-12 pb-20"
      >
        <div className="max-w-7xl">
          <h2 className="text-5xl font-bold text-slate-50">Projects</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}/`}
                className="overflow-hidden rounded-3xl border border-slate-600 bg-slate-800/70 shadow-xl transition hover:-translate-y-1 hover:border-sky-400"
              >
                <div className="h-48 bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-slate-50">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-slate-300">
                    {project.description}
                  </p>

                  <p className="mt-6 text-sky-300">View project →</p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            className="mt-10 inline-block rounded-full border border-sky-400 px-6 py-3 text-sky-300 transition hover:bg-sky-400 hover:text-slate-950"
            href="/projects"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* 3. CONTACT */}
      <section
        id="contact"
        className="fade-in flex min-h-[70vh] flex-col justify-center"
      >
        <div className="max-w-2xl rounded-3xl bg-slate-800/70 p-10 shadow-xl">
          <p className="text-sm uppercase tracking-widest text-sky-300">
            Like what you see?
          </p>

          <h2 className="mt-3 text-5xl font-bold text-slate-50">
            Let&apos;s Connect
          </h2>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-full border border-slate-500 px-6 py-3 text-center text-slate-100 transition hover:bg-sky-400 hover:text-slate-950"
              href="/J-Portfolio/resume.pdf"
            >
              Resume
            </a>

            <a
              className="rounded-full border border-slate-500 px-6 py-3 text-center text-slate-100 transition hover:bg-sky-400 hover:text-slate-950"
              href="https://linkedin.com"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              className="rounded-full border border-slate-500 px-6 py-3 text-center text-slate-100 transition hover:bg-sky-400 hover:text-slate-950"
              href="mailto:jairomartinez565@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}