import SuperSmallWidth from "@/components/layouts/SuperSmallWidth";
import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";
import ArticleHero from "@/components/sections/ArticleHero";

const articleTags = [
  {
    text: "Ad-Hoc",
    link: "#",
  },
  {
    text: "Corporate",
    link: "#",
  },
];

export default function MedienmitteilungenBody() {
  return (
    <>
      <ArticleHero
        breadcrumbs={[
          { text: "Medien", link: "/#" },
          { text: "Medienmitteilungen", link: "/medienmitteilungen" },
        ]}
        title="EURO9000 erhält grünes licht für den betrieb in Belgien und den Niederlanden"
        leadText="xDie EURO9000-Lokomotive von Stadler, die neue Generation der 6-achsigen Hybrid-Lokomotiven, hat erfolgreich die Typenzulassung für den Betrieb in den Niederlanden und Belgien erhalten. Diese Zulassung erweitert das Einsatzgebiet der EURO9000, die bereits in Deutschland, Österreich und der Schweiz zugelassen ist, und unterstreicht ihre Anpassungsfähigkeit an die Anforderungen internationaler Bahnkorridore. In Italien wird die Betriebszulassung voraussichtlich im Jahr 2024 erteilt werden."
        date="20.12.2023"
        tags={articleTags}
      />
      <SuperSmallWidth>
        <article className="col-span-12 mb-36">
          <img className="my-8" src="/article-image.jpg" alt="" />
          <Text styles="text-md mb-4">
            Die EURO9000 ist eine interoperable Lokomotive, die speziell für den
            Einsatz auf internationalen Strecken entlang der wichtigsten
            europäischen Bahnkorridore konzipiert wurde. Mit bereits bestehenden
            Zulassungen in Deutschland, Österreich und der Schweiz hat die
            Lokomotive nun auch die Zulassung für den Betrieb in Belgien und den
            Niederlanden erhalten.
          </Text>
          <Text styles="text-md mb-4">
            Die EURO9000-Lokomotive erfüllt die technischen Spezifikationen für
            die Interoperabilität (TSI) und ist für die Ausrüstung mit
            verschiedenen Länderpaketen ausgelegt. Dies beinhaltet
            konventionelle automatische Zugsicherungssysteme sowie ETCS, um
            einen reibungslosen grenzüberschreitenden Betrieb zu gewährleisten.
            Die Grundkonfiguration umfasst Deutschland, Österreich, die Schweiz,
            Italien, die Niederlande und Belgien, wo in den letzen zwei Jahren
            zwei Prototypen erfolgreich getestet wurden.
          </Text>
          <img className="my-8" src="/article-image.jpg" alt="" />
          <H2>Die Entwicklung der EURO9000</H2>
          <Text styles="text-md mb-4">
            Die Entwicklung der EURO9000 ist eine Antwort auf die
            Herausforderungen des Schienengüterverkehrs, und ihre
            leistungsstärkere und vielseitigere Ausführung bietet eine
            effiziente Lösung für die steigenden Anforderungen an
            grenzüberschreitende Transporte. Seit März 2023 kann die
            EURO9000-Lokomotive in Deutschland und Österreich eingesetzt werden.
            Am 2. November erhielt sie die Typenzulassung für den Betrieb in der
            Schweiz. Die aktuelle Zulassung für Belgien und die Niederlande ist
            ein weiterer Meilenstein für Stadler und unterstreicht die
            Zuverlässigkeit und Leistungsfähigkeit der EURO9000 auf
            internationaler Ebene.
          </Text>
          <Text styles="text-md mb-4">
            Iñigo Parra, Executive Vice President der Stadler Division Spanien,
            sagt: «Die Herausforderungen der Interoperabilität der europäischen
            Bahnnetze, und die Vorgaben der Europäischen Union, mehr
            Güterverkehr auf die Bahn zu bringen, motivierten uns bei Stadler zu
            einer unserer innovativsten Entwicklungen – der EURO9000. Dies
            unterstreicht unser Engagement und unsere Vorreiterrolle in der
            Gestaltung der Zukunft des Schienengüterverkehrs».
          </Text>

          <H2>Leistungsstärkste Lokomotive in Europa</H2>
          <Text styles="text-md mb-4">
            Mit einer Leistung von 9 MW, ist die EURO9000 derzeit die
            leistungsstärkste Lokomotive auf dem europäischen Markt. Dies
            ermöglicht den Betrieb auf elektrifizierten Strecken mit
            Wechselstrom und Gleichstrom. Die modulare Bauweise erlaubt auch den
            gemeinsamen Einbau von bis zu drei verschiedenen Antriebssystemen
            (Elektro-, Diesel- und/oder Batterieantrieb), um die gleichen Züge
            auf nicht elektrifizierten Streckenabschnitten zu betreiben. Darüber
            hinaus liefern die Dieselmotoren zusätzliche Leistung, wenn die
            Lokomotive unter einer 3 kV-Gleichstrom-Oberleitung fährt. Die
            EURO9000 ist in der Lage, mit hoher Geschwindigkeit auf den
            wichtigsten europäischen Korridoren mit gemischtem Verkehr zu fahren
            und ermöglicht oftmals die Beförderung von längeren und schwereren
            Zügen mit einer einzigen Lokomotive.
          </Text>
          <Text styles="text-md mb-4">
            Die Leasinggesellschaft European Loc Pool (ELP) war der erste Kunde
            für EURO9000-Lokomotiven. Bislang hat sie 30 Lokomotiven erworben,
            von denen 7 bereits geliefert wurden und in Betrieb sind. Vor Kurzem
            hat zudem Alpha Trains 12 EURO9000-Lokomotiven bestellt, die 2025
            ausgeliefert werden sollen.
          </Text>
        </article>
      </SuperSmallWidth>
    </>
  );
}
