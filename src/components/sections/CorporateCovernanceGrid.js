import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import SuperSmallWidth from '../layouts/SuperSmallWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';

const CorporateGorvernanceGrid = ({ blok }) => {
    return (
        <section className="bg-white dark:bg-gray-900 py-24">
            <SuperSmallWidth>
                <div className="">
                    <div className="mx-auto text-center mb-2 lg:mb-4">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="mx-auto text-left mb-8 lg:mb-16">
                        <Text>{blok?.text}</Text>
                    </div>
                    <div
                        className="flex lg:flex-row gap-8 xl:flex-nowrap flex-wrap flex-col justify-center items-center"
                        {...storyblokEditable(blok)}
                    >
                        {blok?.teaserCards.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </div>
                </div>
            </SuperSmallWidth>
        </section>
    );
};
export default CorporateGorvernanceGrid;
