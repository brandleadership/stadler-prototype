'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

const SolutionsGrid = ({ blok }) => {
    return (
        <section className="bg-white py-8 antialiased lg:py-24">
            <ContentWidth>
                <div className="col-span-12">
                    <H2>{blok?.title}</H2>
                    <div
                        {...storyblokEditable(blok)}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                    >
                        {blok.solutions_grid.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default SolutionsGrid;
