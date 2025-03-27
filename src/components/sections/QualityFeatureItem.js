'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';
import Text from '../typography/Text';

const QualityFeatureItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-start lg:h-24 lg:w-24">
                <img
                    alt={blok?.image.filename.alt ?? `Image for ${blok?.title}`}
                    src={blok?.image.filename}
                />
            </div>
            <div className="text-white">
                <H4>{blok?.title}</H4>
                <div className="mt-2 text-white">
                    <Text styles="">{blok?.text}</Text>
                </div>
            </div>
        </div>
    </div>
);

export default QualityFeatureItem;
