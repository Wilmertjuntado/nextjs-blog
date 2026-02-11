export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  publishedDate: string;
};

export const POSTS: BlogPost[] = [
  {
    slug: "power-of-storytelling-in-content-marketing",
    title: "The Power of Storytelling",
    subtitle: "in Content Marketing",
    description:
      "Learn how storytelling transforms content marketing, builds emotional connections, and helps brands stand out in a crowded digital world.",
    publishedDate: "Feb 11, 2026",
  },
];

export function getPostBySlug(slug: string) {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  return post;
}
