'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';

const AdvantageItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primaryTrans-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            {blok?.icon.filename}
        </div>
        <H4>{blok?.Title}</H4>
        <p className="text-gray-500 dark:text-gray-400">{blok?.Text}</p>
    </div>
);

export default AdvantageItem;
