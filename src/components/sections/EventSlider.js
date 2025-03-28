'use client';

import H2 from '../typography/H2';
import H3 from '../typography/H3';
import { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ContentWidth from '../layouts/ContentWidth';
import { ChevronRight } from '../icons/ChevronRight';
import { ChevronLeft } from '../icons/ChevronLeft';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventSlider = ({ blok }) => {
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
                        <div className="flex items-center justify-center lg:pl-20 2xl:pl-0">
                            <H3>{blok?.subtitle}</H3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between lg:pl-20 2xl:pl-0">
                        {isMobile && (
                            <div className="slider-event relative -top-4 flex w-full justify-center gap-2"></div>
                        )}
                        <div className="relative flex w-full max-w-[100%] items-center">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                pagination={{
                                    el: '.slider-event',
                                    type: 'bullets',
                                    clickable: true,
                                    bulletClass: 'pagination-bullet-event',
                                    bulletActiveClass:
                                        'pagination-bullet-active-event',
                                }}
                                spaceBetween={20}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    1024: {
                                        slidesPerView: 4.2,
                                    },
                                }}
                            >
                                {blok.images.map((image) => {
                                    return (
                                        <SwiperSlide
                                            key={image.id}
                                            className={`swiper-slide-item`}
                                        >
                                            <div className="relative aspect-[16/9]">
                                                <img
                                                    key={image.slug + ' image'}
                                                    className="aspect-[4/3] w-full object-cover"
                                                    src={image.filename}
                                                    alt={
                                                        image?.alt ??
                                                        'Event Image'
                                                    }
                                                />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                    <div className="relative mt-8 flex w-full flex-row items-center justify-center gap-4">
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

export default EventSlider;
