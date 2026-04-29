import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Meeting Analytics Blog",
  description:
    "Insights on meeting cost, time ROI, and analytics for modern teams.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-slate-50 sm:px-10">
      <div className="mx-auto w-full max-w-5xl space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
            Insights
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Meeting cost playbooks and ROI strategies.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Practical guidance for HR, Ops, and Finance leaders turning meetings
            into measurable savings.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{post.publishedAt}</span>
                <span>{post.readingMinutes} min read</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-slate-300">{post.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex text-sm font-semibold text-emerald-200"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
