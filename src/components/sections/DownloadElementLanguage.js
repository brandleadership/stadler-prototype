'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

function DownloadElementLanguage({ blok }) {
    return (
        <a
            tabIndex="1"
            {...storyblokEditable(blok)}
            className="mr-4 font-medium text-primary min-w-7"
            target={blok.buttonLink?.target}
            href={ButtonUrlRenderer(blok?.buttonLink)}
        >
            {blok?.buttonText}
        </a>
    );
}

export default DownloadElementLanguage;
