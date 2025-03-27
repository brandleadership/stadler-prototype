'use client';
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
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-greySolid-100 "></div>
            <span
                tabIndex="1"
                onClick={toggleCards}
                className="text-primary-800  mb-4 inline-flex cursor-pointer items-center bg-primarySolid-200 px-2.5 py-0.5 text-xs font-medium"
            >
                {blok?.year}
            </span>
            {showCards && (
                <div
                    {...storyblokEditable(blok)}
                    className="col-span-12 grid grid-cols-1 gap-y-12 md:grid-cols-2 xl:grid-cols-3"
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
