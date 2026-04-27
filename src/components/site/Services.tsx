import {
  Camera,
  Layers,
  Plane,
  Film,
  Megaphone,
  FileCheck2,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Profi ingatlanfotózás",
    text: "Magas minőségű fotók, amelyek azonnal megragadják a figyelmet az online hirdetésekben.",
  },
  {
    icon: Layers,
    title: "Látványtervek",
    text: "Üres vagy felújítandó ingatlanokhoz készült 3D látványterv, amely segíti a vevőt elképzelni a jövőjét.",
  },
  {
    icon: Plane,
    title: "Drónfelvételek",
    text: "Légi fotók és videók, amelyek bemutatják az ingatlan környezetét és valódi értékét.",
  },
  {
    icon: Film,
    title: "Kreatív videók",
    text: "Hangulatos, modern videós tartalmak, amelyek érzelmi kapcsolatot teremtenek a vevővel.",
  },
  {
    icon: Megaphone,
    title: "Online marketing",
    text: "Kiemelt hirdetések a vezető portálokon és a közösségi médiában — célzottan, eredményesen.",
  },
  {
    icon: FileCheck2,
    title: "Teljes körű ügyintézés",
    text: "Az értékbecsléstől a szerződésig minden adminisztratív feladatot levesznek a vállairól.",
  },
  {
    icon: Target,
    title: "Személyre szabott stratégia",
    text: "Minden ingatlanra egyedi értékesítési tervet készítek a piac és az ügyfél igényei alapján.",
  },
];

export const Services = () => {
  return (
    <section id="szolgaltatasok" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-6">
            <span className="h-px w-8 bg-gold" />
            Szolgáltatásaim
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-5">
            Prémium csomag, <em className="text-gold not-italic">teljes</em> nyugalom.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Spóroljon időt és energiát — én gondoskodom arról, hogy ingatlana
            erős vizuális jelenléttel, profi kommunikációval és gyorsan
            találjon új tulajdonosra.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl p-7 border border-border/50 hover:border-gold/40 hover:shadow-elegant transition-smooth"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center text-primary mb-5 group-hover:bg-gold group-hover:text-primary-foreground transition-smooth">
                <s.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
