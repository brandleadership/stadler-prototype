'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';

const PortraitItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="mb-4">
            <img
                className="h-64 w-full object-cover object-top lg:h-96"
                src={blok?.image.filename}
                alt={blok?.image.filename?.alt ?? 'Portrait image'}
            />
            <div className="mt-4 space-y-2">
                <div>
                    <H4>{blok?.name}</H4>
                    <p className="text-base font-medium text-greySolid-600">
                        {blok?.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default PortraitItem;
