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

const newsCards = [
  {
    title: "Stadler bleibt Premium Partner der Eisbären",
    date: "28.11.2023",
    text: "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    img: "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
  },
  {
    title:
      "Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow",
    date: "07.11.2023",
    text: "Gemeinsam mit Berlins Regierendem Bürgermeister, Kai Wegner, sowie der Senatorin für Wirtschaft, Energie und Betriebe, Franzisk...",
    img: "/pressefoto-einweihung.jpg",
  },
  {
    title:
      "Neue Akkuzüge sind jetzt auch zwischen Kiel, Lübeck und Lüneburg unterwegs",
    date: "23.10.2023",
    text: "In Schleswig-Holstein ist die weltweit erste batterieelektrische Zugflotte im regelmäßigen Linienbetrieb unterwegs. Damit ha...",
    img: "https://www.stadlerrail.com/media/img/800x/mwe_0920%20-%20cropped.jpg",
  },
  {
    title: "Weitere neue Wasserstoffzüge für Kalifornien",
    date: "16.10.2023",
    text: "Der Bundesstaat Kalifornien und Stadler haben am 12. Oktober 2023 eine wegweisende Vereinbarung unterzeichnet, die einen bedeutenden Schr...",
    img: "https://www.stadlerrail.com/media/img/800x/caltrans-coastline-16-9.jpg",
  },
  {
    title:
      "Erste TINA-Strassenbahnen starten in den Probebetrieb mit Fahrgästen",
    date: "16.10.2023",
    text: "Die neuen Strassenbahnen der Baureihe TINA öffnen ihre Türen: Seit dem 9. Oktober 2023&nbsp;können Fahrgäste im Rahme...",
    img: "https://www.stadlerrail.com/media/img/800x/tina_darmstadt.jpg",
  },
];


    const mainline = [
      {
        img: "/train-models/mainline/smile.jpeg",
        category: "Highspeed",
        name: "Smile",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/mainline/flirt200.jpeg",
        category: "Intercity",
        name: "Flirt 200",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/mainline/kiss200.jpeg",
        category: "Intercity",
        name: "Kiss 200",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/mainline/flirt160.jpeg",
        category: "Regional",
        name: "Flirt 160",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/mainline/kiss160.jpeg",
        category: "Regional",
        name: "Kiss 160",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/mainline/wink.jpeg",
        category: "Regional",
        name: "Wink",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/mainline/gtw.jpeg",
        category: "Regional",
        name: "GTW",
        href: "/solutions/schienenfahrzeuge/product",
      },
    ];

    const urban = [
      {
        img: "/train-models/urban/tina.jpeg",
        category: "Highspeed",
        name: "Tina",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/urban/tango.jpeg",
        category: "Intercity",
        name: "Tango",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/urban/tramlink.jpeg",
        category: "Tram",
        name: "Tramlink",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/urban/variobahn.jpeg",
        category: "Regional",
        name: "Variobahn",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/urban/metelitsa.jpeg",
        category: "Regional",
        name: "Metelitsa",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/urban/citylink.jpeg",
        category: "Regional",
        name: "Citylink",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/urban/metro.jpeg",
        category: "Regional",
        name: "Metro",
        href: "/solutions/schienenfahrzeuge/product",
      },
    ];

    const locomotive = [
      {
        img: "/train-models/locomotive/euro9000.jpeg",
        category: "Highspeed",
        name: "EURO9000",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/locomotive/eurodual.jpeg",
        category: "EURODUAL",
        name: "Smile",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/locomotive/euro6000.jpeg",
        category: "Highspeed",
        name: "EURO6000",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/locomotive/euro4001.jpeg",
        category: "Highspeed",
        name: "EURO4001",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/locomotive/eurolight.jpeg",
        category: "Highspeed",
        name: "EUROLIGHT",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/locomotive/sali.jpeg",
        category: "Highspeed",
        name: "SALI",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/locomotive/central-cab.jpeg",
        category: "Highspeed",
        name: "Central Cab",
        href: "/solutions/schienenfahrzeuge/product",
      },
    ];

    const tailormade = [
      {
        img: "/train-models/tailormade/triebzug.jpeg",
        category: "Highspeed",
        name: "Triebzüge",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/tailormade/zahnradbahn.jpeg",
        category: "Highspeed",
        name: "Zahnradbahnen",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/tailormade/schlafwagen.jpeg",
        category: "Highspeed",
        name: "Schlafwagen",
        href: "/solutions/schienenfahrzeuge/product",
      },
      {
        img: "/train-models/tailormade/rangierlok.jpeg",
        category: "Highspeed",
        name: "Lokomotiven",
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
        <div className="py-12 bg-stadlergradient">
          <TeaserImageRight imageSrc="/test-img-1.png">
            <div>
              <H2 styles="text-white">Mainline</H2>
              <Text styles="mt-4 text-xl font-normal text-gray-800 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </div>
            
          </TeaserImageRight>
          <TrainCardList trains={mainline}></TrainCardList>
          <TeaserImageLeft imageSrc="/test-img-1.png">
            <div>
              <H2 styles="text-white">Urban</H2>
              <Text styles="mt-4 text-xl font-normal text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </div>
            
          </TeaserImageLeft>
          <TrainCardList trains={urban}></TrainCardList>
          <TeaserImageRight imageSrc="/test-img-1.png">
            <div>
              <H2 styles="text-white">Locomotive</H2>
              <Text styles="mt-4 text-xl font-normal text-gray-800 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </div>
           
          </TeaserImageRight>
          <TrainCardList trains={locomotive}></TrainCardList>
          <TeaserImageLeft imageSrc="/test-img-1.png">
            <div>
              <H2 styles="text-white">Tailor Made</H2>
              <Text styles="mt-4 text-xl font-normal text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </div>
           
          </TeaserImageLeft>
          <TrainCardList trains={tailormade}></TrainCardList>
        </div>
        <HomePageCaroucel
          items={newsCards}
          carouselTitle="Schienenfahrzeuge News"
          showDate={true}
          showButton={true}
          h2Styles="flex justify-left items-left"
        ></HomePageCaroucel>
      </div>
      {/* </ContentWidth> */}
    </section>
  );
}
