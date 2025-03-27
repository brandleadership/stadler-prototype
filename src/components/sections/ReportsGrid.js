'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';
import H2 from '../typography/H2';

const ReportsGrid = ({ blok }) => {
    return (
        <section className="bg-primarySolid-50 py-8 lg:py-24">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="mb-8 text-start">
                        <H2>{blok?.title}</H2>
                        <Text>{blok?.text}</Text>
                    </div>
                    <div
                        {...storyblokEditable(blok)}
                        className="mx-auto grid w-full grid-cols-1 items-stretch justify-center gap-x-10 gap-y-10 lg:grid-cols-3"
                    >
                        {blok.reports_grid.map((nestedBlok) => (
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

export default ReportsGrid;
