'use client';

import { motion } from 'framer-motion';
import FullWidth from '../layouts/FullWidth';
import { storyblokEditable } from '@storyblok/react/rsc';

const SubHero = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <FullWidth>
                <div className="relative col-span-12 max-w-full bg-white lg:pr-20 2xl:pr-0">
                    <div className="relative inset-0 flex w-[90%] max-w-[1500px] flex-row items-center justify-start lg:max-h-[750px] lg:w-[94%] 2xl:max-w-[1760px]">
                        <motion.div
                            initial={{ x: 0, opacity: 0.4 }}
                            animate={{ x: 0, opacity: 0.4 }}
                            className=""
                        >
                            <div className="flex w-full items-center justify-end">
                                <img
                                    src="/shadow-subhero.svg"
                                    className="absolute right-[-7%] h-full max-h-[750px] w-auto"
                                    alt="Background Image"
                                />
                            </div>
                        </motion.div>
                        <div className="w-full bg-cover bg-center bg-no-repeat">
                            <img
                                src={blok?.image.filename}
                                className="h-96 w-full object-cover object-right md:h-full"
                                alt={
                                    blok?.image.filename.alt ?? 'Sub Hero image'
                                }
                            />
                        </div>
                    </div>
                </div>
            </FullWidth>
        </section>
    );
};

export default SubHero;
