'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';

export default function Description({ blok }) {
    return (
        <section {...storyblokEditable(blok)} className="bg-white">
            <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-24 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
                <img
                    src={blok?.image.filename}
                    className="w-full"
                    alt={blok?.image?.filename?.alt ?? 'Full Service Image'}
                />
                <div className="mt-4 md:mt-0">
                    <H2>{blok?.title}</H2>
                    {blok?.text && (
                        <p className="text-black-500 richtext mb-6 font-normal md:text-lg">
                            {blok?.text}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
