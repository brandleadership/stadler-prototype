'use client';
import ContentWidth from '../layouts/ContentWidth';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';

import { useState, useEffect } from 'react';
import H1 from '../typography/H1';
import Text from '../typography/Text';
import DateFormatter from '../helpers/DateFormatter';
import TrimText from '../helpers/TrimText';
import H4 from '../typography/H4';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';

function AdHocMedienmitteilungen({ blok }) {
    const [articles, setArticles] = useState([]);
    const currentLocale = useCurrentLocale(i18nConfig) || 'en';
    const apiURL =
        currentLocale == 'en'
            ? 'media/media-releases/'
            : 'medien/medienmitteilungen/';

    useEffect(() => {
        const getArticles = async () => {
            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: apiURL,
                is_startpage: false,
                resolve_relations: 'medienmitteilungen.categories',
                sort_by: 'content.date:desc',
                per_page: 4,
                language: currentLocale,
            });

            setArticles(() =>
                data.stories.map((medienmitteilungen) => {
                    medienmitteilungen.content.slug = medienmitteilungen.slug;
                    return medienmitteilungen;
                })
            );
        };
        getArticles();
    }, []);

    return (
        <ContentWidth {...storyblokEditable(blok)}>
            <div className="col-span-12 mt-32 w-full">
                <H1>{blok.title}</H1>
            </div>
            <div className="col-span-12 w-full">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {articles[0] &&
                        articles.map((article) => (
                            <a
                                tabIndex="1"
                                href={`/${article.full_slug}`}
                                className="group mb-6 transition-all"
                                key={article.uuid}
                            >
                                <div className="flex h-52 items-center justify-center overflow-hidden">
                                    <img
                                        src={
                                            article.content?.image?.filename ??
                                            '/logo.svg'
                                        }
                                        className={`${article.content?.image?.filename ? 'h-full w-full' : 'h-auto w-[90%]'} object-cover transition-all group-hover:scale-110`}
                                        alt={
                                            article.content.image?.filename
                                                ?.alt ??
                                            'Article Medienmitteilungen image'
                                        }
                                    />
                                </div>
                                <div className="mb-1 mt-4 flex flex-wrap">
                                    {article.content.categories.map(
                                        (category, index) =>
                                            category.full_slug.includes(
                                                'categories/medienmitteilungen'
                                            ) && (
                                                <span
                                                    key={index}
                                                    className="mb-2 mr-4 inline whitespace-nowrap border border-greySolid-400 px-2 py-1 text-xs text-greySolid-600 last-of-type:mr-0"
                                                >
                                                    {category.content.category}
                                                </span>
                                            )
                                    )}
                                </div>
                                <div className="mb-1 text-sm text-greySolid-600">
                                    <Text>
                                        {DateFormatter(article.content.date)}
                                    </Text>
                                </div>
                                <div className="transition-all group-hover:text-primary">
                                    <H4>{article.content.title}</H4>
                                </div>
                                <div className="texl-lg mb-3 text-greySolid-600">
                                    <Text>
                                        {TrimText(article.content.lead)}
                                    </Text>
                                </div>
                            </a>
                        ))}
                </div>
            </div>
        </ContentWidth>
    );
}

export default AdHocMedienmitteilungen;
