"use client";

import HeroText from "@/components/sections/HeroText";
import CorporateGorvernance from "../CorporateGovernance";
import Intro from "@/components/sections/Intro";
import CTASection from "@/components/sections/CTASection";
import TeaserMobilitySolutions from "@/components/sections/TeaserMobilitySolutions";
import ContentWidth from "@/components/layouts/ContentWidth";
import Text from "@/components/typography/Text";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import TeaserDownload from "@/components/sections/TeaserDownload";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import ProductCarousel from "@/components/sections/ProductCarousel";
import ImageFullWidth from "@/components/sections/ImageFullWidth";
import TextSection from "@/components/sections/TextSection";
import H4 from "@/components/typography/H4";

interface listDatenschutz {
  text: string;
}

const listDatenschutz: listDatenschutz[] = [
  {
    text: "Zertifizierung Nachhaltigkeit",
  },
  {
    text: "Zertifizierung Nachhaltigkeit",
  },
  {
    text: "Zertifizierung Nachhaltigkeit",
  },
  {
    text: "Zertifizierung Nachhaltigkeit",
  },
  {
    text: "Zertifizierung Nachhaltigkeit",
  },
];

export default function Nachhaltigkeit() {
  return (
    <>
      <HeroText
        breadcrumbs={[{ text: "Unternehmen", link: "/unternehmen" }]}
        title="Nachhaltigkeit ist in unserer DNA."
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <ImageFullWidth imgSrc="https://www.stadlerrail.com/media/img/c/mwe_0920.jpg" />
      <TextSection>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </TextSection>
      <ProductCarousel />
      <section className="text-white bg-stadlergradient">
        <ContentWidth>
          <div className="col-span-12 flex flex-col py-24">
            <H2>Umwelt und Kreislaufwirtschaft</H2>
            <Text>
              Umwelt Netto-Null und Kreislaufwirtschaft, Supply Chain Management
              ist nachhaltig, Ziele in Nachhaltigkeit, nachhaltige Produktion,
              etc. <br /> <br />
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
          </div>
        </ContentWidth>
      </section>
      <Intro title="Wir arbeiten nachhaltig" />
      <CTASection
        title="Lorem ipsum"
        img="https://www.stadlerrail.com/media/img/800x/caltrans-coastline-16-9.jpg"
        img2="https://www.stadlerrail.com/media/img/c/heag-mobilo_stadler-tina_aussen.jpg"
        img3="https://www.stadlerrail.com/media/img/800x/01_flirt%20akku_aspire_small.jpg"
      />
      <CorporateGorvernance
        mainTitle="Corporate Governance"
        showThirdCard={true}
        numberOfColumns={3}
      />
      <ContentWidth>
        <div className="col-span-12 mt-24">
          <H2>Zertifizierungen</H2>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Text>
        </div>
      </ContentWidth>
      <TeaserDownload
        buttonLink="/downloadcenter"
        buttonText="Alle Medienmitteilungen"
        showList={true}
        showButton={false}
        listData={listDatenschutz}
      ></TeaserDownload>
      <ContentWidth>
        <div className="col-span-12 mb-14 flex justify-between align-baseline">
          <Text>
            Im Downloadcenter finden Sie alle Zertifizierungen in allen
            Sprachen.
          </Text>
          <ButtonPrimary
            href="/downloadcenter"
            buttonText="Zum Downloadcenter"
          />
        </div>
      </ContentWidth>
    </>
  );
}
