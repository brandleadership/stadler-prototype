'use client';

import SmallWidth from '../layouts/SmallWidth';
import { storyblokEditable } from '@storyblok/react/rsc';

export default function Quote({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white py-16 lg:py-24"
        >
            <SmallWidth>
                <figure className="max-w-screen-lg mx-auto">
                    <svg
                        className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    <blockquote>
                        <p className="text-3xl leading-relaxed font-medium text-gray-900 text-center dark:text-white">
                            <q>{blok?.text}</q>
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-8 space-x-3">
                        <img
                            className="w-20 h-20 rounded-full object-cover"
                            src={blok?.image.filename}
                            alt="profile picture"
                        />
                        <div className="flex flex-col">
                            <div className="font-medium text-gray-900 dark:text-white">
                                {blok?.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {blok?.name_function}
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </SmallWidth>
        </section>
    );
}
