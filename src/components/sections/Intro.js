import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Intro({ blok }) {
    return (
        <section {...storyblokEditable(blok)} className="bg-white">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="grid max-w-screen-xl items-center gap-2 py-8 md:grid-cols-2 md:gap-16 md:py-16">
                        <div className="font-normal sm:text-lg">
                            <H2>{blok?.title}</H2>
                            <p className="richtext mb-4 mt-6">{blok?.text}</p>
                        </div>
                        <div className="relative -order-1 mt-8 aspect-[16/9] w-full md:order-1">
                            <Image
                                fill={true}
                                sizes="(max-width: 768px) 100vw,  50vw"
                                src={ButtonUrlRenderer(blok?.image)}
                                className="object-contain object-center"
                                alt={blok?.image.filename.alt ?? blok?.title}
                            />
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
