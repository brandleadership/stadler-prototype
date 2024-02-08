"use client";

import CooperationInfo from "./CooperationInfo";
import CooperationBecome from "./CooperationBecome";
import HeroText from "@/components/sections/HeroText";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import ContentWidth from "@/components/layouts/ContentWidth";
import Contact from "@/components/sections/Contact";
import TeaserDownload from "../../components/sections/TeaserDownload";
import ImageFullWidth from "@/components/sections/ImageFullWidth";
import Text from "@/components/typography/Text";
import ButtonPrimary from "@/components/elements/ButtonPrimary";

const downloads = [
  {
    text: "Code of Conduct",
  },
  {
    text: "Geschäftsbedingungen",
  },
  {
    text:
      "Allgemeine Einkaufsbedingungen Stadler Bussnang AG / Stadler Rheintal AG / Stadler Winterthur AG / Stadler Signalling AG / Stadler Service AG",
  },
  {
    text:
      "Ergänzende Einkaufsbedingungen für EU-Zulassungsprozesse Stadler Rheintal AG",
  },
  {
    text: "Kurzanleitung Zeitfensterbuchung",
  },
  {
    text: "Stadler Bussnang AG & Stadler Service AG Logistikspezifikation",
  },
];

export default function Cooperation() {
  return (
    <>
      <HeroText
        breadcrumbs={[{ text: "Lieferanten", link: "/zulieferer" }]}
        title="Lieferanten-Netzwerk: Werden Sie unser Partner!"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      {/* <ImageFullWidth imgSrc="/AdobeStock.jpg" /> */}
      {/* <TeaserGeneral
        title="Supplier Portal"
        customText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ctaText="Go to the Portal"
      ></TeaserGeneral> */}
      <CooperationBecome></CooperationBecome>
      <CooperationInfo></CooperationInfo>
      <TeaserDownload
        title="Allgemeine Downloads"
        buttonLink="/downloadcenter"
        buttonText="Alle Medienmitteilungen"
        showList={true}
        showButton={false}
        listData={downloads}
      ></TeaserDownload>{" "}
      <ContentWidth>
        <div className="col-span-12 mb-14 flex-col md:flex-row flex justify-start md:justify-between align-baseline">
          <Text styles="mb-4 md:mb-0">
            Alle weiteren Dokumente und Downloads für Cooperation finden Sie in
            unserem Downloadcenter
          </Text>
          <ButtonPrimary
            href="/downloadcenter"
            buttonText="Zum Downloadcenter"
          />
        </div>
      </ContentWidth>
      <Contact />
      <ContentWidth>
        <div className="col-span-12 flex flex-col mb-20"></div>
      </ContentWidth>
    </>
  );
}
