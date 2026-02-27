import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import clinicSchema from "@/data/schema-jsonld.json";
import { Heart, ShieldCheck, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LeadMagnet from "@/components/LeadMagnet";
import bonsaiImage from "@/assets/bonsai-minimal.jpg";


const Index = () => {
  const { t } = useLanguage();

  const valueCards = [
    { icon: Heart, title: t.val_personal_title, description: t.val_personal_desc },
    { icon: ShieldCheck, title: t.val_evidence_title, description: t.val_evidence_desc },
    { icon: Clock, title: t.val_longterm_title, description: t.val_longterm_desc },
  ];

  return (
    <>
      <SEOHead
        title="Élan Kliinik — Kaalulangetuse ja pikaealisuse kliinik | Tallinn"
        description="Arstide juhitud kaalulangetuse ja pikaealisuse kliinik Tallinnas, Eestis. Tõenduspõhine metaboolse tervise optimeerimine ja personaalne meditsiin."
        canonicalUrl="https://elanclinic.ee"
        schema={clinicSchema}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-elan-offwhite overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-elan-slate/50 mb-8">
            Élan Kliinik Tallinn
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-elan-gold leading-[1.15] max-w-4xl mx-auto">
            Meditsiiniline tipptase.
            <br />
            Isiklik hoolivus.
          </h1>
          <div className="w-20 h-px bg-elan-gold mx-auto mt-10" />
          <p className="font-body text-base md:text-lg text-elan-slate/50 mt-8 max-w-xl mx-auto leading-relaxed">
            {t.hero_subtitle}
          </p>
          <Link
            to="/services"
            className="inline-block mt-12 font-body text-sm px-8 py-3 bg-elan-slate text-elan-offwhite hover:bg-elan-slate/90 transition-all duration-300 tracking-wide"
          >
            {t.hero_cta}
          </Link>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-elan-offwhite py-32 md:py-48">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-normal text-elan-gold tracking-tight">
              {t.why_title}
            </h2>
            <div className="w-16 h-px bg-elan-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {valueCards.map((card) => (
              <div
                key={card.title}
                className="text-center p-8"
              >
                <card.icon className="h-6 w-6 text-elan-gold mb-5 mx-auto" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-normal text-elan-slate mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-elan-slate/60 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy — 50/50 Split */}
      <section className="bg-elan-offwhite border-t border-elan-slate/5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Left — Text */}
          <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-32 md:py-48">
            <h2 className="font-heading text-3xl md:text-4xl font-normal text-elan-gold tracking-tight italic">
              {t.about_title}
            </h2>
            <div className="w-16 h-px bg-elan-gold mt-5" />
            <div className="font-body text-sm md:text-base text-elan-slate/60 mt-8 leading-relaxed">
              {t.about_desc.split(". ").map((sentence, i, arr) => (
                <p key={i} className="mb-1 last:mb-0">
                  {sentence}{i < arr.length - 1 ? "." : ""}
                </p>
              ))}
            </div>
            <Link
              to="/meist"
              className="inline-block mt-10 font-body text-sm px-8 py-3 bg-elan-slate text-elan-offwhite hover:bg-elan-slate/90 transition-all duration-300 tracking-wide self-start"
            >
              {t.about_cta}
            </Link>
          </div>

          {/* Right — Bonsai */}
          <div className="hidden md:block min-h-[350px]">
            <img
              src={bonsaiImage}
              alt="Minimalist bonsai tree — patience, balance, care"
              className="w-full h-full object-cover grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet />
    </>
  );
};

export default Index;
