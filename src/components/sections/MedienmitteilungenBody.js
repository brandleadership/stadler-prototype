import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'
import { render } from 'storyblok-rich-text-react-renderer'
import { useState, useEffect } from 'react'

import SuperSmallWidth from '../layouts/SuperSmallWidth';
import ArticleHero from './ArticleHero';

function MedienmitteilungenBody({ blok }) {
    console.log(blok)
    return (
        <section {...storyblokEditable(blok)} className="mb-32">
            <ArticleHero block={blok} />

            <SuperSmallWidth>
                <div className="col-span-12 w-full mb-32">
                    <div className="text-md richtext">{render(blok.text)}</div>
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
