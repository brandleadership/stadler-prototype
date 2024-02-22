import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ContentWidth from "../layouts/ContentWidth";
import Text from "../typography/Text";
import H3 from "../typography/H3";
import H2 from "../typography/H2";

const publications = [
  {
    img: "/publications/publ-card-1.png",
    title: "Halbjahresbericht 2023",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. ",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202023_de_final.pdf",
  },
  {
    img: "/publications/publ-card-2.png",
    title: "Geschäftsbericht 2022",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. ",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202023_de_final.pdf",
  },
  {
    img: "/publications/publ-card-4.png",
    title: "Nachhaltigkeitsbericht 2021",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich.",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler_nachhaltigkeitsbericht_2022_de_web_v5.pdf",
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
interface StatsProps {
  publications: {
    img?: string;
    title?: string;
    text?: string;
    href?: string;
  }[];
  tableData: {
    publication?: string;
    date?: string;
    link?: string;
  }[];
  title: string;
  showTable?: boolean;
}
const Publicationen: React.FC<StatsProps> = ({
  publications,
  tableData,
  title,
  showTable = true,
}) => {
  const [showPublications, setShowPublications] = useState(false);

  const publicationsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const tablePublicationsRef = useRef<Array<HTMLAnchorElement | null>>([]);

  const toggleTrainsVisibility = () => {
    setShowPublications(!showPublications);
  };

  useEffect(() => {
    // let publicationEl = publicationRef.current;
    console.log(publicationsRef);
    publicationsRef.current.forEach((item) => {
      item?.addEventListener("click", () => {
        console.log("publicationEl", item, item.dataset.key);
        var _paq = (window._paq = window._paq || []);
        _paq.push([
          "trackEvent",
          "Publications",
          "Publication Download",
          item.dataset.key,
        ]);
      });
    });

    tablePublicationsRef.current.forEach((item) => {
      item?.addEventListener("click", () => {
        console.log("publicationEl", item, item.dataset.key);
        var _paq = (window._paq = window._paq || []);
        _paq.push([
          "trackEvent",
          "Publications 2",
          "Publication Download 2",
          item.dataset.key,
        ]);
      });
    });

    // publicationEl?.addEventListener("click", () => {
    //   console.log("publicationEl", publicationEl, publicationRef);
    //   var _paq = (window._paq = window._paq || []);
    //   _paq.push([
    //     "trackEvent",
    //     "Publication",
    //     "Download Publication",
    //     "TestValue",
    //   ]);
    // });
  });

  return (
    <section className="bg-primarySolid-50 py-5 lg:py-24 ">
      <ContentWidth>
        <div className="col-span-12">
          <div className="text-start mb-8">
            <H2>{title}</H2>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
          <div className="w-full mx-auto justify-center  items-stretch grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3">
            {publications.map((publication, i) => (
              <div
                key={publication.title}
                className="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a
                  ref={(el) => (publicationsRef.current[i] = el)}
                  href={publication.href}
                  // href="#"
                  data-key={publication.title}
                >
                  <img
                    className="object-contain max-h-auto w-full"
                    src={publication.img}
                    alt={publication.title}
                  />
                  <div className="p-5">
                    <H3>{publication.title}</H3>

                    <span className="inline-flex items-center pt-2 text-sm font-medium text-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_4995_6662)">
                          <path
                            d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                            fill="#005893"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4995_6662">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        {showTable && (
          <div className="col-span-12 relative flex flex-row w-full mt-8 justify-beetween items-center ">
            <button
              type="button"
              onClick={toggleTrainsVisibility}
              className="text-primary items-center text-base flex flex-row gap-2 whitespace-nowrap"
            >
              {!showPublications ? (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4995_6652)">
                    <path
                      d="M20 8.88889H11.1111V0H8.88889V8.88889H0V11.1111H8.88889V20H11.1111V11.1111H20V8.88889Z"
                      fill="#005893"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4995_6652">
                      <rect width="20" height="20" fill="#005893" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 8.88892H11.1111H8.88889H0V11.1111H8.88889H11.1111H20V8.88892Z"
                    fill="#005893"
                  />
                </svg>
              )}
              alle einblenden
            </button>
          </div>
        )}
        {showPublications && (
          <div className="col-span-12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/3">
                    Publikation
                  </th>
                  <th scope="col" className="px-6 py-3 w-1/3">
                    Erscheinungsdatum
                  </th>
                  <th scope="col" className="px-6 py-3 w-1/3">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      {item.publication}
                    </th>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4 text-primary">
                      <a
                        ref={(el) => (tablePublicationsRef.current[index] = el)}
                        data-key={item.publication}
                        href={item.link}
                        target="_blank"
                      >
                        PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </ContentWidth>
    </section>
  );
};

export default Publicationen;
