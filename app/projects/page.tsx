import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">Projects</h1>

      <ul className="mt-6 space-y-4">
        <li>Smart Home Dashboard Redesign </li> 
        <li>Lumen - Hearing Aid App</li>
        <li>JIT Website Redesign</li>
      </ul>

      <Link className="underline block mt-6" href="/">
        Back to Home
      </Link>
    </main>
  );
}
