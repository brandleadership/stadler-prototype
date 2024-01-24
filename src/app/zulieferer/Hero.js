import HeroText from "../../components/sections/HeroText";

export default function LieferantenHero(props) {
  return (
    <div className="mb-20">
      <HeroText
        title={
          <p>
            Unsere Lieferanten:
            <br />
            Ein exzellentes Netzwerk
          </p>
        }
        leadText="Stadler sucht Zulieferer, die mit Innovationskraft, Zuverlässigkeit und hohem Qualitätsanspruch die Schienenmobilität der Zukunft mitgestalten."
        withCTA={false}
      />
    </div>
  );
}
