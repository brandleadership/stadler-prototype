'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';

const ServiceTeasersGrid = ({ blok }) => {
    return (
        <section className="bg-white dark:bg-gray-900 antialiased py-24">
            <ContentWidth>
                <div className="col-span-12 ">
                    <H2>{blok?.title}</H2>
                    <Text styles="mb-6">{blok?.text}</Text>

                    <div
                        {...storyblokEditable(blok)}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                    >
                        {blok.service_grid.map((nestedBlok) => (
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

export default ServiceTeasersGrid;
