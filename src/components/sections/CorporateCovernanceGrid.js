'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import SuperSmallWidth from '../layouts/SuperSmallWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';

const CorporateGorvernanceGrid = ({ blok }) => {
    return (
        <section className="bg-white py-8 lg:py-24">
            <SuperSmallWidth>
                <div className="col-span-12 mx-auto mb-2 text-center lg:mb-4">
                    <H2>{blok?.title}</H2>
                </div>
                <div className="mx-auto mb-8 text-left lg:mb-16">
                    <Text>{blok?.text}</Text>
                </div>
                <div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                    {...storyblokEditable(blok)}
                >
                    {blok?.teaserCards.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok?._uid}
                        />
                    ))}
                </div>
            </SuperSmallWidth>
        </section>
    );
};
export default CorporateGorvernanceGrid;
