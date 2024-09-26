import { useState, useEffect } from 'react';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';
import DateFormatter from '../helpers/DateFormatter';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

const MedienMedienmitteilungenTeaser = ({ blok }) => {
    const [medienmitteilungen, setMedienmitteilungen] = useState([]);
    const currentLocale = useCurrentLocale(i18nConfig) || 'en';

    useEffect(() => {
        const getMedienmitteilungen = async () => {
            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: 'medien/medienmitteilungen/',
                is_startpage: false,
                resolve_relations: 'medienmitteilungen.categories',
                sort_by: 'content.date:desc',
                per_page: 5,
                language: currentLocale,
            });

            setMedienmitteilungen(() =>
                data.stories.map((medienmitteilungen) => {
                    medienmitteilungen.content.slug = medienmitteilungen.slug;
                    return medienmitteilungen;
                })
            );
        };
        getMedienmitteilungen();
    }, []);
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white py-5 lg:py-12"
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full pb-24">
                    <H2>{blok?.title}</H2>
                    <ul className="hidden w-full grid-cols-12 gap-4 bg-primarySolid-50 text-left text-sm text-gray-500 rtl:text-right dark:bg-gray-700 dark:text-gray-400 lg:grid">
                        <li className="col-span-1 px-6 py-3 text-xs font-bold uppercase text-black">
                            {blok.table_date_title}
                        </li>
                        <li className="col-span-5 px-6 py-3 text-xs font-bold uppercase text-black">
                            {blok.table_medienmitteilungen_title}
                        </li>
                        <li className="col-span-3 px-6 py-3 text-xs font-bold uppercase text-black">
                            {blok.table_category_title}
                        </li>
                        <li className="col-span-3 flex justify-end px-6 py-3 text-xs font-bold uppercase text-black">
                            {blok.table_documents_title}
                        </li>
                    </ul>
                    <div className="blok my-4 w-full border-b dark:border-gray-700 lg:hidden"></div>
                    <div className="grid w-full grid-cols-12 text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                        {medienmitteilungen[0] &&
                            medienmitteilungen.map((item) => (
                                <div
                                    key={item.uuid}
                                    className="col-span-12 mb-4 border-b bg-white last:mb-0 dark:border-gray-700 dark:bg-black lg:mb-0 lg:last:mb-0"
                                >
                                    <div className="grid grid-cols-1 items-center lg:grid-cols-12">
                                        <div className="col-span-1 whitespace-nowrap bg-primarySolid-50 px-6 py-4 font-medium text-black lg:col-span-1 lg:bg-white">
                                            {DateFormatter(item.content.date)}
                                        </div>
                                        <div className="col-span-1 cursor-pointer px-6 py-4 font-medium text-primary lg:col-span-5">
                                            <a
                                                className="inline-block"
                                                href={`/${item.full_slug}`}
                                            >
                                                {item.content.title}
                                            </a>
                                            <a
                                                className="mt-4 block lg:hidden"
                                                href={`/${item.full_slug}`}
                                            >
                                                <img
                                                    alt={`Icon arrow forward for  ${item.content.title}`}
                                                    width="20"
                                                    height="20"
                                                    src="/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                                                />
                                            </a>
                                        </div>
                                        <div className="col-span-1 bg-primarySolid-50 px-6 py-4 font-medium text-black lg:col-span-3 lg:bg-white">
                                            {item.content.categories.map(
                                                (category, index) =>
                                                    category.full_slug.includes(
                                                        'categories/medienmitteilungen'
                                                    ) && (
                                                        <span
                                                            key={index}
                                                            className="mr-4 inline border border-gray-400 px-2 py-1 text-xs text-gray-700 last-of-type:mr-0 lg:whitespace-nowrap"
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
                                            {item.content.downloads_block?.map(
                                                (downloadBlock) =>
                                                    downloadBlock.download_grid?.map(
                                                        (downloadGrid) =>
                                                            downloadGrid.download_list?.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <a
                                                                        href={ButtonUrlRenderer(
                                                                            item?.cta_asset
                                                                        )}
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="ml-3 inline-flex first-of-type:ml-0"
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

                    <div className="pt-16">
                        <ButtonPrimary
                            position="left"
                            href={ButtonUrlRenderer(blok?.CTA_Show_All)}
                            buttonText={blok?.ctag_all_news}
                        />
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};
export default MedienMedienmitteilungenTeaser;
