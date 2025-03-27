'use client';
import React, { useRef, useEffect, useState } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import CountUp from 'react-countup';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';

const FactsAndFiguresItem = ({ blok }) => {
    const countUpRef = useRef(null);
    const [shouldStart, setShouldStart] = useState(false);
    const [key, setKey] = useState(0);
    const currentLocale = useCurrentLocale(i18nConfig);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldStart(true);
                        setKey((prevKey) => prevKey + 1);
                    } else {
                        setShouldStart(false);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (countUpRef.current) {
            observer.observe(countUpRef.current);
        }

        return () => {
            if (countUpRef.current) {
                observer.unobserve(countUpRef.current);
            }
        };
    }, []);

    return (
        <dl {...storyblokEditable(blok)}>
            <div className="col-span-1 mx-auto flex max-w-[400px] flex-col gap-y-2">
                <dt className="text-base leading-7 text-black lg:text-xl">
                    {blok?.text}
                </dt>
                <dd
                    ref={countUpRef}
                    className="order-first text-3xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl"
                >
                    <CountUp
                        key={key}
                        start={0}
                        end={blok?.factsandfigures_data}
                        suffix={blok?.suffix ?? ' '}
                        prefix={blok?.prefix ?? ' '}
                        duration={0.8}
                        separator={`${currentLocale === 'en' ? "," : "'"}`}
                        decimals={blok?.decimals ?? 1}
                        decimal="."
                        useEasing={true}
                        useGrouping={true}
                        delay={0}
                    >
                        {({ countUpRef: innerRef }) => (
                            <span ref={innerRef}>
                                {shouldStart ? null : '0'}
                            </span>
                        )}
                    </CountUp>
                </dd>
            </div>
        </dl>
    );
};

export default FactsAndFiguresItem;
