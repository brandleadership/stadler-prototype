'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../../components/typography/H2';
import ContentWidth from '../layouts/ContentWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Features = ({ blok }) => {
    const pathname = usePathname();
    useEffect(() => {
        const linksForMatomo = document.querySelectorAll(
            '.matomo-tracking-link'
        );

        if (pathname.includes('/schienenfahrzeuge/')) {
            linksForMatomo.forEach((item) => {
                if (item.getAttribute('href').includes('/signalling')) {
                    item?.addEventListener('click', () => {
                        var _paq = (window._paq = window._paq || []);
                        _paq.push([
                            'trackEvent',
                            '4. Signalling und Service Klicks von Produkteseite',
                            `Signalling`,
                        ]);
                    });
                }
                if (item.getAttribute('href').includes('/service')) {
                    item?.addEventListener('click', () => {
                        var _paq = (window._paq = window._paq || []);
                        _paq.push([
                            'trackEvent',
                            '4. Signalling und Service Klicks von Produkteseite',
                            `Service`,
                        ]);
                    });
                }
            });
        }
    });
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white py-8 lg:py-24"
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full bg-white">
                    <div className="mb-10 tracking-tight">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                        <div className="flex flex-col items-center justify-center md:items-start">
                            <div className="relative aspect-[16/9] h-full w-full">
                                <Image
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    src={ButtonUrlRenderer(blok?.image_1)}
                                    alt={
                                        blok?.image_1.filename?.alt ??
                                        'Feature Image'
                                    }
                                    className="object-cover"
                                />
                            </div>
                            <Link
                                tabIndex="1"
                                href={ButtonUrlRenderer(blok?.link_1)}
                                className="matomo-tracking-link mt-4 flex items-center gap-2 text-2xl font-bold"
                            >
                                {blok?.text_1}
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
                                        fill="#005893"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center justify-center md:items-start">
                            <div className="relative aspect-[16/9] w-full">
                                <Image
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    src={ButtonUrlRenderer(blok?.image_2)}
                                    alt={
                                        blok?.image_2?.filename?.alt ??
                                        'Feature Image'
                                    }
                                    className="object-cover"
                                />
                            </div>
                            <Link
                                tabIndex="1"
                                href={ButtonUrlRenderer(blok?.link_2)}
                                className="matomo-tracking-link mt-4 flex items-center gap-2 text-2xl font-bold"
                            >
                                {blok?.text_2}
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
                                        fill="#005893"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default Features;
