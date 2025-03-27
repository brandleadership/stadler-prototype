'use client';
import LanguageSwitcher from '../elements/LanguageSwitcher';
import React from 'react';
import Link from 'next/link';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function TopNav({ blok, translatedSlugs }) {
    const navigation = {
        topNav: [
            { name: blok.media_link_text, href: blok.media_link },
            { name: blok.suppliers_text, href: blok.suppliers_link },
            { name: blok.downloads_text, href: blok.downloads_link },
        ],
    };
    return (
        <div className="">
            <div className="flex flex-col gap-2 pt-5 sm:justify-between lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-4">
                <ul
                    role="list"
                    className="flex flex-col justify-between gap-4 lg:flex lg:flex-row lg:justify-end lg:gap-8"
                >
                    {navigation.topNav.map((item) => (
                        <li key={item.name}>
                            <Link
                                tabIndex="1"
                                onClick={() => {
                                    // closeUnternehmenSubmenu();
                                    // closeSolutionsSubmenu();
                                    /* closeMainMenu(); */
                                    /* closeMobileNav(); */
                                }}
                                href={ButtonUrlRenderer(item.href)}
                                className="text-base font-medium leading-6 text-primarySolid-800 hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <LanguageSwitcher translatedSlugs={translatedSlugs} />
            </div>
        </div>
    );
}
