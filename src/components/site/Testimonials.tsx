import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Katalin & Péter",
    role: "Eladók — XIII. kerület",
    text: "Enikő profizmusa és figyelme minden részletre kiterjedt. Az ingatlanunk három hét alatt elkelt, kiváló áron. Bátran ajánljuk!",
  },
  {
    name: "Tamás",
    role: "Eladó — Budakeszi",
    text: "Olyan érzés volt, mintha egy barátunk intézné az értékesítést. Mindig elérhető, mindig őszinte, és tényleg eredményes.",
  },
  {
    name: "Andrea",
    role: "Eladó — II. kerület",
    text: "A drónvideók és fotók egyszerűen lélegzetelállítók lettek. Több ajánlatot is kaptunk az első héten. Köszönöm Enikő!",
  },
  {
    name: "Gábor",
    role: "Vevő — Pest megye",
    text: "Vevőként is végig partnernek éreztem. Türelmes, alapos, és a szerződés is gördülékenyen ment a teljes körű ügyintézésnek köszönhetően.",
  },
];

export const Testimonials = () => {
  return (
    <section id="velemenyek" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-6">
            <span className="h-px w-8 bg-gold" />
            Vélemények
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Amit ügyfeleim <em className="text-gold not-italic">mondanak</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-2xl p-8 hover:border-gold/40 transition-smooth"
            >
              <Quote className="text-gold mb-4" size={28} strokeWidth={1.5} />
              <p className="text-primary-foreground/90 leading-relaxed mb-6 italic">
                „{t.text}"
              </p>
              <div>
                <div className="font-serif text-lg">{t.name}</div>
                <div className="text-sm text-primary-foreground/60">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
