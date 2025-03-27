'use client';

import SmallWidth from '../layouts/SmallWidth';
import { storyblokEditable } from '@storyblok/react/rsc';

export default function Quote({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white py-8 lg:py-24"
        >
            <SmallWidth>
                <figure className="mx-auto max-w-screen-lg">
                    <svg
                        className="mx-auto mb-3 h-12 text-greySolid-400"
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
                        <p className="text-center text-lg font-medium leading-relaxed text-greySolid-800 lg:text-3xl">
                            <q>{blok?.text}</q>
                        </p>
                    </blockquote>
                    <figcaption className="mt-8 flex items-center justify-center space-x-3">
                        <img
                            className="h-20 w-20 rounded-full object-cover"
                            src={blok?.image?.filename}
                            alt={
                                blok?.image?.filename?.alt ?? 'Profile picture'
                            }
                        />
                        <div className="flex flex-col">
                            <div className="font-medium text-greySolid-800">
                                {blok?.name}
                            </div>
                            <div className="text-sm font-medium text-greySolid-600">
                                {blok?.name_function}
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </SmallWidth>
        </section>
    );
}
