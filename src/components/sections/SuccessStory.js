'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import Link from 'next/link';
import Text from '../typography/Text';

import { motion } from 'framer-motion';

const SuccessStory = ({ current, idx, blok }) => {
    return (
        <motion.div
            {...storyblokEditable(blok)}
            key={idx}
            className="min-w-[100%] relative lg:min-w-[43%] md:flex-row  testimonial-motion-div shadow-md shadow-greyDarken-300"
            animate={{
                translateX: `calc(-${current * 100}% - ${current * 2}rem)`,
                opacity: idx === current || idx === current + 1 ? 1 : 0.3,
            }}
        >
            <img
                className="w-full max-h-[430px] object-cover"
                src={card.img}
                alt=""
            />
            <div className="p-5 ">
                <div className="mb-4">
                    <H3>{card.title}</H3>
                </div>

                <div className="mb-14">
                    <Text>{card.text}</Text>
                </div>
                <Link
                    href="#"
                    className="absolute bottom-[20px] left-[22px] inline-flex items-center py-2 text-sm font-medium text-center"
                >
                    <img
                        className="w-5 h-5"
                        src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                        alt=""
                    />
                </Link>
            </div>
        </motion.div>
    );
};

export default SuccessStory;
