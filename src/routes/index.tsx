import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { ArrowDown, Wrench, Shield, Clock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ElectroCare — Premium Home Appliance Repair" },
      { name: "description", content: "Book trusted appliance repair via WhatsApp. TV, AC, fridge, washing machine and more." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <div>
      <section className="relative px-4 pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-base text-muted-foreground animate-fade-in">{t("hero_greeting")}</p>
          <p className="mt-1 text-base sm:text-lg text-foreground/80 animate-fade-up" style={{ animationDelay: "80ms" }}>
            {t("hero_welcome")}
          </p>

          <h1
            className="mt-6 sm:mt-8 font-display font-bold text-gradient glow-text animate-fade-up text-6xl sm:text-8xl lg:text-9xl tracking-tight leading-none"
            style={{ animationDelay: "160ms" }}
          >
            {t("brand")}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "240ms" }}>
            {t("hero_sub")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: "340ms" }}>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              {t("hero_tag")}
            </p>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 btn-glow rounded-full px-8 py-4 sm:px-12 sm:py-5 text-base sm:text-xl font-semibold animate-glow-pulse"
            >
              <Wrench className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:rotate-12" />
              {t("hero_cta")}
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mx-auto max-w-5xl mt-20 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Shield, title: "Certified Technicians", desc: "Trained experts and genuine parts." },
            { icon: Clock, title: "Same-Day Service", desc: "Fast on-site visits across the city." },
            { icon: Sparkles, title: "Transparent Pricing", desc: "No hidden fees, fair estimates." },
          ].map((f, i) => (
            <div
              key={f.title}
              className="glass card-3d rounded-2xl p-5 animate-fade-up"
              style={{ animationDelay: `${400 + i * 80}ms` }}
            >
              <div className="grid place-items-center h-10 w-10 rounded-xl gradient-primary shadow-glow mb-3">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
