import { storyblokEditable } from '@storyblok/react/rsc';
import FullWidth from '../layouts/FullWidth';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function ImageFullWidth({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="px-4 py-0 lg:px-0 lg:py-24"
        >
            <FullWidth>
                <div className="col-span-12">
                    <div className="relative lg:aspect-[2/1]">
                        <Image
                            className="object-cover"
                            fill={true}
                            sizes="100vw"
                            src={ButtonUrlRenderer(blok?.image)}
                            alt={
                                blok?.image.filename?.alt ??
                                'Hero product image'
                            }
                        />
                    </div>
                </div>
            </FullWidth>
        </section>
    );
}
