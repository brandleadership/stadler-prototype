'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import ContentWidth from '../layouts/ContentWidth';

const FactsAndFiguresGrid = ({ blok }) => {
    return (
        <section className="bg-primarySolid-50 py-8 lg:py-24">
            <ContentWidth>
                <div className="col-span-12 mx-auto max-w-full">
                    <H2 styles="text-center">{blok.title}</H2>
                    <Text styles="text-center mb-4">{blok.text}</Text>
                    <div className="bg-secondaryBgcGray pt-8 sm:pt-10">
                        <div className="mx-auto max-w-full">
                            <dl
                                className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-3 lg:gap-y-16"
                                {...storyblokEditable(blok)}
                            >
                                {blok?.facts_figures_grid.map((nestedBlok) => (
                                    <StoryblokComponent
                                        blok={nestedBlok}
                                        key={nestedBlok?._uid}
                                    />
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default FactsAndFiguresGrid;
