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
            </SmallWidth>
        </section>
    );
}
