import React from 'react';
import Link from 'next/link';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Logo({ blok }) {
    return (
        <Link href={ButtonUrlRenderer(blok.LinkLogo)}>
            <img
                src={blok.Logo.filename}
                className="h-4 lg:h-6"
                alt="Stadler Logo"
            />
        </Link>
    );
}
