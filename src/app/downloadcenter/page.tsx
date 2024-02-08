"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import AccordionItem from "@/components/sections/AccordionItem";
import HeroText from "@/components/sections/HeroText";
import Publikationen from "@/components/sections/Publikationen";
import TeaserDownload from "@/components/sections/TeaserDownload";
import H2 from "@/components/typography/H2";
import TabsPublikationen from "../investors/TabsPublikationen";
import TabsGeneralversammlung from "../investors/TabsGeneralversammlung";

const presentations = [
  {
    img: "/presentation.png",
    title: "Präsentation Halbjahresergebnisse 2023",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
  {
    img: "/presentation.png",
    title: "Presentation Full Year Results 2022",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
  {
    img: "/presentation.png",
    title: "Präsentation Capital Markets Day 2022",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
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

const downloads = [
  {
    text: "Code of Conduct",
  },
  {
    text: "Geschäftsbedingungen",
  },
  {
    text:
      "Allgemeine Einkaufsbedingungen Stadler Bussnang AG / Stadler Rheintal AG / Stadler Winterthur AG / Stadler Signalling AG / Stadler Service AG",
  },
  {
    text:
      "Ergänzende Einkaufsbedingungen für EU-Zulassungsprozesse Stadler Rheintal AG",
  },
  {
    text: "Kurzanleitung Zeitfensterbuchung",
  },
  {
    text: "Stadler Bussnang AG & Stadler Service AG Logistikspezifikation",
  },
];

export default function Downloadcenter() {
  return (
    <>
      <HeroText title="Downloads" />
      {/* <Publikationen
        tableData={tableData}
        publications={presentations}
        title="Präsentationen"
        showTable={true}
      ></Publikationen> */}
      <ContentWidth>
      <div className="max-w-full col-span-12 my-12">
        <H2>Publikationen & Präsentationen</H2>
        <AccordionItem title="Geschäftsberichte">
          <div className="max-w-full col-span-12">
            <TabsPublikationen />
          </div>
        </AccordionItem>
        <AccordionItem title="Nachhaltigkeitsberichte">
        <div className="max-w-full col-span-12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/12">
                    Datum
                  </th>
                  <th scope="col" className="px-6 py-3 w-7/12">
                    Titel
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12 text-center">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white text-center"
                    >
                        <a className="pt-2 pb-2 inline-flex font-medium" href="#">
                          EN
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          DE
                        </a>
                    </td>
                  </tr>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap text-center dark:text-white"
                      >
                        <a className="pt-2 pb-2 inline-flex " href="#">
                          EN
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex " href="#">
                          DE
                        </a>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </AccordionItem>
        <AccordionItem title="Generalversammlung">
          <div className="max-w-full col-span-12">
            <TabsGeneralversammlung />
          </div>
        </AccordionItem>
        </div>
      <div className="max-w-full col-span-12 my-12">
        <H2>Mediathek</H2>
        <AccordionItem title="Management">
          <div className="max-w-full col-span-12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/12">
                    Datum
                  </th>
                  <th scope="col" className="px-6 py-3 w-7/12">
                    Titel
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12 text-center">
                    Publikation
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12">
                    <div className="flex justify-center">Präsentation</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white text-center"
                    >
                        <a className=" pt-2 pb-2 inline-flex font-medium" href="#">
                          PDF
                        </a>
                    </td>
                    <td className="px-6 py-4 text-primary text-center">
                      <div className="flex justify-center">
                          <a
                            className="pt-2 pb-2 inline-flex font-medium"
                            href="#"
                          >
                            PDF
                          </a>
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap text-center dark:text-white"
                      >
                        <a className="pt-2 pb-2 inline-flex " href="#">
                          PDF
                        </a>
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-center">
                        <a className=" pt-2 pb-2 inline-flex font-medium" href="#">
                          PDF
                        </a>
                      </div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </AccordionItem>
        <AccordionItem title="Standort">
        </AccordionItem>
        <AccordionItem title="Produkte">
        </AccordionItem>
        <AccordionItem title="Image">
        </AccordionItem>
        <AccordionItem title="Logos">
        </AccordionItem>
        </div>
        <div className="max-w-full col-span-12 my-12">
        <H2>Datenblätter</H2>
        <AccordionItem title="Lorem Ipsum">
        <div className="max-w-full col-span-12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/12">
                    Datum
                  </th>
                  <th scope="col" className="px-6 py-3 w-7/12">
                    Titel
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12 text-center">
                    Publikation
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12">
                    <div className="flex justify-center">Präsentation</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white text-center"
                    >
                        <a className=" pt-2 pb-2 inline-flex font-medium" href="#">
                          PDF
                        </a>
                    </td>
                    <td className="px-6 py-4 text-primary text-center">
                      <div className="flex justify-center">
                          <a
                            className="pt-2 pb-2 inline-flex font-medium"
                            href="#"
                          >
                            PDF
                          </a>
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap text-center dark:text-white"
                      >
                        <a className="pt-2 pb-2 inline-flex " href="#">
                          PDF
                        </a>
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-center">
                        <a className=" pt-2 pb-2 inline-flex font-medium" href="#">
                          PDF
                        </a>
                      </div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </AccordionItem>
        <AccordionItem title="Dolor sit Amet">
        </AccordionItem>
        <AccordionItem title="Lorem Ipsum">
        </AccordionItem>
        <AccordionItem title="Dolor sit Amet">
        </AccordionItem>
        </div>
        <div className="max-w-full col-span-12 my-12">
        <H2>Lieferanten</H2>
        <AccordionItem title="Lorem Ipsum">
        <div className="max-w-full col-span-12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/12">
                    Datum
                  </th>
                  <th scope="col" className="px-6 py-3 w-7/12">
                    Titel
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12 text-center">
                    Publikation
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12">
                    <div className="flex justify-center">Präsentation</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white text-center"
                    >
                        <a className=" pt-2 pb-2 inline-flex font-medium" href="#">
                          PDF
                        </a>
                    </td>
                    <td className="px-6 py-4 text-primary text-center">
                      <div className="flex justify-center">
                          <a
                            className="pt-2 pb-2 inline-flex font-medium"
                            href="#"
                          >
                            PDF
                          </a>
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap text-center dark:text-white"
                      >
                        <a className="pt-2 pb-2 inline-flex " href="#">
                          PDF
                        </a>
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-center">
                        <a className=" pt-2 pb-2 inline-flex font-medium" href="#">
                          PDF
                        </a>
                      </div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </AccordionItem>
        <AccordionItem title="Dolor sit Amet">
        </AccordionItem>
        <AccordionItem title="Lorem Ipsum">
        </AccordionItem>
        <AccordionItem title="Dolor sit Amet">
        </AccordionItem>
        </div>
        <div className="max-w-full col-span-12 my-12 mb-24">
        <H2>Allgemeines</H2>
        <AccordionItem title="Compliance">
        </AccordionItem>
        <AccordionItem title="Datenschutz">
        <div className="max-w-full col-span-12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/12">
                    Datum
                  </th>
                  <th scope="col" className="px-6 py-3 w-7/12">
                    Titel
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12 text-center">
                    Downloads
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white text-center"
                    >
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          DE
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          EN
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          FR
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          IT
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          ES
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          NL
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          PL
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          RU
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          HU
                        </a>
                    </td>
                  </tr>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      30. Aug 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        XY
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-primary whitespace-nowrap text-center dark:text-white"
                      >
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          DE
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          EN
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          FR
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          IT
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          ES
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          NL
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          PL
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          RU
                        </a>
                        <a className="pl-2 pt-2 pb-2 inline-flex font-medium" href="#">
                          HU
                        </a>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </AccordionItem>
        <AccordionItem title="Statuten">
        </AccordionItem>
        <AccordionItem title="Zertifikate">
        </AccordionItem>
        </div>
      </ContentWidth>
      {/* <TeaserDownload
        title="Allgemeine Downloads"
        buttonLink="/downloadcenter"
        buttonText="Alle Medienmitteilungen"
        showList={true}
        showButton={false}
        listData={downloads}
      ></TeaserDownload> */}
    </>
  );
}
