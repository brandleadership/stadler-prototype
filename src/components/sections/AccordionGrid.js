import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';

const AccordionGrid = ({ blok }) => {
    return (
        <section
            id={blok.anchor}
            {...storyblokEditable(blok)}
            className="bg-white py-8 lg:py-24 scroll-mt-14"
        >
            <SmallWidth>
                <div className="mx-auto max-w-screen-xl">
                    <H2>{blok?.title}</H2>
                    <p className="my-6 text-base lg:text-xl">{blok?.text}</p>
                    <div id="accordion-flush">
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
