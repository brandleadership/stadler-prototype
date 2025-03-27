import ContentWidth from '../layouts/ContentWidth';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';

import { useState, useEffect } from 'react';
import H2 from '../typography/H2';
import H3 from '../typography/H3';
import Text from '../typography/Text';
import ButtonPrimary from '../../components/elements/ButtonPrimary';
import DateFormatter from '../helpers/DateFormatter';
import TrimText from '../helpers/TrimText';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';

function NewsTeaser({ blok }) {
    const [articlesCategory, setArticlesCategory] = useState([]);
    const currentLocale = useCurrentLocale(i18nConfig) || 'en';
    const apiURL =
        currentLocale == 'en'
            ? 'media/media-releases/'
            : 'medien/medienmitteilungen/';
    const categoryURL =
        currentLocale == 'en' ? '/media-releases/' : '/medienmitteilungen/';

    useEffect(() => {
        const getArticles = async () => {
            const categories = blok.categories.join(',');

            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: apiURL,
                is_startpage: false,
                resolve_relations: 'medienmitteilungen.categories',
                'filter_query[categories][any_in_array]': categories,
                sort_by: 'content.date:desc',
                per_page: 4,
                language: currentLocale,
            });

            setArticlesCategory(() =>
                data.stories.map((article) => {
                    article.content.slug = article.slug;
                    return article;
                })
            );
        };
        getArticles();
    }, []);

    return (
        <section {...storyblokEditable(blok)} className="py-8 lg:py-24">
            <ContentWidth>
                <div className="col-span-12 w-full">
                    <H2>{blok.title}</H2>
                </div>
                <div className="col-span-12 w-full">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {articlesCategory[0] &&
                            articlesCategory.map((article) => (
                                <a
                                    tabIndex="1"
                                    href={`/${article.full_slug}`}
                                    className="group mb-6 transition-all"
                                    key={article.uuid}
                                >
                                    <div className="flex h-52 items-center justify-center overflow-hidden">
                                        <img
                                            src={
                                                article.content.image
                                                    ?.filename ?? '/logo.svg'
                                            }
                                            className={`${article.content?.image?.filename ? 'h-full w-full' : 'h-auto w-[90%]'} object-cover transition-all group-hover:scale-110`}
                                            alt={
                                                article.content.image?.filename
                                                    ?.alt ?? 'NewsTeaser image'
                                            }
                                        />
                                    </div>
                                    <div className="mb-1 mt-4 flex flex-wrap">
                                        {article.content?.categories?.map(
                                            (category, index) =>
                                                category.full_slug.includes(
                                                    categoryURL
                                                ) && (
                                                    <span
                                                        key={index}
                                                        className="mb-2 mr-4 inline whitespace-nowrap border border-greySolid-400 px-2 py-1 text-xs text-greySolid-600 last-of-type:mr-0"
                                                    >
                                                        {
                                                            category.content
                                                                .category
                                                        }
                                                    </span>
                                                )
                                        )}
                                    </div>
                                    <div className="mb-1 text-sm">
                                        <Text>
                                            {DateFormatter(
                                                article.content.date
                                            )}
                                        </Text>
                                    </div>
                                    <div className="mb-1 text-sm transition-all group-hover:text-primary">
                                        <H3>{article.content.title}</H3>
                                    </div>
                                    <div className="texl-lg mb-3">
                                        <Text>
                                            {TrimText(article.content.lead)}
                                        </Text>
                                    </div>
                                </a>
                            ))}
                    </div>
                </div>
                <div className="col-span-12 w-full">
                    <ButtonPrimary
                        buttonText={blok?.ctag_all_news}
                        href={ButtonUrlRenderer(blok?.CTA_Show_All)}
                    ></ButtonPrimary>
                </div>
            </ContentWidth>
        </section>
    );
}

export default NewsTeaser;
