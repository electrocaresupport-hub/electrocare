import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { MessageCircle, Phone, Clock } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/appliances";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ElectroCare" },
      { name: "description", content: "Contact ElectroCare via WhatsApp anytime." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center animate-fade-up">
          <h1 className="text-3xl sm:text-5xl font-bold text-gradient">{t("contact_title")}</h1>
          <p className="mt-4 text-muted-foreground">{t("contact_body")}</p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-white shadow-glow animate-glow-pulse"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle className="h-5 w-5" /> {t("whatsapp")}
          </a>

          <div className="grid sm:grid-cols-2 gap-4 mt-8 text-left">
            <div className="glass rounded-2xl p-4 flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium">+{WHATSAPP_NUMBER}</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-4 flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Hours</p>
                <p className="font-medium">9 AM – 9 PM, Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
