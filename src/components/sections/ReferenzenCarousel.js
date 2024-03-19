import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import Text from '../typography/Text';
import H2 from '../typography/H2';
import Link from 'next/link';
import { MotionConfig, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContentWidth from '../layouts/ContentWidth';
import H4 from '../typography/H4';

const TestimonialMotionDiv = motion.div;

const trains = [
    {
        name: 'Hybrider FLIRT 160 für Flughafen-Transit',
        image: '/Flirt-160/f3nsreiz0715e-1.jpg',
    },
    {
        name: 'Ein vollelektrischer FLIRT zwischen DE und NL',
        image: '/Flirt-160/f3vd0716_pic.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/fab0516_pic.jpg',
    },
    {
        name: "Hybrider FLIRT 160 für Flughafen'Transit Hybrider FLIRT 160 für Flughafen'Transit",
        image: '/Flirt-160/fbzd0814ir_pic.jpg',
    },
    {
        name: 'Ein vollelektrischer FLIRT zwischen DE und NL',
        image: '/Flirt-160/fga0816d_pic.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/flirt_abellio_gauda-alphen_nl.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/flirt_city_ru.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/flirt_finnland_ru.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/flirt_mav_2serie_2014_presse2.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/flirt_region_lodz_polen.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/flirt_region_lodz_polen.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/flirt3-arriva-bahnhof-dreisystem.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/frex0711d-1.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/front-designbild_dynamisch_bmu.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/frontbild_dynamisch_flirt_texrail.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/fsta0416_pic_klein.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/fwfb0615_pic_klein.jpg',
    },
    {
        name: 'Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT',
        image: '/Flirt-160/sob-gp1_0905b.jpg',
    },
];

const images = [
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Ein Hybrid-FLIRT baut die Pendlerstrecke vom Flughafen Dallas aus ',
        text: 'Im Juni 2019 orderte  Dallas Area Rapid Transit bei Stadler acht bi-modale Niederflurtriebzüge vom Modell FLIRT 160 für ihr Silverline-Projekt. Die Züge werden auf der Pendlerstrecke im Korridor zwischen Plano und dem nördlichen Teil des internationalen Flughafens Fort Worth in Dallas verkehren.',
        img: '/train-c.jpg',
    },
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Der Weltrekord-Zug: FLIRT Akku',
        text: 'Der FLIRT Akku stellt den Weltrekord für die längste Fahrt mit einem Batterietriebzug auf. Lesen Sie mehr über die Rekord-Leistung.',
        img: '/train-c.jpg',
    },
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Im Land der längsten Zugstrecken',
        text: 'Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.',
        img: '/train-c.jpg',
    },
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Im Land der längsten Zugstrecken',
        text: 'Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.',
        img: '/train-c.jpg',
    },
    {
        name: 'Dallas Area Rapid Transit (DART) USA',
        title: 'Im Land der längsten Zugstrecken',
        text: 'Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.',
        img: '/train-c.jpg',
    },
];

const Pagination = ({ total, current }) => {
    return (
        <div className="flex justify-center text-sm font-medium text-greySolid-400">
            <p className="text-sm font-medium flex flex-row gap-2">
                <span> {current + 1}</span>
                <span>|</span>
                <span>{total}</span>
            </p>
        </div>
    );
};

