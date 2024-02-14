"use client";
import SubHero from "@/components/sections/SubHero";
import HeroText from "../../components/sections/HeroText";
import DNA from "./DNA";
import SustainableProcurement from "../zulieferer/SustainableProcurement";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import CorporateGorvernance from "./CorporateGovernance";
import HomePageCarousel from "../../components/sections/HomePageCaroucel";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Map from "@/components/sections/Map";
import EventCalendar from "@/components/sections/EventCalendar";
import Hero from "./Hero";
import History_Proposal from "./History_Proposal";
import NewsShortSection from "@/components/sections/NewsShortSection";

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
const cards = [
  {
    title: "FLIRT bewegt die Welt",
    text:
      "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. Erfahren Sie mehr über die unterschiedlichen FLIRT-Modelle und deren Einsatzgebiete.",
    img: "/Card2.jpg",
  },
  {
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text:
      "Der FLIRT Akku stellt den Weltrekord für die längste Fahrt mit einem Batterietriebzug auf. Lesen Sie mehr über die Rekord-Leistung.",
    img: "/card-2-carousel-2.jpg",
  },
  {
    title: "Im Land der längsten Zugstrecken",
    text:
      "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/Card2.jpg",
  },
  {
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text:
      "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/card-2-carousel-2.jpg",
  },
  {
    title: "Im Land der längsten Zugstrecken",
    text:
      "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/Card2.jpg",
  },
];
export default function Unternehmen() {
  const statistics = [
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
  const daten = [
    {
      text: "Anzahl Mitarbeitende",
      end: 14.0,
      decimals: 3,
      decimal: "'",
    },
    {
      text: "Durchschnittliche Verfügbarkeit",
      end: 98,
      suffix: "%",
      prefix: "&gt;",
    },
    {
      text: "Anzahl ausgelieferte Schienenfahrzeuge ",
      end: 11.749,
      decimals: 3,
      decimal: "'",
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
  return (
    <>
      <HeroText
        title="Über uns"
        leadText="Wir tun alles für die besten Schienenfahrzeuge der Welt. In unseren drei Geschäftsbereichen Rolling Stock, Service und Signalling setzen wir täglich neue Massstäbe in Bezug auf die Qualität und Zuverlässigkeit unserer Lösungen. Und wir arbeiten gemeinsam mit Leidenschaft jeden Tag aufs Neue daran, Spitzenleistungen zu liefern, um Menschen weltweit eine nachhaltige Mobilität zu ermöglichen. "
      />
      <Hero></Hero>
      <DNA />
      <FactsAndFigures
        data1={statistics}
        data2={daten}
        title="Unternehmenskennzahlen "
      ></FactsAndFigures>
      <CorporateGorvernance
        mainTitle="Verwaltungsrat und Konzernleitung"
        showThirdCard={false}
        numberOfColumns={2}
      />
      <section>
        <div className="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12">
          <img
            className="object-cover h-80 w-full scale-100 col-span-2 mb-4 sm:block  "
            src="https://www.stadlerrail.com/media/img/800x/mwe_0920%20-%20cropped.jpg"
            alt="content gallery 1"
          />
          <img
            className=" object-cover h-80 w-full scale-100 hidden col-span-1 sm:block  "
            src="https://www.stadlerrail.com/media/img/744x606/drohnenaufnahme_star_quadratisch.jpg"
            alt="content gallery 2"
          />
          <img
            className="object-cover h-80 w-full scale-100 hidden col-span-1 sm:block  "
            src="https://www.stadlerrail.com/media/img/744x606/jet_7487_quadratisch.jpg"
            alt="content gallery 3"
          />
        </div>
      </section>
      <div className="lg:py-24">
        {" "}
        <Map title="Global präsent – lokal verankert" />
      </div>
      <SustainableProcurement title="Nachhaltigkeit" showButton={true} />
      <History_Proposal />
      <HomePageCarousel
        items={cards}
        carouselTitle="Erfolgsgeschichten"
        h2Styles="flex justify-center items-center"
        showButton={false}
      />
      <EventCalendar
        mainTitle="Events"
        eventsData={customEventData}
        withoutEventLink={true}
      ></EventCalendar>
      <NewsShortSection
        news={newsSection}
        newsTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></NewsShortSection>
      {/* <HomePageCarousel
        items={newsCards}
        carouselTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></HomePageCarousel> */}
    </>
  );
}
