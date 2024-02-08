"use client";

import Contact from "@/components/sections/Contact";
import Subscribe from "@/components/sections/Subscribe";
import Publikationen from "@/components/sections/Publikationen";
import HeroText from "@/components/sections/HeroText";
import HomePageCaroucel from "@/components/sections/HomePageCaroucel";
import TeaserDownload from "../../components/sections/TeaserDownload";
import EventCalendar from "@/components/sections/EventCalendar";
import NewsShortSection from "@/components/sections/NewsShortSection";
import TeaserGeneral from "@/components/sections/TeaserGeneral";

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
    text:
      "05.12.2023 Stadler Prag feiert 15-jähriges Jubiläum und verzeichnet starkes Wachstum.",
  },
  {
    text:
      "07.11.2023 Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow.",
  },
  {
    text:
      "09.11.2023 Stadler macht Lokomotiven für das ETCS fit und ermöglicht damit schnelleren ETCS-Roll-Out in Deutschland.",
  },
  {
    text: "31.10.2023 TRAMLINK startet Linienverkehr in Bern.",
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

export default function Medien() {
  return (
    <div>
      <HeroText
        title="Medienbereich"
        leadText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <NewsShortSection
        news={newsSection}
        newsTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></NewsShortSection>
      {/*
      <HomePageCaroucel
        items={newsCards}
        carouselTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></HomePageCaroucel> */}

      <TeaserDownload
        title="Medienmitteilungen"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonLink="/medienmitteilungen"
        buttonText="Alle Medienmitteilungen"
        showList={true}
        showButton={true}
        listData={listMedienmitteilungen}
      ></TeaserDownload>
      <Publikationen
        tableData={tableData}
        publications={publications}
        title="Publikationen"
      ></Publikationen>
      <EventCalendar
        mainTitle="Events"
        eventsData={customEventData}
      ></EventCalendar>
      <TeaserGeneral
        title="Mediathek"
        ctaText="Download center"
      ></TeaserGeneral>
      <Contact></Contact>

      <Subscribe />
    </div>
  );
}
