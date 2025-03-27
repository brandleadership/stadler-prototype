'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H1 from '../typography/H1';
import Text from '../typography/Text';
import { motion } from 'framer-motion';

export default function HomePageHero({ blok }) {
    return (
        <div {...storyblokEditable(blok)} className="mx-auto w-full bg-white">
            <div className="relative inset-0 flex w-full flex-col-reverse items-center justify-end overflow-hidden md:flex-row">
                <motion.div
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative left-0 w-full -translate-x-1/2 -translate-y-1/2 transform bg-contain bg-no-repeat md:absolute md:left-0 md:h-hero-bg-height-middle-screen md:w-[550px] lg:ml-16 lg:w-[700px] xl:h-hero-bg-height-extralarge-screen 2xl:ml-[calc((100vw-1536px)/2)]"
                >
                    <div className="-mt-16 flex h-full w-full items-center justify-end pr-4 md:mt-0 md:pr-0">
                        <motion.img
                            src="/shape_blue_2.svg"
                            className="block h-auto w-full md:h-[80vh]"
                            alt={`background shape for ${blok?.title} `}
                            aria-label={`background shape for ${blok?.title} `}
                        ></motion.img>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 30 }}
                        className="z-1 absolute top-4 flex h-4/5 w-3/6 max-w-[300px] -translate-y-1/2 translate-x-1/2 transform flex-col justify-center pb-16 md:left-0 md:top-8 md:ml-4 md:w-3/5 md:max-w-[330px] md:pb-0 xl:ml-12 2xl:top-14"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 40 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.5,
                            }}
                        >
                            <H1 styles="lg:mt-0 text-3xl md:text-7xl lg:text-7xl xl:mb-8">
                                {blok?.title}
                            </H1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 40 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.8,
                            }}
                        >
                            <Text styles="text-md lg:text-3xl md:mt-4 xl:mt-4">
                                {blok?.lead}
                            </Text>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="w-full bg-cover bg-center bg-no-repeat object-center">
                    <img
                        src={blok?.image.filename ?? '/hero-home-big-min.jpg'}
                        className="w-full object-cover object-center lg:h-[90vh]"
                        alt={
                            blok?.image?.filename?.alt ??
                            'Hero image with train for Home page'
                        }
                        aria-label={`Hero image with train for Home page `}
                    />
                </motion.div>
            </div>
        </div>
    );
}
