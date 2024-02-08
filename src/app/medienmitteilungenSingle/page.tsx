"use client";

import MedienmitteilungenBody from "./MedienmitteilungenBody";
import Contact from "@/components/sections/Contact";
import MedienmitteilungenCustomList from "@/components/sections/MedienmitteilungenCustomList";
import MedienmitteilungenShortSection from "../../components/sections/MedienmitteilungenShortSection";
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

export default function NewsSingle() {
  return (
    <div>
      <MedienmitteilungenBody />
      <MedienmitteilungenCustomList
        mainTitle="Downloads"
        medienmitteilungenList={customMedienmitteilungen}
      />
      <Contact />
      <MedienmitteilungenShortSection
        medienmitteilungenTitle="Alle Medienmitteilungen"
        medienmitteilungen={shortlistMedienmitteilungen}
      ></MedienmitteilungenShortSection>
    </div>
  );
}
