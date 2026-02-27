import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/context/LanguageContext";
import bonsaiPine from "@/assets/bonsai-black-pine.jpg";

const PrivateOffice = () => {
  const { t, lang } = useLanguage();

  return (
    <>
      <SEOHead
        title="Private Office — Élan Kliinik"
        description="Eksklusiivne tervisejuhtimine Dr. Ingmar Lindströmi isikliku järelevalve all. Alates 1000€ / kuu."
        canonicalUrl="https://elanclinic.ee/private-office"
      />

      {/* Split-screen hero */}
      <section className="bg-elan-slate min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-screen">
          {/* Left — Text */}
          <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-32 md:py-48">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-elan-offwhite/30 mb-8">
              Exclusive
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-elan-gold tracking-tight italic leading-[1.15]">
              {t.po_title}
            </h1>
            <div className="w-20 h-px bg-elan-gold/40 mt-8" />
            <p className="font-body text-base md:text-lg text-elan-offwhite/60 mt-8 leading-relaxed max-w-lg">
              {t.po_page_desc}
            </p>
            <p className="font-heading text-lg md:text-xl text-elan-gold mt-8 tracking-tight">
              {t.po_price}
            </p>
            <Link
              to="/broneeri"
              className="inline-block mt-10 font-body text-sm px-10 py-3 border border-elan-gold text-elan-gold hover:bg-elan-gold hover:text-elan-slate transition-all duration-300 tracking-widest uppercase self-start"
            >
              {t.po_cta}
            </Link>
          </div>

          {/* Right — Bonsai */}
          <div className="hidden md:block">
            <img
              src={bonsaiPine}
              alt="Japanese Black Pine bonsai — precision, patience, mastery"
              className="w-full h-full object-cover grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Manifesto section */}
      <section className="bg-elan-slate py-32 md:py-48 border-t border-elan-offwhite/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-elan-gold/70 mb-8 not-italic">
              {lang === "et" ? "Manifesto" : "Manifesto"}
            </p>

            <ul className="space-y-6">
              {(lang === "et"
                ? [
                    { title: "Isiklik tervisejuhtimine", desc: "Täielik meditsiiniline logistika ja proaktiivne tervisejuhtimine inimesele, kes väärtustab aega ja privaatsust." },
                    { title: "Otsene ligipääs Dr. Ingmar Lindströmile", desc: "Strateegiline koostöö ja personaalne järelevalve ilma vahendajateta." },
                    { title: "Strateegiline pikaealisus", desc: "Ennetav monitooring, biomarkerite analüüs ja süsteemne tervisejuhtimine pikaks ja terveks eluks." },
                  ]
                : [
                    { title: "Personal Health Management", desc: "Complete medical logistics and proactive health management for those who value time and privacy." },
                    { title: "Direct Access to Dr. Ingmar Lindström", desc: "Strategic collaboration and personal supervision without intermediaries." },
                    { title: "Strategic Longevity", desc: "Preventive monitoring, biomarker analysis and systemic health management for a long and healthy life." },
                  ]
              ).map((item, i) => (
                <li key={i} className="border-l-2 border-elan-gold/30 pl-6">
                  <h3 className="font-heading text-lg text-elan-gold mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-elan-offwhite/50 leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>

            <div className="mt-14 flex flex-col items-start gap-4">
              <p className="font-body text-sm text-elan-offwhite/30 tracking-wider">
                {t.po_price}
              </p>
              <Link
                to="/broneeri"
                className="inline-block font-body text-sm px-10 py-3 border border-elan-gold text-elan-gold hover:bg-elan-gold hover:text-elan-slate transition-all duration-300 tracking-widest uppercase"
              >
                {t.po_cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateOffice;
