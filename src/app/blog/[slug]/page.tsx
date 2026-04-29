import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

type BlogPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-slate-50 sm:px-10">
      <div className="mx-auto w-full max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
            {post.tags.join(" / ")}
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="text-xs text-slate-400">
            {post.publishedAt} • {post.readingMinutes} min read
          </div>
        </header>

        <div className="space-y-6">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-emerald-100">
                {section.heading}
              </h2>
              <p className="text-sm leading-6 text-slate-200">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
