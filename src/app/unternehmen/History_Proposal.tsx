import { useState } from "react";
import CardSimple from "@/components/elements/CardSimple";
import H2 from "@/components/typography/H2";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import ContentWidth from "@/components/layouts/ContentWidth";

interface ShowCardsState {
  [year: string]: boolean;
}

const History_Proposal = () => {
  const [showCards, setShowCards] = useState<ShowCardsState>({
    "2023": true,
    "2022": false,
    "2021": false,
    "2020": false,

  });

  const toggleCards2023 = () => {
    setShowCards((prevShowCards) => ({
      ...prevShowCards,
      "2023": !prevShowCards["2023"],
    }));
  };

  const toggleCards2022 = () => {
    setShowCards((prevShowCards) => ({
      ...prevShowCards,
      "2022": !prevShowCards["2022"],
    }));
  };

  const toggleCards2021 = () => {
    setShowCards((prevShowCards) => ({
      ...prevShowCards,
      "2021": !prevShowCards["2021"],
    }));
  };

  const toggleCards2020 = () => {
    setShowCards((prevShowCards) => ({
      ...prevShowCards,
      "2020": !prevShowCards["2020"],
    }));
  };

  return (
    <section className="bg-white dark:bg-gray-900 antialiased sm:py-16 lg:py-24">
      <ContentWidth>
        <div className="col-span-12">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <H2>Unsere Geschichte</H2>
          </div>
          <div className="relative border-s border-gray-200 dark:border-gray-700">
            <div className="mb-10 ms-8">
              <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -start-1.5 border border-white rounded-full dark:border-gray-900 dark:bg-gray-700"></div>
              <span
                onClick={toggleCards2023}
                className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 dark:bg-primary-900 dark:text-primary-300 cursor-pointer"
              >
                2023
              </span>
              {showCards["2023"] && (
                <div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-y-12">
                  <CardSimple />
                  <CardSimple />
                  <CardSimple />
                </div>
              )}
            </div>
            <div className="mb-6 ms-8">
              <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -start-1.5 border border-white rounded-full dark:border-gray-900 dark:bg-gray-700"></div>
              <span
                onClick={toggleCards2022}
                className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 dark:bg-primary-900 dark:text-primary-300"
              >
                2022
              </span>
              {showCards["2022"] && (
                <div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-y-12">
                  <CardSimple />
                  <CardSimple />
                  <CardSimple />
                </div>
              )}
            </div>
            <div className="mb-6 ms-8">
              <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -start-1.5 border border-white rounded-full dark:border-gray-900 dark:bg-gray-700"></div>
              <span
                onClick={toggleCards2021}
                className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 dark:bg-primary-900 dark:text-primary-300"
              >
                2021
              </span>
              {showCards["2021"] && (
                <div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-y-12">
                  <CardSimple />
                  <CardSimple />
                  <CardSimple />
                </div>
              )}
            </div>
            <div className="mb-10 ms-8">
              <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -start-1.5 border border-white rounded-full dark:border-gray-900 dark:bg-gray-700"></div>
              <span
                onClick={toggleCards2020}
                className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 dark:bg-primary-900 dark:text-primary-300"
              >
                2020
              </span>
              {showCards["2020"] && (
                <div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-y-12">
                  <CardSimple />
                </div>
              )}
            </div>
          </div>
        </div>
      </ContentWidth>
      <TeaserGeneral
        customText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ctaText="Zur ganzen Geschichte"
        href="/history"
      ></TeaserGeneral>
    </section>
  );
};

export default History_Proposal;

// import { useState } from "react";
// import CardSimple from "@/components/elements/CardSimple";
// import H2 from "@/components/typography/H2";

// interface ShowCardsState {
//   [year: string]: boolean;
// }

// export default function History_Proposal() {

//   const [showCards, setShowCards] = useState<ShowCardsState>({
//     "2023": true,
//     "2022": true,
//     "2021": true,
//     "2020": true,
//   });

//   const toggleCards = (year: string) => {
//     setShowCards((prevShowCards) => ({
//       ...prevShowCards,
//       [year]: !prevShowCards[year],
//     }));
//   };

//   return (
//     <section className="bg-white dark:bg-gray-900 antialiased">
//       <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
//         <div className="max-w-3xl mx-auto space-y-4 text-center">
//           <H2>Our History</H2>
//         </div>
//         <div className="">
//           <div className="relative border-s border-gray-200 dark:border-gray-700">
//             {Object.keys(showCards).map((year) => (
//               <div key={year} className="mb-10 ms-8">
//                 <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
//                 <span
//                   className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 dark:bg-primary-900 dark:text-primary-300 cursor-pointer"
//                   onClick={() => toggleCards(year)}
//                 >
//                   {year}
//                 </span>
//                 {showCards[year] && (
//                   <div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-y-12">
//                     <CardSimple />
//                     <CardSimple />
//                     <CardSimple />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
