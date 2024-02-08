"use client";

import HeroText from "@/components/sections/HeroText";
import Contact from "@/components/sections/Contact";
import MedienmitteilungenShortSection from "../../components/sections/MedienmitteilungenShortSection";

import MedienmitteilungenList from "@/components/sections/MedienmitteilungenList";
import Features from "@/components/sections/Features";
import Subscribe from "@/components/sections/Subscribe";

const shortlistMedienmitteilungen = [
  {
    link: "/medienmitteilungenSingle",
    date: "05.12.2023",
    title:
      "Stadler Prag feiert 15-jähriges Jubiläum und verzeichnet starkes Wachstum.",
    lead:
      "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    image:
      "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
    tags: [{ tag: "Ad-Hoc" }, { tag: "Corporate" }],
  },
  {
    link: "/medienmitteilungenSingle",
    date: "07.11.2023",
    title:
      "Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow.",
    lead:
      "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    image:
      "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
    tags: [{ tag: "Ad-Hoc" }, { tag: "Corporate" }],
  },
  {
    link: "/medienmitteilungenSingle",
    date: "09.11.2023",
    title:
      "Stadler macht Lokomotiven für das ETCS fit und ermöglicht damit schnelleren ETCS-Roll-Out in Deutschland.",
    lead:
      "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    image:
      "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
    tags: [{ tag: "Ad-Hoc" }],
  },
  {
    link: "/medienmitteilungenSingle",
    date: "31.10.2023",
    title: "TRAMLINK startet Linienverkehr in Bern.",
    lead:
      "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    image:
      "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
    tags: [{ tag: "Ad-Hoc" }, { tag: "Corporate" }],
  },
];

const customMedienmitteilungen = [
  {
    date: "18.01.2024",
    medien: "FdC bestellt drei weitere Schmalspur-Wasserstoffzüge bei Stadler",
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Ad-Hoc",
      },
    ],
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
    date: "11.01.2024",
    medien:
      "Offizielle Übergabe des Premierenfahrzeugs der nächsten Berliner U-Bahngeneration",
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Corporate",
      },
    ],
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
        text: "PX",
        link: "#",
      },
    ],
  },
  {
    date: "20.12.2023",
    medien:
      "EURO9000 erhält grünes Licht für den Betrieb in Belgien und den Niederlanden",
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Produkt",
      },
    ],
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
        text: "FR",
        link: "#",
      },
      {
        text: "PX",
        link: "#",
      },
    ],
  },
  {
    date: "12.12.2023",
    medien:
      "Neuer Reisekomfort für Fahrgäste und Personal im Fernverkehr der Deutschen Bahn",
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Produkt",
      },
    ],
    links: [
      {
        text: "DE",
        link: "#",
      },
      {
        text: "PX",
        link: "#",
      },
    ],
  },
  {
    date: "18.01.2024",
    medien: "FdC bestellt drei weitere Schmalspur-Wasserstoffzüge bei Stadler",
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Ad-Hoc",
      },
    ],
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
    date: "11.01.2024",
    medien:
      "Offizielle Übergabe des Premierenfahrzeugs der nächsten Berliner U-Bahngeneration",
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Corporate",
      },
    ],
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
        text: "PX",
        link: "#",
      },
    ],
  },
  {
    date: "20.12.2023",
    medien:
      "EURO9000 erhält grünes Licht für den Betrieb in Belgien und den Niederlanden",
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Produkt",
      },
    ],
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
        text: "FR",
        link: "#",
      },
      {
        text: "PX",
        link: "#",
      },
    ],
  },
  {
    date: "12.12.2023",
    medien:
      "Neuer Reisekomfort für Fahrgäste und Personal im Fernverkehr der Deutschen Bahn",
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Produkt",
      },
    ],
    links: [
      {
        text: "DE",
        link: "#",
      },
      {
        text: "PX",
        link: "#",
      },
    ],
  },
];

const featuresData = [
  {
    imageSrc: "/teaser_signalling-2.jpg",
    title: "Medien",
    href: "/#",
  },
  {
    imageSrc: "/teaser_service.jpeg",
    title: " News",
    href: "/news",
  },
];
export default function Medienmitteilungen() {
  return (
    <div className="mb-16">
      <HeroText
        breadcrumbs={[{ text: "Medien", link: "/#" }]}
        title="Medienmitteilungen"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem diam, volutpat tristique congue in, fermentum et arcu. Donec elementum ac dolor consectetur laoreet. Vestibulum augue elit, malesuada eu eros ut, consectetur placerat turpis. Aenean vel dapibus velit. Nulla dapibus sem est. Pellentesque nec lectus accumsan, rutrum ipsum ut, mattis quam. "
      />
      <MedienmitteilungenShortSection
        medienmitteilungenTitle="Ad-Hoc Medienmitteilungen"
        medienmitteilungen={shortlistMedienmitteilungen}
        showButton={false}
      ></MedienmitteilungenShortSection>

      <MedienmitteilungenList
        mainTitle="Alle Medienmitteilungen"
        medienmitteilungenList={customMedienmitteilungen}
      />

      <Subscribe />
      <Contact />
      <Features
        mainTitle="Möchten Sie gerne mehr über uns erfahren?"
        featuresData={featuresData}
      />
    </div>
  );
}
