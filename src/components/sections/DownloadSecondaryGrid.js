'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H3 from '../../components/typography/H3';

const DownloadSecondaryGrid = ({ blok }) => {
    return (
        <section className="bg-white py-5 lg:py-12">
            <ContentWidth>
                <div className="justify-left col-span-12 flex max-w-full flex-col">
                    <H3>{blok.title}</H3>
                    <div className="mb-8" {...storyblokEditable(blok)}>
                        {blok?.download_grid?.map((nestedBlok) => (
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
export default DownloadSecondaryGrid;
