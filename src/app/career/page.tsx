"use client";
import ApplicationProcess from "@/app/career/ApplicationProcess";
import CTASection from "@/components/sections/CTASection";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Jobs from "@/components/sections/TeaserJobs";
import Intro from "@/components/sections/Intro";
import Testimonials from "@/components/sections/Testimonials";
import CareerHero from "./HeroCareer";
import TeaserSuccessStories from "@/components/sections/TeaserSuccessStories";
import ContentWidth from "@/components/layouts/ContentWidth";


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

export default function Karriere() {
  return (
    <>
      <CareerHero></CareerHero>
      <Intro title="Unsere Kultur" />
      <ContentWidth>
        <div className="mt-20 col-span-12 max-w-full">
          <img
            className="w-full h-auto "
            src="/stadler-world-map-home.svg"
            alt=""
          />
        </div>
      </ContentWidth>
      <Testimonials />
      <FactsAndFigures data1={facts} data2={figures} title="Daten & Fakten" />
      <Jobs />
      {/* <ApplicationProcess /> */}
      <TeaserSuccessStories />
      <CTASection title="Spontanbewerbung" />
    </>
  );
}
