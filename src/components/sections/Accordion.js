'use client';
import { useState } from 'react';
import SmallWidth from '../../components/layouts/SmallWidth';
import H2 from '../../components/typography/H2';

const Accordion = ({ faqs, mainTitle }) => {
    const [activeAccordion, setActiveAccordion] =
        (useState < number) | (null > null);

    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <SmallWidth>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                    <H2>{mainTitle}</H2>
                    <p className="my-6 text-base lg:text-xl">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <div className="">
                        <div id="accordion-flush">
                            {faqs.map((item, index) => (
                                <div key={index}>
                                    <h2
                                        id={`accordion-flush-heading-${index}`}
                                        className="mb-2"
                                    >
                                        <button
                                            type="button"
                                            className={`flex w-full items-center justify-between py-5 text-left font-medium ${
                                                activeAccordion === index
                                                    ? 'border-b border-gray-200 bg-white text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white'
                                                    : 'border-b border-gray-200 text-black dark:border-gray-700 dark:text-gray-400'
                                            }`}
                                            onClick={() =>
                                                handleAccordionClick(index)
                                            }
                                            aria-expanded={
                                                activeAccordion === index
                                            }
                                            aria-controls={`accordion-flush-body-${index}`}
                                        >
                                            <span>{item?.title}</span>
                                            <svg
                                                data-accordion-icon=""
                                                className={`h-6 w-6 ${
                                                    activeAccordion === index
                                                        ? 'rotate-180'
                                                        : ''
                                                } shrink-0`}
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
                                    <div
                                        id={`accordion-flush-body-${index}`}
                                        className={`${activeAccordion === index ? '' : 'hidden'}`}
                                        aria-labelledby={`accordion-flush-heading-${index}`}
                                    >
                                        <div className="border-b border-gray-200 py-5 dark:border-gray-700">
                                            <p className="mb-2 text-black dark:text-gray-400">
                                                {item?.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
};

export default Accordion;
