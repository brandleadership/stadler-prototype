import HeroText from "@/components/sections/HeroText";
import H1 from "@/components/typography/H1";

export default function Hero() {
  return (
    <section className="bg-white mt-12 mb-8 dark:bg-gray-900">
      <HeroText
        breadcrumbs={[
          { text: "Lösungen", link: "/solutions" },
          { text: "Full service", link: "/full-service" },
        ]}
        title="Full Service – Integriertes Service-Konzept in der Nähe"
        leadText="Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst."
        // withCTA={true}
        // buttonText="CTA Button"
      />

      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-12">
          <img
            className="h-auto max-w-full"
            src="/hero-full-service-narrow.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
