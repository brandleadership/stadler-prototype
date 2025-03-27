'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import FullWidth from '../layouts/FullWidth';

export default function ImageFullWidth({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="px-4 py-0 lg:px-0 lg:py-24"
        >
            <FullWidth>
                <div className="col-span-12">
                    <img
                        className="object-cover lg:aspect-[2/1]"
                        width={'100%'}
                        loading="lazy"
                        src={blok?.image.filename}
                        alt={blok?.image.filename?.alt ?? 'Hero product image'}
                    />
                </div>
            </FullWidth>
        </section>
    );
}
