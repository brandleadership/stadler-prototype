'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import H3 from '../typography/H3';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const SolutionsGridItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="w-full border border-greySolid-100 bg-white shadow"
        >
            <Link tabIndex="1" href={ButtonUrlRenderer(blok?.link)}>
                <img
                    className="w-full"
                    src={blok?.image.filename}
                    alt={blok?.image.filename.alt ?? `Image for ${blok?.title}`}
                />

                <div className="p-4 lg:p-5">
                    <div className="text-wrap hyphens-auto break-words">
                        <H3 styles="!mb-0 hyphens-auto">{blok?.title}</H3>
                    </div>
                    {blok?.text ? <p>{blok?.text}</p> : ''}
                </div>
            </Link>
        </div>
    );
};

export default SolutionsGridItem;
