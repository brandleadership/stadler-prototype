import React from 'react';
import Link from 'next/link';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Logo({ blok }) {
    return (
        <Link tabIndex="1" href={ButtonUrlRenderer(blok.LinkLogo)}>
            <img
                src={blok.Logo.filename}
                className="h-4 lg:h-6"
                alt={blok.Logo.filename.alt ?? 'Stadler Logo'}
            />
        </Link>
    );
}
