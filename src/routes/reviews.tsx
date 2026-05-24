import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — ElectroCare" },
      { name: "description", content: "What our customers say about ElectroCare." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Ananya S.", text: "Fixed my fridge the same day. Polite technician, fair price.", rating: 5 },
  { name: "Rahim K.", text: "AC cooling restored perfectly. Highly recommended!", rating: 5 },
  { name: "Priya M.", text: "Booked on WhatsApp in 2 minutes. Super easy.", rating: 5 },
  { name: "Imran H.", text: "Washing machine works like new. Great service.", rating: 4 },
  { name: "Tanvir R.", text: "Honest pricing and quick turnaround.", rating: 5 },
  { name: "Sneha D.", text: "Microwave repaired neatly. Will use again.", rating: 5 },
];

function ReviewsPage() {
  const { t } = useI18n();
  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-gradient text-center animate-fade-up">{t("reviews_title")}</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {reviews.map((r, i) => (
            <div key={i} className="glass card-3d rounded-2xl p-5 animate-fade-up" style={{ animationDelay: `${i*60}ms` }}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className={`h-4 w-4 ${k < r.rating ? "fill-primary text-primary" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-sm text-foreground/90">"{r.text}"</p>
              <p className="mt-3 text-xs font-semibold text-muted-foreground">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
