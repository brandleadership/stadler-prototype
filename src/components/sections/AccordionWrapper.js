import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { useState } from 'react';

const AccordionWrapper = ({ blok, years }) => {
    const [isActive, setIsActive] = useState(false);

    const handleAccordionClick = () => {
        setIsActive(!isActive);
    };
    return (
        <div {...storyblokEditable(blok)}>
            <h2 className="mb-2">
                <button
                    type="button"
                    className={`flex justify-between items-center py-5 w-full font-medium text-left ${
                        isActive
                            ? 'text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'
                            : 'text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
                    }`}
                    onClick={handleAccordionClick}
                    aria-expanded={isActive}
                >
                    <span>{blok?.title}</span>
                    <svg
                        data-accordion-icon=""
                        className={`w-6 h-6 ${isActive ? 'rotate-180' : ''} shrink-0`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
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
