import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { WHATSAPP_NUMBER } from "@/lib/appliances";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    return {
      meta: post
        ? [
            { title: `${post.title} — ElectroCare Blog` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
          ]
        : [{ title: "Article — ElectroCare" }],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary font-semibold">← Back to blog</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-xl font-semibold">Couldn't load article</h1>
      <button onClick={reset} className="mt-4 btn-glow rounded-xl px-5 py-2 text-sm font-semibold">Try again</button>
    </div>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const Icon = post.icon;
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>

      <div className="mt-6 animate-fade-up">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full glass-strong font-semibold text-primary">{post.category}</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3" /> {post.readTime}
          </span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">{post.title}</h1>
        <p className="mt-3 text-muted-foreground text-lg">{post.excerpt}</p>
      </div>

      <div className={`mt-8 relative h-48 sm:h-56 rounded-2xl bg-gradient-to-br ${post.accent} overflow-hidden flex items-center justify-center animate-scale-in`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0/0.7),transparent_60%)]" />
        <Icon className="relative h-20 w-20 text-primary drop-shadow-[0_0_30px_oklch(0.6_0.22_255/0.7)]" />
      </div>

      <div className="mt-10 glass rounded-2xl p-6 sm:p-8 space-y-6">
        {post.content.map((s: { heading: string; body: string }, i: number) => (
          <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <h2 className="text-xl font-bold text-foreground">{s.heading}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 glass-strong rounded-2xl p-6 text-center">
        <h3 className="text-lg font-bold">Need a professional repair?</h3>
        <p className="mt-1 text-sm text-muted-foreground">Talk to our certified ElectroCare technicians on WhatsApp.</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 btn-glow rounded-xl px-5 py-2.5 text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>
    </article>
  );
}
