import Quote from "@/components/sections/Quote";
import Lead from "../../components/typography/Lead";
import Text from "@/components/typography/Text";
import ContentWidth from "@/components/layouts/ContentWidth";
import TextSection from "@/components/sections/TextSection";
import H2 from "../../components/typography/H2"
import SmallWidth from "@/components/layouts/SmallWidth";

export default function DNA() {
  return (
    <section className="bg-white lg:pt-24">
      <SmallWidth>
        {" "}
        <H2>Die Stadler-Prinzipien</H2>
      </SmallWidth>
      <div className="col-span-12">
        <div className="items-center">
          <TextSection>
            <Text>
              Bei Stadler treibt uns eines jeden Tag aufs Neue an: Alles zu tun
              – für die besten Schienenfahrzeuge der Welt. Damit uns das
              gelingt, müssen wir täglich unser Bestes geben. Eine höhere
              Qualität erzielen – und mehr machen, als man «muss». Mit unserer
              einzigartigen Zuverlässigkeit immer wieder neue Massstäbe setzen.
              Die besten Mitarbeitenden haben und ihr Miteinander
              perfektionieren. Mit echter Leidenschaft ans Werk gehen – gerade
              dann, wenn es anstrengend wird. Als Macherinnen und Macher neue
              Wege finden – und nicht in Problemen denken, sondern in Lösungen.
              Dass wir aus eigenem Antrieb so sind, so denken und so handeln,
              bestimmt, prägt und beschleunigt unseren Erfolgskurs. Es hat uns
              von bescheidenen Anfängen zu 15 Produktions- und
              Komponentenstandorten und über 80 Servicestandorten auf der ganzen
              Welt gebracht. Wo wir mit Mitarbeitenden aus mehr als 70 Nationen
              jeden Tag alles dafür tun, …
            </Text>
            <div className="my-6">
              <ul className="space-y-4 text-left text-black dark:text-gray-400">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    <Text>
                      dass unsere Kunden von uns die besten Lösungen für ihre
                      individuellen Bedürfnisse erhalten.
                    </Text>
                  </span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    <Text>
                      dass sich unsere Mitarbeitenden mit Stolz und Ambition so
                      erfolgreich entwickeln können, wie es unser Unternehmen
                      tut.
                    </Text>
                  </span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    <Text>
                      dass aus Lieferantenbeziehungen echte Partnerschaften
                      werden, in denen man sich vertraut und unterstützt.
                    </Text>
                  </span>
                </li>
              </ul>
            </div>
            <Text>
              Und dafür, dass Menschen weltweit nachhaltig mobil sein können. In
              den besten Schienenfahrzeugen der Welt. Das ist es, was uns
              antreibt.{" "}
            </Text>
          </TextSection>

          <Quote></Quote>
        </div>
      </div>
    </section>
  );
}
