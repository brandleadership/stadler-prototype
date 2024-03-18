'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import SmallWidth from '../layouts/SmallWidth';

const PortraitGrid = ({ blok }) => (
    <section>
        <SmallWidth>
            <div
                className="grid grid-cols-2 gap-3 mb-8"
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
