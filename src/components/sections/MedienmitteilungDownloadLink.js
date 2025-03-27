'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

function MedienmitteilungDownloadLink({ blok }) {
    return (
        <a
            tabIndex="1"
            {...storyblokEditable(blok)}
            target="_blank"
            rel="noreferrer"
            className="mr-4 w-6 text-primary"
            href={ButtonUrlRenderer(blok?.download_link)}
        >
            {blok?.download_title}
        </a>
    );
}

export default MedienmitteilungDownloadLink;
