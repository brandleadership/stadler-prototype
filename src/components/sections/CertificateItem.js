'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

function CertificateItem({ blok }) {
    return (
        <a
            tabIndex="1"
            {...storyblokEditable(blok)}
            className="ml-4 text-primary"
            href={ButtonUrlRenderer(blok?.button_link)}
            target="_blank"
            rel="noreferrer"
        >
            {blok?.button_text}
        </a>
    );
}

export default CertificateItem;
