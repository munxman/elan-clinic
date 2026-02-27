import { useState, useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { Phone, Mail, Clock, AlertCircle, Scale, HeartPulse, ClipboardCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_KEYS = ["weight_loss", "longevity", "health_audit"] as const;
type ServiceKey = typeof SERVICE_KEYS[number];

const AcuityEmbed = ({ id, height }: { id: string; height: number }) => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-white border border-elan-slate/10">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-elan-gold/20 border-t-elan-gold rounded-full animate-spin" />
            <span className="font-heading text-xl text-elan-gold font-normal not-italic">É</span>
          </div>
          <p className="font-body text-sm text-elan-slate/50 text-center max-w-xs">
            {t.book_concierge_loading}
          </p>
          <div className="w-32 h-0.5 rounded-full bg-elan-gold/10 overflow-hidden">
            <div className="h-full w-1/3 bg-elan-gold/50 rounded-full animate-[shimmer_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      )}
      <div className="bg-white border border-elan-slate/10 shadow-lg shadow-elan-slate/5 overflow-hidden">
        <iframe
          id={id}
          src="https://app.acuityscheduling.com/schedule.php?owner=38379000&ref=embedded_csp"
          title="Schedule Appointment"
          width="100%"
          height={height}
          frameBorder="0"
          allow="payment"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
};

const Booking = () => {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<ServiceKey | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const cards: { key: ServiceKey; icon: React.ReactNode; title: string; sub: string; gtmEvent: string }[] = [
    {
      key: "weight_loss",
      icon: <Scale className="h-7 w-7" strokeWidth={1.3} />,
      title: t.book_card1_title,
      sub: t.book_card1_sub,
      gtmEvent: "booking_select_weight_loss",
    },
    {
      key: "longevity",
      icon: <HeartPulse className="h-7 w-7" strokeWidth={1.3} />,
      title: t.book_card2_title,
      sub: t.book_card2_sub,
      gtmEvent: "booking_select_longevity",
    },
    {
      key: "health_audit",
      icon: <ClipboardCheck className="h-7 w-7" strokeWidth={1.3} />,
      title: t.book_card3_title,
      sub: t.book_card3_sub,
      gtmEvent: "booking_select_health_audit",
    },
  ];

  const handleSelect = (card: typeof cards[number]) => {
    setSelected(card.key);
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: card.gtmEvent,
        service: card.key,
      });
    }
  };

  return (
    <>
      <SEOHead
        title={lang === "et" ? "Broneeri aeg | Élan Kliinik Tallinnas" : "Book Appointment | Élan Clinic Tallinn"}
        description={
          lang === "et"
            ? "Broneerige konsultatsioon Élan Kliinikus. Meditsiiniline kaalulangetus, pikaealisuse protokollid ja terviseaudit Tallinnas."
            : "Book a consultation at Élan Clinic. Medical weight loss, longevity protocols and health audits in Tallinn."
        }
        canonicalUrl="https://elanclinic.ee/broneeri"
      />

      <section className="bg-elan-offwhite pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-normal text-elan-gold tracking-tight leading-tight">
              {t.book_headline}
            </h1>
            <div className="w-20 h-px bg-elan-gold mx-auto mt-6" />
            <p className="font-body text-base md:text-lg text-elan-slate/60 mt-6">
              {t.book_subtext}
            </p>
          </div>

          {/* Acuity embed — shown first on mobile only */}
          <div className="mb-12 lg:hidden">
            <AcuityEmbed id="acuity-frame" height={700} />
          </div>

          {/* Desktop: two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
            {/* Left column */}
            <div className="space-y-6">
              {cards.map((card) => {
                const isActive = selected === card.key;
                return (
                  <button
                    key={card.key}
                    onClick={() => handleSelect(card)}
                    className={`group relative w-full text-left p-6 border transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? "border-elan-gold bg-elan-gold/[0.05] shadow-lg shadow-elan-gold/5"
                          : "border-elan-slate/10 bg-white hover:border-elan-gold/40 hover:bg-elan-gold/[0.02]"
                      }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className={`mt-0.5 transition-colors duration-300 shrink-0 ${isActive ? "text-elan-gold" : "text-elan-slate/40 group-hover:text-elan-gold/70"}`}>
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="font-heading text-lg font-normal text-elan-slate mb-1 tracking-tight">
                          {card.title}
                        </h2>
                        <p className="font-body text-sm text-elan-slate/50 leading-relaxed">
                          {card.sub}
                        </p>
                      </div>
                      <div className={`mt-1 flex items-center gap-1.5 text-xs font-body uppercase tracking-wider transition-all duration-300 shrink-0
                        ${isActive ? "text-elan-gold opacity-100" : "text-elan-gold/0 opacity-0 group-hover:text-elan-gold/50 group-hover:opacity-100"}`}>
                        <span>{lang === "et" ? "Vali" : "Select"}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-elan-gold animate-pulse" />
                    )}
                  </button>
                );
              })}

              {/* Contact card */}
              <div className="border border-elan-slate/10 bg-white p-8">
                <h3 className="font-heading text-lg font-normal text-elan-slate mb-6">
                  {t.book_contact}
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-elan-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-body text-xs text-elan-slate/40 uppercase tracking-wider mb-1">{t.footer_phone}</p>
                      <a href="tel:+37258030033" className="font-body text-sm text-elan-slate/80 hover:text-elan-gold transition-colors">
                        +372 5803 0033
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-elan-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-body text-xs text-elan-slate/40 uppercase tracking-wider mb-1">{t.footer_email}</p>
                      <a href="mailto:info@elanclinic.ee" className="font-body text-sm text-elan-slate/80 hover:text-elan-gold transition-colors">
                        info@elanclinic.ee
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-elan-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-body text-xs text-elan-slate/40 uppercase tracking-wider mb-1">{t.footer_hours}</p>
                      <p className="font-body text-sm text-elan-slate/80">{t.footer_hours_value}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Cancellation policy */}
              <div className="flex items-start gap-3 p-5 border border-elan-slate/10 bg-white">
                <AlertCircle className="h-4 w-4 text-elan-gold/60 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-heading text-xs text-elan-gold/80 uppercase tracking-wider mb-1 not-italic">{t.book_cancel_title}</p>
                  <p className="font-body text-xs text-elan-slate/40 leading-relaxed">{t.book_cancel_text}</p>
                </div>
              </div>
            </div>

            {/* Right column — Acuity embed (desktop) */}
            <div className="hidden lg:block sticky top-28">
              <AcuityEmbed id="acuity-frame-desktop" height={720} />
            </div>
          </div>
        </div>
      </section>

      <div className="sr-only" aria-hidden="true">
        <p>{t.book_seo_summary}</p>
      </div>
    </>
  );
};

export default Booking;
