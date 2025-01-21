'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionYearWrapper = ({ blok, isActive }) => {
    return (
        <div className="col-span-12 max-w-full" {...storyblokEditable(blok)}>
            {isActive && (
                <AnimatePresence mode="wait">
                    <motion.div
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-1"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div
                            className={`col-span-12 mt-10 max-w-full overflow-x-auto ${isActive ? '' : 'hidden'} w-full text-left text-sm text-greySolid-600 rtl:text-right`}
                        >
                            <div className="w-full">
                                <div className="whitespace-nowrap bg-primarySolid-50 text-xs font-bold uppercase text-black">
                                    <div className="grid md:grid-cols-[1fr_3fr]">
                                        <div className="px-2 md:px-6 py-3 text-center md:text-left">
                                            {blok?.headline_title}
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-[1fr_2fr]">
                                            <div className="px-2 md:px-6 py-3">
                                                {blok?.headline_date}
                                            </div>
                                            <div className="md:hidden px-2 md:px-6 py-3 text-end">Download</div>
                                            <div className="hidden md:grid md:grid-cols-2">
                                                <div className="px-6 py-3 text-center">
                                                    {blok?.headline_berichte}
                                                </div>
                                                <div className="px-6 py-3 text-center">
                                                    {blok?.headline_presentation}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {blok.year_wrapper.map((nestedBlok) => (
                                        <StoryblokComponent
                                            blok={nestedBlok}
                                            key={nestedBlok?._uid}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default AccordionYearWrapper;
