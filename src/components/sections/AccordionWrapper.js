'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { useState } from 'react';
import { ChevronDown } from '../icons/ChevronDown';

const AccordionWrapper = ({ blok }) => {
    const [isActive, setIsActive] = useState(false);

    const handleAccordionClick = () => {
        setIsActive(!isActive);
    };
    return (
        <div {...storyblokEditable(blok)}>
            <h2 className="mb-2">
                <button
                    tabIndex="1"
                    type="button"
                    className={`flex w-full items-center justify-between border-b border-greySolid-100 py-5 text-left text-base font-medium lg:text-xl ${
                        isActive ? 'text-primary' : 'text-black'
                    }`}
                    onClick={handleAccordionClick}
                    aria-expanded={isActive}
                >
                    <span>{blok?.title}</span>
                    <div className={`${isActive ? 'rotate-180' : 'rotate-0'} `}>
                        <ChevronDown
                            styles={isActive ? 'fill-primary' : 'fill-black'}
                        />
                    </div>
                </button>
            </h2>
            <div className={`${isActive ? '' : 'hidden'}`}>
                <div className="">
                    <div id="accordion-flush" {...storyblokEditable(blok)}>
                        {blok.accordion_item.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionWrapper;
