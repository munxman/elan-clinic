import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

const PDF_DOWNLOAD_URL = "#"; // TODO: Replace with hosted PDF link

const LeadMagnet = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || trimmedName.length > 100) {
      setError("Name is required (max 100 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      setError("Please enter a valid email address.");
      return;
    }

    if (typeof window !== "undefined") {
      if ((window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "Lead Magnet",
          event_label: "Metabolic Protocol Guide",
          value: 1,
        });
      }
      if ((window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Metabolic Protocol Guide",
        });
      }
    }

    setSubmitted(true);
  };

  return (
    <section className="bg-elan-slate py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-10 h-px bg-elan-gold mx-auto mb-8" />

          <h2 className="font-heading text-2xl md:text-3xl font-normal text-elan-gold tracking-tight">
            {t.lead_headline}
          </h2>

          <div className="mt-6">
            <p className="font-body text-base text-elan-offwhite/60 leading-relaxed">
              {t.lead_subtext}
            </p>
            {t.lead_subtext2 && (
              <p className="font-body text-base text-elan-offwhite/60 leading-relaxed mt-1">
                {t.lead_subtext2}
              </p>
            )}
          </div>

          <div className="mt-10">
            {submitted ? (
              <div className="border border-elan-gold/30 p-8 bg-elan-gold/[0.03]">
                <p className="font-body text-base text-elan-gold leading-relaxed">
                  {t.lead_success}
                </p>
                {PDF_DOWNLOAD_URL !== "#" && (
                  <a
                    href={PDF_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 font-body text-sm px-6 py-2.5 bg-elan-gold text-elan-slate hover:bg-elan-gold/90 transition-all duration-300 tracking-wide"
                  >
                    Download PDF
                  </a>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder={t.lead_name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  className="w-full bg-transparent border border-elan-gold/20 px-5 py-3 font-body text-sm text-elan-offwhite placeholder:text-elan-offwhite/30 focus:border-elan-gold/50 focus:outline-none transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder={t.lead_email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  className="w-full bg-transparent border border-elan-gold/20 px-5 py-3 font-body text-sm text-elan-offwhite placeholder:text-elan-offwhite/30 focus:border-elan-gold/50 focus:outline-none transition-colors duration-300"
                />
                {error && (
                  <p className="font-body text-xs text-destructive/80 text-left">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-elan-gold text-elan-slate font-body text-sm px-6 py-3 tracking-wide hover:bg-elan-gold/90 transition-all duration-300"
                >
                  {t.lead_cta}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
