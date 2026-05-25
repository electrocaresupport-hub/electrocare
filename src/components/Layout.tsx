import { Link } from "@tanstack/react-router";
import { Menu, X, Globe, LogIn, UserPlus, MessageCircle, Zap } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Particles } from "./Particles";
import { useI18n, LANGS, type Lang } from "@/lib/i18n";
import { WHATSAPP_NUMBER } from "@/lib/appliances";

export function Layout({ children }: { children: ReactNode }) {
  const { t, lang, setLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { to: "/", label: t("nav_home") },
    { to: "/services", label: t("nav_services") },
    { to: "/about", label: t("nav_about") },
    { to: "/reviews", label: t("nav_reviews") },
    { to: "/blog", label: t("nav_blog") },
    { to: "/location", label: t("nav_location") },
    { to: "/contact", label: t("nav_contact") },
    { to: "/policy", label: t("nav_policy") },
  ] as const;

  return (
    <div className="relative min-h-screen flex flex-col">
      <Particles />

      {/* Navbar */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 pt-4">
          <nav className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuOpen((s) => !s)}
                aria-label="Menu"
                className="p-2 rounded-xl hover:bg-secondary transition-colors"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
                <span className="grid place-items-center h-8 w-8 rounded-lg gradient-primary shadow-glow">
                  <Zap className="h-4 w-4 text-primary-foreground" />
                </span>
                <span className="text-gradient">{t("brand")}</span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => setLangOpen((s) => !s)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
                  aria-label="Language"
                >
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{lang}</span>
                </button>
                {langOpen && (
                  <div className="absolute right-0 mt-2 glass-strong rounded-xl p-1 min-w-[140px] animate-scale-in origin-top-right">
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as Lang);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors ${
                          lang === l.code ? "text-primary font-semibold" : ""
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors">
                <LogIn className="h-4 w-4" /> {t("login")}
              </button>
              <button className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold btn-glow">
                <UserPlus className="h-4 w-4" /> {t("signup")}
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div className="glass-strong rounded-2xl mt-2 p-3 animate-fade-up">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-secondary transition-colors text-sm font-medium"
                    activeProps={{ className: "px-4 py-3 rounded-xl bg-secondary text-primary font-semibold text-sm" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 sm:hidden">
                <button className="px-4 py-3 rounded-xl hover:bg-secondary text-sm font-medium inline-flex items-center justify-center gap-2">
                  <LogIn className="h-4 w-4" /> {t("login")}
                </button>
                <button className="px-4 py-3 rounded-xl btn-glow text-sm font-semibold inline-flex items-center justify-center gap-2">
                  <UserPlus className="h-4 w-4" /> {t("signup")}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-16 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {t("brand")}. {t("footer_rights")}</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-primary">{t("nav_about")}</Link>
            <Link to="/policy" className="hover:text-primary">{t("nav_policy")}</Link>
            <Link to="/contact" className="hover:text-primary">{t("nav_contact")}</Link>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full text-white shadow-glow animate-glow-pulse hover:scale-110 transition-transform"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
