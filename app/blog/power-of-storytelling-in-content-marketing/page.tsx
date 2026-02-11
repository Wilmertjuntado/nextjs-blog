
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

        <div className="flex-1">
          <p className="mt-1 text-sm text-slate-600">
            I help businesses turn their message into clear, human storytelling—then convert it into
            blogs, emails, and landing pages that drive action.
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Work with me
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Read more posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function readingTimeFromText(text: string) {
  const words = text.trim().replace(/\s+/g, " ").split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200)); // 200 wpm
  return { words, minutes };
}

// Put your article text here (plain text only).
const ARTICLE_TEXT = `
The Power of Storytelling in Content Marketing

Storytelling isn’t just creativity—it’s strategy. Here’s how to use proven story frameworks to make your content memorable, relatable, and action-driven.
`;

const SLUG = "power-of-storytelling-in-content-marketing";
const POST = getPostBySlug(SLUG);

/**
 * ✅ FIX 1: remove trailing slash
 */
const BASE_URL = "https://nextjs-blog-pied-xi-93.vercel.app";

const PAGE_URL = `${BASE_URL}/blog/${SLUG}`;
const OG_URL = `${BASE_URL}/hero-storytelling.png`;

/**
 * ✅ FIX 2: Use ONE JSON-LD object only (delete getJsonLd + extra dates)
 * ✅ FIX 3: mainEntityOfPage should be object with @id
 * ✅ FIX 4: image should be array
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: POST.title,
  description: POST.description,
  image: [OG_URL],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  author: {
    "@type": "Person",
    name: "Wilmer Juntado",
  },
  publisher: {
    "@type": "Organization",
    name: "Wilmer's Blog",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/author.jpg`,
    },
  },
  datePublished: POST.publishedDate,
  dateModified: POST.publishedDate,
};

export const metadata: Metadata = {
  title: `${POST.title}${POST.subtitle ? " " + POST.subtitle : ""} (With Examples)`,
  description: POST.description,

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: `${POST.title}${POST.subtitle ? " " + POST.subtitle : ""}`,
    description: POST.description,
    url: PAGE_URL,
    siteName: "Wilmer's Blog",
    type: "article",
    images: [
      {
        url: OG_URL,
        width: 1200,
        height: 630,
        alt: POST.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${POST.title}${POST.subtitle ? " " + POST.subtitle : ""}`,
    description: POST.description,
    images: [OG_URL],
  },
};

export default function Page() {
  const { minutes } = readingTimeFromText(ARTICLE_TEXT);

  return (
    
    <main className="mx-auto max-w-3xl px-6 py-14">
      
      <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
  <Image
    src="/hero-storytelling.png"
    alt="The Power of Storytelling in Content Marketing"
    width={1200}
    height={630}
    priority
    className="h-auto w-full"
  />
</div>

      <header className="border-b border-slate-200 pb-8">
        <p className="text-sm font-medium text-slate-600">Content Marketing • Storytelling</p>

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

        {/* keep the rest of your sections as-is */}
      </article>

      <AuthorBox />
      <CTABox />
    </main>
  );
}
