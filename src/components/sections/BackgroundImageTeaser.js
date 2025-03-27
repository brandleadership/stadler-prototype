import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../../components/typography/H2';
import ContentWidth from '../layouts/ContentWidth';

function BackgroundImageTeaser({ blok }) {
    const backgroundImage = blok?.background_image.filename || '';
    return (
        <div className="py-12 lg:py-20">
            <section
                {...storyblokEditable(blok)}
                className={`bg-cover bg-center bg-no-repeat ${backgroundImage ? '' : 'bg-[#f2f2f2]'}`}
                style={
                    backgroundImage
                        ? { backgroundImage: `url(${backgroundImage})` }
                        : {}
                }
            >
                <ContentWidth>
                    <div className="col-span-12 w-full py-12 lg:py-20">
                        <div className="mb-4 text-center tracking-tight">
                            <H2>{blok?.title}</H2>
                        </div>
                    </div>
                </ContentWidth>
            </section>
        </div>
    );
}

export default BackgroundImageTeaser;
