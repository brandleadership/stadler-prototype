import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function HistoryCard({ blok }) {
    return (
        <div
            {...storyblokEditable(blok)}
            className="max-w-sm border border-greySolid-100 bg-white shadow"
        >
            <div className="relative aspect-[2/1.2] w-full">
                <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={
                        blok.image?.filename?.alt ??
                        `History image ${blok?.title}`
                    }
                    src={ButtonUrlRenderer(blok?.image)}
                />
            </div>
            <div className="p-5">
                <H3>{blok?.title}</H3>
                <p className="font-normal text-greySolid-600">{blok?.text}</p>
            </div>
        </div>
    );
}
