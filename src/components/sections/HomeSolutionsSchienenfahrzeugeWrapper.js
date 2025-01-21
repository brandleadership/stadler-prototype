'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContentWidth from '../layouts/ContentWidth';
import H3 from '../typography/H3';
import Text from '../typography/Text';
import TrainSequence from './TrainSequence';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const plusAnimation = {
    open: { transform: 'rotate(45deg)' },
    close: { transform: 'rotate(0deg)' },
};

const HomeSolutionsSchienenfahrzeugeWrapper = ({ blok }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <>
            <ContentWidth {...storyblokEditable(blok)}>
                <div className="col-span-12 text-white lg:col-span-6 lg:ml-8">
                    <H3>{blok.title}</H3>
                    <Text>{blok.lead}</Text>
                    <motion.a
                        tabIndex="1"
                        className="mt-4 flex"
                        href={ButtonUrlRenderer(blok?.cta_link)}
                        whileHover={{
                            x: 2,
                        }}
                        whileTap={{ x: 2 }}
                    >
                        <img
                            className="h-5"
                            src="/stadler-arrow-foreward.svg"
                        />
                    </motion.a>
                </div>
            </ContentWidth>
            <div className="w-full">
                <TrainSequence
                    selectedCategory={selectedCategory}
                ></TrainSequence>
                <ContentWidth>
                    <div className="col-span-12 my-6 grid lg:col-span-8 lg:col-start-4 lg:col-end-10 lg:grid-cols-1">
                        <div className="flex flex-row items-start justify-between lg:justify-center">
                            {blok.wrapper.map((item, key) => (
                                <div
                                    tabIndex="1"
                                    key={key}
                                    className={`${
                                        selectedCategory === key
                                            ? 'text-white'
                                            : 'text-greyBrighten-600'
                                    } flex cursor-pointer flex-col items-center text-center font-semibold lg:px-4`}
                                    onClick={() => (
                                        setIsOpen(
                                            isOpen === true &&
                                                selectedCategory !== key
                                                ? true
                                                : selectedCategory === key &&
                                                    isOpen === false
                                                  ? true
                                                  : false
                                        ),
                                        setSelectedCategory(key)
                                    )}
                                >
                                    <p className="text-sm lg:text-base">
                                        {item.tab_title}
                                    </p>
                                    <motion.img
                                        className={`${selectedCategory === key ? 'w-3 lg:w-4' : 'w-0'} mt-2`}
                                        src="/plus-light.svg"
                                        animate={
                                            selectedCategory === key && isOpen
                                                ? 'open'
                                                : 'close'
                                        }
                                        variants={plusAnimation}
                                        key={item.key}
                                        alt="Train Type image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </ContentWidth>
            </div>
            {blok.wrapper.map((nestedBlok, index) => (
                <StoryblokComponent
                    blok={nestedBlok}
                    open={selectedCategory === index && isOpen}
                    key={nestedBlok._uid}
                />
            ))}
        </>
    );
};

export default HomeSolutionsSchienenfahrzeugeWrapper;
