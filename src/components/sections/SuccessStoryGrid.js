'use client';

import H2 from '../typography/H2';
import H3 from '../typography/H3';
import Link from 'next/link';
import Text from '../typography/Text';
import { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import ContentWidth from '../layouts/ContentWidth';
import { ChevronRight } from '../icons/ChevronRight';
import { ChevronLeft } from '../icons/ChevronLeft';
import { ArrowForward } from '../icons/ArrowForward';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SuccessStoryGrid = ({ blok }) => {
    const [isMobile, setIsMobile] = useState(1024);

    const swiperRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="overflow-hidden bg-white py-8 lg:py-24">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="relative mb-4">
                        <div className="flex items-center justify-center lg:pl-20 2xl:pl-0">
                            <H2>{blok?.title}</H2>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between lg:pl-20 2xl:pl-0">
                        {isMobile && (
                            <div className="slider-pagination relative -top-4 flex w-full justify-center gap-2"></div>
                        )}
                        <div className="relative flex w-full max-w-[100%] items-center">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                pagination={{
                                    el: '.slider-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                    bulletClass: 'pagination-bullet',
                                    bulletActiveClass:
                                        'pagination-bullet-active',
                                }}
                                spaceBetween={20}
                                autoHeight={false}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    1024: {
                                        slidesPerView: 2.2,
                                    },
                                }}
                            >
                                {blok.success_stories.map((nestedBlok) => {
                                    return (
                                        <SwiperSlide
                                            key={nestedBlok.uuid}
                                            className="my-1 h-auto cursor-pointer bg-white shadow"
                                        >
                                            <div className="relative aspect-[4/3] w-full">
                                                <Image
                                                    priority
                                                    fill
                                                    sizes="(max-width: 800px) 100vw, 800px"
                                                    key={
                                                        nestedBlok.slug +
                                                        ' image'
                                                    }
                                                    className="object-cover"
                                                    src={ButtonUrlRenderer(
                                                        nestedBlok.content
                                                            ?.image
                                                    )}
                                                    alt={
                                                        nestedBlok.content
                                                            ?.image.filename
                                                            .alt ??
                                                        'Success Stories Image'
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="p-5"
                                                key={nestedBlok.slug}
                                            >
                                                <div className="mb-4">
                                                    <H3>
                                                        {
                                                            nestedBlok.content
                                                                ?.title
                                                        }
                                                    </H3>
                                                </div>
                                                <div className="mb-14">
                                                    <Text>
                                                        {
                                                            nestedBlok.content
                                                                ?.teaser
                                                        }
                                                    </Text>
                                                </div>
                                                <Link
                                                    tabIndex="1"
                                                    href={
                                                        '/success-stories/' +
                                                        nestedBlok?.slug
                                                    }
                                                    className="absolute bottom-[20px] left-[22px] inline-flex items-center py-2 text-center text-sm font-medium"
                                                >
                                                    <ArrowForward styles="w-5 h-5 fill-primary" />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                    <div className="relative mt-8 flex w-full flex-row items-center justify-center gap-4 lg:pl-20">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            aria-label="button-prev"
                        >
                            <ChevronLeft styles="w-5 h-5 fill-primary" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            aria-label="button-next"
                        >
                            <ChevronRight styles="w-5 h-5 fill-primary" />
                        </button>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default SuccessStoryGrid;
