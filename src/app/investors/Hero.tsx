import HeroText from "@/components/sections/HeroText";

export default function InvestorHero() {
  return (
    <section>
      <HeroText
        title="Investor Relations"
        leadText="Stadler pflegt einen offenen und transparenten Austausch mit Investoren, Analysten und anderen Anspruchsgruppen. Im Bereich Investor Relations finden Sie alle relevanten Informationen und Publikationen zur Geschäftsentwicklung, zur Corporate Governance sowie zur jährlichen Generalversammlung."
        withCTA={true}
        buttonText="Zu den Publikationen"
      />
    </section>
  );
}
