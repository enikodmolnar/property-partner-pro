import { Award, Heart, Sparkles } from "lucide-react";

const points = [
  {
    icon: Award,
    title: "6 év szakmai tapasztalat",
    text: "Több száz sikeres tranzakció Budapest és Pest megye legkülönfélébb piacain.",
  },
  {
    icon: Sparkles,
    title: "Marketing háttér",
    text: "Korábbi marketinges múltam segít, hogy minden ingatlan a legjobb formáját mutassa online.",
  },
  {
    icon: Heart,
    title: "Vendéglátós figyelem",
    text: "A vendéglátásban tanult ügyfélkezelés ma is meghatározza a stílusomat.",
  },
];

export const About = () => {
  return (
    <section id="rolam" className="py-24 md:py-32">
      <div className="container grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-6">
            <span className="h-px w-8 bg-gold" />
            Rólam
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-6">
            Bizalom, figyelem és <em className="text-gold not-italic">eredmény</em>.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Enikő Dorottya vagyok, hat éve dolgozom ingatlanközvetítőként
              Budapesten és Pest megyében. Hiszem, hogy egy otthon eladása nem
              csupán üzlet — hanem egy fontos életszakasz lezárása és egy új kezdet.
            </p>
            <p>
              Korábban marketingben és vendéglátásban szereztem tapasztalatot,
              ami ma is meghatározza a munkámat: értem a kommunikáció erejét,
              tudom, hogyan kell egy ingatlant a legvonzóbb módon bemutatni,
              és minden ügyfelemre úgy figyelek, mintha egyetlen lenne.
            </p>
            <p>
              Munkám során a megbízhatóság, az átláthatóság és a személyes
              kapcsolat a legfontosabb. Nem listázom — értékesítem az otthonát.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <p.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
