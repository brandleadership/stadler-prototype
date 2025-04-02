'use client';
import { useState, useRef } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H3 from '../typography/H3';

export default function VideoFullWidth({ blok }) {
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
        <section
            className="bg-white pb-5 lg:pb-24"
            {...storyblokEditable(blok)}
        >
            <SmallWidth>
                {blok?.title ? <H3>{blok?.title}</H3> : <></>}
                <div className="relative aspect-video w-full">
                    <video
                        loading="lazy"
                        ref={videoRef}
                        className="h-full w-full object-cover"
                        controls={playing}
                        playsInline
                        loop
                        preload="none"
                    >
                        <source src={blok?.video.filename} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {!playing && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <img
                                src={blok?.videoPoster?.filename || '/logo.svg'}
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
            </SmallWidth>
        </section>
    );
}
