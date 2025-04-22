import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import H3 from '../typography/H3';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Image from 'next/image';

const SolutionsGridItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="w-full border border-greySolid-100 bg-white shadow"
        >
            <Link
                tabIndex="1"
                href={ButtonUrlRenderer(blok?.link)}
                className="relative w-full"
            >
                <div className="relative aspect-[9/6] w-full">
                    <Image
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src={ButtonUrlRenderer(blok?.image)}
                        alt={
                            blok?.image.filename.alt ??
                            `Image for ${blok?.title}`
                        }
                    />
                </div>
                <div className="p-4 lg:p-5">
                    <div className="hyphens-auto text-wrap break-words">
                        <H3 styles="!mb-0 hyphens-auto">{blok?.title}</H3>
                    </div>
                    {blok?.text ? <p>{blok?.text}</p> : ''}
                </div>
            </Link>
        </div>
    );
};

export default SolutionsGridItem;
