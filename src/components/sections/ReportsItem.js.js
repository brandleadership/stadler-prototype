'use client';
import { storyblokEditable } from '@storyblok/react/rsc';

import H3 from '../typography/H3';

const ReportsItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
        >
            {/* <Link href={blok?.cta_link.url}> */}
            <img
                className="object-contain max-h-auto w-full"
                src={blok?.image.filename}
                alt={blok?.title}
            />
            {/* </Link> */}
            <div className="p-5">
                {/* <Link href={blok?.cta_link.url}> */}
                <H3>{blok?.title}</H3>
                {/* </Link> */}
                <a
                    href={blok?.cta_link.url ?? ''}
                    target="_blank"
                    className="inline-flex items-center pt-2 text-sm font-medium text-center"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_4995_6662)">
                            <path
                                d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                                fill="#005893"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_4995_6662">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ReportsItem;
