'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';
import Text from '../typography/Text';
import FullWidth from '../layouts/FullWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Video({ blok }) {
    return (
        <div
            {...storyblokEditable(blok)}
            className="bg-white py-8 lg:py-24 2xl:mx-auto 2xl:max-w-[1760px]"
        >
            <FullWidth>
                <div className="col-span-12 flex flex-col items-center justify-between lg:flex-row">
                    <div className="w-full overflow-hidden lg:w-2/3">
                        <video
                            loading="lazy"
                            className="-mb-[1%] -mt-[1%]"
                            autoplay
                            playsinline
                            muted
                            src={blok.video.filename}
                            loop={true}
                            webkit-playsinline
                        />
                    </div>
                    <div className="m-auto w-[90%] lg:w-1/3 lg:px-4 xl:px-20">
                        <div className="mt-10 lg:mt-0">
                            <div className="mb-6 text-4xl font-bold">
                                <H2>{blok?.title}</H2>
                            </div>
                            <div className="text-xl">
                                <Text>{blok?.text}</Text>
                            </div>
                        </div>

                        <div className="mt-6">
                            <ButtonPrimary
                                href={ButtonUrlRenderer(blok?.cta_link)}
                                buttonText={blok?.cta_text}
                                position="left"
                            />
                        </div>
                    </div>
                </div>
            </FullWidth>
        </div>
    );
}
