'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import RichTextRenderer from '../helpers/RichTextRenderer';

import SuperSmallWidth from '../layouts/SuperSmallWidth';
import ArticleHero from './ArticleHero';

function MedienmitteilungenBody({ blok }) {
    return (
        <section {...storyblokEditable(blok)} className="mb-32">
            <ArticleHero block={blok} />

            <SuperSmallWidth>
                <div className="col-span-12 mb-32 w-full">
                    <div className="text-md richtext">
                        <RichTextRenderer text={blok.text} />
                    </div>
                </div>
            </SuperSmallWidth>

            {blok.downloads_block.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
            {blok.contact_block.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
            {blok.medienmitteilungen_block.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </section>
    );
}

export default MedienmitteilungenBody;
