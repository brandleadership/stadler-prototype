'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { useState } from 'react';
import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';
import H2 from '../typography/H2';

const ReportsGrid = ({ blok }) => {
    return (
        <section className="bg-primarySolid-50 py-5 lg:py-24 ">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="text-start mb-8">
                        <H2>{blok?.title}</H2>
                        <Text>{blok?.text}</Text>
                    </div>
                    <div
                        {...storyblokEditable(blok)}
                        className="w-full mx-auto justify-center  items-stretch grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3"
                    >
                        {blok.reports_grid.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default ReportsGrid;
