'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H3 from '../typography/H3';

const AddressWrapper = ({ blok }) => (
    <section {...storyblokEditable(blok)}>
        <H3>{blok?.title}</H3>
        <div className="mb-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:mb-16">
            {blok?.address_card.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok?._uid} />
            ))}
        </div>
    </section>
);

export default AddressWrapper;
