'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { motion } from 'framer-motion';
import ContentWidth from '../layouts/ContentWidth';

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 100 },
};

const HomeSolutionsSchienenfahrzeugeItemBig = ({ blok, open }) => {
    return (
        <>
            <ContentWidth {...storyblokEditable(blok)}>
                <motion.div
                    className={`${
                        open ? 'grid' : 'hidden'
                    } col-span-12 gap-2 lg:grid-cols-4 lg:grid-rows-2`}
                    animate={open ? 'open' : 'closed'}
                    variants={variants}
                >
                    {blok.product_item_cards.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok?._uid}
                        />
                    ))}
                </motion.div>
            </ContentWidth>
        </>
    );
};

export default HomeSolutionsSchienenfahrzeugeItemBig;
