'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ButtonPrimary from '../elements/ButtonPrimary';
import FullWidth from '../layouts/FullWidth';
import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Map({ blok }) {
    return (
        <section {...storyblokEditable(blok)}>
            <FullWidth>
                <div className="col-span-12 w-full bg-white py-8 lg:py-24">
                    <SmallWidth>
                        <div className="mx-auto mb-2 max-w-4xl text-center text-4xl font-bold">
                            <H2>{blok.title}</H2>
                        </div>
                    </SmallWidth>
                    <div className="mb-16 px-6 lg:my-24 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-4 lg:gap-y-24">
                            {blok.facts_figures_block.map((nestedBlok) => (
                                <StoryblokComponent
                                    blok={nestedBlok}
                                    key={nestedBlok?._uid}
                                />
                            ))}
                        </dl>
                    </div>
                    <div className="relative">
                        <div className="relative w-full pl-6">
                            <img
                                className="h-auto w-full"
                                src={blok.map.filename}
                                alt={blok.map.filename?.alt ?? 'Map image'}
                            />
                        </div>
                        <div className="flex-column static w-full items-center pl-6 pt-8 md:flex lg:pl-20">
                            <div className="w-full items-center justify-start md:w-1/3">
                                <div className="flex items-center justify-start">
                                    <div className="mr-3 h-3 w-3 rounded-full bg-map-dark"></div>
                                    <div>{blok.legend_text1}</div>
                                </div>
                            </div>

                            <div className="flex w-full items-center justify-center md:w-1/3 mt-5 md:mt-0">
                                <ButtonPrimary
                                    position="center"
                                    buttonText={blok.cta_title}
                                    href={ButtonUrlRenderer(blok?.cta_link)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </FullWidth>
        </section>
    );
}
