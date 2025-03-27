'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { useEffect, useRef } from 'react';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

import H3 from '../typography/H3';
import { ArrowForward } from '../icons/ArrowForward';

const ReportsItem = ({ blok }) => {
    const investorsReference = useRef();

    useEffect(() => {
        let investors = investorsReference.current;

        investors?.addEventListener('click', () => {
            var _paq = (window._paq = window._paq || []);
            const titleArray = blok?.cta_link.url.split('/');
            const title = titleArray[titleArray.length - 1];
            _paq.push([
                'trackEvent',
                '5. Investorenseite Publikationsdownload',
                `${title}`,
            ]);
        });
    });
    return (
        <div
            {...storyblokEditable(blok)}
            className="max-w-full border border-greySolid-100 bg-white shadow lg:max-w-sm"
        >
            <img
                className="max-h-auto aspect-[2/1.2] w-full object-cover"
                src={blok?.image.filename}
                alt={
                    blok?.image.filename.alt ?? 'Investor Relations Publication'
                }
            />
            <div className="p-5">
                <H3>{blok?.title}</H3>
                <a
                    tabIndex="1"
                    ref={investorsReference}
                    href={ButtonUrlRenderer(blok?.cta_link)}
                    target="_blank"
                    className="inline-flex items-center text-center text-sm font-medium"
                    rel="noreferrer"
                >
                    <ArrowForward styles="h-5 w-5 fill-primary" />
                </a>
            </div>
        </div>
    );
};

export default ReportsItem;
