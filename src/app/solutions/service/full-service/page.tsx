"use client";

import Description from "./Description";
import Advantages from "../../../../components/sections/Advantages";
import Contact from "../../../../components/sections/Contact";
import Career from "../../../../components/sections/Career";
import ReferenzenCarousel from "../../../../components/sections/ReferenzenCarousel";
import HeroText from "@/components/sections/HeroText";
import FullWidth from "@/components/layouts/FullWidth";
const advantageItems = [
  {
    icon: ( <svg
                className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg> ),
    title: "Weltweit unterwegs, lokal verankert",
    text: "Die 80 Service Standorte weltweit stellen für eine lokale Betreuung vor Ort sicher",
  },
  {
    icon:( <svg
                className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>),
    title: "Aus einer Hand",
    text: "Individuelles Komplett-Angebot mit zentralem Ansprechpartner für alle Anliegen betreffend Instandhaltung",
  },
  {
    icon:(<svg
                className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>),
    title: "Kosten im Griff",
    text: "Mit der regelmässigen Wartung wird die Flotte zuverlässiger, verfügbarer und sicherer. Fixe Kilometerpauschale und definierte Zusatzarbeit sorgen für Kostensicherheit",
  },

];
export default function FullService() {
  return (
    <>
    <HeroText 
    breadcrumbs={[
        { text: "Lösungen", link: "/solutions" },
        { text: "Service", link: "/solutions/service" }
       ]}
        title="Full Service – Integriertes Service-Konzept in der Nähe"
        leadText="Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst."
         withCTA={false} />
    <FullWidth>
    <div className="col-span-12">
      <img className="h-auto w-full"
            src="/hero-full-service-narrow.jpg"
            alt=""
          />
      </div>
    </FullWidth>
    <Description />
    <Advantages items={advantageItems}/>
    <ReferenzenCarousel />
    <Contact />
    <Career />
    </>
  );
}
