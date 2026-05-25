import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — ElectroCare Repair Tips, Safety & Maintenance Guides" },
      {
        name: "description",
        content:
          "Expert articles on appliance safety, maintenance, DIY vs professional repair, and why proper repair matters. Trusted guides from ElectroCare technicians.",
      },
      { property: "og:title", content: "ElectroCare Blog — Repair & Safety Guides" },
      { property: "og:description", content: "Premium guides on appliance repair, safety and maintenance." },
    ],
  }),
});

function BlogPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <div className="text-center max-w-2xl mx-auto animate-fade-up">
        <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
          <BookOpen className="h-3.5 w-3.5" /> {t("brand")} Blog
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
          Repair Tips, <span className="text-gradient">Safety</span> & Guides
        </h1>
        <p className="mt-3 text-muted-foreground">
          Practical advice from certified ElectroCare technicians — written for everyday households.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {BLOG_POSTS.map((post, i) => {
          const Icon = post.icon;
          return (
            <article
              key={post.slug}
              className="group glass card-3d rounded-2xl p-6 flex flex-col gap-4 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`relative h-32 rounded-xl bg-gradient-to-br ${post.accent} overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0/0.6),transparent_60%)]" />
                <Icon className="relative h-14 w-14 text-primary drop-shadow-[0_0_20px_oklch(0.6_0.22_255/0.6)]" />
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-full glass-strong font-semibold text-primary">{post.category}</span>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="mt-auto inline-flex items-center justify-center gap-1.5 btn-glow rounded-xl px-4 py-2.5 text-sm font-semibold"
              >
                Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
