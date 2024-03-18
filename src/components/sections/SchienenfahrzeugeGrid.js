'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';

const SchienenfahrzeugeGrid = ({ blok }) => {
    return (
        <section className="pb-24">
            <ContentWidth>
                <div className="col-span-6 pb-12">
                    <H2 styles="text-white">{blok?.title}</H2>
                    <Text styles="mt-4 text-xl font-normal text-gray-800 text-white">
                        {blok?.text}
                    </Text>
                </div>
                <div
                    {...storyblokEditable(blok)}
                    className="grid col-span-12 lg:grid-cols-4 lg:grid-rows gap-2"
                >
                    {blok.schienenfahrzeuge_card.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok?._uid}
                        />
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
};

export default SchienenfahrzeugeGrid;
