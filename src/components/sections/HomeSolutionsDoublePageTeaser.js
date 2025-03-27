'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H3 from '../typography/H3';
import Text from '../typography/Text';
import { ArrowForward } from '../icons/ArrowForward';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { motion } from 'framer-motion';

const HomeSolutionsDoublePageTeaser = ({ blok }) => {
    const iconVariants = {
        rest: { x: 0 },
        hover: { x: 2 },
    };
    return (
        <section {...storyblokEditable(blok)} className="pb-16 lg:pb-24">
            <ContentWidth>
                <div className="col-span-12 mx-auto max-w-full">
                    <div className="mb-12 border border-solid border-greyBrighten-300 tracking-tight"></div>
                    <ul className="grid grid-cols-1 gap-4 sm:gap-12 md:gap-20 lg:grid-cols-2 lg:gap-y-40">
                        <li>
                            <img
                                src={blok?.image_1.filename}
                                alt={
                                    blok?.image_1?.filename?.alt ??
                                    `Image for ${blok?.title_1}`
                                }
                            />

                            <div className="pr-0">
                                <motion.a
                                    tabIndex="1"
                                    href={ButtonUrlRenderer(blok?.link_1)}
                                    className="mb-4 mt-5 flex flex-col items-start text-xl font-bold text-white lg:mb-0"
                                    initial="rest"
                                    whileTap="hover"
                                    whileHover="hover"
                                    animate="rest"
                                >
                                    <div className="text-4xl">
                                        <H3 styles="!mb-0 lg:!mb-2">
                                            {blok?.title_1}
                                        </H3>
                                    </div>
                                    <div className="">
                                        <Text>{blok?.text_1}</Text>
                                    </div>
                                    <motion.span
                                        variants={iconVariants}
                                        transition={{
                                            type: 'tween',
                                            ease: 'easeOut',
                                        }}
                                    >
                                        <ArrowForward styles="w-5 h-5 fill-white" />
                                    </motion.span>
                                </motion.a>
                            </div>
                        </li>
                        <li>
                            <img
                                src={blok?.image_2.filename}
                                alt={
                                    blok?.image_2.filename?.alt ??
                                    `Image for ${blok?.title_2}`
                                }
                            />
                            <div className="pr-0">
                                <motion.a
                                    tabIndex="1"
                                    href={ButtonUrlRenderer(blok?.link_2)}
                                    className="mb-0 mt-5 flex flex-col items-start text-xl font-bold text-white"
                                    initial="rest"
                                    whileTap="hover"
                                    whileHover="hover"
                                    animate="rest"
                                >
                                    <div className="">
                                        <H3 styles="!mb-0 lg:!mb-2">
                                            {blok?.title_2}
                                        </H3>
                                    </div>
                                    <Text>{blok?.text_2}</Text>
                                    <motion.span
                                        variants={iconVariants}
                                        transition={{
                                            type: 'tween',
                                            ease: 'easeOut',
                                        }}
                                    >
                                        <ArrowForward styles="w-5 h-5 fill-white" />
                                    </motion.span>
                                </motion.a>
                            </div>
                        </li>
                    </ul>
                </div>
            </ContentWidth>
        </section>
    );
};

export default HomeSolutionsDoublePageTeaser;
