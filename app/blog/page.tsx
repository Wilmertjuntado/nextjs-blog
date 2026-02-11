import Link from "next/link";

const posts = [
  {
    title: "The Power of Storytelling in Content Marketing",
    description:
      "How to use character, conflict, and resolution to make your content memorable and action-driven.",
    href: "/blog/power-of-storytelling-in-content-marketing",
    date: "Feb 11, 2026",
  },
];

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Blog</h1>
        <p className="mt-3 text-slate-700">
          Practical storytelling and content marketing frameworks you can apply right away.
        </p>
      </header>

      <section className="mt-10 grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:bg-slate-50"
          >
            <p className="text-xs font-medium text-slate-600">{p.date}</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h2>
            <p className="mt-2 text-slate-700">{p.description}</p>
            <p className="mt-4 text-sm font-semibold text-slate-900 underline">
              Read article →
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
