import { useState, useEffect, useRef } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';

export default function VideoFullWidth({ blok }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (
                videoRef.current &&
                isScrolledIntoView(videoRef.current) &&
                !playing
            ) {
                setPlaying(true);
                videoRef.current.play();
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [playing]);

    function isScrolledIntoView(elem) {
        if (!elem) return false;
        var rect = elem.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

        return isVisible;
    }

    return (
        <section
            className="bg-white pb-5 lg:pb-24"
            {...storyblokEditable(blok)}
        >
            <SmallWidth>
                <video
                    loading="lazy"
                    ref={videoRef}
                    controls={false}
                    autoPlay={true}
                    playsInline={true}
                    muted={true}
                    src={blok?.video.filename}
                    loop={true}
                    poster={blok?.videoPoster?.filename || ''}
                >
                    <source src={blok?.video.filename} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </SmallWidth>
        </section>
    );
}
