"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="min-h-screen px-10 py-20">
      {/* 1. INTRO */}
      <section className="fade-in min-h-screen flex flex-col items-center justify-center border-b border-slate-700 text-center">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-800/70 p-12 shadow-xl">
          <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-sky-400 bg-slate-900 shadow-xl">
            <img
              src="/J-Portfolio/profile.png"
              alt="Jairo Martinez"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-6 text-xl font-medium text-slate-300">
            Jairo Martinez
          </p>

          <h1 className="mt-4 text-6xl font-bold tracking-tight text-slate-50 md:text-8xl">
            UX/UI Designer
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-slate-300">
            A UX-focused designer interested in building intuitive,
            human-centered tools.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
      </section>

      {/* 2. PROJECTS */}
      <section className="fade-in min-h-screen flex flex-col justify-center border-b border-slate-700">
        <div className="max-w-3xl rounded-3xl bg-slate-800/70 p-10 shadow-xl">
          <h2 className="text-4xl font-semibold text-slate-50">Projects</h2>

          <div className="mt-8 space-y-6">
            <Link
              href="/projects/hearing-aid-app/"
              className="block rounded-2xl border border-slate-600 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
            >
              <h3 className="text-xl font-medium text-slate-50">
                Hearing Aid App Redesign
              </h3>
              <p className="mt-2 text-slate-300">
                Improving quick access and usability for hearing aid users.
              </p>
              <p className="mt-4 text-sky-300">View project →</p>
            </Link>

            <Link
              href="/projects/smart-home-dashboard/"
              className="block rounded-2xl border border-slate-600 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
            >
              <h3 className="text-xl font-medium text-slate-50">
                Smart Home Dashboard
              </h3>
              <p className="mt-2 text-slate-300">
                Redesigning device control with a room-based system.
              </p>
              <p className="mt-4 text-sky-300">View project →</p>
            </Link>

            <Link
              href="/projects/jit-website-audit/"
              className="block rounded-2xl border border-slate-600 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
            >
              <h3 className="text-xl font-medium text-slate-50">
                JIT Website Audit
              </h3>
              <p className="mt-2 text-slate-300">
                Helping users find resources more efficiently.
              </p>
              <p className="mt-4 text-sky-300">View project →</p>
            </Link>
          </div>

          <Link
            className="mt-8 inline-block rounded-full border border-sky-400 px-6 py-3 text-sky-300 transition hover:bg-sky-400 hover:text-slate-950"
            href="/projects"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section className="fade-in min-h-screen flex flex-col justify-center border-b border-slate-700">
        <div className="max-w-2xl rounded-3xl bg-slate-800/70 p-10 shadow-xl">
          <h2 className="text-4xl font-semibold text-slate-50">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I'm a Cognitive Science student at UC San Diego specializing in
            Design and Interaction. I enjoy solving real-world problems through
            thoughtful user experiences, accessibility-focused design, and
            front-end development.
          </p>
        </div>
      </section>

      {/* 4. CONTACT */}
      <section className="fade-in min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl rounded-3xl bg-slate-800/70 p-10 shadow-xl">
          <p className="text-sm uppercase tracking-widest text-sky-300">
            Like what you see?
          </p>

          <h2 className="mt-3 text-5xl font-bold text-slate-50">
            Let's Connect
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