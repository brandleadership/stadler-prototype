'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const AccordionWrapperBlueLine = ({ blok }) => {
    return (
        <div className="col-span-12 max-w-full">
            <div className="mt-6" {...storyblokEditable(blok)}>
                <p className="text-base font-semibold lg:text-lg">
                    {blok?.title}
                </p>
            </div>

            {blok.accordion_item.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok?._uid} />
            ))}
        </div>
    );
};

export default AccordionWrapperBlueLine;
