import H2 from "@/components/typography/H2";
import ContentWidth from "../layouts/ContentWidth";
import Text from "../typography/Text";

export default function DoubleCard() {
  return (
    <section className="pb-5 lg:pb-24">
      <ContentWidth>
        <div className="col-span-12 max-w-full mx-auto">
          <div className="mb-12 tracking-tight dark:text-white border border-solid border-greyBrighten-300"></div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 md:gap-20 lg:gap-y-40">
            <li>
              <img
                src="/teaser_signalling-2.jpg"
                alt="Image"
                className="max-w-full lg:max-w-[90%] max-h-[400px]"
              />
              <div className="pr-0">
                <a
                  href="#"
                  className="flex flex-col items-start gap-2 text-xl font-bold text-white mt-5 mb-5"
                >
                  <H2 resetStyles={true} styles="mb-4 text-4xl font-bold">
                    Signalling
                  </H2>
                  <Text styles="text-greyBrighten-800 mb-4">
                    Massgeschneiderte Signalling-Lösungen für kompromisslose
                    Sicherheit und Pünktlichkeit auf jeder Strecke.
                  </Text>
                  <img
                    className="w-5 h-5"
                    src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_white.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
            <li>
              <img
                src="/teaser_service.jpeg"
                alt="Image"
                className="max-w-full lg:max-w-[90%] max-h-[400px]"
              />
              <div className="pr-0">
                <a
                  href="#"
                  className="flex flex-col items-start  gap-2 text-xl font-bold mt-5 text-white mb-5"
                >
                  <H2 resetStyles={true} styles="mb-4 text-4xl font-bold">
                    Service
                  </H2>
                  <Text styles="text-greyBrighten-800 mb-4">
                    Regelmässige Service für Gesamtlösungen und
                    Schienenfahrzeuge garantieren zuverlässige Spitzenleistung.
                  </Text>
                  <img
                    className="w-5 h-5"
                    src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_white.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </ContentWidth>
    </section>
  );
}
