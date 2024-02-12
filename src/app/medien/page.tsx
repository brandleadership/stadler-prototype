"use client";

import Contact from "@/components/sections/Contact";
import Subscribe from "@/components/sections/Subscribe";
import Publikationen from "@/components/sections/Publikationen";
import HeroText from "@/components/sections/HeroText";
import ContentWidth from "@/components/layouts/ContentWidth";
import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import TeaserDownload from "../../components/sections/TeaserDownload";
import TabsPublikationen from "../investors/TabsPublikationen";
import EventCalendar from "@/components/sections/EventCalendar";
import NewsShortSection from "@/components/sections/NewsShortSection";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import IntroZulieferer from "@/components/sections/IntroZulieferer";
import MedienMedienmitteilungList from "./MedienMedienmitteilungList";

// const publications = [
//   {
//     img: "/publications/publ-card-1.png",
//     title: "Halbjahresbericht 2023",
//     text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. ",
//     href:
//       "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202023_de_final.pdf",
//   },
//   {
//     img: "/publications/publ-card-2.png",
//     title: "Geschäftsbericht 2022",
//     text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. ",
//     href:
//       "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202023_de_final.pdf",
//   },
//   {
//     img: "/publications/publ-card-4.png",
//     title: "Nachhaltigkeitsbericht 2021",
//     text: "Unser Erfolgsmodell FLIRT bewegt täglich.",
//     href:
//       "https://www.stadlerrail.com/media/pdf/stadler_nachhaltigkeitsbericht_2022_de_web_v5.pdf",
//   },
// ];
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

const listMedienmitteilungen = [
  {
    time: "05.12.2023",
    link: "/medienmitteilungenSingle",
    text: "FdC bestellt drei weitere Schmalspur-Wasserstoffzüge bei Stadler.",
  },
  {
    time: "07.11.2023",
    link: "/medienmitteilungenSingle",
    text:
      "Offizielle Übergabe des Premierenfahrzeugs der nächsten Berliner U-Bahngeneration",
  },
  {
    time: "09.11.2023",
    link: "/medienmitteilungenSingle",
    text:
      "EURO9000 erhält grünes Licht für den Betrieb in Belgien und den Niederlanden",
  },
  {
    time: "31.10.2023",
    link: "/medienmitteilungenSingle",
    text:
      "Neuer Reisekomfort für Fahrgäste und Personal im Fernverkehr der Deutschen Bahn",
  },
  {
    time: "05.12.2023",
    link: "/medienmitteilungenSingle",
    text: "FdC bestellt drei weitere Schmalspur-Wasserstoffzüge bei Stadler.",
  },
  {
    time: "07.11.2023",
    link: "/medienmitteilungenSingle",
    text:
      "Offizielle Übergabe des Premierenfahrzeugs der nächsten Berliner U-Bahngeneration",
  },
];

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

const newsCards = [
  {
    title: "Stadler bleibt Premium Partner der Eisbären",
    date: "28.11.2023",
    text:
      "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    img:
      "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
  },
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

const customEventData = [
  {
    event: "Event",
    date: "tt. mm. yyyy",
    link: "#",
  },
  {
    event: "Event",
    date: "tt. mm. yyyy",
    link: "#",
  },
  {
    event: "Event",
    date: "tt. mm. yyyy",
    link: "#",
  },
  {
    event: "Event",
    date: "tt. mm. yyyy",
    link: "#",
  },
  {
    event: "Event",
    date: "tt. mm. yyyy",
    link: "#",
  },
];
const customMedienmitteilungen = [
  {
    title: "Download PDF",
    links: [
      {
        text: "DE",
        link: "#",
      },
      {
        text: "EN",
        link: "#",
      },
      {
        text: "IT",
        link: "#",
      },
      {
        text: "PX",
        link: "#",
      },
    ],
  },

  {
    title: "Download Medien",
    links: [
      {
        text: "ZIP",
        link: "#",
      },
    ],
  },
];

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
export default function Medien() {
  return (
    <div>
      <HeroText
        title="Medienbereich"
        leadText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <MedienMedienmitteilungList
        mainTitle="Medienmitteilungen"
        medienmitteilungenList={listMedienmitteilungen}
      />

      <NewsShortSection
        news={newsSection}
        newsTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></NewsShortSection>

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
        <hr className="col-span-12 mb-12 h-px bg-gray-200 border-0 dark:bg-gray-700" />
      </ContentWidth>
      <EventCalendar
        mainTitle="Events"
        eventsData={customEventData}
      ></EventCalendar>
      <IntroZulieferer
        title="Mediathek"
        buttonTitle="Zur Mediathek"
        buttonLink="/downloadcenter"
      />
      <Contact></Contact>

      <Subscribe />
    </div>
  );
}
