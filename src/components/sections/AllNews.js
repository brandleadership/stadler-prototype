'use client';
import ContentWidth from '../layouts/ContentWidth';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import DateFormatter from '../helpers/DateFormatter';
import TrimText from '../helpers/TrimText';
import { useState, useEffect } from 'react';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import H4 from '../typography/H4';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';
import { SearchIcon } from '../icons/SearchIcon';

const filters = { country: '', category: '', product: '', year: '' };

function AllNews({ blok }) {
    const [articles, setArticles] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(filters);
    const [search, setSearch] = useState('');
    const currentLocale = useCurrentLocale(i18nConfig) || 'en';

    const apiRequest = {
        version: 'published',
        starts_with: 'medien/news/',
        is_startpage: false,
        resolve_relations: 'news.categories',
        sort_by: 'content.date:desc',
        language: currentLocale,
    };
    const onSearchChange = (e) => {
        setSearch(e.target.value);
        const categories = [];
        Object.values(selectedOptions).forEach((value) => {
            value.length && categories.push(value);
        });
        const filterSearchParameters = {};
        if (categories.length > 0) {
            filterSearchParameters['filter_query[categories][any_in_array]'] =
                categories.join(',');
        }
        if (e.target.value.length > 2) {
            filterSearchParameters['search_term'] = e.target.value;
            getArticles(filterSearchParameters);
        } else {
            getArticles(filterSearchParameters);
        }
    };
    const getArticles = async (filterSearchRequest = {}) => {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories`, {
            ...apiRequest,
            ...filterSearchRequest,
        });

        setArticles(() =>
            data.stories.map((article) => {
                article.content.slug = article.slug;
                return article;
            })
        );
    };
    useEffect(() => {
        getArticles();
    }, []);

    const filterArticles = (e, typeFilter) => {
        const newSelectedOptions = { ...selectedOptions };
        newSelectedOptions[typeFilter] = e.target.value;
        setSelectedOptions(newSelectedOptions);
        const categories = [];
        Object.values(newSelectedOptions).forEach((value) => {
            value.length && categories.push(value);
        });

        const filterSearchParameters = {};
        if (categories.length > 0) {
            filterSearchParameters['filter_query[categories][all_in_array]'] =
                categories.join(',');
        }
        if (search.length > 2) {
            filterSearchParameters['search_term'] = search;
        }

        getArticles(filterSearchParameters);
    };

    return (
        <section className="py-8 lg:py-24">
            <ContentWidth {...storyblokEditable(blok)}>
                <div className="col-span-12 w-full">
                    <H2>{blok.title}</H2>
                </div>
                <div className="col-span-12 mb-8">
                    <ul className="grid gap-4 text-center text-sm font-medium text-greySolid-600 md:grid-cols-2 lg:grid-cols-12">
                        <li className="lg:col-span-2">
                            <select
                                className="block w-full border-primary px-4 py-2 text-base hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                onChange={(e) => filterArticles(e, 'country')}
                            >
                                <option value="">
                                    {blok.filter_country_title}
                                </option>
                                {blok.filter_country.map((country, index) => (
                                    <option key={index} value={country.uuid}>
                                        {country.content.category}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li className="lg:col-span-2">
                            <select
                                className="block w-full border-primary px-4 py-2 text-base hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                onChange={(e) => filterArticles(e, 'category')}
                            >
                                <option value="">
                                    {blok.filter_category_title}
                                </option>
                                {blok.filter_newscategories.map(
                                    (category, index) => (
                                        <option
                                            key={index}
                                            value={category.uuid}
                                        >
                                            {category.content.category}
                                        </option>
                                    )
                                )}
                            </select>
                        </li>
                        <li className="lg:col-span-2">
                            <select
                                className="block w-full border-primary px-4 py-2 text-base hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                onChange={(e) => filterArticles(e, 'product')}
                            >
                                <option value="">
                                    {blok.filter_products_title}
                                </option>
                                {blok.filter_products.map((product, index) => (
                                    <option key={index} value={product.uuid}>
                                        {product.content.category}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li className="lg:col-span-2">
                            <select
                                className="block w-full border-primary px-4 py-2 text-base hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                onChange={(e) => filterArticles(e, 'year')}
                            >
                                <option value="">
                                    {blok.filter_years_title}
                                </option>
                                {blok.filter_years.map((year, index) => (
                                    <option key={index} value={year.uuid}>
                                        {year.content.category}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li className="lg:col-span-4">
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="h-4 w-4">
                                        <SearchIcon
                                            className="h-2 w-2 fill-greySolid-600"
                                            color="#00000080"
                                        />
                                    </span>
                                </div>
                                <input
                                    tabIndex="1"
                                    className="block w-full border-primary py-2 pl-8 pr-4 text-base hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                    placeholder={blok.text_search}
                                    onChange={onSearchChange}
                                />
                            </div>
                        </li>
                    </ul>
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
                                    <div className="h-52 overflow-hidden">
                                        <img
                                            src={
                                                article.content.image?.filename
                                            }
                                            className="h-full w-full object-cover transition-all group-hover:scale-110"
                                            alt={
                                                article.content.image?.filename
                                                    .alt ?? 'News Article image'
                                            }
                                        />
                                    </div>
                                    <div className="mb-1 mt-4 flex flex-wrap">
                                        {article.content.categories.map(
                                            (category, index) =>
                                                category.full_slug.includes(
                                                    '/news/'
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
                                    <div className="mb-1 text-sm text-greySolid-600">
                                        <Text>
                                            {DateFormatter(
                                                article.content.date
                                            )}
                                        </Text>
                                    </div>
                                    <div className="transition-all group-hover:text-primary"></div>
                                    <H4>{article.content.title}</H4>
                                    <div className="texl-lg mb-3 text-greySolid-600"></div>
                                    <Text>
                                        {TrimText(article.content.lead)}
                                    </Text>
                                </a>
                            ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

export default AllNews;
