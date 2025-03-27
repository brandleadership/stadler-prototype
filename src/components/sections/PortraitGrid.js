'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import SmallWidth from '../layouts/SmallWidth';

const PortraitGrid = ({ blok }) => (
    <section>
        <SmallWidth>
            <div
                className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2"
                {...storyblokEditable(blok)}
            >
                {blok.Portrait.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok?._uid}
                    />
                ))}
            </div>
        </SmallWidth>
    </section>
);

export default PortraitGrid;
