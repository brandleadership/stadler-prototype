'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H2 from '../typography/H2';

const AdvantagesGrid = ({ blok }) => (
    <section className="bg-gray-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <H2>{blok.title}</H2>
            </div>
            <div
                className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
                {...storyblokEditable(blok)}
            >
                {blok.highlights_grid.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok?._uid}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default AdvantagesGrid;
