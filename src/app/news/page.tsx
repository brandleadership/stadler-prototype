"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import HeroText from "@/components/sections/HeroText";
import NewsSection from "@/components/sections/NewsSection";
import NewsFilters from "./NewsFilters";
import Contact from "@/components/sections/Contact";
import Features from "@/components/sections/Features";

const featuresData = [
  {
    imageSrc: "/teaser_signalling-2.jpg",
    title: "Medien",
    href: "/#",
  },
  {
    imageSrc: "/teaser_service.jpeg",
    title: "Medienmitteilungen",
    href: "/medienmitteilungen",
  },
];

export default function News() {
  return (
    <div>
      <HeroText
        breadcrumbs={[{ text: "Medien", link: "/#" }]}
        title="News"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu tincidunt diam. Donec ac est in mi luctus elementum. Etiam eu tincidunt diam. Donec ac est in mi luctus elementum."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <NewsFilters />
      <NewsSection />
      <ContentWidth>
        <div className="mt-32 col-span-12 max-w-full"></div>
      </ContentWidth>
      <Contact />
      <Features
        mainTitle="Möchten Sie gerne mehr über uns erfahren?"
        featuresData={featuresData}
      />
    </div>
  );
}
