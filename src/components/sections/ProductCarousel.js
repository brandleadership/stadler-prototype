import H3 from '../typography/H3';
import Text from '../typography/Text';
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const data = [
    {
        id: 1,
        image: '/image1product.jpg',
        titleH3: 'Ergonomie am Arbeitsplatz sorgt für Sicherheit',
        text: 'Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei',
    },
    {
        id: 2,
        image: '/image1product.jpg',
        titleH3: '2Ergonomie am Arbeitsplatz sorgt für Sicherheit',
        text: '2Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei',
    },
    {
        id: 3,
        image: '/image1product.jpg',
        titleH3: '3Ergonomie am Arbeitsplatz sorgt für Sicherheit',
        text: '3Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell,',
    },
];
const variants = {
    enter: () => {
        return {
            // x: direction > 0 ? 1000 : -1000,
            scale: 0.9,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        // x: 0,
        scale: 1,
        opacity: 1,
    },
    exit: () => {
        return {
            zIndex: 0,
            scale: 0.9,
            // x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const ProductCarousel = () => {
    const [[page], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, data.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <>
            <div className="relative mx-auto flex min-h-[120vh] w-full items-center justify-center overflow-hidden md:min-h-[130vh] lg:min-h-[690px]">
                <AnimatePresence initial={false}>
                    <motion.div
                        className="absolute top-0 flex max-w-full flex-col items-center justify-center xl:flex-row"
                        key={imageIndex}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            scale: { type: 'ease-in', duration: 0.5 },
                            opacity: { duration: 0.3 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    >
                        <img
                            className="block h-auto max-w-full"
                            src={data[imageIndex].image}
                            alt="Product Carousel Image"
                        />

                        <div className="mx-w-full p-24 md:w-auto">
                            <H3>{data[imageIndex].titleH3}</H3>
                            <div className="mb-6 mt-4 md:mb-6 md:mt-8">
                                <Text>{data[imageIndex].text}</Text>
                            </div>
                            <button
                                tabIndex="1"
                                className="h-10 w-10 md:h-10 md:w-10"
                                onClick={() => paginate(-1)}
                            >
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
                            <button
                                tabIndex="1"
                                className="h-10 w-10 md:h-10 md:w-10"
                                onClick={() => paginate(1)}
                            >
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
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};

export default ProductCarousel;
