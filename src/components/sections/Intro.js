import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

export default function Intro({ blok }) {
    return (
        <section {...storyblokEditable(blok)} className="bg-white">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="max-w-screen-xl items-center py-8 grid gap-2 md:gap-16 md:grid-cols-2 md:py-16">
                        <div className="font-normal sm:text-lg">
                            <H2>{blok?.title}</H2>
                            <p className="richtext mb-4 mt-6">{blok?.text}</p>
                        </div>
                        <div className="mt-8 -order-1 md:order-1">
                            <img
                                className="w-full scale-100 object-cover object-left mx-auto"
                                src={blok?.image?.filename}
                                alt={
                                    blok?.image?.filename?.alt ??
                                    `Office content for ${blok?.title}`
                                }
                            />
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
