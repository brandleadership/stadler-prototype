'use client';
import H3 from '../typography/H3';
import Link from 'next/link';
import Text from '../typography/Text';
import H2 from '../typography/H2';
import { MotionConfig, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContentWidth from '../layouts/ContentWidth';

const TestimonialMotionDiv = motion.div;

const HomePageCaroucel = ({ items, carouselTitle }) => {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onPrevClick = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const onNextClick = () => {
        if (current < items.length - 1) {
            setCurrent(current + 1);
        }
    };

    return (
        <section className="overflow-hidden bg-white pb-5 lg:pb-24">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="relative">
                        <div className="mb-10 lg:pl-20 2xl:pl-0">
                            <H2>{carouselTitle}</H2>
                        </div>
                        {isMobile && (
                            <div className="absolute left-[50%] top-[60px] z-10 translate-x-[-50%] translate-y-[-50%] transform">
                                <div className="flex gap-3 rounded-full px-3 py-2 opacity-80">
                                    {items.map((_, idx) => (
                                        <button
                                            tabIndex="1"
                                            key={idx}
                                            onClick={() => setCurrent(idx)}
                                        >
                                            <div
                                                className={`h-1 w-8 ${
                                                    idx === current
                                                        ? 'bg-primary'
                                                        : 'bg-greyDarken-100'
                                                }`}
                                            ></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col items-center justify-between lg:pl-20 2xl:pl-0">
                        <MotionConfig
                            transition={{
                                duration: 0.7,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                        >
                            <div className="relative flex w-full max-w-[100%] items-center">
                                <motion.div className="my-[-32px] ml-[-2px] mr-[-2px] flex flex-nowrap items-stretch gap-8 overflow-hidden py-[32px] pl-[2px] pr-[2px]">
                                    {items.map((card, idx) => (
                                        <TestimonialMotionDiv
                                            key={idx}
                                            className="testimonial-motion-div relative min-w-[100%] shadow-md shadow-greyDarken-300 md:flex-row lg:min-w-[43%]"
                                            animate={{
                                                translateX: `calc(-${current * 100}% - ${
                                                    current * 2
                                                }rem)`,
                                                opacity:
                                                    idx === current ||
                                                    idx === current + 1
                                                        ? 1
                                                        : 0.3,
                                            }}
                                        >
                                            <img
                                                className="aspect-[4/3] w-full object-cover"
                                                src={card.img}
                                                alt={
                                                    card?.img?.alt ??
                                                    'Train image'
                                                }
                                            />
                                            <div className="p-5">
                                                <div className="mb-4">
                                                    <H3>{card.title}</H3>
                                                </div>
                                                <div className="mb-14">
                                                    <Text>{card.text}</Text>
                                                </div>
                                                <Link
                                                    tabIndex="1"
                                                    href="#"
                                                    className="absolute bottom-[20px] left-[22px] inline-flex items-center py-2 text-center text-sm font-medium"
                                                >
                                                    <img
                                                        className="h-5 w-5"
                                                        src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                                                        alt="Icon Arrow Forward"
                                                    />
                                                </Link>
                                            </div>
                                        </TestimonialMotionDiv>
                                    ))}
                                </motion.div>
                            </div>
                        </MotionConfig>
                    </div>
                    <div className="justify-beetween relative mt-8 flex w-full flex-row items-center lg:pl-20">
                        <div className="flex w-full flex-row items-center justify-center gap-4">
                            <motion.div
                                className="z-10 flex flex-row gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <button tabIndex="1" onClick={onPrevClick}>
                                    <img
                                        className="h-5 w-5"
                                        src="/icons/ohne-box/chevron_left_FILL0_wght400_GRAD0_opsz24_blue.svg"
                                        alt="Icon Arrow Forward"
                                    />
                                </button>
                                <button tabIndex="1" onClick={onNextClick}>
                                    <img
                                        className="h-5 w-5"
                                        src="/icons/ohne-box/chevron_right_FILL0_wght400_GRAD0_opsz24_blue.svg"
                                        alt="Icon Arrow Forward"
                                    />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default HomePageCaroucel;
