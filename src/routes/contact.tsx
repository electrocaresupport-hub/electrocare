import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { MessageCircle, Phone, Clock, Mail, Send } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/appliances";
import { useState, type FormEvent } from "react";

export const BUSINESS_EMAIL = "electrocare.support@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ElectroCare" },
      { name: "description", content: "Contact ElectroCare via WhatsApp, phone, or email anytime." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim().slice(0, 100);
    const trimmedEmail = email.trim().slice(0, 200);
    const trimmedMsg = message.trim().slice(0, 1500);
    if (!trimmedName || !trimmedEmail || !trimmedMsg) return;
    const subject = encodeURIComponent(`New Inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMsg}`
    );
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-3xl space-y-6">
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
        </div>

        <div className="grid sm:grid-cols-2 gap-4 animate-fade-up">
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="glass rounded-2xl p-5 flex items-center gap-3 card-3d"
          >
            <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Tap to call</p>
              <p className="font-semibold">+{WHATSAPP_NUMBER}</p>
            </div>
          </a>
          <div className="glass rounded-2xl p-5 flex items-start gap-3">
            <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow shrink-0">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Working Hours</p>
              <p className="font-semibold text-sm">Mon – Sat: 9:00 AM – 8:00 PM</p>
              <p className="text-sm text-muted-foreground">Sun: Emergency Only</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="glass-strong rounded-3xl p-6 sm:p-8 animate-fade-up space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Send Us an Email</h2>
              <p className="text-xs text-muted-foreground">{BUSINESS_EMAIL}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              required
            />
            <input
              type="email"
              className="input"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={200}
              required
            />
          </div>
          <textarea
            className="input min-h-32 resize-y"
            placeholder="How can we help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1500}
            required
          />
          <button
            type="submit"
            className="btn-glow rounded-xl px-6 py-3 font-semibold inline-flex items-center gap-2"
          >
            <Send className="h-4 w-4" /> Send Email
          </button>
        </form>
      </div>
    </section>
  );
}
