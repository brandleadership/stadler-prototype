'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SmallWidth from '../layouts/SmallWidth';

const Testimonials = ({ blok }) => {
    const [selectedTab, setSelectedTab] = useState(blok.testimonial[0]);
    function optimizeImage(image) {
        if (!image.filename) return null;

        let imageSource = image.filename + `/m/332x250`;

        if (image.focus) imageSource += `/filters:focal(${image.focus})`;

        return imageSource;
    }

    return (
        <section>
            <SmallWidth>
                <div className="col-span-12 px-0 py-10 sm:px-6 lg:px-0 lg:py-14">
                    <nav
                        className="mx-auto grid max-w-6xl grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-start"
                        aria-label="Tabs"
                        id="myTab"
                        data-tabs-toggle="#myTabContent"
                        role="tablist"
                    >
                        {blok.testimonial.map((item) => (
                            <button
                                tabIndex="1"
                                key={item.name}
                                onClick={() => setSelectedTab(item)}
                                className={`${
                                    selectedTab.name == item.name
                                        ? 'bg-greySolid-100'
                                        : ' '
                                } p-3 text-center md:p-5 md:text-left`}
                                type="button"
                                id="tabs-with-card-item-1"
                                data-hs-tab="#tabs-with-card-1"
                                aria-controls="tabs-with-card-1"
                                aria-selected="true"
                                role="tab"
                                data-tabs-target="#europe"
                            >
                                <span className="flex items-center justify-around lg:flex-col">
                                    <img
                                        className="aspect-[4/3] w-1/3 object-cover lg:w-full"
                                        src={optimizeImage(item?.image)}
                                        alt={
                                            item?.image?.filename?.alt ??
                                            'profile picture'
                                        }
                                    />
                                    <span className="ml-4 flex grow flex-col justify-start lg:ml-0 lg:mt-4">
                                        <span className="hs-tab-active:text-blue-600 flex font-semibold text-greySolid-800 md:max-w-60 lg:justify-center">
                                            {item.name}
                                        </span>
                                        <span className="mt-2 flex text-greySolid-800 md:max-w-60 lg:block lg:justify-center">
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
                                key={selectedTab ? selectedTab.name : 'empty'}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative max-w-[1140px] lg:pb-12">
                                    <figure className="relative z-[1] mx-auto ml-auto h-auto max-w-full rounded-b-lg lg:w-8/12">
                                        <div className="rounded-b-lg bg-white">
                                            <blockquote className="my-2 border-l-4 border-greySolid-300 p-4">
                                                <p className="break-words text-xl font-medium italic leading-relaxed text-greySolid-800">
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
            </SmallWidth>
        </section>
    );
};

export default Testimonials;
