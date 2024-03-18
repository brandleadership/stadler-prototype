'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import H2 from '../typography/H2';

export default function Description({ blok }) {
    return (
        <section {...storyblokEditable(blok)} className="bg-white">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-24 lg:px-6">
                <img
                    src={blok?.image.filename}
                    className="w-full"
                    alt="full service"
                />
                <div className="mt-4 md:mt-0">
                    <H2 styles="mb-8">{blok?.title}</H2>
                    <p className="mb-6 font-normal text-black-500 md:text-lg richtext">
                        {render(blok.text)}
                    </p>
                </div>
            </div>
        </section>
    );
}
