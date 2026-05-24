import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { APPLIANCES, WHATSAPP_NUMBER } from "@/lib/appliances";
import { ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ElectroCare" },
      { name: "description", content: "Choose your appliance for fast, professional repair." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="text-3xl sm:text-5xl font-bold text-gradient">{t("services_title")}</h1>
          <p className="mt-3 text-muted-foreground">{t("services_sub")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {APPLIANCES.map((a, i) => {
            const Icon = a.icon;
            const isMore = a.key === "more_appliances";
            const delay = { animationDelay: `${i * 50}ms` };

            if (isMore) {
              return (
                <a
                  key={a.slug}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I need repair for another appliance not listed on the website.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-3d rounded-2xl p-5 sm:p-6 group animate-fade-up border-2 border-dashed border-primary/40"
                  style={delay}
                >
                  <div className="grid place-items-center h-14 w-14 rounded-2xl gradient-primary shadow-glow mb-4 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">{t(a.key)}</h3>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                    <MessageCircle className="h-3.5 w-3.5" /> Ask on WhatsApp
                  </div>
                </a>
              );
            }

            return (
              <Link
                key={a.slug}
                to="/repair/$appliance"
                params={{ appliance: a.slug }}
                className="glass card-3d rounded-2xl p-5 sm:p-6 group animate-fade-up"
                style={delay}
              >
                <div className="grid place-items-center h-14 w-14 rounded-2xl gradient-primary shadow-glow mb-4 transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{t(a.key)}</h3>
                <div className="mt-3 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Repair <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
