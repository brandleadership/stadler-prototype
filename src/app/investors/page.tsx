"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import Contact from "@/components/sections/Contact";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Subscribe from "@/components/sections/Subscribe";
import Publikationen from "@/components/sections/Publikationen";
import CorporateGorvernance from "../unternehmen/CorporateGovernance";
import InvestorHero from "./Hero";
import TextBlock from "./TextBlock";
import SubHero from "@/components/sections/SubHero";
import Text from "@/components/typography/Text";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import EventCalendar from "@/components/sections/EventCalendar";
import NewsTeaser from "../unternehmen/NewsTeaser";
import NewsShortSection from "@/components/sections/NewsShortSection";
import HomePageCaroucel from "@/components/sections/HomePageCaroucel";
import TabsPublikationen from "./TabsPublikationen";
import Features from "@/components/sections/Features";
import TabsGeneralversammlung from "./TabsGeneralversammlung";
import H2 from "@/components/typography/H2";

const newsSection = [
  {
    link: "/singleNews",
    title: "Stadler bleibt Premium Partner der Eisbären",
    date: "28.11.2023",
    lead:
      "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    image:
      "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
    tags: [{ tag: "Ad-Hoc" }, { tag: "Corporate" }],
  },
  {
    link: "/singleNews",
    title:
      "Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow",
    date: "07.11.2023",
    lead:
      "Gemeinsam mit Berlins Regierendem Bürgermeister, Kai Wegner, sowie der Senatorin für Wirtschaft, Energie und Betriebe, Franzisk...",
    image: "/pressefoto-einweihung.jpg",
    tags: [{ tag: "Corporate" }],
  },
  {
    link: "/singleNews",
    title:
      "Neue Akkuzüge sind jetzt auch zwischen Kiel, Lübeck und Lüneburg unterwegs",
    date: "23.10.2023",
    lead:
      "In Schleswig-Holstein ist die weltweit erste batterieelektrische Zugflotte im regelmäßigen Linienbetrieb unterwegs. Damit ha...",
    image:
      "https://www.stadlerrail.com/media/img/800x/mwe_0920%20-%20cropped.jpg",
    tags: [{ tag: "Ad-Hoc" }],
  },
  {
    link: "/singleNews",
    title: "Weitere neue Wasserstoffzüge für Kalifornien",
    date: "16.10.2023",
    lead:
      "Der Bundesstaat Kalifornien und Stadler haben am 12. Oktober 2023 eine wegweisende Vereinbarung unterzeichnet, die einen bedeutenden Schr...",
    image:
      "https://www.stadlerrail.com/media/img/800x/caltrans-coastline-16-9.jpg",
    tags: [{ tag: "Ad-Hoc" }],
  },
];
const publications = [
  {
    img: "/publications/publ-card-1.png",
    title: "Halbjahresbericht 2023",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. ",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202023_de_final.pdf",
  },
  {
    img: "/publications/publ-card-2.png",
    title: "Geschäftsbericht 2022",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. ",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202023_de_final.pdf",
  },
  {
    img: "/publications/publ-card-4.png",
    title: "Nachhaltigkeitsbericht 2021",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich.",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler_nachhaltigkeitsbericht_2022_de_web_v5.pdf",
  },
  {
    img: "/presentation.png",
    title: "Präsentation Halbjahresergebnisse 2023",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
  {
    img: "/presentation.png",
    title: "Presentation Full Year Results 2022",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
  {
    img: "/presentation.png",
    title: "Präsentation Capital Markets Day 2022",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
];

const tableData = [
  {
    publication: "Geschäftsbericht 2021",
    date: "13. März 2021",
    link: "https://www.stadlerrail.com/media/pdf/web_stadler_gb_2021_de.pdf",
  },
  {
    publication: " Halbjahresbericht 2021",
    date: "13. May 2021",
    link:
      "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202021_de_final.pdf",
  },
  {
    publication: "Geschäftsbericht 2020",
    date: "22. May 2020",
    link:
      "https://www.stadlerrail.com/media/pdf/halbjahresbericht%202020_de.pdf",
  },
  {
    publication: "Halbjahresbericht 2020",
    date: "24. December 2020",
    link:
      "https://www.stadlerrail.com/media/pdf/halbjahresbericht%202020_de.pdf",
  },
  {
    publication: " Geschäftsbericht 2019",
    date: "15. August 2019",
    link: "https://www.stadlerrail.com/media/pdf/web_stadler_rail_gb19_de.pdf",
  },
  {
    publication: "Halbjahresbericht 2019",
    date: "1. January 2019",
    link:
      "https://www.stadlerrail.com/media/pdf/2019_0903_halbjahresbericht%202019_de.pdf",
  },
  {
    publication: "Finanzbericht 2018",
    date: "10. Juli 2018",
    link: "https://www.stadlerrail.com/media/pdf/finanzbericht_2018_de.pdf",
  },
];

const presentations = [
  {
    img: "/presentation.png",
    title: "Präsentation Halbjahresergebnisse 2023",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
  {
    img: "/presentation.png",
    title: "Presentation Full Year Results 2022",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
  {
    img: "/presentation.png",
    title: "Präsentation Capital Markets Day 2022",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
];

const facts = [
  {
    text: "Nettoerlös in CHF",
    start: 0,
    end: 3.8,
    suffix: " Mrd.",
    duration: 3,
    separator: " ",
    decimals: 1,
    decimal: ".",
  },
  {
    text: "Auftragsbestand in CHF",
    start: 0,
    end: 22,
    suffix: " Mrd.",
    duration: 3,
  },
  {
    text: "Auftragseingang in CHF",
    start: 0,
    end: 8.6,
    suffix: " Mrd.",
    separator: " ",
    decimals: 1,
    decimal: ".",
    duration: 3,
  },
];

const figures = [
  {
    text: "Anzahl Mitarbeitende",
    start: 0,
    end: 13.743,
    separator: " ",
    decimals: 3,
    decimal: "'",
    duration: 3,
  },
  {
    text: "Durchschnittliche Verfügbarkeit von Schienenfahrzeugen",
    start: 0,
    end: 98,
    suffix: "%",
    prefix: "&gt;",
    duration: 3,
  },
  {
    text: "Anzahl ausgelieferte Schienenfahrzeuge",
    start: 0,
    end: 11.749,
    separator: " ",
    decimals: 3,
    decimal: "'",
    duration: 3,
  },
];

const customEventData = [
  {
    event: "Jahresbericht 2023",
    date: "13. März 2024",
    link: "#",
  },
  {
    event: "Generalversammlung 2024",
    date: "22. Mai 2024",
    link: "#",
  },
];

const newsCards = [
  // {
  //   title: "Stadler bleibt Premium Partner der Eisbären",
  //   date: "28.11.2023",
  //   text:
  //     "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
  //   img:
  //     "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
  // },
  {
    title:
      "Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow",
    date: "07.11.2023",
    text:
      "Gemeinsam mit Berlins Regierendem Bürgermeister, Kai Wegner, sowie der Senatorin für Wirtschaft, Energie und Betriebe, Franzisk...",
    img: "/pressefoto-einweihung.jpg",
  },
  {
    title:
      "Neue Akkuzüge sind jetzt auch zwischen Kiel, Lübeck und Lüneburg unterwegs",
    date: "23.10.2023",
    text:
      "In Schleswig-Holstein ist die weltweit erste batterieelektrische Zugflotte im regelmäßigen Linienbetrieb unterwegs. Damit ha...",
    img:
      "https://www.stadlerrail.com/media/img/800x/mwe_0920%20-%20cropped.jpg",
  },
  {
    title: "Weitere neue Wasserstoffzüge für Kalifornien",
    date: "16.10.2023",
    text:
      "Der Bundesstaat Kalifornien und Stadler haben am 12. Oktober 2023 eine wegweisende Vereinbarung unterzeichnet, die einen bedeutenden Schr...",
    img:
      "https://www.stadlerrail.com/media/img/800x/caltrans-coastline-16-9.jpg",
  },
  {
    title:
      "Erste TINA-Strassenbahnen starten in den Probebetrieb mit Fahrgästen",
    date: "16.10.2023",
    text:
      "Die neuen Strassenbahnen der Baureihe TINA öffnen ihre Türen: Seit dem 9. Oktober 2023&nbsp;können Fahrgäste im Rahme...",
    img: "https://www.stadlerrail.com/media/img/800x/tina_darmstadt.jpg",
  },
];

const featuresData = [
  {
    imageSrc: "/teaser_signalling-2.jpg",
    title: "Unternehmen",
    href: "/unternehmen",
  },
  {
    imageSrc: "/teaser_service.jpeg",
    title: " News",
    href: "/news",
  },
];

export default function Investors() {
  return (
    <section>
      <InvestorHero />
      <FactsAndFigures data1={facts} data2={figures} title="Daten & Fakten" />
      <NewsShortSection
        news={newsSection}
        newsTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></NewsShortSection>
      <section>
        <div className="gap-4 mb-24 sm:grid sm:grid-cols-4 sm:mt-12">
          <img
            className="object-cover h-80 w-full scale-100 col-span-2 mb-4 sm:block  "
            src="https://www.stadlerrail.com/media/img/c/stasa_200520.jpg"
            alt="content gallery 1"
          />
          <img
            className=" object-cover h-80 w-full scale-100 hidden col-span-1 sm:block"
            src="https://www.stadlerrail.com/media/img/744x606/2019_1111_milestones%202019%20for%20website_ipo%20(2).jpg"
            alt="content gallery 2"
          />
          <img
            className="object-cover h-80 w-full scale-100 hidden col-span-1 sm:block"
            src="https://www.stadlerrail.com/media/img/800x/01_flirt%20nordic%20express.jpg"
            alt="content gallery 3"
          />
        </div>
      </section>
      {/* <HomePageCaroucel
        items={newsCards}
        carouselTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></HomePageCaroucel> */}
      <EventCalendar
        mainTitle="Events"
        eventsData={customEventData}
        withoutEventLink={true}
      ></EventCalendar>
      <Publikationen
        tableData={tableData}
        publications={publications}
        title="Neuste Berichte"
        showTable={false}
      ></Publikationen>
      <section className="py-24">
        <ContentWidth>
          <div className="col-span-12 max-w-full">
            <H2>Alle Publikationen nach Jahr</H2>
            <TabsPublikationen></TabsPublikationen>
          </div>
        </ContentWidth>
      </section>
      <ContentWidth>
        <div className="col-span-12 mb-14 flex justify-between align-baseline">
          <Text>
            Alle Publikationen und Präsentationen finden Sie im Downloadcenter
          </Text>
          <ButtonPrimary
            href="/downloadcenter"
            buttonText="Zum Downloadcenter"
          />
        </div>
        <hr className="col-span-12 h-px bg-gray-200 border-0 dark:bg-gray-700" />
      </ContentWidth>
      <ContentWidth>
        <div className="py-24 col-span-12 max-w-full">
          <H2>Generalversammlung</H2>
          <TabsGeneralversammlung />
        </div>
      </ContentWidth>
      <TextBlock />
      <CorporateGorvernance
        mainTitle="Corporate Governance"
        showThirdCard={true}
        numberOfColumns={3}
      />
      <Contact
        title="Investorenkontakt"
        contactname="Daniel Strickler"
        contactlevel="Investor Relations Officer"
      />
      {/* <ContentWidth>
        <div className="col-span-12 flex flex-col mb-20"></div>
      </ContentWidth> */}
      <Features
        mainTitle="Möchten Sie gerne mehr über uns erfahren?"
        featuresData={featuresData}
      />
    </section>
  );
}
