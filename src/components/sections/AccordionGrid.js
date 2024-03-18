'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';

const AccordionGrid = ({ blok }) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <SmallWidth>
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <H2>{blok?.title}</H2>
                    <p className="my-6">{blok?.text}</p>

                    <div id="accordion-flush" {...storyblokEditable(blok)}>
                        {blok?.accordion_wrapper.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
};

export default AccordionGrid;
