'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Link from 'next/link';

const SchienenfahrzeugeItem = ({ blok }) => {
    const optimizeImage = (image) => {
        if (!image || !image.filename) return null;

        let imageSource = image.filename + `/m/1800x1000`;

        if (image.focus) imageSource += `/filters:focal(${image.focus})`;

        return imageSource;
    };

    return (
        <div
            {...storyblokEditable(blok)}
            className="flex flex-col bg-white text-black"
        >
            <img
                className="aspect-[9/5] w-full"
                src={optimizeImage(blok?.image)}
                alt={blok?.image.alt ?? 'Train Type Image'}
            />
            <div className="p-4 lg:p-6 lg:pb-6">
                {blok.tag ? (
                    <small className="mb-2 flex text-greySolid-600">
                        {blok?.tag}
                    </small>
                ) : (
                    ''
                )}
                <div className="flex flex-row items-center justify-between">
                    <H3 styles="max-lg:mb-0 lg:mb-0.5">{blok?.title}</H3>
                    <Link
                        tabIndex="1"
                        className=""
                        href={ButtonUrlRenderer(blok.link)}
                    >
                        <img src="/icons/arrow-blue.svg" alt="Arrow Icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SchienenfahrzeugeItem;
