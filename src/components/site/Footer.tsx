export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="font-serif text-lg text-primary-foreground">
          Enikő Dorottya<span className="text-gold">.</span>
        </div>
        <div>© {new Date().getFullYear()} enikodorottya.hu — Minden jog fenntartva.</div>
        <div className="text-xs text-primary-foreground/60">
          Budapest & Pest megye
        </div>
      </div>
    </footer>
  );
};
