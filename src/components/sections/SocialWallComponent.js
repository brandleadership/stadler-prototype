'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import { useEffect, useRef } from 'react';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';

const SocialWallComponent = ({ blok }) => {
    const wallRef = useRef();
    const READ_MORE_BUTTON = {
        en: '...Read more',
        de: '...Mehr lesen',
    }
    const currentLocale = useCurrentLocale(i18nConfig);
    useEffect(() => {
        const script = document.createElement('script');

        script.src =
            'https://www.juicer.io/embed/stadler_rail/embed-code.js?per=3&truncate=300&gutter=4';
        script.async = true;

        wallRef.current?.appendChild(script);

        return () => {
            wallRef.current?.removeChild(script);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('juicer:feedLoaded', () => {
            const readMoreButttons = document.querySelectorAll('.j-read-more');
            if (readMoreButttons.length) {
                readMoreButttons.forEach((button) => {
                    button.innerText = `${READ_MORE_BUTTON[`${currentLocale}`]}`;
                });
            }
        });
    }, [currentLocale]);
    return (
        <section
            {...storyblokEditable(blok)}
            className="py-8 antialiased lg:py-24"
        >
            <ContentWidth>
                <div className="col-span-12">
                    <H2>{blok?.title}</H2>
                    <div ref={wallRef} />
                    {/* <iframe
                        src="https://www.juicer.io/api/feeds/stadler_rail/iframe?per=3"
                        frameBorder="0"
                        width="100%"
                        height="460"
                        style={{ display: 'block' }}
                        // sandbox="allow-scripts allow-same-origin" 
                    ></iframe> */}
                </div>
            </ContentWidth>
        </section>
    );
};

export default SocialWallComponent;
