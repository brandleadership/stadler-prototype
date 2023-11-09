import HeroText from "@/components/sections/HeroText";

export default function LieferantenHero(props?: any) {
  return (
    <HeroText
      withCTA
      category="Lieferanten"
      leadText="Stadler sucht Zulieferer, die mit Innovationskraft, Zuverlässigkeit und hohem Qualitätsanspruch die Schienenmobilität der Zukunft mitgestalten."
      title={
        <p>
          Unsere Lieferanten:
          <br />
          Ein exzellentes Netzwerk
        </p>
      }
    />
  );
}
