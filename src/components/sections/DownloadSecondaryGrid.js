'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';

const DownloadSecondaryGrid = ({ blok }) => {
    return (
        <section className="bg-white py-5 lg:py-12">
            <ContentWidth>
                <div className="col-span-12 max-w-full flex flex-col justify-left">
                    <ul className="mb-8" {...storyblokEditable(blok)}>
                        {blok?.download_grid.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </ul>
                </div>
            </ContentWidth>
        </section>
    );
};
export default DownloadSecondaryGrid;
