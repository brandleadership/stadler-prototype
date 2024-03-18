'use client';

import { motion } from 'framer-motion';
import FullWidth from '../layouts/FullWidth';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const SubHero = ({ imageUrl, children, blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <FullWidth>
                <div className="col-span-12 lg:pr-20 2xl:pr-0 max-w-full bg-white relative">
                    <div className="max-w-[1500px] w-[90%] lg:w-[94%] lg:max-h-[750px] 2xl:max-w-[1760px] relative inset-0 flex flex-row items-center justify-start">
                        <motion.div
                            initial={{ x: 0, opacity: 0.4 }}
                            animate={{ x: 0, opacity: 0.4 }}
                            //transition={{ duration: 1, delay: 0.5 }}
                            className=""
                        >
                            <div className="w-full  flex items-center justify-end">
                                <img
                                    src="/shadow-subhero.svg"
                                    className="absolute h-full w-auto max-h-[750px] right-[-7%] "
                                    alt=""
                                />
                            </div>
                        </motion.div>
                        <div
                            //   initial={{ x: -1800 }}
                            //   animate={{ x: 0 }}
                            //   transition={{ duration: 1 }}
                            className="w-full bg-center bg-cover bg-no-repeat"
                        >
                            <img
                                src={blok?.image.filename}
                                className="w-full h-96 md:h-full object-cover object-right"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </FullWidth>
        </section>
    );
};

export default SubHero;
