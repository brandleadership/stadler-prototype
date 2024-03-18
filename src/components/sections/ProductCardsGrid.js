import React from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';

const ProductCardsGrid = ({ blok }) => {
    return (
        <section className="py-24" {...storyblokEditable(blok)}>
            <ContentWidth>
                <div className="col-span-12 max-w-full mx-auto">
                    <div className="mb-12 tracking-tight dark:text-white border border-solid border-greyBrighten-300"></div>
                    <ul className="grid max-w-full grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 lg:gap-y-20">
                        {blok.product_card_item.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </ul>
                </div>
            </ContentWidth>
        </section>
    );
};

export default ProductCardsGrid;
