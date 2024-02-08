"use client";

import HeroText from "@/components/sections/HeroText";
import TeaserDownload from "../../components/sections/TeaserDownload";
import Contact from "@/components/sections/Contact";
import ContentWidth from "@/components/layouts/ContentWidth";
import Text from "@/components/typography/Text";
import ButtonPrimary from "@/components/elements/ButtonPrimary";

const list = [
  {
    text: "Code of Conduct",
  },
  {
    text: "Geschäftsbedingungen",
  },
];

export default function Procurement() {
  return (
    <>
      <HeroText
        breadcrumbs={[{ text: "Lieferanten", link: "/zulieferer" }]}
        title="Unsere Standards & Geschäftsbedingungen"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        // withCTA={true}
        // buttonText="CTA Button"
      />

      <TeaserDownload
        title="Documents"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonLink="/verhaltenskodex_für_geschäftspartner_de_dec_01, 2020.pdf"
        buttonText="Read the Code of Conduct"
        showList={true}
        showButton={false}
        listData={list}
      ></TeaserDownload>
      {/* <TeaserGeneral
        title="Unsere Geschäftsbedingungen"
        customText="Hier können Sie unsere Geschäftsbedingungen als PDF herunterladen. "
        ctaText="Download Geschäftsbedingungen"
      ></TeaserGeneral> */}
      <ContentWidth>
        <div className="col-span-12 mb-14 flex-col md:flex justify-between align-baseline">
          <Text>
            Please find all documents in all languages in the downloadcenter.
          </Text>
          <ButtonPrimary
            href="/downloadcenter"
            buttonText="Zum Downloadcenter"
          />
        </div>
      </ContentWidth>
      <Contact></Contact>
    </>
  );
}
