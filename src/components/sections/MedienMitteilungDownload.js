'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

const MedienMitteilungDownload = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="py-8 lg:py-24">
            <ContentWidth>
                <div className="col-span-12">
                    <H2>{blok?.title}</H2>
                    <div>
                        <div className="my-4 text-xl">
                            {blok.download.map((nestedBlok) => (
                                <StoryblokComponent
                                    blok={nestedBlok}
                                    key={nestedBlok?._uid}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </div>
    );
};

export default MedienMitteilungDownload;