const TestimonialsCarousel = ({ blok }) => {
    const [current, setCurrent] = useState(0);
    const [showTrains, setShowTrains] = useState(false);
    const [highlightsCategory, setHighlightsCategory] = useState([]);
    const [reference, setReference] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const arrayHighlight = [];
            blok.highlight_reference.map((item) => {
                arrayHighlight.push(item.uuid);
            });

            const highlightReference = arrayHighlight.join(',');

            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: 'loesungen/referenzen/',
                is_startpage: false,
                'filter_query[categories][any_in_array]': highlightReference,
                per_page: 5,
            });

            setHighlightsCategory((prev) =>
                data.stories.map((article) => {
                    article.content.slug = article.slug;
                    return article;
                })
            );
        };
        getArticles();
    }, []);

    useEffect(() => {
        const getArticles = async () => {
            const arrayReference = [];
            blok.reference.map((item) => {
                arrayReference.push(item.uuid);
            });
            console.log('categories', blok);
            const references = arrayReference.join(',');
            console.log('references', references);

            const storyblokApi = getStoryblokApi();
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: 'published',
                starts_with: 'loesungen/referenzen/',
                is_startpage: false,
                'filter_query[categories][any_in_array]': references,
            });
            //console.log("data 1111", data, data.stories)
            setReference((prev) =>
                data.stories.map((article) => {
                    article.content.slug = article.slug;
                    return article;
                })
            );
        };
        getArticles();
    }, []);

    const onPrevClick = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const onNextClick = () => {
        if (current < images.length - 1) {
            setCurrent(current + 1);
        }
    };

    const toggleTrainsVisibility = () => {
        setShowTrains(!showTrains);
    };

    return (
        <section
            {...storyblokEditable(blok)}
            className="py-24 bg-primarySolid-50"
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full 2xl:pl-0">
                    <div className="flex justify-center items-center mb-4">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <MotionConfig
                            transition={{
                                duration: 0.7,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                        >
                            <div className="relative w-full max-w-[100%] flex items-center ">
                                <motion.div className="max-w-[100%] flex gap-6 flex-nowrap lg:mx-[-10px] lg:my-[-10px] lg:px-[10px] lg:py-[10px]">
                                    {highlightsCategory[0] &&
                                        highlightsCategory.map(
                                            (article, idx) => (
                                                <TestimonialMotionDiv
                                                    key={idx}
                                                    className="min-w-[100%] grid grid-cols-1 lg:grid-cols-2 shadow lg:min-w-[90%] bg-white lg:flex-row "
                                                    animate={{
                                                        translateX: `calc(-${current * 100}% - ${
                                                            current * 1.5
                                                        }rem)`,
                                                        opacity:
                                                            idx === current
                                                                ? 1
                                                                : 0.3,
                                                    }}
                                                >
                                                    <a
                                                        href={`loesungen/${article.slug}`}
                                                    >
                                                        <img
                                                            src={
                                                                article.content
                                                                    .image
                                                                    .filename
                                                            }
                                                            alt="Image 1"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </a>
                                                    <div className="flex flex-col justify-between p-10 leading-normal">
                                                        <Text styles="mb-6 md:mb-10">
                                                            {article.name}
                                                        </Text>
                                                        <div className="">
                                                            <H3>
                                                                {
                                                                    article
                                                                        .content
                                                                        .title
                                                                }
                                                            </H3>
                                                            <Text styles="mb-6 mt-8 md:mb-10 mt-4 md:mt-8">
                                                                {
                                                                    article
                                                                        .content
                                                                        .text
                                                                }
                                                            </Text>
                                                        </div>
                                                        <Link
                                                            href="#"
                                                            className="inline-flex items-center py-2 text-sm font-medium text-center"
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
                                                </TestimonialMotionDiv>
                                            )
                                        )}
                                </motion.div>
                            </div>
                        </MotionConfig>
                    </div>
                    <div className="col-span-12 relative  flex flex-row w-full mt-8 justify-beetween items-center ">
                        <button
                            type="button"
                            onClick={toggleTrainsVisibility}
                            className="text-primary items-center text-base flex flex-row gap-2 w-1/2 whitespace-nowrap py-4"
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

                        <div className=" flex flex-row gap-4 justify-end items-center w-full  py-4">
                            <Pagination
                                total={images.length}
                                current={current}
                            />
                            <motion.div
                                className=" flex flex-row gap-4 z-10 "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <button onClick={onPrevClick}>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.8586 20L4 10L14.8586 0L16.4099 1.68288L7.38294 10L16.4099 18.3171L14.8586 20Z"
                                            fill="#005893"
                                        />
                                    </svg>
                                </button>
                                <button onClick={onNextClick}>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                                            fill="#005893"
                                        />
                                    </svg>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-span-12 max-w-full">
                        {showTrains && (
                            <div className=" md:grid grid-cols-1 gap-6 md:gap-10 lg:grid-cols-3 xl:gap-6 mt-2 w-full">
                                {reference[0] &&
                                    reference.map((train, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col mb-8 md:mb-0 relative max-full items-stretch justify-between mx-auto md:max-w-md bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <a href="#">
                                                <img
                                                    className="w-full aspect-[4/3]"
                                                    src={
                                                        train.content.image
                                                            .filename
                                                    }
                                                    alt=""
                                                />
                                            </a>
                                            <div className="h-full flex flex-col justify-between p-8">
                                                <H4 styles="mb-4">
                                                    {train.content.title}
                                                </H4>
                                                <Link href="#">
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
