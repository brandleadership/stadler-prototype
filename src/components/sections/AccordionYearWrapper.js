import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionYearWrapper = ({ blok, isActive }) => {
    return (
        <div className="max-w-full col-span-12" {...storyblokEditable(blok)}>
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
                            className={`max-w-full col-span-12 ${isActive ? '' : 'hidden'} w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400`}
                        >
                            <div className="mt-12 text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                                <div className="flex flex-row font-bold w-full  justify-between items-center">
                                    <p className="px-6 py-3 w-3/12 ">
                                        {blok?.headline_title}
                                    </p>
                                    <p className="px-6 py-3  w-5/12">
                                        {blok?.headline_date}
                                    </p>

                                    <p className="px-6 py-3 w-2/12 text-center">
                                        {blok?.headline_berichte}
                                    </p>
                                    <p className="px-6 py-3 w-2/12 text-center">
                                        {blok?.headline_presentation}
                                    </p>
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
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default AccordionYearWrapper;
