import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import Text from '../typography/Text';
import H2 from '../typography/H2';
import Link from 'next/link';
// import { motion } from 'framer-motion';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import ContentWidth from '../layouts/ContentWidth';
import H4 from '../typography/H4';
import { ChevronLeft } from '../icons/ChevronLeft';
import { ChevronRight } from '../icons/ChevronRight';
import RichTextRenderer from '../helpers/RichTextRenderer';
import i18nConfig from '/i18nConfig';
import { useCurrentLocale } from 'next-i18n-router/client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsCarousel = ({ blok }) => {
    const currentLocale = useCurrentLocale(i18nConfig) || 'en';
    const [showTrains, setShowTrains] = useState(false);
    const [referenceSlider, setReferenceSlider] = useState([]);
    const [remainingReferences, setRemainingReferences] = useState([]);
    const apiURL = currentLocale == 'en' ? 'solutions/' : 'loesungen/';
    const swiperRef = useRef();

    useEffect(() => {
        const getArticles = async () => {
            const arrayReference = blok.reference.map((item) => item.uuid);
            const references = arrayReference.join(',');

            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: apiURL,
                is_startpage: false,
                'filter_query[categories][any_in_array]': references,
                language: currentLocale,
            });

            const sortedReferences = data.stories.sort(
                (a, b) => new Date(b.published_at) - new Date(a.published_at)
            );

            setReferenceSlider(sortedReferences.slice(0, 5));
            setRemainingReferences(sortedReferences.slice(5));
        };
        getArticles();
    }, [blok.reference, currentLocale]);

    const toggleTrainsVisibility = () => {
        setShowTrains(!showTrains);
    };

    return (
        <section
            {...storyblokEditable(blok)}
            className="overflow-hidden bg-primarySolid-50 py-8 lg:py-24"
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full 2xl:pl-0">
                    <div className="mb-4 flex items-center justify-center">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="slider-new">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            pagination={{
                                el: ".slider-pagination", // Use a valid DOM element here
                                type: 'fraction',
                            }}
                            spaceBetween={20}
                            autoHeight={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 1.2,
                                },
                            }}
                        >
                            {referenceSlider.map((article) => {
                                return (
                                    <SwiperSlide
                                        key={article.uuid}
                                        className="cursor-pointer bg-white shadow lg:grid lg:grid-cols-2 h-fit my-1"
                                    >
                                        <a
                                            tabIndex="1"
                                            href={`/${article.full_slug}`}
                                            className="inline-block"
                                        >
                                            <img
                                                src={
                                                    article.content?.image?.filename
                                                }
                                                alt={
                                                    article.content?.image
                                                        ?.filename?.alt ??
                                                    `Image for ${blok?.title}`
                                                }
                                                className="w-full h-auto object-cover"
                                            />
                                        </a>
                                        <div className="pt-4 p-10 lg:pt-10 leading-normal">
                                            <Text styles="mb-6 lg:mb-10">
                                                {article.name}
                                            </Text>
                                            <div className="">
                                                <H3>
                                                    {
                                                        article?.content
                                                            ?.title
                                                    }
                                                </H3>
                                                <RichTextRenderer
                                                    text={
                                                        article?.content
                                                            ?.lead
                                                    }
                                                    styles="mb-6 mt-8 md:mb-10 mt-4 md:mt-8"
                                                ></RichTextRenderer>
                                            </div>
                                            <Link
                                                tabIndex="1"
                                                href={`/${article.full_slug}`}
                                                className="inline-flex items-center py-2 pt-4 text-center text-sm font-medium"
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_4995_6662)">
                                                        <path
                                                            d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                                                            fill="#005893"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4995_6662">
                                                            <rect
                                                                width="20"
                                                                height="20"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    )
                                }
                            )}
                        </Swiper>
                    </div>
                    <div className="justify-beetween relative col-span-12 mt-8 flex w-full flex-row items-center">
                        <button
                            tabIndex="1"
                            type="button"
                            onClick={toggleTrainsVisibility}
                            className="flex w-1/2 flex-row items-center gap-2 whitespace-nowrap py-4 text-base text-primary"
                        >
                            {!showTrains ? (
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_4995_6652)">
                                        <path
                                            d="M20 8.88889H11.1111V0H8.88889V8.88889H0V11.1111H8.88889V20H11.1111V11.1111H20V8.88889Z"
                                            fill="#005893"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4995_6652">
                                            <rect
                                                width="20"
                                                height="20"
                                                fill="#005893"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            ) : (
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 8.88892H11.1111H8.88889H0V11.1111H8.88889H11.1111H20V8.88892Z"
                                        fill="#005893"
                                    />
                                </svg>
                            )}
                            {blok?.collapse_text}
                        </button>

                        <div className="flex w-full items-center justify-end gap-4 py-4">
                            <div className="slider-pagination w-fit text-sm font-medium text-greySolid-400"></div>
                            <div className="md:flex relative justify-end gap-4">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    aria-label='button-prev'
                                >
                                    <ChevronLeft styles="w-5 h-5 fill-primary" />
                                </button>
                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    aria-label='button-next'
                                >
                                    <ChevronRight styles="w-5 h-5 fill-primary" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 max-w-full">
                        {showTrains && (
                            <div className="mt-2 w-full grid-cols-1 gap-6 md:grid md:gap-10 lg:grid-cols-3 xl:gap-6">
                                {remainingReferences.map((train) => (
                                    <div
                                        key={train.uuid}
                                        className="max-full relative mx-auto mb-8 flex flex-col items-stretch justify-between border border-greySolid-100 bg-white shadow md:mb-0 md:max-w-md"
                                    >
                                        <a
                                            tabIndex="1"
                                            href={`/${train.full_slug}`}
                                        >
                                            <img
                                                className="h-[200px] w-full object-cover lg:h-[300px]"
                                                src={
                                                    train?.content?.image
                                                        ?.filename
                                                }
                                                alt={
                                                    train?.content?.image
                                                        ?.alt ??
                                                    `Image for ${train.content.title}`
                                                }
                                            />
                                        </a>
                                        <div className="flex h-full flex-col justify-between p-8">
                                            <H4 styles="mb-4">
                                                {train.content.title}
                                            </H4>
                                            <Link
                                                tabIndex="1"
                                                href={`/${train.full_slug}`}
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_4995_6662)">
                                                        <path
                                                            d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                                                            fill="#005893"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4995_6662">
                                                            <rect
                                                                width="20"
                                                                height="20"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default TestimonialsCarousel;
