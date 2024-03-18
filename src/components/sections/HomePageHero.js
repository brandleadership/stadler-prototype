'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H1 from '../typography/H1';
import Text from '../typography/Text';
import { motion } from 'framer-motion';

export default function HomePageHero({ blok }) {
    return (
        <div
            {...storyblokEditable(blok)}
            className="mx-auto w-full bg-white pb-16"
        >
            <div className="w-full overflow-hidden relative inset-0 flex flex-col-reverse md:flex-row items-center justify-end">
                <motion.div
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className=" w-full md:w-[550px] lg:w-[550px] 2xl:w-[600px]  bg-contain md:h-hero-bg-height-middle-screen xl:h-hero-bg-height-extralarge-screen bg-no-repeat relative md:absolute left-0 md:left-0 transform -translate-y-1/2 -translate-x-1/2 "
                >
                    <div className="-mt-16 md:mt-0 w-full flex pr-4 md:pr-0 items-center justify-end h-full">
                        <img
                            src="/Graph.svg"
                            className="block h-auto md:h-[60vh] w-full"
                            alt=""
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 40 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="z-1 absolute flex flex-col justify-center pb-16 md:pb-0 md:ml-4 xl:ml-20 h-4/5 top-4 md:w-3/5 md:top-8  md:left-0 transform -translate-y-1/2 translate-x-1/2 w-3/6 max-w-[300px] md:max-w-[330px]"
                    >
                        <H1 styles="lg:mt-0 text-3xl md:text-7xl lg:text-7xl">
                            Driven to lead
                        </H1>
                        <Text styles="text-md lg:text-3xl md:mt-4 xl:mt-4">
                            Alles für die besten Schienenfahrzeuge der Welt.
                        </Text>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ x: -1800 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full  bg-center bg-cover object-center bg-no-repeat"
                >
                    <img
                        src="/hero-home-big-min.jpg"
                        className="lg:h-[90vh] w-full object-center object-cover"
                        alt=""
                    />
                </motion.div>
            </div>
        </div>
    );
}
