import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../../components/typography/H2';

function BackgroundImageTeaser({ blok }) {
    const backgroundImage = blok?.background_image.filename || '';
    return (
        <div className="relative py-12 lg:py-20">
            <section
                {...storyblokEditable(blok)}
                className={`relative bg-cover bg-center bg-no-repeat ${backgroundImage ? '' : 'bg-primarySolid-50'}`}
            >
                <img
                    src={backgroundImage}
                    alt={blok?.title || 'Image Upcomming events'}
                />

                <div className="absolute inset-0 mb-4 flex items-center justify-center text-center tracking-tight text-primary">
                    <H2>{blok?.title}</H2>
                </div>
            </section>
        </div>
    );
}

export default BackgroundImageTeaser;
