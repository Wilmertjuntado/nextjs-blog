import { getPostBySlug } from "../posts";
import type { Metadata } from "next";



import Image from "next/image";

import Link from "next/link";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
      {children}
    </span>
  );
}

function CTABox() {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        Want help turning your brand into a story?
      </h3>
      <p className="mt-2 text-slate-600">
        Use “Why → How → What” plus character, conflict, and resolution to make content that feels
        human and drives action.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Contact me
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Back to Blog
        </Link>
      </div>
    </section>
  );
}

function AuthorBox() {
  return (
    <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        {/* Avatar */}
        {/* Avatar + label */}
<div className="flex items-center gap-4">
  <Image
    src="/author.jpg"
    alt="Wilmer Juntado"
    width={72}
    height={72}
    className="shrink-0 rounded-full object-cover"
  />

  <div>
    <p className="text-xs uppercase tracking-wide text-slate-500">Written by</p>
    <p className="mt-1 text-sm font-semibold text-slate-900">Wilmer Juntado</p>
  </div>
</div>

        {/* Author info */}
        <div className="flex-1">
          
          <p className="mt-1 text-sm text-slate-600">
            I help businesses turn their message into clear, human storytelling—then convert it into
            blogs, emails, and landing pages that drive action.
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Work with me
            </a>
            <a
              href="/blog"
              className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Read more posts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function readingTimeFromText(text: string) {
  const words = text
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(words / 200)); // 200 wpm
  return { words, minutes };
}

// Put your article text here (plain text only).
const ARTICLE_TEXT = `
The Power of Storytelling in Content Marketing

Storytelling isn’t just creativity—it’s strategy. Here’s how to use proven story frameworks to make your content memorable, relatable, and action-driven.

What is storytelling in content marketing?
Storytelling in content marketing means using narrative to communicate your message—rather than relying only on facts, features, or promotions. It focuses on purpose, people, and transformation: what changes before vs. after.

Why storytelling works
People don’t remember bullet points the way they remember stories. Stories create emotional connection, and emotion drives attention, trust, and decisions—especially when audiences are overwhelmed with content.
Stories build trust faster than claims.
Stories make brands feel human and relatable.
Stories help your message stick.

Start with “Why”: The Golden Circle
Why — your purpose or belief
How — your values or approach
What — your product or service
Most brands start with what they sell. Strong storytellers start with why they exist, then show how they do it, and only then what they offer.

The 3 elements of a powerful story
Character: The hero should be your audience, not your brand.
Conflict: Conflict is the problem: frustration, uncertainty, obstacles, doubt.
Resolution: Show the transformation after the solution.

Common storytelling mistakes
Listing features instead of showing change.
Making the brand the hero (instead of the audience).
Generic claims (“best service”) with no proof story.
No clear next step for the reader.

How to apply storytelling to your content
Who is this for? (character)
What are they struggling with? (conflict)
What changes after the solution? (resolution)
What should they do next? (CTA)

Conclusion
Storytelling helps your content stand out, feel human, and drive action. Start with why, frame the conflict your audience faces, and guide them toward a clear resolution.
`;

const POST = getPostBySlug("power-of-storytelling-in-content-marketing");
const SLUG_PATH = `/blog/${POST.slug}`;


export const metadata: Metadata = {
  title: `${POST.title}${POST.subtitle ? " " + POST.subtitle : ""} (With Examples)`,
  description: POST.description,
  alternates: {
    canonical: SLUG_PATH,
  },
};



export default function Page() {
    const { minutes } = readingTimeFromText(ARTICLE_TEXT);

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <header className="border-b border-slate-200 pb-8">
        <p className="text-sm font-medium text-slate-600">
          Content Marketing • Storytelling
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          The Power of Storytelling in Content Marketing
        </h1>
        
            <p className="mt-3 text-sm text-slate-600">
    {POST.publishedDate} • {minutes} min read
    </p>




        <p className="mt-4 text-lg text-slate-700">
          Storytelling isn’t just creativity—it’s strategy. Here’s how to use proven story
          frameworks to make your content memorable, relatable, and action-driven.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>power of storytelling</Badge>
          <Badge>brand storytelling</Badge>
          <Badge>content marketing strategy</Badge>
        </div>

        <div className="mt-6">
          <Link href="/blog" className="text-sm font-semibold text-slate-900 underline">
            ← Back to Blog
          </Link>
        </div>
      </header>

      <article className="prose prose-slate prose-lg mt-10 max-w-none">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">
            What is storytelling in content marketing?
          </h2>
          <p>
            Storytelling in content marketing means using narrative to communicate your message—
            rather than relying only on facts, features, or promotions. It focuses on purpose,
            people, and transformation: what changes before vs. after.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Why storytelling works</h2>
          <p>
            People don’t remember bullet points the way they remember stories. Stories create
            emotional connection, and emotion drives attention, trust, and decisions—especially
            when audiences are overwhelmed with content.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Stories build trust faster than claims</li>
            <li>Stories make brands feel human and relatable</li>
            <li>Stories help your message stick</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">
            Start with “Why”: The Golden Circle
          </h2>
          <p>A simple storytelling framework:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Why</strong> — your purpose or belief
            </li>
            <li>
              <strong>How</strong> — your values or approach
            </li>
            <li>
              <strong>What</strong> — your product or service
            </li>
          </ol>
          <p>
            Most brands start with what they sell. Strong storytellers start with why they exist,
            then show how they do it, and only then what they offer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">
            The 3 elements of a powerful story
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">1) Character</h3>
              <p className="mt-2 text-sm text-slate-700">
                The hero should be your audience, not your brand.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">2) Conflict</h3>
              <p className="mt-2 text-sm text-slate-700">
                Conflict is the problem: frustration, uncertainty, obstacles, doubt.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">3) Resolution</h3>
              <p className="mt-2 text-sm text-slate-700">
                Show the transformation after the solution.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Common storytelling mistakes</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Listing features instead of showing change</li>
            <li>Making the brand the hero (instead of the audience)</li>
            <li>Generic claims (“best service”) with no proof story</li>
            <li>No clear next step for the reader</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">
            How to apply storytelling to your content
          </h2>
          <p>Use this quick structure for almost anything you write:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Who is this for? (character)</li>
            <li>What are they struggling with? (conflict)</li>
            <li>What changes after the solution? (resolution)</li>
            <li>What should they do next? (CTA)</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Conclusion</h2>
          <p>
            Storytelling helps your content stand out, feel human, and drive action. Start with why,
            frame the conflict your audience faces, and guide them toward a clear resolution.
          </p>
        </section>
      </article>
<AuthorBox />

      <CTABox />
    </main>
  );
}
