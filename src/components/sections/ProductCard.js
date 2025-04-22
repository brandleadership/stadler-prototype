import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import Text from '../typography/Text';
import H4 from '../typography/H4';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const ProductCard = ({ blok }) => (
    <li className="" {...storyblokEditable(blok)}>
        <H4 styles="mb-4">{blok.title}</H4>
        <div className="relative aspect-[2/1] w-full">
            <Image
                fill={true}
                sizes="100vw"
                src={ButtonUrlRenderer(blok.image)}
                alt={blok.image?.filename?.alt ?? `Image for ${blok.title}`}
                className="object-cover object-center"
            />
        </div>
        <div className="pr-0">
            <div className="mb-5 mt-5 flex flex-col items-start gap-2 text-xl">
                <Text>{blok.text}</Text>
            </div>
        </div>
    </li>
);

export default ProductCard;
