import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const ImageTrippleBanner = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <div className="gap-4 sm:mt-12 sm:grid sm:grid-cols-4">
                <div className="relative col-span-2 h-80 w-full sm:block">
                    <Image
                        priority
                        className="scale-100 object-cover"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={ButtonUrlRenderer(blok?.image1)}
                        alt={blok?.image1.alt ?? 'Content gallery 1'}
                    />
                </div>
                <div className="relative col-span-1 hidden h-80 w-full sm:block">
                    <Image
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="scale-100 object-cover"
                        src={ButtonUrlRenderer(blok?.image2)}
                        alt={blok?.image2.alt ?? 'Content gallery 2'}
                    />
                </div>
                <div className="relative col-span-1 hidden h-80 w-full sm:block">
                    <Image
                        className="scale-100 object-cover"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={ButtonUrlRenderer(blok?.image3)}
                        alt={blok?.image3.alt ?? 'Content gallery 3'}
                    />
                </div>
            </div>
        </section>
    );
};

export default ImageTrippleBanner;
