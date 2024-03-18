import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';

export default function VideoFullWidth({ blok }) {
    return (
        <section
            className="bg-white pb-5 lg:pb-24"
            {...storyblokEditable(blok)}
        >
            <SmallWidth>
                <video
                    controls={true}
                    autoPlay={true}
                    muted={true}
                    src={blok?.video.filename}
                    loop={true}
                />
            </SmallWidth>
        </section>
    );
}
