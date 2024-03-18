import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import ContentWidth from '../layouts/ContentWidth';

const FactsAndFiguresGrid = ({ blok }) => {
    return (
        <section className="py-24 bg-primarySolid-50">
            <ContentWidth>
                <div className="col-span-12 max-w-full mx-auto">
                    <H2 styles="text-center ">{blok.title}</H2>
                    <Text styles="text-center mb-4">{blok.text}</Text>
                    <div className="bg-secondaryBgcGray py-8 sm:py-10">
                        <div className="mx-auto max-w-full">
                            <dl
                                className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3"
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
