'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import { useEffect, useRef } from 'react';
import ButtonPrimary from '../../components/elements/ButtonPrimary';
import H2 from '../../components/typography/H2';
import ContentWidth from '../layouts/ContentWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Career({ blok }) {
    const careerRef = useRef();

    useEffect(() => {
        let careerEl = careerRef.current;

        careerEl?.addEventListener('click', () => {
            var _paq = (window._paq = window._paq || []);
            _paq.push([
                'trackEvent',
                'Potenzielle Mitarbeiter',
                'Karierre Block',
            ]);
        });
    });
    return (
        <section {...storyblokEditable(blok)} className="mb-16 mt-16 bg-white">
            <ContentWidth>
                <div className="col-span-12 w-full bg-primarySolid-50 py-12 lg:py-20">
                    <div className="mb-4 text-center tracking-tight">
                        <H2>{blok?.title}</H2>
                    </div>
                    <p className="mb-10 px-4 text-center text-base font-normal text-greySolid-600 sm:text-xl md:mx-auto md:max-w-3xl">
                        {blok?.text}
                    </p>
                    <div className="flex justify-center">
                        <ButtonPrimary
                            buttonText={blok?.cta_button_text}
                            href={ButtonUrlRenderer(blok?.cta_button_link)}
                        ></ButtonPrimary>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
