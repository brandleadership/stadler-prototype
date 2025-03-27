import React, { useState, useEffect, useRef } from 'react';
import { getStoryblokApi } from '@storyblok/react/rsc';
import { SearchIcon } from '../icons/SearchIcon';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';

const ModalSearch = ({ isModalOpen, closeModal, buttonRef }) => {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');

    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const inputRef = useRef(null);

    const currentLocale = useCurrentLocale(i18nConfig) || 'en';

    const apiRequest = {
        version: 'published',
        resolve_links: 'url',
        language: currentLocale,
    };

    const onSearchChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);

        const filterSearchParameters = {};

        if (inputValue.length > 0) {
            filterSearchParameters['search_term'] = inputValue.toLowerCase();
            getArticles(filterSearchParameters);
        } else {
            setArticles([]);
        }
    };

    const determineTitle = (article) => {
        if (article.content.title && article.content.title.trim() !== '') {
            return article.content.title;
        } else if (article.content.body) {
            const heroSubpage = article.content.body.find(
                (item) =>
                    item.component === 'hero-subpage' ||
                    item.component === 'hero-careerpage'
            );
            if (
                heroSubpage &&
                heroSubpage.title &&
                heroSubpage.title.trim() !== ''
            ) {
                return heroSubpage.title;
            }
        }
        return null;
    };

    const getArticles = async (filterSearchRequest = {}) => {
        const slug = '/';
        const storyblokApi = getStoryblokApi();

        if (search.length > 0) {
            const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
                ...apiRequest,
                ...filterSearchRequest,
            });

            const excludedKeywords = [
                'test',
                'template',
                'page',
                'header',
                'footer',
                'not-found',
                'datasheet',
                'download-section',
                'test-global-content',
                'medienmitteilungen',
                'news',
                'referenzen',
                'no-no',
                'se-se',
                'nl-nl',
                'it-it',
                'gb-en',
                'at-de',
                'cz-cz',
                'kz-ru',
                'by-ru',
                'hu-hu',
                'us-en',
                'de-de',
                'ch',
            ];
            const filteredArticles = data.stories.filter(
                (article) =>
                    !article.full_slug.startsWith('categories/') &&
                    !article.full_slug.includes('/categories/') &&
                    !article.full_slug.startsWith('global/') &&
                    !article.full_slug.includes('/global') &&
                    !article.full_slug.includes('not-found') &&
                    !article.full_slug.includes('news') &&
                    !article.full_slug.includes('download-section') &&
                    !article.full_slug.includes('datasheet') &&
                    !excludedKeywords.some((keyword) =>
                        article.name.includes(keyword)
                    )
            );

            setArticles(
                filteredArticles.map((article) => ({
                    ...article,
                    displayTitle: determineTitle(article),
                }))
            );
        } else {
            setArticles([]);
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    useEffect(() => {
        if (isModalOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isModalOpen]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                isModalOpen &&
                contentRef.current &&
                !contentRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                closeModal();
                setSearch('');
                setArticles([]);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpen, closeModal, buttonRef]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && isModalOpen) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, closeModal]);

    const handleArticleClick = (article) => {
        window.location.href = `/${article.full_slug}`;
    };

    return (
        <div
            ref={modalRef}
            className={`absolute right-0 top-0 col-span-12 w-[100%] transition-all duration-500 md:w-[768px] lg:top-10 lg:shadow-md ${
                isModalOpen
                    ? 'z-20 max-h-[600px] scale-100 transform opacity-100'
                    : 'z-[-1] max-h-0 scale-95 transform overflow-hidden opacity-0'
            }`}
        >
            <div
                ref={contentRef}
                className="relative h-full bg-transparent lg:bg-white lg:shadow"
            >
                <div className="flex items-center justify-between border-b p-3 pt-2 md:p-3 lg:p-4 lg:pt-4">
                    <div className="hidden h-5 w-7 pr-2 lg:block">
                        <SearchIcon
                            className="h-5 w-5 fill-primary"
                            color="#005893"
                        />
                    </div>
                    <label htmlFor="search" className="w-full pl-4 lg:pl-0">
                        <input
                            tabIndex="1"
                            id="search"
                            ref={inputRef}
                            placeholder="Enter your search term..."
                            name="search"
                            onChange={onSearchChange}
                            value={search}
                            type="search"
                            className="w-full appearance-none border-primary p-2 focus:border-primary"
                        />
                    </label>
                </div>

                <div className="h-[385px] overflow-y-scroll bg-white">
                    <div className="flex flex-col">
                        {articles.map((article) => (
                            <div
                                tabIndex="1"
                                key={article.uuid}
                                onClick={() => handleArticleClick(article)}
                                className="group cursor-pointer transition-all hover:bg-greySolid-100"
                            >
                                <h2 className="p-4 text-base font-normal leading-tight text-greySolid-800 transition-all group-hover:text-primary">
                                    {article.displayTitle}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSearch;
