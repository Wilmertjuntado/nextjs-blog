export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  publishedDate: string;
  contentPlainText: string; // ✅ add this
};


export const POSTS: BlogPost[] = [
  {
    slug: "power-of-storytelling-in-content-marketing",
    title: "The Power of Storytelling",
    subtitle: "in Content Marketing",
    description:
      "Learn how storytelling transforms content marketing, builds emotional connections, and helps brands stand out in a crowded digital world.",
    publishedDate: "2026-02-11", // ✅ change to ISO format (important for SEO)

    contentPlainText: `
      Storytelling isn’t just creativity—it’s strategy.
      It builds emotional connection and helps brands stand out.
      When businesses communicate through narrative,
      they create meaning instead of just delivering information.
      Strong storytelling focuses on transformation:
      what changes before and after.
      This shift increases engagement, trust, and conversions.
    `,
  },
];

export function getPostBySlug(slug: string) {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  return post;
}
