'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { useState } from 'react';
import { MailIcon } from '../icons/MailIcon';
import { PhoneIcon } from '../icons/PhoneIcon';
import { PinIcon } from '../icons/PinIcon';
import RichTextRenderer from '../helpers/RichTextRenderer';
import { ChevronDown } from '../icons/ChevronDown';

const AccordionLocations = ({ blok }) => {
    const [isActive, setIsActive] = useState(false);
    const handleAccordionClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="col-span-12" {...storyblokEditable(blok)}>
            <div
                tabIndex="1"
                onClick={handleAccordionClick}
                className="cursor-pointer border-b border-greySolid-100 bg-white text-greySolid-800"
            >
                <div className="flex w-full flex-col py-5 font-medium text-greySolid-600 rtl:text-right">
                    <div className="flex">
                        <p className="mb-3 mr-4 inline-flex items-center bg-primaryTrans-100 px-2 py-1 text-xs font-light tracking-tight text-greySolid-800">
                            {blok.tag_division.map((country, index) => (
                                <span key={index}>
                                    {country?.content?.category}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="">
                            <div className="flex flex-row items-center">
                                <div
                                    className={`mr-6 flex w-full items-center justify-between text-left text-base font-medium lg:text-xl ${
                                        isActive ? 'text-primary' : 'text-black'
                                    }`}
                                >
                                    <span>{blok.title}</span>
                                </div>
                            </div>
                            <div className="hidden w-full flex-wrap items-start lg:flex-nowrap">
                                {blok.tag_business_area.map(
                                    (category, index) => (
                                        <span key={index}>
                                            {category.content.category}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                tabIndex="1"
                                type="button"
                                className={`flex w-full items-center justify-between text-left font-medium ${
                                    isActive
                                        ? 'bg-white text-greySolid-800'
                                        : 'text-greySolid-600'
                                }`}
                                onClick={handleAccordionClick}
                                aria-expanded={isActive}
                            >
                                <div
                                    className={`${
                                        isActive ? 'rotate-180' : 'rotate-0'
                                    } `}
                                >
                                    <ChevronDown
                                        styles={
                                            isActive
                                                ? 'fill-primary'
                                                : 'fill-black'
                                        }
                                    />{' '}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {isActive && (
                    <div className="border-t border-greySolid-100 px-2 py-5 lg:p-5">
                        <div className="flex flex-col items-start justify-start lg:flex-row">
                            <div className="mb-4 w-9/12 lg:mb-0">
                                <div className="mb-4 flex items-center justify-start">
                                    <PhoneIcon color="#000" />
                                    <span className="ml-4">
                                        {blok?.phonenumber}
                                    </span>
                                </div>

                                <div className="mb-4 flex items-center justify-start">
                                    <MailIcon className="fill-blueDark" />
                                    <span className="max-w-[calc(100%-48px)] ml-4 text-xs sm:text-sm md:text-base">{blok?.email}</span>
                                </div>

                                <div className="mb-2 flex items-center justify-start text-primary">
                                    <PinIcon />
                                    <a
                                        target={
                                            blok.link_google_maps?.target ??
                                            '_blank'
                                        }
                                        tabIndex="1"
                                        className="cursor-pointer"
                                        href={blok?.link_google_maps?.url}
                                    >
                                        <span className="ml-2">
                                            {blok?.text_google_maps}
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {blok?.image?.filename && (
                                <img
                                    src={blok?.image?.filename}
                                    className="flex md:w-3/12"
                                    alt={
                                        blok?.image?.alt ??
                                        'Stadler Office image'
                                    }
                                />
                            )}
                        </div>
                        <div className="mb-2 pt-8 text-black">
                            <RichTextRenderer text={blok?.text} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccordionLocations;
