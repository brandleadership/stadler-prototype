'use client';
import ContentWidth from '../layouts/ContentWidth';
import React from 'react';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import { usePathname } from 'next/navigation';
import { ArrowForwardBlue } from '../icons/ArrowForwardBlue';
import { useState, useEffect } from 'react';
import H1 from '../typography/H1';
import DateFormatter from '../helpers/DateFormatter';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';
import Link from 'next/link';
const filters = { country: '', category: '', product: '', year: '' };

function AlleMedienmitteilungen({ blok }) {
    const [medienmitteilungen, setMedienmitteilungen] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(filters);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    let router = usePathname();
    router = router.replace(/\s/g, '');
    const splitURL = router.split('/');
    const slicedURL = splitURL.slice(2);
    const apiURL = slicedURL.join('/');

    const currentLocale = useCurrentLocale(i18nConfig) || 'en';
    const apiRequest = {
        version: 'published',
        starts_with: apiURL,
        is_startpage: false,
        resolve_relations: ['medienmitteilungen.categories'],
        sort_by: 'content.date:desc',
        language: currentLocale,
        per_page: 25,
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
            getMedienmitteilungen(1, [], filterSearchParameters);
        } else {
            getMedienmitteilungen(1, [], filterSearchParameters);
        }
    };
    const getMedienmitteilungen = async (
        curPage = 1,
        curMedienmitteilungen = [],
        filterSearchRequest = {}
    ) => {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories`, {
            ...apiRequest,
            page: curPage,
            ...filterSearchRequest,
        });

        const newMedienmitteilungen = data.stories.map((article) => {
            article.content.slug = article.slug;
            return article;
        });

        setMedienmitteilungen([
            ...curMedienmitteilungen,
            ...newMedienmitteilungen,
        ]);
    };
    useEffect(() => {
        const categories = [];
        Object.values(selectedOptions).forEach((value) => {
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

        getMedienmitteilungen(page, medienmitteilungen, filterSearchParameters);
    }, [page]);

    const filterArticles = (e, typeFilter) => {
        setPage(1);
        setMedienmitteilungen([]);
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

        getMedienmitteilungen(1, [], filterSearchParameters);
    };

    return (
        <ContentWidth {...storyblokEditable(blok)}>
            <div className="col-span-12 w-full">
                <H1>{blok.title}</H1>
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
                            {blok.filter_medienmitteilungencategories.map(
                                (category, index) => (
                                    <option key={index} value={category.uuid}>
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
                            <option value="">{blok.filter_years_title}</option>
                            {blok.filter_years.map((year, index) => (
                                <option key={index} value={year.uuid}>
                                    {year.content.category}
                                </option>
                            ))}
                        </select>
                    </li>

                    <li className="lg:col-span-4">
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <svg
                                    className="h-4 w-4 text-greySolid-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                tabIndex="1"
                                className="inline-block w-full border-primary px-8 py-2 text-base hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                placeholder={blok.text_search}
                                onChange={(e) => onSearchChange(e)}
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-span-12 w-full pb-24">
                <ul className="hidden w-full grid-cols-12 gap-4 bg-primarySolid-50 text-left text-sm text-greySolid-600 lg:grid rtl:text-right">
                    {/* Header */}
                    <li className="col-span-2 px-6 py-3 text-xs font-bold uppercase text-black">
                        {blok.table_date_title}
                    </li>
                    <li className="col-span-4 px-6 py-3 text-xs font-bold uppercase text-black">
                        {blok.table_medienmitteilung_title}
                    </li>
                    <li className="col-span-3 px-6 py-3 text-xs font-bold uppercase text-black">
                        {blok.table_category_title}
                    </li>
                    <li className="col-span-3 flex justify-end px-6 py-3 text-xs font-bold uppercase text-black">
                        {blok.table_documents_title}
                    </li>
                </ul>
                {/* Data Rows */}
                <div className="blok mb-4 w-full border-b lg:hidden"></div>
                <div className="grid w-full grid-cols-12 text-left text-sm text-greySolid-600 rtl:text-right">
                    {medienmitteilungen[0] &&
                        medienmitteilungen.map((medienmitteilung, idx) => (
                            <div
                                key={idx}
                                className="col-span-12 mb-4 border-b bg-white last:mb-0 lg:mb-0 lg:last:mb-0"
                            >
                                <div className="grid grid-cols-1 items-center lg:grid-cols-12">
                                    <div className="col-span-1 whitespace-nowrap bg-primarySolid-50 px-6 py-4 text-base text-black lg:col-span-2 lg:bg-white">
                                        {medienmitteilung.content?.date &&
                                            DateFormatter(
                                                medienmitteilung.content.date
                                            )}
                                    </div>
                                    <div className="col-span-1 px-6 py-4 font-medium text-primary lg:col-span-4">
                                        <Link
                                            tabIndex="1"
                                            className="inline-block text-base"
                                            href={`/${medienmitteilung.full_slug}`}
                                        >
                                            {medienmitteilung.content.title}
                                        </Link>
                                        <Link
                                            tabIndex="1"
                                            className="mt-4 block lg:hidden"
                                            href={`/${medienmitteilung.full_slug}`}
                                        >
                                            <ArrowForwardBlue styles="w-5 h-5 "></ArrowForwardBlue>
                                            <img
                                                alt="Arrow button forward"
                                                width="20"
                                                height="20"
                                                src="/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                                            />
                                        </Link>
                                    </div>
                                    <div className="col-span-1 bg-primarySolid-50 px-6 pb-3 pt-4 font-medium text-black lg:col-span-3 lg:bg-white">
                                        {medienmitteilung.content?.categories?.map(
                                            (category, index) =>
                                                category.full_slug.includes(
                                                    'categories/medienmitteilungen'
                                                ) && (
                                                    <span
                                                        key={index}
                                                        className="mb-1 mr-4 inline-flex flex-wrap border border-greySolid-400 px-2 py-1 text-xs text-greySolid-600 last-of-type:mr-0 lg:whitespace-nowrap"
                                                    >
                                                        {
                                                            category.content
                                                                .category
                                                        }
                                                    </span>
                                                )
                                        )}
                                    </div>
                                    <div className="col-span-1 flex items-center justify-start px-6 py-4 text-primary lg:col-span-3 lg:justify-end">
                                        {medienmitteilung.content.downloads_block?.map(
                                            (downloadBlock) =>
                                                downloadBlock.download_grid?.map(
                                                    (downloadGrid) =>
                                                        downloadGrid.download_list?.map(
                                                            (item, index) => (
                                                                <a
                                                                    tabIndex="1"
                                                                    href={ButtonUrlRenderer(
                                                                        item?.cta_asset
                                                                    )}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    key={index}
                                                                    className="ml-3 inline-flex font-medium first-of-type:ml-0"
                                                                >
                                                                    {
                                                                        item?.cta_text
                                                                    }
                                                                </a>
                                                            )
                                                        )
                                                )
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="col-span-12 flex w-full items-center justify-center pb-24">
                <div
                    onClick={() => {
                        setPage(page + 1);
                    }}
                    className="flex cursor-pointer items-center gap-2 rounded bg-stadlergradient px-5 py-2.5 text-sm font-medium leading-6 text-white"
                >
                    {blok.load_more_button ?? 'Load More'}
                </div>
            </div>
        </ContentWidth>
    );
}

export default AlleMedienmitteilungen;
