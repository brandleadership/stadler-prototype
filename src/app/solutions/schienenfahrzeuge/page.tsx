"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import TrainCardList from "@/components/sections/TrainCardList";
import Link from "@/components/typography/Link";
import TeaserImageLeft from "@/components/sections/TeaserImageLeft";
import TeaserImageRight from "@/components/sections/TeaserImageright";
import HeroText from "@/components/sections/HeroText";
import Text from "@/components/typography/Text";
import Button from "@/components/elements/ButtonSecondary";
import H2 from "@/components/typography/H2";
import HomePageCaroucel from "@/components/sections/HomePageCaroucel";
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

const mainline = [
  {
    img: "/images/train-models/mainline/smile.jpeg",
    category: "Highspeed",
    name: "SMILE",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/mainline/kiss200.jpeg",
    category: "Intercity",
    name: "KISS",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/mainline/flirt200.jpeg",
    category: "Intercity",
    name: "FLIRT",
    href: "/solutions/schienenfahrzeuge/product",
  },
  // {
  //   img: "/images/train-models/mainline/flirt160.jpeg",
  //   category: "Regional",
  //   name: "Flirt 160",
  //   href: "/solutions/schienenfahrzeuge/product",
  // },
  // {
  //   img: "/images/train-models/mainline/kiss160.jpeg",
  //   category: "Regional",
  //   name: "Kiss 160",
  //   href: "/solutions/schienenfahrzeuge/product",
  // },
  {
    img: "/images/train-models/mainline/wink.jpeg",
    category: "Regional",
    name: "WINK",
    href: "/solutions/schienenfahrzeuge/product",
  },
  // {
  //   img: "/images/train-models/mainline/gtw.jpeg",
  //   category: "Regional",
  //   name: "GTW",
  //   href: "/solutions/schienenfahrzeuge/product",
  // },
];

const urban = [
  {
    img: "/images/train-models/urban/tina.jpeg",
    category: "Highspeed",
    name: "TINA",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/urban/tramlink.jpeg",
    category: "Tram",
    name: "TRAMLINK",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/urban/tango.jpeg",
    category: "Intercity",
    name: "TANGO",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/urban/variobahn.jpeg",
    category: "Regional",
    name: "VARIOBAHN",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/urban/citylink.jpeg",
    category: "Regional",
    name: "CITYLINK",
    href: "/solutions/schienenfahrzeuge/product",
  },

  {
    img: "/images/train-models/urban/metro.jpeg",
    category: "Regional",
    name: "METRO",
    href: "/solutions/schienenfahrzeuge/product",
  },
  // {
  //   img: "/images/train-models/urban/metelitsa.jpeg",
  //   category: "Regional",
  //   name: "Metelitsa",
  //   href: "/solutions/schienenfahrzeuge/product",
  // },
];

const locomotive = [
  {
    img: "/images/train-models/locomotive/euro9000.jpeg",
    category: "Highspeed",
    name: "EURO9000",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/locomotive/eurodual.jpeg",
    category: "EURODUAL",
    name: "EURODUAL",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/locomotive/euro6000.jpeg",
    category: "Highspeed",
    name: "EURO6000",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/locomotive/euro4001.jpeg",
    category: "Highspeed",
    name: "EURO4001",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/locomotive/eurolight.jpeg",
    category: "Highspeed",
    name: "EUROLIGHT",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/locomotive/sali.jpeg",
    category: "Highspeed",
    name: "SALI",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/locomotive/central-cab.jpeg",
    category: "Highspeed",
    name: "CENTRAL CAB",
    href: "/solutions/schienenfahrzeuge/product",
  },
];

const tailormade = [
  {
    img: "/images/train-models/tailormade/triebzug.jpeg",
    category: "Highspeed",
    name: "TRIEBZÜGE",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/tailormade/zahnradbahn.jpeg",
    category: "Highspeed",
    name: "ZAHNRADBAHNEN",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/tailormade/schlafwagen.jpeg",
    category: "Highspeed",
    name: "SCHLAFWAGEN",
    href: "/solutions/schienenfahrzeuge/product",
  },
  {
    img: "/images/train-models/tailormade/rangierlok.jpeg",
    category: "Highspeed",
    name: "LOKOMOTIVEN",
    href: "/solutions/schienenfahrzeuge/product",
  },
];

export default function Schienenfahrzeuge() {
  return (
    <section>
      {/* <ContentWidth> */}
      <div className="col-span-12">
        <HeroText
          breadcrumbs={[{ text: "Lösungen", link: "/solutions" }]}
          title="Schienenfahrzeuge"
          leadText="In enger Zusammenarbeit mit Kunden werden innovative, modulare oder massgeschneiderte Schienenfahrzeuge entwickelt."
        ></HeroText>
        <div className="pt-24 bg-stadlergradient">
          <ContentWidth>
            <div className="col-span-6 pb-12">
              <H2 styles="text-white">Vollbahnen</H2>
              <Text styles="mt-4 text-xl font-normal text-gray-800 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </div>
          </ContentWidth>
          {/* <TeaserImageRight >
            <div>
              <H2 styles="text-white">Vollbahnen</H2>
              <Text styles="mt-4 text-xl font-normal text-gray-800 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </div>
          </TeaserImageRight> */}
          <TrainCardList trains={mainline}></TrainCardList>
          <ContentWidth>
            <div className="col-span-6 pb-12">
              <H2 styles="text-white">Urban</H2>
              <Text styles="mt-4 text-xl font-normal text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </div>
          </ContentWidth>
          {/* <TeaserImageLeft >
            <div>
              <H2 styles="text-white">Urban</H2>
              <Text styles="mt-4 text-xl font-normal text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </div>
          </TeaserImageLeft> */}
          <TrainCardList trains={urban}></TrainCardList>
          <ContentWidth>
            <div className="col-span-6 pb-12">
              <H2 styles="text-white">Lokomotiven</H2>
              <Text styles="mt-4 text-xl font-normal text-gray-800 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </div>
          </ContentWidth>
          {/* <TeaserImageRight >
            <div>
              <H2 styles="text-white">Locomotiven</H2>
              <Text styles="mt-4 text-xl font-normal text-gray-800 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </div>
          </TeaserImageRight> */}
          <TrainCardList trains={locomotive}></TrainCardList>
          <ContentWidth>
            <div className="col-span-6 pb-12">
              <H2 styles="text-white">Tailor Made</H2>
              <Text styles="mt-4 text-xl font-normal text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </div>
          </ContentWidth>
          {/* <TeaserImageLeft >
            <div>
              <H2 styles="text-white">Tailor Made</H2>
              <Text styles="mt-4 text-xl font-normal text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </div>
          </TeaserImageLeft> */}
          <TrainCardList trains={tailormade}></TrainCardList>
        </div>
        <NewsShortSection
          news={newsSection}
          newsTitle="News"
          showDate={true}
          showButton={true}
          h2Styles="flex justify-left items-left"
        ></NewsShortSection>
        {/* <div className="pt-24">
          <HomePageCaroucel
            items={newsCards}
            carouselTitle="Schienenfahrzeuge News"
            showDate={true}
            showButton={true}
            h2Styles="flex justify-left items-left"
          ></HomePageCaroucel>
        </div> */}
      </div>
      {/* </ContentWidth> */}
    </section>
  );
}
