import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Policy — ElectroCare" },
      { name: "description", content: "Transparent pricing and service policies." },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  const { t } = useI18n();
  const points = [
    "Transparent, upfront pricing — no hidden fees.",
    "Honest inspection and diagnosis before any repair.",
    "Clear estimates shared before work begins.",
    "Genuine parts only, sourced from trusted suppliers.",
    "Trained, background-checked technicians.",
    "Customer data is private and never sold.",
  ];
  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 animate-fade-up">
          <h1 className="text-3xl sm:text-5xl font-bold text-gradient text-center">{t("policy_title")}</h1>
          <p className="mt-4 text-muted-foreground text-center">{t("policy_body")}</p>
          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 glass rounded-2xl p-4 animate-fade-up" style={{ animationDelay: `${i*50}ms` }}>
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
