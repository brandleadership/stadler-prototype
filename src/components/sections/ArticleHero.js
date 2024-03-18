import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import { useState, useEffect } from 'react';

import SuperSmallWidth from '../layouts/SuperSmallWidth';
import H1 from '../typography/H1';
import Text from '../typography/Text';
import Breadcrumbs from './Breadcrumbs';

function ArticleHero({ block }) {
    const formatDate = (textToFormat) => {
        const date = new Date(textToFormat);
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedDay = dd + '.' + mm + '.' + yyyy;

        return formattedDay;
    };

    return (
        <SuperSmallWidth>
            <div className="mt-20 flex font-normal text-gray-600">
                <Breadcrumbs />
            </div>
            <H1 styles="mb-8">{block?.title}</H1>
            <div className="grid grid-cols-12 gap-6 mb-6">
                <div className="col-span-6">
                    {block?.categories?.map((category, index) => (
                        <span
                            key={index}
                            className="mb-2 inline text-gray-700 px-4 py-2 mr-4 border border-gray-400 text-xs last-of-type:mr-0 whitespace-nowrap"
                        >
                            {category.content.category}
                        </span>
                    ))}
                </div>
                <div className="col-span-6 align-right text-right">
                    <Text styles="text-md">{formatDate(block?.date)}</Text>
                </div>
            </div>
            <Text styles="text-lg mt-12">{block?.lead}</Text>
            <img
                src={block?.image?.filename}
                className="w-full my-8"
                alt="full service"
            />
        </SuperSmallWidth>
    );
}

export default ArticleHero;
