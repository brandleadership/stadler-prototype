'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
    const tabs = [
        {
            label: 'Max Müller',
            quote: 'Dank Stadler konnte ich eine Ausbildung in einem Bereich abschliessen der mich wirklich fasziniert.',
            job: 'Lernender Automatiker',
            img: 'https://www.stadlerrail.com/media/img/c/produktionsmechaniker_lernende.jpg',
        },
        {
            label: 'Jessica Steiner',
            quote: 'Bei Stadler arbeiten macht Spass.',
            job: 'Konstrukteur',
            img: 'https://www.stadlerrail.com/media/img/c/softwareentwickler_berufserfahrene.jpg',
        },
        {
            label: 'Michael Frei',
            quote: 'Die Arbeit ist sehr spannend, weil man dazu beiträgt wortwörtlich die ganze Welt zu bewegen',
            job: 'Schreiner',
            img: 'https://www.stadlerrail.com/media/img/c/schreiner_berufserfahrene.jpg',
        },
    ];

    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <nav
                className="mx-auto grid max-w-6xl grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4"
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
                            selectedTab.label == item.label
                                ? 'bg-gray-100'
                                : ' '
                        } rounded-xl p-3 text-center md:p-5 md:text-left`}
                        type="button"
                        id="tabs-with-card-item-1"
                        data-hs-tab="#tabs-with-card-1"
                        aria-controls="tabs-with-card-1"
                        aria-selected="true"
                        role="tab"
                        data-tabs-target="#europe"
                    >
                        <span className="md:flex">
                            <img
                                className="h-16 w-16 rounded object-cover"
                                src={item.img}
                                alt="profile picture"
                            />
                            <span className="md:ml-5 md:grow">
                                <span className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 block font-semibold text-gray-800 dark:text-gray-200">
                                    {item.label}
                                </span>
                                <span className="mt-2 hidden text-gray-800 dark:text-gray-200 lg:block">
                                    {item.job}
                                </span>
                            </span>
                        </span>
                    </button>
                ))}
            </nav>

            <div className="mt-12 md:mt-16" id="myTabContent">
                <AnimatePresence mode="wait">
                    <motion.div
                        id="europe"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-1"
                        key={selectedTab ? selectedTab.label : 'empty'}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative max-w-[1140px] lg:pb-12">
                            <figure className="relative z-[1] ml-auto mr-20 h-auto w-[50rem] max-w-full rounded-b-lg">
                                <div className="rounded-b-lg bg-white">
                                    <blockquote className="my-4 border-l-4 border-gray-300 p-4 dark:border-gray-500 dark:bg-gray-800">
                                        <p className="text-xl font-medium italic leading-relaxed text-gray-900 dark:text-white">
                                            "{selectedTab.quote}"
                                        </p>
                                    </blockquote>
                                </div>
                            </figure>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
