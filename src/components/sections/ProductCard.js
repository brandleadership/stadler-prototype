import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import Text from '../typography/Text';
import H4 from '../typography/H4';

const ProductCard = ({ blok }) => (
    <li className="" {...storyblokEditable(blok)}>
        <H4 styles="mb-4">{blok.title}</H4>
        <img
            src={blok.image?.filename}
            alt={blok.image?.filename?.alt ?? `Image for ${blok.title}`}
            className="h-auto w-full object-cover object-center"
        />
        <div className="pr-0">
            <div className="mb-5 mt-5 flex flex-col items-start gap-2 text-xl">
                <Text>{blok.text}</Text>
            </div>
        </div>
    </li>
);

export default ProductCard;
