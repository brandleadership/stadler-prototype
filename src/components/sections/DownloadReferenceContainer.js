import H2 from '@/components/elements/typography/H2';
import XSmallWidth from '@/components/layouts/XSmallWidth';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

export default function DownloadReferenceContainer({ blok }) {
    return (
        <div className="py-8 xl:py-20" {...storyblokEditable(blok)}>
            <XSmallWidth>
                <H2>{blok.titel}</H2>
                <div className="mt-8 grid grid-cols-2 gap-x-2">
                    {blok?.download_referenz_items?.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok?._uid}
                        />
                    ))}
                </div>
            </XSmallWidth>
        </div>
    );
}
