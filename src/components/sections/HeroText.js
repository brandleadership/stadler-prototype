'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonPrimary from '../../components/elements/ButtonPrimary';
import SmallWidth from '../../components/layouts/SmallWidth';
import H1 from '../../components/typography/H1';
import Lead from '../../components/typography/Lead';
import Breadcrumbs from './Breadcrumbs';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { motion } from 'framer-motion';

const HeroText = ({ blok }) => {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white pb-8 pt-24 lg:py-24 lg:pt-0"
        >
            <SmallWidth>
                <Breadcrumbs />
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        type: 'tween',
                        ease: 'easeOut',
                    }}
                >
                    <H1>{blok?.title}</H1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        type: 'tween',
                        ease: 'easeOut',
                        delay: 0.1,
                    }}
                >
                    <Lead className="richtext">{blok?.lead}</Lead>
                    {blok?.showbutton ? (
                        <div className="my-8 lg:my-12">
                            <ButtonPrimary
                                position="left"
                                buttonText={blok?.buttontext}
                                href={ButtonUrlRenderer(blok?.buttonlink)}
                            />
                        </div>
                    ) : (
                        ''
                    )}
                </motion.div>
            </SmallWidth>
        </section>
    );
};

export default HeroText;
