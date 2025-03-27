'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import Link from 'next/link';
import Text from '../typography/Text';

import { motion } from 'framer-motion';

const SuccessStory = ({ current, idx, blok }) => {
    return (
        <motion.div
            {...storyblokEditable(blok)}
            key={idx}
            className="testimonial-motion-div relative min-w-[100%] shadow-md shadow-greyDarken-300 md:flex-row lg:min-w-[43%]"
            animate={{
                translateX: `calc(-${current * 100}% - ${current * 2}rem)`,
                opacity: idx === current || idx === current + 1 ? 1 : 0.3,
            }}
        >
            <img
                className="aspect-[4/3] w-full object-cover"
                src={card.img}
                alt={card.img.alt ?? `Image for ${card.title}`}
            />
            <div className="p-5">
                <div className="mb-4">
                    <H3>{card.title}</H3>
                </div>

                <div className="mb-14">
                    <Text>{card.text}</Text>
                </div>
                <Link
                    tabIndex="1"
                    href="#"
                    className="absolute bottom-[20px] left-[22px] inline-flex items-center py-2 text-center text-sm font-medium"
                >
                    <img
                        className="h-5 w-5"
                        src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                        alt={card.title}
                    />
                </Link>
            </div>
        </motion.div>
    );
};

export default SuccessStory;
