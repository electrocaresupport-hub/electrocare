import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { APPLIANCES, WHATSAPP_NUMBER } from "@/lib/appliances";
import { ArrowLeft, Upload, Send, Image as ImageIcon } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

export const Route = createFileRoute("/repair/$appliance")({
  head: () => ({
    meta: [
      { title: "Repair Request — ElectroCare" },
      { name: "description", content: "Submit a repair request via WhatsApp." },
    ],
  }),
  component: RepairPage,
  notFoundComponent: () => <div className="p-10 text-center">Appliance not found.</div>,
});

function RepairPage() {
  const { t } = useI18n();
  const { appliance } = useParams({ from: "/repair/$appliance" });
  const item = useMemo(() => APPLIANCES.find((a) => a.slug === appliance), [appliance]);

  const [form, setForm] = useState({ name: "", phone: "", address: "", problem: "" });
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  if (!item) {
    return (
      <div className="px-4 py-16 text-center">
        <p>Appliance not found.</p>
        <Link to="/services" className="text-primary underline">Back to services</Link>
      </div>
    );
  }
  const Icon = item.icon;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `*${t("request_title")} — ${t("brand")}*`,
      `${t("field_appliance")}: ${t(item.key)}`,
      `${t("field_name")}: ${form.name}`,
      `${t("field_phone")}: ${form.phone}`,
      `${t("field_address")}: ${form.address}`,
      `${t("field_problem")}: ${form.problem}`,
      photoName ? `📷 ${photoName}` : "",
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const onPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Max 5MB");
      return;
    }
    setPhotoName(file.name);
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4" /> {t("back")}
        </Link>

        <div className="glass-strong rounded-3xl p-6 sm:p-8 animate-fade-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="grid place-items-center h-14 w-14 rounded-2xl gradient-primary shadow-glow">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{t("request_title")}</p>
              <h1 className="text-2xl font-bold">{t(item.key)}</h1>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <Field label={t("field_name")}>
              <input
                required maxLength={80}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input"
                placeholder="Rahim Ahmed"
              />
            </Field>
            <Field label={t("field_phone")}>
              <input
                required type="tel" maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="input"
                placeholder="+880 1700 000000"
              />
            </Field>
            <Field label={t("field_address")}>
              <input
                required maxLength={200}
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="input"
                placeholder="House, Road, City"
              />
            </Field>
            <Field label={t("field_appliance")}>
              <input value={t(item.key)} disabled className="input opacity-70" />
            </Field>
            <Field label={t("field_problem")}>
              <textarea
                required rows={4} maxLength={800}
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                className="input resize-none"
                placeholder="Describe the issue..."
              />
            </Field>

            <div>
              <label className="block text-sm font-medium mb-1.5">{t("upload_text")}</label>
              <label className="glass card-3d flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border/70 p-6 cursor-pointer hover:border-primary/50 transition-colors">
                {photoPreview ? (
                  <img src={photoPreview} alt="preview" className="max-h-40 rounded-xl" />
                ) : (
                  <>
                    <div className="grid place-items-center h-12 w-12 rounded-xl gradient-primary shadow-glow">
                      <Upload className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-medium">{t("upload_text")}</p>
                    <p className="text-xs text-muted-foreground">{t("upload_hint")}</p>
                  </>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={onPhoto} />
                {photoName && (
                  <p className="text-xs text-primary inline-flex items-center gap-1 mt-1">
                    <ImageIcon className="h-3 w-3" /> {photoName}
                  </p>
                )}
              </label>
            </div>

            <p className="text-xs text-muted-foreground italic">{t("charges_note")}</p>

            <button
              type="submit"
              className="w-full btn-glow rounded-2xl px-6 py-4 font-semibold inline-flex items-center justify-center gap-2 text-base"
            >
              <Send className="h-5 w-5" /> {t("submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      {children}
    </label>
  );
}
