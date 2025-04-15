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
                                        className="pl-1"
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.00098 9.20337C9.00098 7.62104 10.7515 6.66536 12.0825 7.52101L30.384 19.2863C31.6086 20.0735 31.6086 21.8637 30.384 22.651L12.0825 34.4162C10.7515 35.2719 9.00098 34.3162 9.00098 32.7338V9.20337Z"
                                            fill="#005893"
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
