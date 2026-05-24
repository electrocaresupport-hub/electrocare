import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Award, Users, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ElectroCare" },
      { name: "description", content: "About ElectroCare — your trusted neighborhood appliance repair partner." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000" },
    { icon: Wrench, label: "Repairs Done", value: "10,000" },
    { icon: Award, label: "Years Experience", value: "13+" },
  ];
  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center animate-fade-up">
          <h1 className="text-3xl sm:text-5xl font-bold text-gradient">{t("about_title")}</h1>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t("about_body")}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {stats.map((s, i) => (
            <div key={s.label} className="glass card-3d rounded-2xl p-5 text-center animate-fade-up" style={{ animationDelay: `${i*60}ms` }}>
              <div className="mx-auto grid place-items-center h-10 w-10 rounded-xl gradient-primary shadow-glow mb-2">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="font-bold text-xl">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
