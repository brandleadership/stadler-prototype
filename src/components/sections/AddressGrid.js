'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import ContentWidth from '../layouts/ContentWidth';

const AddressGrid = ({ blok }) => (
    <section {...storyblokEditable(blok)}>
        <ContentWidth>
            <div className="col-span-12 mx-auto w-full py-8 lg:py-16">
                <div className="text-left">
                    <H2>{blok?.title}</H2>
                </div>
                {blok?.address_wrapper.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok?._uid}
                    />
                ))}
            </div>
        </ContentWidth>
    </section>
);

export default AddressGrid;
