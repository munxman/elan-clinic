import SEOHead from "@/components/SEOHead";
import { Heart, ShieldCheck, Users, Target, Stethoscope } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Philosophy = () => {
  const { t } = useLanguage();

  const uspCards = [
    { icon: Heart, title: t.phil_usp1_title, description: t.phil_usp1_desc },
    { icon: ShieldCheck, title: t.phil_usp2_title, description: t.phil_usp2_desc },
    { icon: Target, title: t.phil_usp3_title, description: t.phil_usp3_desc },
    { icon: Users, title: t.phil_usp4_title, description: t.phil_usp4_desc },
  ];

  const teamMembers = [
    {
      icon: Stethoscope,
      name: "Dr. Ingmar Lindström",
      role: t.phil_member1_role,
      description: t.phil_member1_desc,
    },
    {
      icon: Stethoscope,
      name: "Dr. Merili Pärn",
      role: t.phil_member2_role,
      description: t.phil_member2_desc,
    },
    {
      icon: Heart,
      name: "Õde Eva-Maria Sentifoli",
      role: t.phil_member3_role,
      description: t.phil_member3_desc,
    },
  ];

  return (
    <>
      <SEOHead
        title="Filosoofia — Élan Kliinik"
        description="Avastage Élan Kliiniku filosoofia — arstid, kes on ise kogenud kaalulangust, pakuvad tõenduspõhist ja stigmavaba ravi."
        canonicalUrl="https://elanclinic.ee/philosophy"
      />

      {/* Hero */}
      <section className="bg-elan-offwhite pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-normal text-elan-gold tracking-tight">
            {t.phil_hero}
          </h1>
          <div className="w-20 h-px bg-elan-gold mx-auto mt-6" />
          <p className="font-body text-base md:text-lg text-elan-slate/60 mt-6 max-w-2xl mx-auto">
            {t.phil_hero_sub}
          </p>
        </div>
      </section>

      {/* USP Card Grid */}
      <section className="bg-elan-offwhite py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {uspCards.map((card) => (
              <div
                key={card.title}
                className="group border border-elan-slate/10 bg-white rounded-none p-8 hover:border-elan-gold/40 transition-all duration-500"
              >
                <card.icon className="h-6 w-6 text-elan-gold mb-5" strokeWidth={1.5} />
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

      {/* Founder's Note */}
      <section className="bg-elan-offwhite py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto border border-elan-gold/30 bg-white p-10 md:p-14 relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-elan-gold" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-elan-gold" />

            <p className="font-heading text-xs uppercase tracking-[0.2em] text-elan-gold mb-6 not-italic">
              {t.phil_founder_label}
            </p>

            <p className="font-body text-base md:text-lg text-elan-slate/80 leading-relaxed mb-6">
              {t.phil_founder_p1}
            </p>

            <p className="font-body text-base md:text-lg text-elan-slate/80 leading-relaxed mb-6">
              {t.phil_founder_p2}
            </p>

            <p className="font-body text-sm text-elan-slate/50 italic">
              {t.phil_founder_sig}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-elan-offwhite py-16 md:py-24 border-t border-elan-slate/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-normal text-elan-gold tracking-tight">
                {t.phil_team_title}
              </h2>
              <div className="w-16 h-px bg-elan-gold mx-auto mt-5" />
              <p className="font-body text-sm text-elan-slate/50 mt-5 max-w-xl mx-auto leading-relaxed">
                {t.phil_team_sub}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="border border-elan-slate/10 bg-white rounded-none p-8 hover:border-elan-gold/30 transition-all duration-500"
                >
                  <member.icon className="h-6 w-6 text-elan-gold mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-normal text-elan-slate mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-xs text-elan-gold/80 uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="font-body text-sm text-elan-slate/60 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Ingmar Lindström — Founder's Story */}
      <section className="bg-elan-offwhite py-16 md:py-24 border-t border-elan-slate/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="border border-elan-gold/30 bg-white p-10 md:p-14 relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-elan-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-elan-gold" />

              <p className="font-heading text-xs uppercase tracking-[0.2em] text-elan-gold mb-8 not-italic">
                {t.phil_story_label}
              </p>

              <div className="space-y-5 font-body text-base text-elan-slate/75 leading-relaxed">
                <p>{t.phil_story_p1}</p>
                <p>{t.phil_story_p2}</p>

                <ul className="list-none space-y-2 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-elan-gold mt-2 shrink-0" />
                    <span>{t.phil_story_li1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-elan-gold mt-2 shrink-0" />
                    <span>{t.phil_story_li2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-elan-gold mt-2 shrink-0" />
                    <span>{t.phil_story_li3}</span>
                  </li>
                </ul>

                <p>{t.phil_story_p3}</p>
                <p>{t.phil_story_p4}</p>

                <p className="text-elan-slate/50 italic text-sm">
                  {t.phil_story_quote}
                </p>

                <p>{t.phil_story_p5}</p>
                <p>{t.phil_story_p6}</p>
                <p>{t.phil_story_p7}</p>
              </div>

              <p className="font-body text-sm text-elan-gold mt-8">
                — Dr. Ingmar Lindström
              </p>
              <p className="font-body text-xs text-elan-slate/40 mt-1">
                Élan Clinic
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Philosophy;
