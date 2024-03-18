'use client';

import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { useEffect, useRef } from 'react';
import ButtonPrimary from '../../components/elements/ButtonPrimary';
import H2 from '../../components/typography/H2';
import ContentWidth from '../layouts/ContentWidth';

export default function Career({ blok }) {
    const careerRef = useRef();

    useEffect(() => {
        let careerEl = careerRef.current;

        careerEl?.addEventListener('click', () => {
            console.log('publicationEl', careerEl);
            var _paq = (window._paq = window._paq || []);
            _paq.push([
                'trackEvent',
                'Potenzielle Mitarbeiter',
                'Karierre Block',
            ]);
        });
    });
    return (
        <section {...storyblokEditable(blok)} className="bg-white mt-16 mb-16">
            <ContentWidth>
                <div className="col-span-12 w-full  py-20 bg-primarySolid-50">
                    <div className="mb-4 text-center tracking-tight dark:text-white ">
                        <H2>{blok?.title}</H2>
                    </div>
                    <p className="mb-10 text-center text-base font-normal text-gray-500 dark:text-gray-500 md:max-w-3xl md:mx-auto sm:text-xl">
                        {blok?.text}
                    </p>
                    <div className="flex justify-center">
                        <ButtonPrimary
                            ref={careerRef}
                            buttonText={blok?.cta_button_text}
                            href={blok?.cta_button_link}
                        ></ButtonPrimary>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
