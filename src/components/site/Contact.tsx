import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Adja meg a nevét").max(100),
  email: z.string().trim().email("Érvénytelen e-mail cím").max(255),
  phone: z.string().trim().min(6, "Érvénytelen telefonszám").max(30),
  message: z.string().trim().min(5, "Írjon néhány szót").max(1000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Köszönöm! Hamarosan visszahívom.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 600);
  };

  return (
    <section id="kapcsolat" className="py-24 md:py-32 bg-secondary/40">
      <div className="container grid md:grid-cols-2 gap-16">
        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-6">
            <span className="h-px w-8 bg-gold" />
            Kapcsolat
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-5">
            Beszélgessünk az <em className="text-gold not-italic">otthonáról</em>.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
            Akár csak tájékozódna, akár konkrét tervei vannak — keressen
            bátran. Egy ingyenes konzultáción személyesen átbeszélhetjük a
            lehetőségeit, kötelezettség nélkül.
          </p>

          <div className="space-y-5">
            {[
              { icon: Phone, label: "Telefon", value: "+36 30 123 4567" },
              { icon: Mail, label: "E-mail", value: "info@enikodorottya.hu" },
              { icon: MapPin, label: "Régió", value: "Budapest & Pest megye" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-card flex items-center justify-center text-primary shadow-soft">
                  <c.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-primary font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant border border-border/50"
        >
          <div className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Név
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-gold transition-smooth"
                placeholder="Az Ön neve"
                maxLength={100}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  E-mail
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-gold transition-smooth"
                  placeholder="email@cim.hu"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-gold transition-smooth"
                  placeholder="+36 ..."
                  maxLength={30}
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Üzenet
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-gold transition-smooth resize-none"
                placeholder="Miben segíthetek?"
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth shadow-elegant disabled:opacity-60"
            >
              {loading ? "Küldés..." : "Üzenet küldése"}
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
