'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import ContentWidth from '../layouts/ContentWidth';

const AdvantagesGrid = ({ blok }) => (
    <section className="bg-greySolid-30 py-8 lg:py-24">
        <ContentWidth>
            <div className="col-span-12 mb-8 lg:mb-16">
                <H2>{blok.title}</H2>
            </div>
            <div
                className="col-span-12 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3"
                {...storyblokEditable(blok)}
            >
                {blok.highlights_grid.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok?._uid}
                    />
                ))}
            </div>
        </ContentWidth>
    </section>
);

export default AdvantagesGrid;
