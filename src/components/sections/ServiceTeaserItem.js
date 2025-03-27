'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const ServiceTeaserItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="mx-auto border border-greySolid-100 bg-white shadow"
        >
            <a tabIndex="1" href={ButtonUrlRenderer(blok?.link)}>
                {blok?.Icon.filename ? (
                    <img
                        className="w-24 pl-5 pt-5"
                        src={blok?.Icon.filename}
                        alt={blok?.Icon.filename.alt ?? blok?.title}
                    />
                ) : (
                    ''
                )}
                <div className="p-5">
                    <H3>{blok?.title}</H3>
                    <p>{blok?.text}</p>
                </div>
            </a>
        </div>
    );
};

export default ServiceTeaserItem;
