import heroImg from "@/assets/hero-portrait.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-6">
            <span className="h-px w-8 bg-gold" />
            Prémium ingatlanközvetítés
          </span>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-primary mb-6">
            Az otthona
            <br />
            <em className="text-gold not-italic font-normal">megérdemli</em> a
            legjobbat.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            6 éve segítek tulajdonosoknak Budapesten és Pest megyében
            értékesíteni ingatlanjaikat — profi vizuális anyagokkal,
            személyes támogatással és teljes körű ügyintézéssel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kapcsolat"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth shadow-elegant"
            >
              Ingyenes konzultáció
              <ArrowRight size={18} />
            </a>
            <a
              href="#szolgaltatasok"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-smooth"
            >
              Szolgáltatásaim
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "6+", l: "év tapasztalat" },
              { n: "100+", l: "elégedett ügyfél" },
              { n: "100%", l: "elköteleződés" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-4 bg-gold/10 rounded-[2rem] -rotate-3" />
          <img
            src={heroImg}
            alt="Enikő Dorottya ingatlanközvetítő portréja egy modern budapesti lakásban"
            width={1080}
            height={1620}
            className="relative rounded-[2rem] shadow-elegant object-cover w-full aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-elegant max-w-[220px] hidden sm:block">
            <div className="text-xs uppercase tracking-wider text-gold mb-1">
              Budapest & Pest megye
            </div>
            <div className="font-serif text-primary leading-tight">
              Személyes. Profi. Eredményes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
