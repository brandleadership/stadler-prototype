import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import React, { useState, useEffect } from 'react';

const HistoryWrapper = ({ blok, index }) => {
    const [showCards, setShowCards] = useState(index === 0);

    useEffect(() => {
        if (index !== 0) {
            setShowCards(false);
        }
    }, [index]);

    const toggleCards = () => {
        setShowCards((prevShowCards) => !prevShowCards);
    };

    return (
        <div className="mb-6 ms-8">
            <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -start-1.5 border border-white rounded-full dark:border-gray-900 dark:bg-gray-700"></div>
            <span
                onClick={toggleCards}
                className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 dark:bg-primary-900 dark:text-primary-300 cursor-pointer"
            >
                {blok?.year}
            </span>
            {showCards && (
                <div
                    {...storyblokEditable(blok)}
                    className="col-span-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12"
                >
                    {blok?.history_section_wrapper.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok?._uid}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HistoryWrapper;
