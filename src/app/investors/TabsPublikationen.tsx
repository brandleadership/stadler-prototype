"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import H2 from "@/components/typography/H2";
import ContentWidth from "@/components/layouts/ContentWidth";
import MedienmitteilungenList from "@/components/sections/MedienmitteilungenList";
import TableInvestorPublications from "./TableInvestorPublications";

export default function TabsPublikationen() {
  const tabs = [
    {
      label: "2023",
      publication: "Halbjahresergebnisse 2023",
    },
    {
      label: "2022",
      publication: "Halbjahresergebnisse 2022",
    },
    {
      label: "2021",
      publication: "Halbjahresergebnisse 2021",
    },
    {
        label: "2020",
        publication: "Halbjahresergebnisse 2020",
    },
    {
        label: "2019",
        publication: "Halbjahresergebnisse 2019",
    },
    {
        label: "2018",
        publication: "Halbjahresbericht 2018",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);


  return (
    <>
      <nav
        className="mx-auto grid grid-cols-2 gap-2 sm:grid-cols-6 sm:gap-4"
        aria-label="Tabs"
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        {tabs.map((item) => (
          <button
            key={item.label}
            onClick={() => setSelectedTab(item)}
            className={`${
              selectedTab.label == item.label ? "bg-gray-100" : " "
            } p-3 text-center md:p-5 md:text-left`}
            type="button"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            aria-selected="true"
            role="tab"
            data-tabs-target="#europe"
          >
            <span className="md:flex">
              <span className="md:ml-5 md:grow">
                <span className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 block font-semibold text-gray-800 dark:text-gray-200">
                  {item.label}
                </span>
              </span>
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-12 md:mt-16" id="myTabContent">
        <AnimatePresence mode="wait">
          <motion.div
            role="tabpanel"
            aria-labelledby="tabs-with-card-item-1"
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative lg:pb-12">
              <figure className="relative z-[1] ml-auto h-auto max-w-full rounded-b-lg">
                <div className="rounded-b-lg bg-white">
                    <TableInvestorPublications name={selectedTab.publication} />
                </div>
              </figure>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      </>
  );
}