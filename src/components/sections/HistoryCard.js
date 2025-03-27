'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';

export default function HistoryCard({ blok }) {
    return (
        <div
            {...storyblokEditable(blok)}
            className="max-w-sm border border-greySolid-100 bg-white shadow"
        >
            <img
                className="h-auto w-full"
                alt={
                    blok.image?.filename?.alt ?? `History image ${blok?.title}`
                }
                loading="lazy"
                src={blok?.image.filename}
            />
            <div className="p-5">
                <H3>{blok?.title}</H3>
                <p className="font-normal text-greySolid-600">{blok?.text}</p>
            </div>
        </div>
    );
}
