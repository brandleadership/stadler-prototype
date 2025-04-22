'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import { useEffect, useRef } from 'react';
import ButtonPrimary from '../../components/elements/ButtonPrimary';
import H2 from '../../components/typography/H2';
import ContentWidth from '../layouts/ContentWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Career({ blok }) {
    const careerRef = useRef();
    const BackgroundMap = {
        primary_50: '#F2F7FA',
        primary_100: '#E5EEF4',
        primary_200: '#CCDEE9',
        primary_300: '#B3CDDF',
        primary_400: '#99BCD4',
        primary_600: '#669BBE',
        primary_800: '#3379A9',
        blue_mid: '#c9d7dd',
        blue_mid_50: '#f8fafb',
        blue_bright: '#99e1f3',
        blue_bright_600: '#66d3ee',
        blue_bright_full: '#00b5e2',
        grey_30: '#F7F7F7',
        grey_50: '#F2F2F2',
    };

    const BackgroundClass =
        BackgroundMap[blok?.background_color || '#F2F7FA'] || '#F2F7FA';

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
                <div
                    style={{ backgroundColor: BackgroundClass }}
                    className={`col-span-12 w-full py-12 lg:py-20`}
                >
                    <div className="mb-4 text-center tracking-tight">
                        <H2>{blok?.title}</H2>
                    </div>
                    {blok?.text && (
                        <p className="mb-10 px-4 text-center text-base font-normal text-greySolid-600 sm:text-xl md:mx-auto md:max-w-3xl">
                            {blok?.text}
                        </p>
                    )}
                    {blok?.cta_button_text && (
                        <div className="flex justify-center">
                            <ButtonPrimary
                                buttonText={blok?.cta_button_text}
                                href={ButtonUrlRenderer(blok?.cta_button_link)}
                            ></ButtonPrimary>
                        </div>
                    )}
                </div>
            </ContentWidth>
        </section>
    );
}
