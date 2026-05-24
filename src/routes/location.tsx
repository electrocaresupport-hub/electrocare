import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — ElectroCare" },
      { name: "description", content: "Find ElectroCare service area and contact." },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  const { t } = useI18n();
  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center animate-fade-up">
          <div className="mx-auto grid place-items-center h-14 w-14 rounded-2xl gradient-primary shadow-glow mb-4">
            <MapPin className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gradient">{t("location_title")}</h1>
          <p className="mt-4 text-muted-foreground">{t("location_body")}</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=90.3754%2C23.7460%2C90.4254%2C23.7960&layer=mapnik"
              className="w-full h-72"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
