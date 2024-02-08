"use client";
import { useState } from "react";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import Text from "@/components/typography/Text";
import List from "../../components/sections/List";
import ContentWidth from "@/components/layouts/ContentWidth";
import H1 from "@/components/typography/H1";
import HeroText from "@/components/sections/HeroText";
import SmallWidth from "@/components/layouts/SmallWidth";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import AccordionItem from "@/components/sections/AccordionItem";
const schweizItems = [
  {
    text:
      "Stadler Rail AG, Stadler Bussnang AG, Stadler Rheintal AG, Stadler Winterthur AG, Stadler Signalling AG",
    iso: "ISO9001, ISO14001, ISO45001",
    href: "/downloadcenter",
  },
  {
    text: "Stadler Bussnang AG",
    iso: "Stadler Bussnang AG",
    href: "/downloadcenter",
  },
];
const deutschlandItems = [
  {
    text:
      "Stadler Deutschland GmbH, Stadler Chemnitz GmbH, Stadler Mannheim GmbH",
    iso: "ISO9001, ISO14001, ISO50001",
    href: "/downloadcenter",
  },
  {
    text: "Stadler Deutschland GmbH",
    iso: "EN15085",
    href: "/downloadcenter",
  },
];
const spanienItems = [
  {
    text: "Stadler Rail Valencia S.A.U.",
    iso: "ISO9001",
    href: "/downloadcenter",
  },
  {
    text: "Stadler Rail Valencia S.A.U.",
    iso: "ISO14001",
    href: "/downloadcenter",
  },
];

export default function Zertifizierung() {
  type Section = "rollingStock" | "signalling" | "service";

  const initialSectionsState: Record<Section, boolean> = {
    rollingStock: false,
    signalling: false,
    service: false,
  };
  const [sectionsState, setSectionsState] = useState(initialSectionsState);

  const toggleVisibility = (section: Section) => {
    setSectionsState((prevState: Record<Section, boolean>) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <>
      <HeroText title="Zertifizierungen" />
      <SmallWidth>
        <section>
          <AccordionItem title="Rolling Stock">
            <List items={schweizItems} listTitle="Schweiz" />
            <List items={deutschlandItems} listTitle="Deutschland" />
            <List items={spanienItems} listTitle="Spanien" />
          </AccordionItem>
          <AccordionItem title="Signalling">
            <List items={deutschlandItems} listTitle="Deutschland" />
          </AccordionItem>
          <AccordionItem title="Service">
            <List items={spanienItems} listTitle="Spanien" />
          </AccordionItem>
        </section>
        <section>
          <div className="col-span-12 my-14 flex justify-between align-baseline">
            <Text>
              Im Downloadcenter finden Sie alle Dokumente in allen Sprachen.
            </Text>
            <ButtonPrimary
              href="/downloadcenter"
              buttonText="Zum Downloadcenter"
            />
          </div>
        </section>
      </SmallWidth>
    </>
  );
}
