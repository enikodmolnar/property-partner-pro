import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Modern világos nappali", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Elegáns konyha márvány pultokkal", span: "" },
  { src: g3, alt: "Légifotó budapesti környékről", span: "" },
  { src: g6, alt: "Klasszikus budapesti homlokzat", span: "md:col-span-2" },
  { src: g4, alt: "Hangulatos hálószoba", span: "" },
  { src: g5, alt: "Prémium fürdőszoba", span: "" },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-6">
            <span className="h-px w-8 bg-gold" />
            Galéria
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-5">
            Minőség, <em className="text-gold not-italic">amit</em> látni lehet.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ízelítő a profi fotózásból és látványvilágból, amely minden általam
            képviselt ingatlan mellé jár.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {items.map((it) => (
            <div
              key={it.alt}
              className={`relative overflow-hidden rounded-2xl group ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
