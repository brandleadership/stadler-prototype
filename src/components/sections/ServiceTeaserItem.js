'use client';

import { storyblokEditable } from '@storyblok/react/rsc';

const ServiceTeaserItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mx-auto"
        >
            <a href={blok.link.url}>
                <img
                    className="w-24 pl-5 pt-5"
                    src={blok?.Icon.filename}
                    alt=""
                />

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {blok?.title}
                    </h5>
                    <p>{blok?.text}</p>
                </div>
            </a>
        </div>
    );
};

export default ServiceTeaserItem;
