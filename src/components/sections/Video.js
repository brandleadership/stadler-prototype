'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { useState, useRef } from 'react';
import H2 from '../typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';
import Text from '../typography/Text';
import FullWidth from '../layouts/FullWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Video({ blok }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        setPlaying(true);
        // Dynamically assign the video source on play
        if (videoRef.current && !videoRef.current.src) {
            videoRef.current.src = blok?.video.filename;
        }
        videoRef.current.play();
    };
    return (
        <div
            {...storyblokEditable(blok)}
            className="bg-white py-8 lg:py-24 2xl:mx-auto 2xl:max-w-[1760px]"
        >
            <FullWidth>
                <div className="col-span-12 flex flex-col items-center justify-between lg:flex-row">
                    <div className="relative w-full lg:w-2/3">
                        <video
                            ref={videoRef}
                            loading="lazy"
                            className="-mb-[1%] -mt-[1%] h-full w-full object-cover"
                            controls={playing}
                            playsInline
                            loop
                            preload="none"
                        />
                        {!playing && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                <img
                                    src={
                                        blok?.videoPoster?.filename ||
                                        '/logo.svg'
                                    }
                                    alt="Video placeholder"
                                    className="h-full w-full object-contain"
                                />

                                <button
                                    onClick={handlePlay}
                                    className="absolute flex items-center justify-center rounded-full bg-white p-4 shadow-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
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
